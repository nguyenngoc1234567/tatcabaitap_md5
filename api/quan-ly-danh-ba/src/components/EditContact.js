import { useState } from "react";
import axios from "axios";

const EditContact = ({ contact, onSave, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSave = () => {
    const fd = new FormData();
    fd.append("file", selectedFile);
    axios
      .post("https://v2.convertapi.com/upload", fd)
      .then((res) => {
        const updatedContact = {
          ...contact,
          name,
          email,
          phone,
          avatar: res.data.Url,
        };
        onSave(updatedContact);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <div>
        <img src={contact.avatar} alt={contact.name} />
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={handlePhoneChange} />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditContact;
