import React from 'react';

const UiOffcanvas = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Demo</h5>
                                        <p className="card-title-desc">Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the <code>.show</code> class on an element with the <code>.offcanvas</code> class.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-2">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="btn btn-primary">
                                                Link with href
                                            </a>
                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" className="btn btn-primary">
                                                Button with data-bs-target
                                            </button>
                                        </div>

                                        <div tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" className="offcanvas offcanvas-start">
                                            <div className="offcanvas-header">
                                                <h5 id="offcanvasExampleLabel" className="offcanvas-title">Offcanvas</h5>
                                                <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close text-reset"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <div>
                                                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                                </div>
                                                <div className="dropdown mt-3">
                                                    <button type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" className="btn btn-primary dropdown-toggle">
                                                        Dropdown button <i className="mdi mdi-chevron-down"></i>
                                                    </button>
                                                    <ul aria-labelledby="dropdownMenuButton" className="dropdown-menu">
                                                        <li><a href="javascript:;" className="dropdown-item">Action</a></li>
                                                        <li><a href="javascript:;" className="dropdown-item">Another action</a></li>
                                                        <li><a href="javascript:;" className="dropdown-item">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Placement</h5>
                                        <p className="card-title-desc">Offcanvas Diffrent Placement Example: Left, Right &amp; Bottom</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-2">
                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" className="btn btn-primary">Toggle top offcanvas</button>

                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="btn btn-primary">Toggle right offcanvas</button>

                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" className="btn btn-primary">Toggle bottom offcanvas</button>
                                        </div>



                                        <div tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" className="offcanvas offcanvas-top">
                                            <div className="offcanvas-header">
                                                <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                                                <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close text-reset"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                            </div>
                                        </div>


                                        <div tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" className="offcanvas offcanvas-end">
                                            <div className="offcanvas-header">
                                              <h5 id="offcanvasRightLabel">Offcanvas Right</h5>
                                              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close text-reset"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                            </div>
                                        </div>


                                        <div tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" className="offcanvas offcanvas-bottom">
                                            <div className="offcanvas-header">
                                              <h5 id="offcanvasBottomLabel">Offcanvas Bottom</h5>
                                              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close text-reset"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Backdrop</h5>
                                        <p className="card-title-desc">Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>data-bs-scroll</code> attribute to toggle <code>&lt;body&gt;</code> scrolling and <code>data-bs-backdrop</code> to toggle the backdrop.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-2">
                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="btn btn-primary">Enable body scrolling</button>
                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" className="btn btn-primary">Enable backdrop (default)</button>
                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className="btn btn-primary">Enable both scrolling &amp; backdrop</button>
                                        </div>

                                        <div data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" className="offcanvas offcanvas-start">
                                            <div className="offcanvas-header">
                                              <h5 id="offcanvasScrollingLabel" className="offcanvas-title">Colored with scrolling</h5>
                                              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close text-reset"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                              <p>Try scrolling the rest of the page to see this option in action.</p>
                                            </div>
                                        </div>
                                        <div tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel" className="offcanvas offcanvas-start">
                                            <div className="offcanvas-header">
                                              <h5 id="offcanvasWithBackdropLabel" className="offcanvas-title">Offcanvas with backdrop</h5>
                                              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close text-reset"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                              <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
                                            </div>
                                        </div>
                                        <div data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" className="offcanvas offcanvas-start">
                                            <div className="offcanvas-header">
                                              <h5 id="offcanvasWithBothOptionsLabel" className="offcanvas-title">Backdroped with scrolling</h5>
                                              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn-close text-reset"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                              <p>Try scrolling the rest of the page to see this option in action.</p>
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

export default UiOffcanvas;
