import React from 'react';

const AuthTwoStepVerification = () => {
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
                                <div className="p-2 my-2">
                                    <div className="avatar-lg mx-auto">
                                        <div className="avatar-title rounded-circle bg-light">
                                            <i className="bx bxs-envelope h2 mb-0 text-primary"></i>
                                        </div>
                                    </div>

                                    <div className="text-center mt-4">
                                        <h4>Verify your email</h4>
                                        <p className="mb-5">Please enter the 4 digit code sent to <span className="fw-bold">example@abc.com</span></p>
                                    </div>

                                    <form>
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label className="visually-hidden" htmlFor="digit1-input">Dight 1</label>
                                                    <input type="text" maxlength="1" data-value="1" id="digit1-input" className="form-control form-control-lg text-center two-step" />
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label className="visually-hidden" htmlFor="digit2-input">Dight 2</label>
                                                    <input type="text" maxlength="1" data-value="2" id="digit2-input" className="form-control form-control-lg text-center two-step" />
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label className="visually-hidden" htmlFor="digit3-input">Dight 3</label>
                                                    <input type="text" maxlength="1" data-value="3" id="digit3-input" className="form-control form-control-lg text-center two-step" />
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="mb-3">
                                                    <label className="visually-hidden" htmlFor="digit4-input">Dight 4</label>
                                                    <input type="text" maxlength="1" data-value="4" id="digit4-input" className="form-control form-control-lg text-center two-step" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-primary w-100 waves-effect waves-light">Confirm</button>
                                        </div>
                                    </form>

                                <div className="mt-4 text-center">
                                    <p className="text-muted mb-0">Didn't receive an email ? <a href="javascript:;" className="text-primary fw-semibold"> Resend </a> </p>
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

export default AuthTwoStepVerification;
