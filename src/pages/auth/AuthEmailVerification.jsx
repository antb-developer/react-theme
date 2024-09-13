import React from 'react';

const AuthEmailVerification = () => {
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
                                        <div className="avatar-title rounded-circle bg-light">
                                            <i className="bx bxs-envelope h2 mb-0 text-primary"></i>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-1">
                                        <h4>Verify your email</h4>
                                        <p>We have sent you verification email <span className="fw-bold">example@abc.com</span>, Please check it</p>
                                        <div className="mt-4">
                                            <a href="index.html" className="btn btn-primary w-100">Verify email</a>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <p className="mb-0">Didn't receive an email ? <a href="javascript:;" className="text-primary fw-semibold"> Resend </a> </p>
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

export default AuthEmailVerification;
