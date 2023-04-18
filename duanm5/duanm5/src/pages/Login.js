import React from "react";
import LayoutMaster from "../layouts/LayoutMaster";

function Login(props) {
  return (
    <LayoutMaster>
      <section className="main-content">
        <div className="row">
          <div className="span5">
            <h4 className="title">
              <span className="text">
                <strong>Login</strong> Form
              </span>
            </h4>
            <form action="#" method="post">
              <fieldset>
                <div className="control-group">
                  <label className="control-label">Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      placeholder="Enter your username"
                      id="username"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Username</label>
                  <div className="controls">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <input
                    tabIndex={3}
                    className="btn btn-inverse large"
                    type="submit"
                    defaultValue="Sign into your account"
                  />
                  <hr />
                  <p className="reset">
                    Recover your{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      username or password
                    </a>
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="span7">
            <h4 className="title">
              <span className="text">
                <strong>Register</strong> Form
              </span>
            </h4>
            <form action="#" method="post" className="form-stacked">
              <fieldset>
                <div className="control-group">
                  <label className="control-label">Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Email address:</label>
                  <div className="controls">
                    <input
                      type="password"
                      placeholder="Enter your email"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Password:</label>
                  <div className="controls">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <p>
                    Now that we know who you are. I'm not a mistake! In a comic,
                    you know how you can tell who the arch-villain's going to
                    be?
                  </p>
                </div>
                <hr />
                <div className="actions">
                  <input
                    tabIndex={9}
                    className="btn btn-inverse large"
                    type="submit"
                    defaultValue="Create your account"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </LayoutMaster>
  );
}

export default Login;
