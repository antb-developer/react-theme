import React from 'react';

const UiRangeslider = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header justify-content-between d-flex align-items-center">
                                        <h4 className="card-title mb-0">Examples</h4>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <div className="mb-5">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Basic Example</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="slider"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Colorpicker</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="red" className="sliders"></div>
                                                        <div id="green" className="sliders"></div>
                                                        <div id="blue" className="sliders"></div>

                                                        <div id="result"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Using HTML5 Input Elements</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="html5"></div>
                                                        <div className="d-flex flex-wrap">
                                                            <select id="input-select" className="form-select shadow-none"></select>
                                                            <input type="number" min="-20" max="40" step="1" id="input-number" className="form-control shadow-none" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Non linear slider</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="nonlinear"></div>
                                                        <span id="lower-value" className="example-val"></span>
                                                        <span id="upper-value" className="example-val"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Locking sliders together</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="slider1" className="slider"></div>
                                                        <span id="slider1-span" className="example-val mt-2"></span>

                                                        <div id="slider2" className="slider"></div>
                                                        <span id="slider2-span" className="example-val mt-2"></span>

                                                        <button id="lockbutton" style={{ float: "right", margin: "20px 0 0"}} className="btn btn-primary">Lock</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Only showing tooltips when sliding handle</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="slider-hide" className="slider"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Colored Connect Elements</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="slider-color" className="slider"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Creating a toggle</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="slider-toggle"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h5 className="font-size-14">Soft limits</h5>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div id="soft"></div>
                                                    </div>
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

export default UiRangeslider;
