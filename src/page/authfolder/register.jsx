import React, { useState } from 'react'
import "./login.scss"

const Register = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className='login-section'>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 app-name col-lg-5 d-none d-lg-block">
            <h1 className="appname">SocialGround</h1>
            <h4 className="desc">Connect with friends everywhere</h4>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-10 col-12 m-auto">
              <div className="login-form">
                <div>
                  <div className="login-title">
                    <h2>Register</h2>
                  </div>
                  <div className="login-desc">
                    <h3>Hello there!</h3>
                    <h4>welcome to social ground where you chat friends, create post, like post and lot of more stuff</h4>
                  </div>
                  <div className="form-sec">
                    <form action="" className="theme-form">
                      <div className="form-group">
                        <input type="text" id="name" className="form-control" placeholder="Full Name"  />
                      </div>
                      <div className="form-group">
                        <input type="text" id="username" className="form-control" placeholder="UserName"  />
                      </div>
                      <div className="form-group">
                        <input type={"email"} id="email" className="form-control" placeholder="Email"  />
                      </div>
                      <div className="form-group">
                        <input type={isShow ? "text":"password"} id="name" className="form-control" placeholder="Password"  />
                        <img src={isShow ? "https://img.icons8.com/material-outlined/24/undefined/visible--v1.png": "https://img.icons8.com/material/24/undefined/privacy--v1.png"} alt="" className="password-display" onClick={()=>setIsShow(!isShow)} />
                      </div>
                    </form>
                  </div>
                  <div className="bottom-sec">
                    <div className="form-check checkbox_animated">
                      <input type={"checkbox"} id="checker" className="form-check-input" />
                      <label className="form-check-label" htmlFor="checker">remember me</label>
                    </div>
                    <a href="#" className="ms-auto">forget password?</a>
                  </div>
                  <div className="button-section">
                    <a href="#" className="btn btn-solid btn-lg btn-primary">Sign Up</a>
                    <a href="#" className="btn btn-solid btn-lg ms-auto btn-primary">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Register
