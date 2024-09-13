import React from 'react';

const UiNotifications = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Toast Notifications</h4>
                                        <p className="card-title-desc">Toasts are lightweight notifications designed to mimic the push notifications</p>
                                    </div>
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="p-2">
                                                    <h5 className="font-size-14">Basic</h5>
                                                    <p className="card-title-desc mb-3">
                                                        Toasts are as flexible as you need and have very little required markup.
                                                        At a minimum, we require a single element to contain your
                                                        “toasted” content and strongly encourage a dismiss button.
                                                    </p>
                                                    <div role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true" className="toast fade show">
                                                        <div className="toast-header">
                                                            <img src="/images/logo-dark-sm.png" alt="" height="18" className="me-2" />
                                                            <strong className="me-auto">webadmin</strong>
                                                            <small className="text-muted">11 mins ago</small>
                                                            <button type="button" data-bs-dismiss="toast" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="toast-body">
                                                            Hello, world! This is a toast message.
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                            <div className="col-lg-6">
                                                <div className="p-2">
                                                    <h5 className="font-size-14">Translucent</h5>
                                                    <p className="card-title-desc mb-3">
                                                        Toasts are slightly translucent, too, so they blend over
                                                        whatever they might appear over. For browsers that
                                                        support the <code>backdrop-filter</code> CSS property,
                                                        we’ll also attempt to blur the elements under a toast.
                                                    </p>
                                                    <div className="bg-light-subtle p-3">
                                                        <div role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true" className="toast fade show">
                                                            <div className="toast-header">
                                                                <img src="/images/logo-dark-sm.png" alt="" height="18" className="me-2" />
                                                                <strong className="me-auto">webadmin</strong>
                                                                <small className="text-muted">11 mins ago</small>
                                                                <button type="button" data-bs-dismiss="toast" aria-label="Close" className="btn-close"></button>
                                                            </div>
                                                            <div className="toast-body">
                                                                Hello, world! This is a toast message.
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="p-2 mt-4">
                                                    <h5 className="font-size-14">Stacking</h5>
                                                    <p className="card-title-desc mb-3">
                                                        For systems that generate more notifications, consider using a wrapping element
                                                        so they can easily stack.
                                                    </p>
                                                    <div className="bg-light-subtle">
                                                        <div aria-live="polite" aria-atomic="true" style= {{ minHeight: "230px" }} className="position-relative">




                                                            <div className="toast-container position-absolute top-0 end-0 p-2 p-lg-3">


                                                                <div role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true" className="toast fade show">
                                                                    <div className="toast-header">
                                                                        <img src="/images/logo-dark-sm.png" alt="" height="18" className="me-2" />
                                                                        <strong className="me-auto">webadmin</strong>
                                                                        <small className="text-muted">just now</small>
                                                                        <button type="button" data-bs-dismiss="toast" aria-label="Close" className="btn-close"></button>
                                                                    </div>
                                                                    <div className="toast-body">
                                                                        See? Just like this.
                                                                    </div>
                                                                </div>

                                                                <div role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true" className="toast fade show">
                                                                    <div className="toast-header">
                                                                        <img src="/images/logo-dark-sm.png" alt="" height="18" className="me-2" />
                                                                        <strong className="me-auto">webadmin</strong>
                                                                        <small className="text-muted">2 sec ago</small>
                                                                        <button type="button" data-bs-dismiss="toast" aria-label="Close" className="btn-close"></button>
                                                                    </div>
                                                                    <div className="toast-body">
                                                                        Heads up, toasts will stack automatically
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                            <div className="col-lg-6">
                                                <div className="p-2 mt-4">
                                                    <h5 className="font-size-14">Placement</h5>
                                                    <p className="card-title-desc mb-3">
                                                        You can also get fancy with flexbox utilities to align toasts horizontally
                                                        and/or vertically.
                                                    </p>
                                                    <div className="bg-light-subtle p-2 p-lg-3">

                                                        <div aria-live="polite" aria-atomic="true" style={{ minHeight: "200px" }} className="d-flex justify-content-center align-items-center w-100">


                                                            <div role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true" className="toast fade show">
                                                                <div className="toast-header">
                                                                    <img src="/images/logo-dark-sm.png" alt="" height="18" className="me-2" />
                                                                    <strong className="me-auto">webadmin</strong>
                                                                    <small>9 min ago</small>
                                                                    <button type="button" data-bs-dismiss="toast" aria-label="Close" className="btn-close"></button>
                                                                </div>
                                                                <div className="toast-body">
                                                                    Hello, world! This is a toast message.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">AlertifyJs</h4>
                                        <p className="card-title-desc">Notifications examples of using AlertifyJS.</p>
                                    </div>
                                    <div className="card-body">

                                        <h4 className="card-title mb-4">Default Dialogs</h4>

                                        <div className="row text-center">
                                            <div className="col-sm-4">
                                                <div className="my-4">
                                                    <h5 className="mb-4 font-size-16">Alert</h5>

                                                    <a href="javascript: void(0);" id="alert" className="btn btn-primary waves-effect waves-light">Click me</a>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="my-4">
                                                    <h5 className="mb-4 font-size-16">Confirm</h5>

                                                    <a href="javascript: void(0);" id="alert-confirm" className="btn btn-primary waves-effect waves-light">Click me</a>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="my-4">
                                                    <h5 className="mb-4 font-size-16">Prompt</h5>

                                                    <a href="javascript: void(0);" id="alert-prompt" className="btn btn-primary waves-effect waves-light">Click me</a>
                                                </div>
                                            </div>
                                        </div>


                                        <h4 className="card-title mt-5 mb-3">Default Notifications</h4>

                                        <div className="table-responsive">
                                            <table className="table mb-0">

                                                <tbody>
                                                    <tr>
                                                        <td>Default alert</td>
                                                        <td><a href="javascript: void(0);" id="alert-message" className="btn btn-primary btn-sm waves-effect waves-light">Click me</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Success alert</td>
                                                        <td><a href="javascript: void(0);" id="alert-success" className="btn btn-primary btn-sm waves-effect waves-light">Click me</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Error alert</td>
                                                        <td><a href="javascript: void(0);" id="alert-error" className="btn btn-primary btn-sm waves-effect waves-light">Click me</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Warning alert</td>
                                                        <td><a href="javascript: void(0);" id="alert-warning" className="btn btn-primary btn-sm waves-effect waves-light">Click me</a></td>
                                                    </tr>

                                                </tbody>
                                            </table>
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

export default UiNotifications;
