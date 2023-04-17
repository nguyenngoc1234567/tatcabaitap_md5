import React from "react";

function Footer(props) {
  return (
    <>
      <section id="footer-bar">
        <div className="row">
          <div className="span3">
            <h4>Navigation</h4>
            <ul className="nav">
              <li>
                <a href="https://www.free-css.com/free-css-templates">
                  Homepage
                </a>
              </li>
              <li>
                <a href="https://www.free-css.com/free-css-templates">
                  About Us
                </a>
              </li>
              <li>
                <a href="contact.php">Contac Us</a>
              </li>
              <li>
                <a href="/cart">Your Cart</a>
              </li>
              <li>
                <a href="register.php">Login</a>
              </li>
            </ul>
          </div>
          <div className="span4">
            <h4>My Account</h4>
            <ul className="nav">
              <li>
                <a href="https://www.free-css.com/free-css-templates">
                  My Account
                </a>
              </li>
              <li>
                <a href="https://www.free-css.com/free-css-templates">
                  Order History
                </a>
              </li>
              <li>
                <a href="https://www.free-css.com/free-css-templates">
                  Wish List
                </a>
              </li>
              <li>
                <a href="https://www.free-css.com/free-css-templates">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div className="span5">
            <p className="logo">
              <img
                src="../assets/images/logo.png"
                className="site_logo"
                alt="website template image"
              />
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. the Lorem Ipsum has been the industry's standard dummy
              text ever since the you.
            </p>
            <br />
            <span className="social_icons">
              <a
                className="facebook"
                href="https://www.free-css.com/free-css-templates"
              >
                Facebook
              </a>
              <a
                className="twitter"
                href="https://www.free-css.com/free-css-templates"
              >
                Twitter
              </a>
              <a
                className="skype"
                href="https://www.free-css.com/free-css-templates"
              >
                Skype
              </a>
              <a
                className="vimeo"
                href="https://www.free-css.com/free-css-templates"
              >
                Vimeo
              </a>
            </span>
          </div>
        </div>
      </section>
      <section id="copyright">
        <span>Copyright 2015 - All right reserved.</span>
      </section>
    </>
  );
}

export default Footer;
