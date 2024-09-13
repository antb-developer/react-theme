import React from 'react';

const UiModals = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Modals Examples</h4>
                                        <p className="card-title-desc">Modals are streamlined, but flexible
                                            dialog prompts powered by JavaScript. They support a number of use cases
                                            from user notification to completely custom content and feature a
                                            handful of helpful subcomponents, sizes, and more.</p>
                                    </div>

                                    <div className="card-body">
                                        <div tabindex="-1" role="dialog" className="modal bs-example-modal">
                                            <div role="document" className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Modal title</h5>
                                                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>One fine body…</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                        <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Default Modal</h4>
                                        <p className="card-title-desc">Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
                                    </div>

                                    <div className="card-body">
                                        <div>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-primary waves-effect waves-light">Standard modal</button>


                                            <div id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true" data-bs-scroll="true" className="modal fade">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 id="myModalLabel" className="modal-title">Default Modal Heading</h5>
                                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <h5>Overflowing text to show scroll behavior</h5>
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Vivamus sagittis lacus vel
                                                                augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur.
                                                                Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Donec sed odio dui. Donec
                                                                ullamcorper nulla non metus auctor
                                                                fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Vivamus sagittis lacus vel
                                                                augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur.
                                                                Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Donec sed odio dui. Donec
                                                                ullamcorper nulla non metus auctor
                                                                fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" data-bs-dismiss="modal" className="btn btn-secondary waves-effect">Close</button>
                                                            <button type="button" className="btn btn-primary waves-effect waves-light">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Fullscreen Modal</h4>
                                        <p className="card-title-desc">Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed a <code>.modal-fullscreen</code>.</p>
                                    </div>

                                    <div className="card-body">
                                        <div>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen" className="btn btn-primary waves-effect waves-light">Fullscreen modal</button>


                                            <div id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true" className="modal fade">
                                                <div className="modal-dialog modal-fullscreen">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 id="exampleModalFullscreenLabel" className="modal-title">Fullscreen Modal</h5>
                                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <h5>Overflowing text to show scroll behavior</h5>
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Vivamus sagittis lacus vel
                                                                augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur.
                                                                Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Donec sed odio dui. Donec
                                                                ullamcorper nulla non metus auctor
                                                                fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Vivamus sagittis lacus vel
                                                                augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p>Aenean lacinia bibendum nulla sed consectetur.
                                                                Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Donec sed odio dui. Donec
                                                                ullamcorper nulla non metus auctor
                                                                fringilla.</p>
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" data-bs-dismiss="modal" className="btn btn-secondary waves-effect">Close</button>
                                                            <button type="button" className="btn btn-primary waves-effect waves-light">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Optional Sizes</h4>
                                        <p className="card-title-desc">Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-3">
                                            <div>

                                                <button type="button" data-bs-toggle="modal" data-bs-target=".bs-example-modal-xl" className="btn btn-primary waves-effect waves-light">Extra large modal</button>


                                                <div tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" className="modal fade bs-example-modal-xl">
                                                    <div className="modal-dialog modal-xl">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 id="myExtraLargeModalLabel" className="modal-title">Extra large modal</h5>
                                                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Cras mattis consectetur purus sit amet fermentum.
                                                                    Cras justo odio, dapibus ac facilisis in,
                                                                    egestas eget quam. Morbi leo risus, porta ac
                                                                    consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque
                                                                    nisl consectetur et. Vivamus sagittis lacus vel
                                                                    augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                                    Praesent commodo cursus magna, vel scelerisque
                                                                    nisl consectetur et. Donec sed odio dui. Donec
                                                                    ullamcorper nulla non metus auctor
                                                                    fringilla.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>

                                                <button type="button" data-bs-toggle="modal" data-bs-target=".bs-example-modal-lg" className="btn btn-light waves-effect">Large modal</button>


                                                <div tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" className="modal fade bs-example-modal-lg">
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 id="myLargeModalLabel" className="modal-title">Large modal</h5>
                                                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Cras mattis consectetur purus sit amet fermentum.
                                                                    Cras justo odio, dapibus ac facilisis in,
                                                                    egestas eget quam. Morbi leo risus, porta ac
                                                                    consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque
                                                                    nisl consectetur et. Vivamus sagittis lacus vel
                                                                    augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                                    Praesent commodo cursus magna, vel scelerisque
                                                                    nisl consectetur et. Donec sed odio dui. Donec
                                                                    ullamcorper nulla non metus auctor
                                                                    fringilla.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>

                                                <button type="button" data-bs-toggle="modal" data-bs-target=".bs-example-modal-sm" className="btn btn-success waves-effect waves-light">Small modal</button>


                                                <div tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" className="modal fade bs-example-modal-sm">
                                                    <div className="modal-dialog modal-sm">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 id="mySmallModalLabel" className="modal-title">Small modal</h5>
                                                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Cras mattis consectetur purus sit amet fermentum.
                                                                    Cras justo odio, dapibus ac facilisis in,
                                                                    egestas eget quam. Morbi leo risus, porta ac
                                                                    consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque
                                                                    nisl consectetur et. Vivamus sagittis lacus vel
                                                                    augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                                    Praesent commodo cursus magna, vel scelerisque
                                                                    nisl consectetur et. Donec sed odio dui. Donec
                                                                    ullamcorper nulla non metus auctor
                                                                    fringilla.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Vertically Centered</h5>
                                        <p className="card-title-desc">Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.</p>
                                    </div>

                                    <div className="card-body">
                                        <div>

                                            <button type="button" data-bs-toggle="modal" data-bs-target=".bs-example-modal-center" className="btn btn-primary waves-effect waves-light">Center modal</button>

                                            <div tabindex="-1" role="dialog" aria-hidden="true" className="modal fade bs-example-modal-center">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Center modal</h5>
                                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Cras mattis consectetur purus sit amet fermentum.
                                                                Cras justo odio, dapibus ac facilisis in,
                                                                egestas eget quam. Morbi leo risus, porta ac
                                                                consectetur ac, vestibulum at eros.</p>
                                                            <p>Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Vivamus sagittis lacus vel
                                                                augue laoreet rutrum faucibus dolor auctor.</p>
                                                            <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                                Praesent commodo cursus magna, vel scelerisque
                                                                nisl consectetur et. Donec sed odio dui. Donec
                                                                ullamcorper nulla non metus auctor
                                                                fringilla.
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

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Scrollable Modal</h5>
                                        <p className="card-title-desc">Scrolling long content modal and You can also create a scrollable modal that allows scroll the modal body by adding <code>.modal-dialog-scrollable</code> to <code>.modal-dialog</code>.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-3">

                                            <div>

                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalLongScrollable" className="btn btn-primary waves-effect waves-light">Long Scrollable Modal</button>


                                                <div id="exampleModalLongScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongScrollableTitle" aria-hidden="true" className="modal fade">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 id="exampleModalLongScrollableTitle" className="modal-title">Long Scrollable Modal</h5>
                                                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" data-bs-dismiss="modal" className="btn btn-light">Close</button>
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>

                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" className="btn btn-primary waves-effect waves-light">Scrollable Modal</button>


                                                <div id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true" className="modal fade">
                                                    <div className="modal-dialog modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 id="exampleModalScrollableTitle" className="modal-title">Scrollable Modal</h5>
                                                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                                    auctor fringilla.</p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" data-bs-dismiss="modal" className="btn btn-light">Close</button>
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Static Backdrop</h5>
                                        <p className="card-title-desc">When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>
                                    </div>

                                    <div className="card-body">
                                        <div>


                                            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-primary waves-effect waves-light">
                                                Static backdrop modal
                                            </button>



                                            <div id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" className="modal fade">
                                                <div role="document" className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 id="staticBackdropLabel" className="modal-title">Modal title</h5>
                                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" data-bs-dismiss="modal" className="btn btn-light">Close</button>
                                                            <button type="button" className="btn btn-primary">Understood</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Varying Modal Content</h4>
                                        <p className="card-title-desc">Use <code>event.relatedTarget</code> and HTML <code>data-bs-*</code> attributes to vary the contents of the modal depending on which button was clicked.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-3">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" className="btn btn-primary">Open modal for @mdo</button>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" className="btn btn-primary">Open modal for @fat</button>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" className="btn btn-primary">Open modal for @getbootstrap</button>

                                            <div id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 id="exampleModalLabel" className="modal-title">New message</h5>
                                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form>
                                                                <div className="mb-3">
                                                                    <label className="col-form-label" htmlFor="recipient-name">Recipient:</label>
                                                                    <input type="text" id="recipient-name" className="form-control" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="col-form-label" htmlFor="message-text">Message:</label>
                                                                    <textarea id="message-text" className="form-control" ></textarea>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                                                            <button type="button" className="btn btn-primary">Send message</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Toggle between modals</h4>
                                        <p className="card-title-desc">Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes.</p>
                                    </div>

                                    <div className="card-body">
                                        <div>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#firstmodal" className="btn btn-primary waves-effect waves-light">Open First Modal</button>

                                            <div id="firstmodal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1" className="modal fade">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 id="exampleModalToggleLabel" className="modal-title">Modal 1</h5>
                                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Show a second modal and hide this one with the button below.</p>
                                                        </div>
                                                        <div className="modal-footer">

                                                            <button data-bs-target="#secondmodal" data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-primary">Open Second Modal</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="secondmodal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1" className="modal fade">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 id="exampleModalToggleLabel2" className="modal-title">Modal 2</h5>
                                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Hide this modal and show the first with the button below.</p>
                                                        </div>
                                                        <div className="modal-footer">

                                                            <button data-bs-target="#firstmodal" data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-primary">Back to First</button>
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

                </div>



      </>
    );
};

export default UiModals;
