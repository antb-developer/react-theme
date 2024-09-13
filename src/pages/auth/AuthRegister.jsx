import React from 'react';
import { Link } from 'react-router-dom';

const AuthRegister = () => {
    return (
      <>
        <div className="bg-overlay bg-light"></div>
        <div className="container">
            <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-lg-6 col-xl-5">

                        <div className="mb-4 pb-2">
                            <a href="index.html" className="d-block auth-logo">
                                <img src="/images/logo-dark.png" alt="" height="30" className="auth-logo-dark me-start" />
                                <img src="/images/logo-light.png" alt="" height="30" className="auth-logo-light me-start" />
                            </a>
                        </div>

                        <div className="card">
                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5>Register Account</h5>
                                    <p className="text-muted">Get your free webadmin account now.</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form action="/">

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="useremail">Email</label>
                                            <div className="position-relative input-custom-icon">
                                                <input type="email" id="useremail" placeholder="Enter email" className="form-control" />
                                                <span className="bx bx-mail-send"></span>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="username">Username</label>
                                            <div className="position-relative input-custom-icon">
                                                <input type="text" id="username" placeholder="Enter username" className="form-control" />
                                                 <span className="bx bx-user"></span>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="userpassword">Password</label>
                                            <div className="position-relative auth-pass-inputgroup input-custom-icon">
                                                <span className="bx bx-lock-alt"></span>
                                                <input type="password" id="password-input" placeholder="Enter password" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-check py-1">
                                            <input type="checkbox" id="auth-terms-condition-check" className="form-check-input" />
                                            <label className="form-check-label" htmlFor="auth-terms-condition-check">I accept <a href="javascript: void(0);" className="text-body">Terms and Conditions</a></label>
                                        </div>

                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-primary w-100 waves-effect waves-light">Register</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <div className="signin-other-title">
                                                <h5 className="font-size-14 mb-3 mt-2 title"> Sign in with </h5>
                                            </div>

                                            <ul className="list-inline mt-2">
                                                <li className="list-inline-item">
                                                    <a href="javascript:void()" className="social-list-item bg-primary text-white border-primary">
                                                        <i className="bx bxl-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="javascript:void()" className="social-list-item bg-info text-white border-info">
                                                        <i className="bx bxl-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="javascript:void()" className="social-list-item bg-danger text-white border-danger">
                                                        <i className="bx bxl-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="mb-0">Already have an account ? <Link to="/auth/login" className="fw-medium text-primary"> Login</Link></p>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center p-4">
                            <p>© <script>document.write(new Date().getFullYear())</script> webadmin. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </>
    );
};

export default AuthRegister;
