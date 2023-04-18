import Link from 'next/link'
import Footer from '../components/Footer';
import Header from '../components/Header';
// import { log } from 'console';
// controller
// du lieu tai thoi dem xay dung
export  function getStaticProps(context) {
    // fetch dữ liệu từ file system, API, DB,...
    // const data = ...
  
    // Giá trị của `props` sẽ được truyền tới component `Home`
        return {
        props: {
            name : 'nva' ,
            age : 18
        }
        }
    }
    // phung thuc nay  lay du lieu moi khi user gui request lên hệ thống 
    /*
    export async function getServerSideProps(context) {
  return {
    props: {
      // Giá trị props cho component của bạn
    },
  };
}
    */
  // view
function index(props) {
    console.log(props);
    return (
       
      <div>
        <Header/>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <h1>Home</h1>
        <Footer/>
      </div>
    );
  }
export default index;