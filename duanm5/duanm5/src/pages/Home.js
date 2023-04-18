import React, { useEffect, useState } from "react";
import ProductModel from "../models/ProductModel";
import { Link, useNavigate } from "react-router-dom";
import LayoutMaster from "../layouts/LayoutMaster";
import Header from "../includes/Header";
function Home(props) {
  let { the_key, product } = props;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const image = "http://127.0.0.1:8000/public/assets/product/";
  useEffect(() => {
    ProductModel.getAll()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <LayoutMaster>
      <>
        <section className="header_text sub">
          <img
            className="pageBanner"
            src="https://images4.alphacoders.com/649/thumb-1920-649958.jpg"
            alt="website template image"
          />
          <h4>
            <span>New products</span>
          </h4>
        </section>
        <section className="main-content">
          <div className="row">
            <div className="span9">
              
              <ul className="thumbnails listing-products">
                {products.map((product, key) => (
                  <li className="span3">
                    <div className="product-box">
                      <a href="product-detail.php">
                        <img
                          class="img-fluid"
                          src={`${image}${product.image}`}
                          alt=""
                        />
                      </a>
                      <br />
                      <a href="" className="title">
                        {product.name}
                      </a>
                      <br />
                      <p className="price">{product.price}VNĐ</p>
                      <Link
                        to={"/sanpham/" + product.id}
                        className="btn btn-outline-dark mt-auto"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="pagination pagination-small pagination-centered">
                <ul>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      Prev
                    </a>
                  </li>
                  <li className="active">
                    <a href="https://www.free-css.com/free-css-templates">1</a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">2</a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">3</a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">4</a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="span3 col">
              <div className="block">
                <ul className="nav nav-list">
                  <li className="nav-header">DANH MỤC PHỤS</li>
                  <li>
                    <a href="products.php">những nguyên tố khác</a>
                  </li>
                  <li className="active">
                    <a href="products.php">Những sản Phẩm đình đám </a>
                  </li>
                  <li>
                    <a href="products.php">Nguyên tố Nullam semper</a>
                  </li>
                </ul>
                <br />
                <ul className="nav nav-list below">
                  <li className="nav-header">HÃNG XE NỔI TIẾNG</li>
                  <li>
                    <a href="products.php">Kawasaki.</a>
                  </li>
                  <li>
                    <a href="products.php">BMW</a>
                  </li>
                  <li>
                    <a href="products.php">Honda.</a>
                  </li>
                  <li>
                    <a href="products.php">Yamaha</a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h4 className="title">
                  <span className="pull-left">
                    <span className="text">DANH MỤC PHỤ</span>
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
                            <span className="sale_tag" />{" "}
                            <img
                              alt="website template image"
                              src="https://www.motogiare.com/uploads/Harley-Davidson/SporterX1200cCustom/Sporter_zing_1.JPG"
                            />
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
                            <img
                              alt="website template image"
                              src="https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/d0bcb19a26224e0cbb69a069cf1d892b.jpg"
                            />
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
              {/* <div className="block">
                <h4 className="title">
                  <strong>Best</strong> Seller
                </h4>
                <ul className="small-product">
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      <img
                        src="../assets/images/ladies/3.jpg"
                        alt="website template image"
                      />
                    </a>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      Praesent tempor sem
                    </a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      <img
                        src="../assets/images/ladies/4.jpg"
                        alt="website template image"
                      />
                    </a>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      Luctus quam ultrices rutrum
                    </a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      <img
                        src="../assets/images/ladies/5.jpg"
                        alt="website template image"
                      />
                    </a>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      Fusce id molestie massa
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>
      </>
    </LayoutMaster>
  );
}

export default Home;
