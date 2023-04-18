// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SanPhamShow from './pages/SanPhamShow';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sanpham/:id" element={<SanPhamShow />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />} />
          {/* <Route path="/detail/:id" element={<Detail />} />/ */}
        </Routes>
    </>
  );
}

export default App;