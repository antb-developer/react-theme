import React from 'react';

const PagesMaintenance = () => {
    return (
      <>
        <div className="bg-overlay bg-light"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex flex-column min-vh-100">
                        <div className="my-auto py-5">
                            <div className="text-center mb-4 pb-1">
                                <a href="index.html" className="d-block auth-logo">
                                    <img src="/images/logo-dark.png" alt="" height="36" className="auth-logo-dark" />
                                    <img src="/images/logo-light.png" alt="" height="36" className="auth-logo-light" />
                                </a>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-5">
                                    <div className="mt-4">
                                        <img src="/images/maintenance.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>



                            <div className="text-center text-muted my-5">
                                <h4>Site is Under Maintenance</h4>
                                <p>Please check back in sometime.</p>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-primary">01.</h5>
                                            <h5 className="font-size-16 text-uppercase mt-3">Why is the Site Down?</h5>
                                            <p className="text-muted mb-0">There are many variations of passages of
                                                Lorem Ipsum available, but the majority have suffered alteration.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-primary">02.</h5>
                                            <h5 className="font-size-16 text-uppercase mt-3">
                                                What is the Downtime?</h5>
                                            <p className="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not
                                                simply random text. It has roots in a piece of classical.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-primary">03.</h5>
                                            <h5 className="font-size-16 text-uppercase mt-3">
                                                Do you need Support?</h5>
                                            <p className="text-muted mb-0">If you are going to use a passage of Lorem
                                                Ipsum, you need to be sure there isn't anything embar..
                                                <a href="mailto:no-reply@domain.com" className="text-decoration-underline">no-reply@domain.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


      </>
    );
};

export default PagesMaintenance;
