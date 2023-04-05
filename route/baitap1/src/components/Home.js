import { useParams } from "react-router-dom";
function Home() {
  let { email } = useParams();
  return (
    <div>
      <p>Bạn đã login thành công</p>
      <h3>Bạn là {email} </h3>
    </div>
  );
}
export default Home;