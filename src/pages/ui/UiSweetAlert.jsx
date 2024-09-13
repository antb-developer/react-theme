import React from 'react';

const UiSweetAlert = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Examples</h4>
                                        <p className="card-title-desc">A beautiful, responsive, customizable
                                            and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero
                                            dependencies.</p>
                                    </div>
                                    <div className="card-body">

                                        <div className="row text-center">
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A basic message</p>
                                                    <button type="button" id="sa-basic" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A title with a text under</p>
                                                    <button type="button" id="sa-title" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A success message!</p>
                                                    <button type="button" id="sa-success" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A warning message, with a function attached to the "Confirm"-button...</p>
                                                    <button type="button" id="sa-warning" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>By passing a parameter, you can execute something else for "Cancel".</p>
                                                    <button type="button" id="sa-params" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A message with custom Image Header</p>
                                                    <button type="button" id="sa-image" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A message with auto close timer</p>
                                                    <button type="button" id="sa-close" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>Custom HTML description and buttons</p>
                                                    <button type="button" id="custom-html-alert" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A custom positioned dialog</p>
                                                    <button type="button" id="sa-position" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <div className="p-3">
                                                    <p>A message with custom width, padding and background</p>
                                                    <button type="button" id="custom-padding-width-alert" className="btn btn-primary waves-effect waves-light">Click me</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
                                                <p>Ajax request example</p>
                                                <button type="button" id="ajax-alert" className="btn btn-primary waves-effect waves-light">Click me</button>
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

export default UiSweetAlert;
