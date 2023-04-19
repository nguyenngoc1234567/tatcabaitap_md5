import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutMaster from "../layouts/LayoutMaster";
import { useDispatch, useSelector } from "react-redux";
import CartModel from "../models/CartModel";

function Cart(props) {
    const image = "http://127.0.0.1:8000/public/assets/product/";
    const [products, setProducts] = useState([]);
    const totalAll = products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
        useEffect(() => {
          CartModel.getAll()
              .then((res) => {
                  setProducts(res);
                  // console.log(res);
              })
              .catch((err) => {
                  throw err;
              });
      }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const carts = useSelector((state) => state.cart);

  return (
    <LayoutMaster>
      <>
        <section className="main-content">
          <div className="row">
            <div className="span9">
              <h4 className="title">
                <span className="text">
                  <strong>Your</strong> Cart
                </span>
              </h4>
              <table className="table table-striped">
                
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>Total </th>
                  </tr>
                  {
                            products.map( (product) => (
                                <tr>
                                    <th>{ product.id }</th>
                                    <th> <img
                                 className="mini-img"
                                 src={product.image}
                                 alt="img"
                               /></th>
                                    <th>{ product.name }</th>
                                    <th>{ product.price }</th>
                                    <th>{ product.quantity }</th>
                                    <th>{ product.quantity * product.price }</th>
                                </tr>

                            ))
                        }
                </thead>
             
              </table>
              <h4>Bạn thích làm gì tiếp theo ?</h4>
              <p>
              Chọn nếu bạn có mã giảm giá hoặc điểm thưởng mà bạn muốn sử dụng hoặc muốn ước tính chi phí giao hàng của mình.
              </p>
              <label className="radio">
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios1"
                  defaultValue="option1"
                />
                Sử dụng mã giảm giá
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios2"
                  defaultValue="option2"
                />
                Ước tính hàng và Thuế
              </label>
              <hr />
              <p className="cart-total right">
                <strong>Phí dịch vụ </strong>:$100.00
                <br />
                <strong>Thuế (17.5%)</strong>: $17.50
                <br />
                <strong>Tổng thu </strong>{totalAll.toLocaleString()}
                <br />
              </p>
              <hr />
              <p className="buttons center">
                <button className="btn" type="button">
                  Update
                </button>
                <button className="btn" type="button">
                  Continue
                </button>
                <button className="btn btn-inverse" type="submit" id="checkout">
                
                  <a href="/Checkout">Checkout</a>
                </button>
              </p>
            </div>
            <div className="span3 col">
              <div className="block">
                <ul className="nav nav-list">
                  <li className="nav-header">SUB CATEGORIES</li>
                  <li>
                    <a href="products.php">Nullam semper elementum</a>
                  </li>
                  <li className="active">
                    <a href="products.php">Phasellus ultricies</a>
                  </li>
                  <li>
                    <a href="products.php">Donec laoreet dui</a>
                  </li>
                  <li>
                    <a href="products.php">Nullam semper elementum</a>
                  </li>
                  <li>
                    <a href="products.php">Phasellus ultricies</a>
                  </li>
                  <li>
                    <a href="products.php">Donec laoreet dui</a>
                  </li>
                </ul>
                <br />
                <ul className="nav nav-list below">
                  <li className="nav-header">MANUFACTURES</li>
                  <li>
                    <a href="products.php">Adidas</a>
                  </li>
                  <li>
                    <a href="products.php">Nike</a>
                  </li>
                  <li>
                    <a href="products.php">Dunlop</a>
                  </li>
                  <li>
                    <a href="products.php">Yamaha</a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h4 className="title">
                  <span className="pull-left">
                    <span className="text">Những sản phẩm liên quan </span>
                  </span>
                  <span className="pull-right">
                    <a
                      className="left button"
                      href="#myCarousel"
                      data-slide="prev"
                    />
                    <a
                      className="right button"
                      href="#myCarousel"
                      data-slide="next"
                    />
                  </span>
                </h4>
                <div id="myCarousel" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="active item">
                      <ul className="thumbnails listing-products">
                        <li className="span3">
                          <div className="product-box">
                            <span className="sale_tag" />
                            <a href="product-detail.php">
                              <img
                                alt="website template image"
                                src="https://nhacchuonghinhnen.com/wp-content/uploads/2020/06/hinh-nen-xe-motor-dep-va-ngau-nhat-cho-dien-thoai-7.jpg"
                              />
                            </a>
                            <br />
                            <a href="product-detail.php" className="title">
                              Fusce id molestie massa
                            </a>
                            <br />
                            <a
                              href="https://www.free-css.com/free-css-templates"
                              className="category"
                            >
                              Suspendisse aliquet
                            </a>
                            <p className="price">$261</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="item">
                      <ul className="thumbnails listing-products">
                        <li className="span3">
                          <div className="product-box">
                            <a href="product-detail.php">
                              <img
                                alt="website template image"
                                src="https://sinhvienlaixeantoan.com/wp-content/uploads/2020/07/sieu-xe-va-nguoi-dep-bikini.jpg"
                              />
                            </a>
                            <br />
                            <a href="product-detail.php" className="title">
                              Tempor sem sodales
                            </a>
                            <br />
                            <a
                              href="https://www.free-css.com/free-css-templates"
                              className="category"
                            >
                              Urna nec lectus mollis
                            </a>
                            <p className="price">$134</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutMaster>
  );
}
export default Cart;
