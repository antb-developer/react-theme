import React from 'react';
import { Link } from 'react-router-dom';

const AuthLogout = () => {
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
                                <div className="p-2 my-2 text-center">
                                    <div className="avatar-lg mx-auto">
                                        <div className="avatar-title bg-light text-primary h2 rounded-circle">
                                            <i className="bx bxs-user"></i>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <h5>You are Logged Out</h5>
                                        <p className="text-muted font-size-15">Thank you for using <span className="fw-semibold text-body">webadmin</span></p>
                                        <div className="mt-4">
                                            <Link to="/auth/login" className="btn btn-primary w-100 waves-effect waves-light">Sign In</Link>
                                        </div>
                                    </div>
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

export default AuthLogout;
