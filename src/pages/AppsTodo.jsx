import React from 'react';

const AppsTodo = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="">
                                            <div className="row mb-2">
                                                <div className="col-xl-3 col-md-12">
                                                    <div className="pb-3 pb-xl-0">
                                                        <form className="email-search">
                                                            <div className="position-relative">
                                                                <input type="text" placeholder="Search..." className="form-control bg-light" />
                                                                <span className="bx bx-search font-size-18"></span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-md-12">
                                                    <div className="text-sm-end">
                                                        <button type="button" data-bs-toggle="modal" data-bs-target=".create-task" className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"><i className="mdi mdi-plus me-1"></i> Create Task</button>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="table-responsive">
                                            <table className="table table-nowrap align-middle mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{width: '40px'}}>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck01" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck01"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Create a webadmin Dashboard</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 7
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Product Design</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-secondary-subtle text-secondary  font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck02" checked="" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck02"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Create a New Landing</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 8
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Development</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-primary-subtle text-primary  font-size-11">Approved</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <div className="avatar-sm">
                                                                            <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                                                A
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck03" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck03"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Create a webadmin Logo</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 5
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Illustration</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-secondary-subtle text-secondary  font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <div className="avatar-sm">
                                                                            <span className="avatar-title rounded-circle bg-warning text-white font-size-16">
                                                                                R
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck04" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck04"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Redesign - Landing page</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 7
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Design</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-success-subtle text-success  font-size-11">Completed</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <div className="avatar-sm">
                                                                            <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                                                                                V
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck05" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck05"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Create a Blog Template</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 5
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Angular</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-secondary-subtle text-secondary  font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck06" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck06"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Minimal Multipurpose Landing</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 2
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Backend</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-secondary-subtle text-secondary  font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck07" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck07"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Fix Responsivenes for structure</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 5
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Development</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-success-subtle text-success  font-size-11">Completed</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <div className="avatar-sm">
                                                                            <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                                                S
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck08" checked="" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck08"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Create a webadmin Dashboard</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 9
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Illustration</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-primary-subtle text-primary  font-size-11">Approved</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck09" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck09"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">New Widgets For Dashboard</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 10
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Design</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-secondary-subtle text-secondary  font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck10" checked="" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck10"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Old Landing Re-Design</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 5
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Angular</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-primary-subtle text-primary  font-size-11">Approved</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <div className="avatar-sm">
                                                                            <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                                                                                V
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="upcomingtaskCheck11" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="upcomingtaskCheck11"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Create a Landing Page</a></h5>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <i className="mdi mdi-comment-outline align-middle font-size-16 me-1"></i> 6
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">Design</p>
                                                        </td>

                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge rounded-pill bg-success-subtle text-success  font-size-11">Completed</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="avatar-group">

                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <div className="avatar-sm">
                                                                            <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                                                                R
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                                <div className="avatar-group-item">
                                                                    <a href="javascript: void(0);" className="d-inline-block">
                                                                        <img src="/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Avg. Team Time</h5>
                                    </div>
                                    <div className="card-body pt-0 pb-3">
                                        <div id="overview-chart" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Team Members</h5>
                                    </div>
                                    <div className="card-body pt-2">
                                        <div className="table-responsive">
                                            <table className="table align-middle table-nowrap mb-1">
                                                <tbody>
                                                    <tr>
                                                        <td style={{width : '50px'}}><img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" /></td>
                                                        <td><h5 className="font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Daniel Canales</a></h5></td>
                                                        <td>
                                                            <div>
                                                                <a href="javascript: void(0);" className="badge bg-primary-subtle  text-primary font-size-11">Frontend</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="mdi mdi-circle-medium font-size-18 text-success align-middle me-1"></i> Online
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-sm" /></td>
                                                        <td><h5 className="font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Jennifer Walker</a></h5></td>
                                                        <td>
                                                            <div>
                                                                <a href="javascript: void(0);" className="badge bg-primary-subtle  text-primary font-size-11">UI / UX</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="mdi mdi-circle-medium font-size-18 text-warning align-middle me-1"></i> Buzy
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="avatar-sm">
                                                                <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                                                                    C
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td><h5 className="font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Carl Mackay</a></h5></td>
                                                        <td>
                                                            <div>
                                                                <a href="javascript: void(0);" className="badge bg-primary-subtle  text-primary font-size-11">Backend</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="mdi mdi-circle-medium font-size-18 text-success align-middle me-1"></i> Online
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" /></td>
                                                        <td><h5 className="font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Janice Cole</a></h5></td>
                                                        <td>
                                                            <div>
                                                                <a href="javascript: void(0);" className="badge bg-primary-subtle  text-primary font-size-11">Frontend</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="mdi mdi-circle-medium font-size-18 text-success align-middle me-1"></i> Online
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="avatar-sm">
                                                                <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                                                                    T
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td><h5 className="font-size-14 m-0"><a href="javascript: void(0);" className="text-body">Tony Brafford</a></h5></td>
                                                        <td>
                                                            <div>
                                                                <a href="javascript: void(0);" className="badge bg-primary-subtle  text-primary font-size-11">Backend</a>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="mdi mdi-circle-medium font-size-18 text-secondary align-middle me-1"></i> Offline
                                                        </td>
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



            <div tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" className="modal fade create-task">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 id="myExtraLargeModalLabel" className="modal-title">Create Task</h5>
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                        </div>
                        <div className="modal-body">
                           <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="CreateTask-Task-Name">Task Name</label>
                                        <input type="text" placeholder="Enter Task Name" id="CreateTask-Task-Name" className="form-control" />
                                    </div>
                                </div>
                               <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="CreateTask-Team-Member">Team Member</label>
                                        <input type="text" placeholder="Enter Team Member" id="CreateTask-Team-Member" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Due Date</label>
                                        <input type="text" placeholder="Select Due Date" id="CreateTask-due-date" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="CreateTask-Category">Category</label>
                                        <select className="form-select">
                                            <option selected=""> Select Category </option>
                                            <option>Waiting</option>
                                            <option>Approved</option>
                                            <option>Completed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="CreateTask-Task Description">Task Description</label>
                                        <textarea id="projectdesc" rows="3" placeholder="Enter Task Description..." className="form-control" ></textarea>
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



            <div id="success-btn" tabindex="-1" aria-labelledby="success-btnLabel" aria-hidden="true" data-bs-scroll="true" className="modal fade">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                           <div className="text-center">
                               <i className="bx bx-check-circle display-1 text-success"></i>
                               <h4 className="mt-3">Task Completed Successfully</h4>
                           </div>
                        </div>
                    </div>
                </div>
            </div>


      </>
    );
};

export default AppsTodo;
