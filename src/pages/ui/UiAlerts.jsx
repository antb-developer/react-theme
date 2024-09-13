import React from 'react';

const UiAlerts = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Default Alerts</h4>
                                        <p className="card-title-desc">Alerts are available for any length of
                                            text, as well as an optional dismiss button. For proper styling, use one
                                            of the four <strong>required</strong> contextual classes (e.g., <code>.alert-success</code>). For inline
                                            dismissal, use the alerts jQuery plugin.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-primary">
                                            A simple primary alert—check it out!
                                        </div>
                                        <div role="alert" className="alert alert-secondary">
                                            A simple secondary alert—check it out!
                                        </div>
                                        <div role="alert" className="alert alert-success">
                                            A simple success alert—check it out!
                                        </div>
                                        <div role="alert" className="alert alert-danger">
                                            A simple danger alert—check it out!
                                        </div>
                                        <div role="alert" className="alert alert-warning">
                                            A simple warning alert—check it out!
                                        </div>
                                        <div role="alert" className="alert alert-info">
                                            A simple info alert—check it out!
                                        </div>
                                        <div role="alert" className="alert alert-light">
                                            A simple light alert—check it out!
                                        </div>
                                        <div role="alert" className="alert alert-dark mb-0">
                                            A simple dark alert—check it out!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Link Color</h4>
                                        <p className="card-title-desc">Use the <code>.alert-link</code> utility class to
                                        quickly provide matching colored links within any alert.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-primary">
                                            A simple primary alert with <a href="javascript: void(0);" className="alert-link">an example link</a>. Give it a
                                            click if you like.
                                        </div>
                                        <div role="alert" className="alert alert-secondary">
                                            A simple secondary alert with <a href="javascript: void(0);" className="alert-link">an example link</a>. Give it a
                                            click if you like.
                                        </div>
                                        <div role="alert" className="alert alert-success">
                                            A simple success alert with <a href="javascript: void(0);" className="alert-link">an example link</a>. Give it a
                                            click if you like.
                                        </div>
                                        <div role="alert" className="alert alert-danger">
                                            A simple danger alert with <a href="javascript: void(0);" className="alert-link">an example link</a>. Give it a
                                            click if you like.
                                        </div>
                                        <div role="alert" className="alert alert-warning">
                                            A simple warning alert with <a href="javascript: void(0);" className="alert-link">an example link</a>. Give it a
                                            click if you like.
                                        </div>
                                        <div role="alert" className="alert alert-info">
                                            A simple info alert with <a href="javascript: void(0);" className="alert-link">an example link</a>. Give it a click
                                            if you like.
                                        </div>
                                        <div role="alert" className="alert alert-light">
                                            A simple light alert with <a href="javascript:;" className="alert-link">an example link</a>. Give it a click if you like.
                                        </div>
                                        <div role="alert" className="alert alert-dark mb-0">
                                            A simple dark alert with <a href="javascript:;" className="alert-link">an example link</a>. Give it a click if you like.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Dismissing</h4>
                                        <p className="card-title-desc">Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding
                                            to the right of the alert and positions the <code>.btn-close</code> button.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-success alert-dismissible fade show">
                                            A simple success alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-danger alert-dismissible fade show">
                                            A simple danger alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-warning alert-dismissible fade show">
                                            A simple warning alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-info alert-dismissible fade show mb-0">
                                            A simple info alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title"> Alert with Icon</h4>
                                        <p className="card-title-desc">You can use flexbox utilities and Icons to create alerts with icons</p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-success alert-dismissible fade show">
                                            <i className="mdi mdi-check-all me-2"></i>
                                            A simple success alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-danger alert-dismissible fade show">
                                            <i className="mdi mdi-block-helper me-2"></i>
                                            A simple danger alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-warning alert-dismissible fade show">
                                            <i className="mdi mdi-alert-outline me-2"></i>
                                            A simple warning alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-info alert-dismissible fade show mb-0">
                                            <i className="mdi mdi-alert-circle-outline me-2"></i>
                                            A simple info alert—check it out!
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Outline Alerts</h4>
                                        <p className="card-title-desc">Add <code>.alert-outline</code> class with for Outline alerts.</p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-success alert-dismissible alert-outline fade show">
                                            <strong>Success</strong> - Outline success alert example
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-danger alert-dismissible alert-outline fade show">
                                            <strong>Danger</strong> - Outline danger alert example
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-warning alert-dismissible alert-outline fade show">
                                            <strong>Warning</strong> - Outline warning alert example
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-info alert-dismissible alert-outline fade show mb-0">
                                            <strong>Info</strong> - Outline info alert example
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Left Border Alerts</h4>
                                        <p className="card-title-desc">Add <code>.alert-outline</code> class with for Outline alerts.</p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-success alert-border-left alert-dismissible fade show">
                                            <i className="mdi mdi-check-all me-3 align-middle"></i><strong>Success</strong> - Left border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-danger alert-border-left alert-dismissible fade show">
                                            <i className="mdi mdi-block-helper me-3 align-middle"></i><strong>Danger</strong> - Left border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-warning alert-border-left alert-dismissible fade show">
                                            <i className="mdi mdi-alert-outline align-middle me-3"></i><strong>Warning</strong> - Left border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                        <div role="alert" className="alert alert-info alert-border-left alert-dismissible fade show mb-0">
                                            <i className="mdi mdi-alert-circle-outline align-middle me-3"></i><strong>Info</strong> - Left border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Top Border Alerts</h4>
                                        <p className="card-title-desc">Left Border Alert example</p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-success alert-top-border alert-dismissible fade show">
                                            <i className="mdi mdi-check-all me-3 align-middle text-success"></i><strong>Success</strong> - Top border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>


                                        <div role="alert" className="alert alert-danger alert-top-border alert-dismissible fade show">
                                            <i className="mdi mdi-block-helper me-3 align-middle text-danger"></i><strong>Danger</strong> - Top border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>

                                        <div role="alert" className="alert alert-warning alert-top-border alert-dismissible fade show">
                                            <i className="mdi mdi-alert-outline align-middle text-warning me-3"></i><strong>Warning</strong> - Top border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>

                                        <div role="alert" className="alert alert-info alert-top-border alert-dismissible fade show mb-0">
                                            <i className="mdi mdi-alert-circle-outline text-info align-middle me-3"></i><strong>Info</strong> - Top border alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Label Icon Arrow Alerts</h4>
                                        <p className="card-title-desc">Alert label arrow example</p>
                                    </div>

                                    <div className="card-body">
                                        <div role="alert" className="alert alert-success alert-dismissible alert-label-icon label-arrow fade show">
                                            <i className="mdi mdi-check-all label-icon"></i><strong>Success</strong> - Label icon arrow alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>

                                        <div role="alert" className="alert alert-danger alert-dismissible alert-label-icon label-arrow fade show">
                                            <i className="mdi mdi-block-helper label-icon"></i><strong>Danger</strong> - Label icon arrow alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>

                                        <div role="alert" className="alert alert-warning alert-dismissible alert-label-icon label-arrow fade show">
                                            <i className="mdi mdi-alert-outline label-icon"></i><strong>Warning</strong> - Label icon arrow alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>

                                        <div role="alert" className="alert alert-info alert-dismissible alert-label-icon label-arrow fade show mb-0">
                                            <i className="mdi mdi-alert-circle-outline label-icon"></i><strong>Info</strong> - Label icon arrow alert
                                            <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Alert Live Examples</h4>
                                        <p className="card-title-desc">Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="liveAlertPlaceholder"></div>
                                        <button type="button" id="liveAlertBtn" className="btn btn-primary">Show live alert</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Alert Examples</h4>
                                        <p className="card-title-desc">Success, Error and Warning Alert Examples.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row g-4">
                                            <div className="col-sm-3">
                                                <div role="alert" className="alert alert-success alert-dismissible fade show px-4 mb-0 text-center">
                                                    <i className="mdi mdi-check-all d-block display-4 mt-2 mb-3 text-success"></i>
                                                    <h5 className="text-success">Success</h5>
                                                    <p>A simple success alert</p>
                                                    <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                                </div>
                                            </div>

                                            <div className="col-sm-3">
                                                <div role="alert" className="alert alert-danger alert-dismissible fade show px-4 mb-0 text-center">
                                                    <i className="mdi mdi-block-helper d-block display-4 mt-2 mb-3 text-danger"></i>
                                                    <h5 className="text-danger">Error</h5>
                                                    <p>A simple danger alert</p>
                                                    <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                                </div>
                                            </div>

                                            <div className="col-sm-3">
                                                <div role="alert" className="alert alert-warning alert-dismissible fade show px-4 mb-0 text-center">
                                                    <i className="mdi mdi-alert-outline d-block display-4 mt-2 mb-3 text-warning"></i>
                                                    <h5 className="text-warning">Warning</h5>
                                                    <p>A simple warning alert</p>
                                                    <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
                                                </div>
                                            </div>

                                            <div className="col-sm-3">
                                                <div role="alert" className="alert alert-info alert-dismissible fade show px-4 mb-0 text-center">
                                                    <i className="mdi mdi-alert-circle-outline d-block display-4 mt-2 mb-3 text-info"></i>
                                                    <h5 className="text-info">Info</h5>
                                                    <p>A simple info alert</p>
                                                    <button type="button" data-bs-dismiss="alert" aria-label="Close" className="btn-close"></button>
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

export default UiAlerts;
