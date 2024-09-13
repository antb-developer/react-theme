import React from 'react';

const UiDropdowns = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Single button dropdowns</h4>
                                        <p className="card-title-desc">Any single <code className="highlighter-rouge">.btn</code> can be turned into a dropdown
                                            toggle with some markup changes. Here’s how you can put them to work
                                            with either <code className="highlighter-rouge">&lt;button&gt;</code>
                                            elements:
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="dropdown">
                                                    <button type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                        Dropdown button <i className="mdi mdi-chevron-down"></i>
                                                    </button>
                                                    <div aria-labelledby="dropdownMenuButton" className="dropdown-menu">
                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="dropdown mt-4 mt-sm-0">
                                                    <a href="javascript:;" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                        Dropdown link <i className="mdi mdi-chevron-down"></i>
                                                    </a>

                                                    <div className="dropdown-menu">
                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Variant</h4>
                                        <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap">
                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary dropdown-toggle">Primary <i className="mdi mdi-chevron-down"></i></button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-secondary dropdown-toggle">Secondary <i className="mdi mdi-chevron-down"></i></button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-success dropdown-toggle">Success <i className="mdi mdi-chevron-down"></i></button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info dropdown-toggle">Info <i className="mdi mdi-chevron-down"></i></button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-warning dropdown-toggle">Warning <i className="mdi mdi-chevron-down"></i></button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-danger dropdown-toggle">Danger <i className="mdi mdi-chevron-down"></i></button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Dropdown Menu Item Color</h4>
                                        <p className="card-title-desc">Example of dropdown menu item color</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-3">

                                                <div className="">
                                                    <h5 className="font-size-13 mb-3">Dropdown Menu Success link example</h5>
                                                    <div className="clearfix">
                                                        <div style={{ zIndex: "1" }} className="dropdown-menu d-inline-block position-relative dropdownmenu-success">
                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                            <a href="javascript:;" className="dropdown-item">Another action</a>
                                                            <a href="javascript:;" className="dropdown-item active">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-9">
                                                <div className="mt-lg-0 mt-3">
                                                    <h5 className="font-size-13 mb-0">Dropdown Menu link Color example</h5>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-lg-4 col-sm-6">
                                                                <div className="mt-3">
                                                                    <p className="font-size-13 mb-2">Dropdown menu Primary link</p>
                                                                    <div className="btn-group">
                                                                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary dropdown-toggle">Primary <i className="mdi mdi-chevron-down"></i></button>
                                                                        <div className="dropdown-menu dropdownmenu-primary">
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-sm-6">
                                                                <div className="mt-3">
                                                                    <p className="font-size-13 mb-2">Dropdown menu Secondary link</p>
                                                                    <div className="btn-group">
                                                                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-secondary dropdown-toggle">Secondary <i className="mdi mdi-chevron-down"></i></button>
                                                                        <div className="dropdown-menu dropdownmenu-secondary">
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-sm-6">
                                                                <div className="mt-3">
                                                                    <p className="font-size-13 mb-2">Dropdown menu Success link</p>
                                                                    <div className="btn-group">
                                                                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-success dropdown-toggle">Success <i className="mdi mdi-chevron-down"></i></button>
                                                                        <div className="dropdown-menu dropdownmenu-success">
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-sm-6">
                                                                <div className="mt-3">
                                                                    <p className="font-size-13 mb-2">Dropdown menu Warning link</p>
                                                                    <div className="btn-group">
                                                                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-warning dropdown-toggle">Warning <i className="mdi mdi-chevron-down"></i></button>
                                                                        <div className="dropdown-menu dropdownmenu-warning">
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-sm-6">
                                                                <div className="mt-3">
                                                                    <p className="font-size-13 mb-2">Dropdown menu Info link</p>
                                                                    <div className="btn-group">
                                                                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info dropdown-toggle">Info <i className="mdi mdi-chevron-down"></i></button>
                                                                        <div className="dropdown-menu dropdownmenu-info">
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-sm-6">
                                                                <div className="mt-3">
                                                                    <p className="font-size-13 mb-2">Dropdown menu Danger link</p>
                                                                    <div className="btn-group">
                                                                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-danger dropdown-toggle">Danger <i className="mdi mdi-chevron-down"></i></button>
                                                                        <div className="dropdown-menu dropdownmenu-danger">
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a href="javascript:;" className="dropdown-item">Separated link</a>
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
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Split Button Dropdowns</h4>
                                        <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary">Primary</button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary dropdown-toggle dropdown-toggle-split">
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-secondary">Secondary</button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-secondary dropdown-toggle dropdown-toggle-split">
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-success">Success</button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-success dropdown-toggle dropdown-toggle-split">
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-info">Info</button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info dropdown-toggle dropdown-toggle-split">
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-warning">Warning</button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-warning dropdown-toggle dropdown-toggle-split">
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-danger">Danger</button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-danger dropdown-toggle dropdown-toggle-split">
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Sizing</h4>
                                        <p className="card-title-desc">Button dropdowns work with buttons of
                                            all sizes, including default and split dropdown buttons.</p>
                                    </div>

                                    <div className="card-body">

                                        <div className="btn-group me-1 mt-2">
                                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-primary btn-lg dropdown-toggle">
                                                Large button <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="javascript:;" className="dropdown-item">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group me-1 mt-2">
                                            <button type="button" className="btn btn-secondary btn-lg">
                                                Large button
                                            </button>
                                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split">
                                                <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="javascript:;" className="dropdown-item">Separated link</a>
                                            </div>
                                        </div>

                                        <div className="btn-group me-1 mt-2">
                                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info btn-sm dropdown-toggle">
                                                Small button <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="javascript:;" className="dropdown-item">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group me-1 mt-2">
                                            <button type="button" className="btn btn-secondary btn-sm">
                                                Small button
                                            </button>
                                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split">
                                                <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="javascript:;" className="dropdown-item">Separated link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Dark Dropdown</h4>
                                        <p className="card-title-desc">Option into darker dropdowns to match a dark navbar or custom style by adding <code>.dropdown-menu-dark</code> onto an existing <code>.dropdown-menu</code>. No changes are required to the dropdown items.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="dropdown">
                                            <button type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                Dropdown button <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div aria-labelledby="dropdownMenuButton2" className="dropdown-menu dropdown-menu-dark">
                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="javascript:;" className="dropdown-item">Separated link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Menu Content</h4>
                                        <p className="card-title-desc">Example of dropdown menu Headers, Text, Forms content</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-2">

                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-primary dropdown-toggle">
                                                    Header <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <div className="dropdown-header noti-title">
                                                        <h5 className="font-size-13 text-muted text-truncate mn-0">Welcome Jessie!</h5>
                                                    </div>

                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>


                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-success dropdown-toggle">
                                                    Text <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-md p-3">
                                                    <p>
                                                        Some example text that's free-flowing within the dropdown menu.
                                                    </p>
                                                    <p className="mb-0">
                                                        And this is more example text.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-light dropdown-toggle">
                                                    Forms <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-md p-4">
                                                    <form>
                                                        <div className="mb-2">
                                                            <label className="form-label" htmlFor="exampleDropdownFormEmail">Email address</label>
                                                            <input type="email" id="exampleDropdownFormEmail" placeholder="email@example.com" className="form-control" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label className="form-label" htmlFor="exampleDropdownFormPassword">Password</label>
                                                            <input type="password" id="exampleDropdownFormPassword" placeholder="Password" className="form-control" />
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="form-check custom-checkbox">
                                                                <input type="checkbox" id="rememberdropdownCheck" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="rememberdropdownCheck">Remember me</label>
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Menu Alignment</h4>
                                        <p className="card-title-desc">Add <code className="highlighter-rouge">.dropdown-menu-end</code>
                                            to a <code className="highlighter-rouge">.dropdown-menu</code> to right
                                            align the dropdown menu.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-3">
                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                    Right-aligned menu example  <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><button type="button" className="dropdown-item">Action</button></li>
                                                    <li><button type="button" className="dropdown-item">Another action</button></li>
                                                    <li><button type="button" className="dropdown-item">Something else here</button></li>
                                                </ul>
                                            </div>

                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                    Left-aligned but right aligned when large screen <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-lg-end">
                                                    <li><button type="button" className="dropdown-item">Action</button></li>
                                                    <li><button type="button" className="dropdown-item">Another action</button></li>
                                                    <li><button type="button" className="dropdown-item">Something else here</button></li>
                                                </ul>
                                            </div>


                                            <div className="btn-group">
                                                <button type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                    Right-aligned but left aligned when large screen <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                                    <li><button type="button" className="dropdown-item">Action</button></li>
                                                    <li><button type="button" className="dropdown-item">Another action</button></li>
                                                    <li><button type="button" className="dropdown-item">Something else here</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Auto Close Behavior</h4>
                                        <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropstart</code> to the parent element.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap">
                                            <div className="btn-group">
                                                <button type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                    Default dropdown <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <ul aria-labelledby="defaultDropdown" className="dropdown-menu">
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                </ul>
                                            </div>

                                            <div className="btn-group">
                                                <button type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                    Clickable outside <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <ul aria-labelledby="dropdownMenuClickableOutside" className="dropdown-menu">
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                </ul>
                                            </div>

                                            <div className="btn-group">
                                                <button type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                    Clickable inside <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <ul aria-labelledby="dropdownMenuClickableInside" className="dropdown-menu">
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                </ul>
                                            </div>

                                            <div className="btn-group">
                                                <button type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" className="btn btn-secondary dropdown-toggle">
                                                    Manual close <i className="mdi mdi-chevron-down"></i>
                                                </button>
                                                <ul aria-labelledby="dropdownMenuClickable" className="dropdown-menu">
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                    <li><a href="javascript:;" className="dropdown-item">Menu item</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Dropup Variation</h4>
                                        <p className="card-title-desc">Trigger dropdown menus above elements
                                            by adding <code className="highlighter-rouge">.dropup</code> to the parent
                                            element.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap">

                                            <div className="btn-group dropup">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info dropdown-toggle">Dropup <i className="mdi mdi-chevron-up"></i></button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>


                                            <div className="btn-group dropup">
                                                <button type="button" className="btn btn-info">
                                                    Split dropup
                                                </button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info dropdown-toggle dropdown-toggle-split">
                                                    <i className="mdi mdi-chevron-up"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:;" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Dropleft Variation</h4>
                                        <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropstart</code> to the parent element.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap">

                                            <div className="btn-group dropstart">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info waves-effect waves-light dropdown-toggle">
                                                    <i className="mdi mdi-chevron-left"></i> Dropleft
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                </div>
                                            </div>


                                            <div className="btn-group">
                                                <div className="btn-group dropstart">
                                                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info waves-effect waves-light dropdown-toggle-split dropdown-toggle">
                                                        <i className="mdi mdi-chevron-left"></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                    </div>
                                                </div>

                                                <button type="button" className="btn btn-info waves-effect waves-light">
                                                    Split dropstart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Dropright Variation</h4>
                                        <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropend</code> to the parent element.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex gap-2 flex-wrap">

                                            <div className="btn-group dropend">
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info waves-effect waves-light dropdown-toggle">
                                                    Dropright <i className="mdi mdi-chevron-right"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                </div>
                                            </div>


                                            <div className="btn-group dropend">
                                                <button type="button" className="btn btn-info waves-effect waves-light">
                                                    Split dropend
                                                </button>
                                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-info waves-effect waves-light dropdown-toggle-split dropdown-toggle">
                                                    <i className="mdi mdi-chevron-right"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Another action</a>
                                                    <a href="javascript:;" className="dropdown-item">Something else here</a>
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

export default UiDropdowns;
