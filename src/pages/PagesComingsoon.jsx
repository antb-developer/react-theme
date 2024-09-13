import React from 'react';

const PagesComingsoon = () => {
    return (
      <>
        <div className="bg-overlay bg-light"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <a href="index.html" className="d-block auth-logo">
                            <img src="/images/logo-dark.png" alt="" height="36" className="auth-logo-dark mx-auto" />
                            <img src="/images/logo-light.png" alt="" height="36" className="auth-logo-light mx-auto" />
                        </a>
                        <div className="row justify-content-center mt-5">
                            <div className="col-sm-6">
                                <div className="maintenance-img">
                                    <img src="/images/coming-soon.png" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-5">Let's get started with webadmin</h4>
                        <p className="text-muted">It will be as simple as Occidental in fact it will be Occidental.</p>

                        <div className="row justify-content-center mt-5">
                            <div className="col-md-9">
                                <div id="countdown" className="countdownlist"></div>
                            </div>
                        </div>

                        <div className="input-group countdown-input-group mx-auto my-5">
                            <input type="email" placeholder="Enter your email address" aria-label="search result" aria-describedby="button-email" className="form-control border-light shadow" />
                            <button type="button" id="button-email" className="btn btn-primary">Send <i className="bx bx-paper-plane ms-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      </>
    );
};

export default PagesComingsoon;
