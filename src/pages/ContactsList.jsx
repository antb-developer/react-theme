import React from 'react';

const ContactsList = () => {
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
                                                <a href="contacts-list.html" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="List" aria-label="List" className="nav-link active"><i className="bx bx-list-ul"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="contacts-grid.html" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Grid" aria-label="Grid" className="nav-link"><i className="bx bx-grid-alt"></i></a>
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



                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-nowrap align-middle">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{width: "50px" }} className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck"></label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Position</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Projects</th>
                                                        <th scope="col" style={{width: "200px" }}>Action</th>
                                                      </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck1" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck1"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <img src="/images/users/avatar-2.jpg" alt="" className="avatar rounded-circle img-thumbnail me-2" />
                                                            <a href="javascript:;" className="text-body">Simon Ryles</a>
                                                        </td>
                                                        <td><span className="badge bg-success-subtle text-success  mb-0">Full Stack Developer</span></td>
                                                        <td>SimonRyles@minible.com</td>
                                                        <td>125</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck2" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck2"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <img src="/images/users/avatar-3.jpg" alt="" className="avatar rounded-circle img-thumbnail me-2" />
                                                            <a href="javascript:;" className="text-body">Marion Walker</a>
                                                        </td>
                                                        <td><span className="badge bg-info-subtle text-info  mb-0">Frontend Developer</span></td>
                                                        <td>MarionWalker@minible.com</td>
                                                        <td>132</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck3" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck3"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="avatar d-inline-block me-2">
                                                                <div className="avatar-title bg-primary-subtle  rounded-circle text-primary">
                                                                    <i className="mdi mdi-account-circle m-0 font-size-24"></i>
                                                                </div>
                                                            </div>
                                                            <a href="javascript:;" className="text-body">Frederick White</a>
                                                        </td>
                                                        <td><span className="badge bg-danger-subtle text-danger  mb-0">UI/UX Designer</span></td>
                                                        <td>FrederickWhite@minible.com</td>
                                                        <td>112</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                      </tr>

                                                      <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck4" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck4"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <img src="/images/users/avatar-4.jpg" alt="" className="avatar rounded-circle img-thumbnail me-2" />
                                                            <a href="javascript:;" className="text-body">Shanon Marvin</a>
                                                        </td>
                                                        <td><span className="badge bg-primary-subtle text-primary  mb-0">Backend Developer</span></td>
                                                        <td>ShanonMarvin@minible.com</td>
                                                        <td>121</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                      </tr>

                                                      <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck5" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck5"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="avatar d-inline-block me-2">
                                                                <div className="avatar-title bg-primary-subtle  rounded-circle text-primary">
                                                                    <i className="mdi mdi-account-circle m-0 font-size-24"></i>
                                                                </div>
                                                            </div>
                                                            <a href="javascript:;" className="text-body">Mark Jones</a>
                                                        </td>
                                                        <td><span className="badge bg-info-subtle text-info  mb-0">Frontend Developer</span></td>
                                                        <td>MarkJones@minible.com</td>
                                                        <td>145</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                      </tr>

                                                      <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck6" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck6"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <img src="/images/users/avatar-5.jpg" alt="" className="avatar rounded-circle img-thumbnail me-2" />
                                                            <a href="javascript:;" className="text-body">Janice Morgan</a>
                                                        </td>
                                                        <td><span className="badge bg-primary-subtle text-primary  mb-0">Backend Developer</span></td>
                                                        <td>JaniceMorgan@minible.com</td>
                                                        <td>136</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                      </tr>

                                                      <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck7" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck7"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <img src="/images/users/avatar-7.jpg" alt="" className="avatar rounded-circle img-thumbnail me-2" />
                                                            <a href="javascript:;" className="text-body">Patrick Petty</a>
                                                        </td>
                                                        <td><span className="badge bg-danger-subtle text-danger  mb-0">UI/UX Designer</span></td>
                                                        <td>PatrickPetty@minible.com</td>
                                                        <td>125</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                      </tr>

                                                      <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck8" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck8"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <img src="/images/users/avatar-8.jpg" alt="" className="avatar rounded-circle img-thumbnail me-2" />
                                                            <a href="javascript:;" className="text-body">Marilyn Horton</a>
                                                        </td>
                                                        <td><span className="badge bg-primary-subtle text-primary  mb-0">Backend Developer</span></td>
                                                        <td>MarilynHorton@minible.com</td>
                                                        <td>154</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                      </tr>

                                                      <tr>
                                                        <th scope="row" className="ps-4">
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" id="contacusercheck9" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="contacusercheck9"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <img src="/images/users/avatar-2.jpg" alt="" className="avatar rounded-circle img-thumbnail me-2" />
                                                            <a href="javascript:;" className="text-body">Neal Womack</a>
                                                        </td>
                                                        <td><span className="badge bg-success-subtle text-success  mb-0">Full Stack Developer</span></td>
                                                        <td>NealWomack@minible.com</td>
                                                        <td>231</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>

                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a href="javascript:;" className="dropdown-item">Action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                        <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                      </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row g-0 align-items-center pb-4">
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

export default ContactsList;
