import React from "react";

const ForgetPage = () => {
  return (
    <div>
      <section className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="logo">
                {" "}
                <a href="">LOGO</a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="forget-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="for-sec">
                <img src="assets/images/us.jpg" />
                <h1>Forgot Password</h1>
                <p>
                  Please Enter your registered E-mail address we will get back
                  to you with the reset password link and confirmation OTP
                  thanks
                </p>
                <form>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPage;
