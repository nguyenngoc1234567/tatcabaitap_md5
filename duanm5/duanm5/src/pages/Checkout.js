import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';

function Checkout(props) {
    return (
            <LayoutMaster>
<section className="main-content">
  <div className="row">
    <div className="span12">
      <div className="accordion" id="accordion2">
        <div className="accordion-group">
          <div className="accordion-heading">
            <a
              className="accordion-toggle"
              data-toggle="collapse"
              data-parent="#accordion2"
              href="#collapseOne"
            >
              Checkout Options
            </a>
          </div>
          <div id="collapseOne" className="accordion-body in collapse">
            <div className="accordion-inner">
              <div className="row-fluid">
                <div className="span6">
                  <h4>Khách hàng mới</h4>
                  <p>
                  Bằng cách tạo tài khoản, bạn sẽ có thể mua sắm nhanh hơn, cập nhật trạng thái của đơn hàng và theo dõi các đơn hàng bạn đã thực hiện trước đó.
                  </p>
                  <form action="#" method="post">
                    <fieldset>
                      <label className="radio" htmlFor="register">
                        <input
                          type="radio"
                          name="account"
                          defaultValue="register"
                          id="register"
                          defaultChecked="checked"
                        />
                        đăng ký tài khoản
                      </label>
                      <label className="radio" htmlFor="guest">
                      
                       
                      </label>
                      <br />
                      <button className="btn btn-inverse" type="submit" id="checkout">
                  <a href="/Login">Continue</a>
                </button>
                    </fieldset>
                  </form>
                </div>
                <div className="span6">
                  <h4>Bạn cần đăng nhập</h4>
                  <p>Khách hàng cũ</p>
                  <form action="#" method="post">
                    <fieldset>
                      <div className="control-group">
                        <label className="control-label">Tên tài khoản </label>
                        <div className="controls">
                          <input
                            type="text"
                            placeholder="Tên tài khoản"
                            id="username"
                            className="input-xlarge"
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <label className="control-label">Mật khẩu</label>
                        <div className="controls">
                          <input
                            type="password"
                            placeholder="Mật khẩu"
                            id="password"
                            className="input-xlarge"
                          />
                        </div>
                      </div>
                      <button className="btn btn-inverse">Đăng nhập</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-group">
          <div className="accordion-heading">
            <a
              className="accordion-toggle"
              data-toggle="collapse"
              data-parent="#accordion2"
              href="#collapseTwo"
            >
              Account &amp; Billing Details
            </a>
          </div>
          <div id="collapseTwo" className="accordion-body collapse">
            <div className="accordion-inner">
              <div className="row-fluid">
                <div className="span6">
                  <h4>Your Personal Details</h4>
                  <div className="control-group">
                    <label className="control-label">First Name</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Last Name</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Email Address</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Telephone</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Fax</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                </div>
                <div className="span6">
                  <h4>Your Address</h4>
                  <div className="control-group">
                    <label className="control-label">Company</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Company ID:</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">
                      <span className="required">*</span> Address 1:
                    </label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Address 2:</label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">
                      <span className="required">*</span> City:
                    </label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">
                      <span className="required">*</span> Post Code:
                    </label>
                    <div className="controls">
                      <input type="text" className="input-xlarge" />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">
                      <span className="required">*</span> Country:
                    </label>
                    <div className="controls">
                      <select className="input-xlarge">
                        <option value={1}>Afghanistan</option>
                        <option value={2}>Albania</option>
                        <option value={3}>Algeria</option>
                        <option value={4}>American Samoa</option>
                        <option value={5}>Andorra</option>
                        <option value={6}>Angola</option>
                      </select>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">
                      <span className="required">*</span> Region / State:
                    </label>
                    <div className="controls">
                      <select name="zone_id" className="input-xlarge">
                        <option value=""> --- Please Select ---</option>
                        <option value={1}>Aberdeen</option>
                        <option value={2}>Aberdeenshire</option>
                        <option value={3}>Anglesey</option>
                        <option value={4}>Angus</option>
                        <option value={5}>Argyll and Bute</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-group">
          <div className="accordion-heading">
            <a
              className="accordion-toggle"
              data-toggle="collapse"
              data-parent="#accordion2"
              href="#collapseThree"
            >
              Confirm Order
            </a>
          </div>
          <div id="collapseThree" className="accordion-body collapse">
            <div className="accordion-inner">
              <div className="row-fluid">
                <div className="control-group">
                  <label htmlFor="textarea" className="control-label">
                    Comments
                  </label>
                  <div className="controls">
                    <textarea
                      rows={3}
                      id="textarea"
                      className="span12"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <button className="btn btn-inverse pull-right">
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            </LayoutMaster>
    );
}

export default Checkout;