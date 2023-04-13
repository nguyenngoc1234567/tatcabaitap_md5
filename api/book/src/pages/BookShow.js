
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookModel from '../models/BookModel';


function BookShow(props) {
  const {id} = useParams();
  const [user,setUser] = useState({});

  useEffect( function(){
    BookModel.find(id).then(res => {
        setUser(res.data);
    })
    .catch(err => {
        throw err;
    });
},[] );
    return (
        <div>
          BookShow
            <table border={1} width={'100%'}>
                <tr>
                    <td>Title</td>
                    <td>{ user.Title }</td>
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td>{ user.Quantity }</td>
                </tr>
            </table>
        </div>
    );
}

export default BookShow;