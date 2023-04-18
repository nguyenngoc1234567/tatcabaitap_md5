import React from "react";

function Topbar(props) {
  return (
    <div id="top-bar" className="container">
      <div className="row">
        <div className="span4">
          <form action="#" method="post" className="search_form">
            <input
              type="text"
              className="input-block-level search-query"
              placeholder="eg. T-sirt"
            />
          </form>
        </div>
        <div className="span8">
          <div className="account pull-right">
            <ul className="user-menu">
              <li>
                <a href="https://www.free-css.com/free-css-templates">
                Tài khoản của tôi
                </a>
              </li>
              <li>
                <a href="/cart">Giỏ hàng </a>
              </li>
              <li>
                <a href="/checkout">Thủ tục thanh toán</a>
              </li>
              <li>
                <a href="/login">Đăng nhập </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
