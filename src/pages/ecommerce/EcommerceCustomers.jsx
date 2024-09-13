import React from 'react';
import { Grid, _ } from 'gridjs-react';
import CustomerAction from '../../components/CustomerAction';

const EcommerceCustomers = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="mb-0">9,454 <span className="fw-medium text-success font-size-18"><i className="bx bx-up-arrow-alt font-size-16 align-middle"></i> 16%</span></h4>
                                                <p className="text-muted text-truncate mb-0 mt-2">Total Audience</p>
                                            </div>
                                            <div className="avatar-md">
                                                <div className="avatar-title rounded bg-primary-subtle ">
                                                    <i className="bx bx-check-shield h2 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="mb-0">563 <span className="fw-medium text-success font-size-18"><i className="bx bx-up-arrow-alt font-size-16 align-middle"></i> 24%</span></h4>
                                                <p className="text-muted text-truncate mb-0 mt-2">New Customers</p>
                                            </div>
                                            <div className="avatar-md">
                                                <div className="avatar-title rounded bg-primary-subtle ">
                                                    <i className="bx bx-user h2 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="mb-0">454 <span className="fw-medium text-danger font-size-18"><i className="bx bx-down-arrow-alt font-size-16 align-middle"></i> 07%</span></h4>
                                                <p className="text-muted text-truncate mb-0 mt-2">New Subscribers</p>
                                            </div>
                                            <div className="avatar-md">
                                                <div className="avatar-title rounded bg-primary-subtle ">
                                                    <i className="bx bx-like h2 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="mb-0">1,526k <span className="fw-medium text-success font-size-18"><i className="bx bx-up-arrow-alt font-size-16 align-middle"></i> 16%</span></h4>
                                                <p className="text-muted text-truncate mb-0 mt-2">Total Customers</p>
                                            </div>
                                            <div className="avatar-md">
                                                <div className="avatar-title rounded bg-primary-subtle ">
                                                    <i className="bx bx-user-plus h2 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="position-relative">
                                            <div className="modal-button mt-2">
                                                <button type="button" data-bs-toggle="modal" data-bs-target=".new-customer" className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"><i className="mdi mdi-plus me-1"></i> New Customer</button>
                                            </div>
                                        </div>
                                        <Grid
                                          data={[
                                          [ _(<><img src="/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Neal Matthews</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$5,412', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jamal Burnett</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$7,523', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Juan Mitchell</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$7,523', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Barry Dick</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Ronald Taylor</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jacob Hunter</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Neal Matthews</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jamal Burnett</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Juan Mitchell</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Barry Dick</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Ronald Taylor</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)],
                                          [ _(<><img src="/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jacob Hunter</span></>), _(<><span><p class="mb-1">325-250-1106</p><p class="mb-0">StephenRash@teleworm.us</p></span></>), '2470 Grove Street Bethpage, NY 1171' ,_(<span class="badge bg-success font-size-12"><i class="mdi mdi-star me-1"></i>4.2</span>), '$4,523	', '07 Oct, 2021', _(<CustomerAction />)]
                                          ]}
                                          sort = {true}
                                          columns={['Username', 'Phone / Email', 'Address', 'Rating', 'Wallet Ballance', 'Joining Date', 'Action']}
                                          search={true}
                                          pagination={{
                                            limit: 7,
                                          }}
                                        />
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
                                   <h4 className="mt-3">New Customer Created Successfully</h4>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" className="modal fade new-customer">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="myExtraLargeModalLabel" className="modal-title">New Customer</h5>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                               <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="NewCustomers-Username">Username</label>
                                            <input type="text" placeholder="Enter Username" id="NewCustomers-Username" className="form-control" />
                                        </div>
                                    </div>
                                   <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="NewCustomers-Email">Email</label>
                                            <input type="text" placeholder="Enter Email" id="NewCustomers-Email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="NewCustomers-Phone">Phone</label>
                                            <input type="text" placeholder="Enter Phone" id="NewCustomers-Phone" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="NewCustomers-Wallet">Wallet</label>
                                            <input type="text" placeholder="0" id="NewCustomers-Wallet" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Date</label>
                                            <input type="text" placeholder="Select Date" id="customers-date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="NewCustomers-Address">Address</label>
                                            <input type="text" placeholder="Enter Address" id="NewCustomers-Address" className="form-control" />
                                        </div>
                                    </div>
                               </div>
                               <div className="row mt-2">
                                <div className="col-12 text-end">
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-danger me-1"><i className="bx bx-x me-1"></i> Cancel</button>
                                    <button type="submit" data-bs-toggle="modal" data-bs-target="#success-btn" id="btn-save-event" className="btn btn-success"><i className="bx bx-check me-1"></i> Confirm</button>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
      </>
    );
};

export default EcommerceCustomers;
