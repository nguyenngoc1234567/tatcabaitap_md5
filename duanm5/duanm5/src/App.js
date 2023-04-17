// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SanPhamShow from './pages/SanPhamShow';
import Cart from './pages/Cart';
// import login from './login/login';
// import Detail from './pages/Detail';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sanpham/:id" element={<SanPhamShow />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/detail/:id" element={<Detail />} />/ */}
        </Routes>
    </>
  );
}

export default App;