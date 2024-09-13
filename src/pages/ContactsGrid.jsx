import React from 'react';

const ContactsGrid = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <h5 className="card-title">Contact List <span className="text-muted fw-normal ms-2">(834)</span></h5>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                                        <div>
                                            <ul className="nav nav-pills">
                                                <li className="nav-item">
                                                    <a href="contacts-list.html" data-bs-toggle="tooltip" data-bs-placement="top" title="List" className="nav-link"><i className="bx bx-list-ul"></i></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="contacts-grid.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Grid" className="nav-link active"><i className="bx bx-grid-alt"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href="javascript:;" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-primary"><i className="bx bx-plus me-1"></i> Add New</a>
                                        </div>
                                        <div className="dropdown">
                                            <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle">
                                                <i className="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a href="javascript:;" className="dropdown-item">Action</a></li>
                                                <li><a href="javascript:;" className="dropdown-item">Another action</a></li>
                                                <li><a href="javascript:;" className="dropdown-item">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="row mt-2">
                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src="/images/users/avatar-2.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">Phyllis Gatlin</a></h5>
                                                    <span className="badge bg-success-subtle text-success  mb-0">Full Stack Developer</span>
                                                </div>
                                            </div>

                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    070 2860 5375</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    PhyllisGatlin@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    52 Ilchester MYBSTER 9WX</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>


                                        </div>
                                    </div>

                                </div>

                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src="/images/users/avatar-1.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">James Nix</a></h5>
                                            <span className="badge bg-success-subtle text-success  mb-0">Full Stack Developer</span>
                                                </div>
                                            </div>

                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    046 5685 6969</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    JamesNix@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    5 Boar Lane SELLING 2LG</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src="/images/users/avatar-3.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">Darlene Smith</a></h5>
                                            <span className="badge bg-danger-subtle text-danger  mb-0">UI/UX Designer</span>
                                                </div>
                                            </div>

                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    012 6587 1236</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    DarleneSmith@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    57 Guildry Street GAMRIE</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-md">
                                                    <div className="avatar-title bg-primary-subtle  text-primary display-6 m-0 rounded-circle">
                                                        <i className="bx bxs-user-circle"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">William Swift</a></h5>
                                            <span className="badge bg-warning-subtle text-warning mb-0">Backend Developer</span>
                                                </div>
                                            </div>

                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    012 6587 1236</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    WilliamSwift@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    80 South Street MONKW 7BR</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-md">
                                                    <div className="avatar-title bg-primary-subtle  text-primary display-6 m-0 rounded-circle">
                                                        <i className="bx bxs-user-circle"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">Kevin West</a></h5>
                                            <span className="badge bg-success-subtle text-success  mb-0">Full Stack Developer</span>
                                                </div>
                                            </div>
                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    052 6524 9896</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    KevinWest@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    88 Tadcaster PINCHBECK 6UB</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src="/images/users/avatar-6.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">Tommy Hayes</a></h5>
                                                    <span className="badge bg-warning-subtle text-warning mb-0">Backend Developer</span>
                                                </div>
                                            </div>
                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    065 2563 6587</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    TommyHayes@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    5 Boar Lane SELLING 2LG</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src="/images/users/avatar-8.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">Diana Owens</a></h5>
                                            <span className="badge bg-danger-subtle text-danger  mb-0">UI/UX Designer</span>
                                                </div>
                                            </div>
                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    087 6321 3235</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    DianaOwens@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    52 Ilchester MYBSTER 9WX</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                    <i className="bx bx-dots-horizontal text-muted font-size-20"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src="/images/users/avatar-4.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                </div>
                                                <div className="flex-1 ms-3">
                                                    <h5 className="font-size-16 mb-1"><a href="javascript:;" className="text-body">Paul Sanchez</a></h5>
                                            <span className="badge bg-success-subtle text-success  mb-0">Full Stack Developer</span>
                                                </div>
                                            </div>
                                            <p className="text-muted mt-3 mb-0">Curabitur non magna lobortis tempus gravida ornare libero sed diam sed fringilla est.</p>

                                            <div className="mt-3 pt-1">
                                                <p className="mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                                                    021 0125 5689</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>
                                                    DianaOwens@spy.com</p>
                                                <p className="mb-0 mt-2"><i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>
                                                    80 South Street MONKW 7BR</p>
                                            </div>

                                            <div className="d-flex gap-2 pt-4">
                                                <button type="button" className="btn btn-subtle-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Profile</button>
                                                <button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contact</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>


                            <div className="row g-0 align-items-center pb-3">
                                <div className="col-sm-6">
                                    <div>
                                        <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-sm-end">
                                        <ul className="pagination mb-sm-0">
                                            <li className="page-item disabled">
                                                <a href="javascript:;" className="page-link"><i className="mdi mdi-chevron-left"></i></a>
                                            </li>
                                            <li className="page-item active">
                                                <a href="javascript:;" className="page-link">1</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="javascript:;" className="page-link">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="javascript:;" className="page-link">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="javascript:;" className="page-link">4</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="javascript:;" className="page-link">5</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="javascript:;" className="page-link"><i className="mdi mdi-chevron-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                    </div>

                </div>



                 <div id="success-btn" tabindex="-1" aria-labelledby="success-btnLabel" aria-hidden="true" data-bs-scroll="true" className="modal fade">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                               <div className="text-center">
                                   <i className="bx bx-check-circle display-1 text-success"></i>
                                   <h4 className="mt-3">User Added Successfully</h4>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" className="modal fade add-new">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="myExtraLargeModalLabel" className="modal-title">Add New</h5>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                               <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="AddNew-Username">Username</label>
                                            <input type="text" placeholder="Enter Username" id="AddNew-Username" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Position</label>
                                            <select className="form-select">
                                                <option selected="">Select Position</option>
                                                <option>Full Stack Developer</option>
                                                <option>Frontend Developer</option>
                                                <option>UI/UX Designer</option>
                                                <option>Backend Developer</option>
                                            </select>
                                        </div>
                                    </div>
                                   <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="AddNew-Email">Email</label>
                                            <input type="text" placeholder="Enter Email" id="AddNew-Email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="AddNew-Phone">Phone</label>
                                            <input type="text" placeholder="Enter Phone" id="AddNew-Phone" className="form-control" />
                                        </div>
                                    </div>
                               </div>
                               <div className="row mt-2">
                                <div className="col-12 text-end">
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-danger me-1"><i className="bx bx-x me-1 align-middle"></i> Cancel</button>
                                    <button type="submit" data-bs-toggle="modal" data-bs-target="#success-btn" id="btn-save-event" className="btn btn-success"><i className="bx bx-check me-1 align-middle"></i> Confirm</button>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
      </>
    );
};

export default ContactsGrid;
