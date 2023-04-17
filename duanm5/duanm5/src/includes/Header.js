import React from "react";
import Home from "../pages/Home";
function Header(props) {
  return (
    <section className="navbar main-menu">
      <div className="navbar-inner main-menu">
        <a
          href="/"
          className="logo pull-left"
        >
          <img
            src="../assets/images/logo.png"
            className="site_logo"
            alt="website template image"
          />
        </a>
        {/* <nav id="menu" className="pull-right">
          <ul>
            <li>
              <a href="products.php">Woman</a>
              <ul>
                <li>
                  <a href="products.php">Lacinia nibh</a>
                </li>
                <li>
                  <a href="products.php">Eget molestie</a>
                </li>
                <li>
                  <a href="products.php">Varius purus</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="products.php">Man</a>
            </li>
            <li>
              <a href="products.php">Sport</a>
              <ul>
                <li>
                  <a href="products.php">Gifts and Tech</a>
                </li>
                <li>
                  <a href="products.php">Ties and Hats</a>
                </li>
                <li>
                  <a href="products.php">Cold Weather</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="products.php">Hangbag</a>
            </li>
            <li>
              <a href="products.php">Best Seller</a>
            </li>
            <li>
              <a href="products.php">Top Seller</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </section>
  );
}

export default Header;
