import React from 'react';

const UiRating = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Rater Js</h4>
                                        <p className="card-title-desc">Rater Js Different Example For Rating</p>
                                    </div>
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div dir="ltr" className="p-lg-5 p-4 text-center">
                                                    <h5 className="font-size-15 mb-4">Basic Rater</h5>
                                                    <div id="basic-rater"></div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div dir="ltr" className="p-lg-5 p-4 text-center">
                                                    <h5 className="font-size-15 mb-4">Rater with Step</h5>
                                                    <div id="rater-step"></div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div dir="ltr" className="p-lg-5 p-4 text-center">
                                                    <h5 className="font-size-15 mb-4">Custom Messages</h5>
                                                    <div id="rater-message"></div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div dir="ltr" className="p-lg-5 p-4 text-center">
                                                    <h5 className="font-size-15 mb-4">Example with unlimited number of stars. readOnly option is set to true.</h5>
                                                    <div id="rater-unlimitedstar"></div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div dir="ltr" className="p-lg-5 p-4 text-center">
                                                    <h5 className="font-size-15 mb-4">On Hover event</h5>
                                                    <div id="rater-onhover" className="align-middle"></div>
                                                    <span className="ratingnum badge bg-info align-middle ms-2"></span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div dir="ltr" className="p-lg-5 p-4 text-center">
                                                    <h5 className="font-size-15 mb-4">Clear/Reset rater</h5>
                                                    <div id="raterreset" className="align-middle"></div>
                                                    <span className="clear-rating"></span>
                                                    <button id="raterreset-button" className="btn btn-outline-primary btn-sm ms-2">Reset</button>
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

export default UiRating;
