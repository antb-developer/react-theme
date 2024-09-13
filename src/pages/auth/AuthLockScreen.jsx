import React from 'react';

const AuthLockScreen = () => {
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
                                    <h5>Lock Screen</h5>
                                    <p className="text-muted">Enter your password to unlock the screen!</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <div className="user-thumb text-center mb-4">
                                        <img src="/images/users/avatar-3.jpg" alt="thumbnail" className="rounded-circle img-thumbnail avatar-lg" />
                                        <h5 className="font-size-15 mt-3">Martin Gurley</h5>
                                    </div>
                                    <form action="/">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="userpassword">Password</label>
                                            <div className="position-relative auth-pass-inputgroup input-custom-icon">
                                                <span className="bx bx-lock-alt"></span>
                                                <input type="password" id="password-input" placeholder="Enter password" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button type="submit" className="btn btn-primary w-100 waves-effect waves-light">Unlock</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="mb-0">Not you ? return <a href="/" className="fw-medium text-primary"> Sign In </a></p>
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

export default AuthLockScreen;
