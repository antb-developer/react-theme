import React from 'react';

const AuthRecoverpw = () => {
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
                                    <h5>Reset Password</h5>
                                    <p className="text-muted">Reset Password with webadmin.</p>
                                </div>
                                <div className="p-2 mt-4">

                                    <div role="alert" className="alert alert-success text-center small mb-4">
                                        Enter your Email and instructions will be sent to you!
                                    </div>

                                    <form action="index.html">

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="useremail">Email</label>
                                            <div className="position-relative input-custom-icon">
                                                <input type="email" id="useremail" placeholder="Enter email" className="form-control" />
                                                <span className="bx bx-mail-send"></span>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button type="submit" className="btn btn-primary w-100 waves-effect waves-light">Reset</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="mb-0">Remember It ? <a href="auth-login.html" className="fw-medium text-primary"> Sign in </a></p>
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

export default AuthRecoverpw;
