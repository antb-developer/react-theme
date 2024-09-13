import React from 'react';

const FormWizard = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Forms Steps</h4>
                                    </div>
                                    <div className="card-body">
                                        <form action="#">
                                            <ul className="wizard-nav mb-5">
                                                <li className="wizard-list-item">
                                                    <div className="list-item">
                                                        <div data-bs-toggle="tooltip" data-bs-placement="top" title="Seller Details" className="step-icon">
                                                            <i className="bx bx-user-circle"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="wizard-list-item">
                                                    <div className="list-item">
                                                        <div data-bs-toggle="tooltip" data-bs-placement="top" title="Company Document" className="step-icon">
                                                            <i className="bx bx-file"></i>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="wizard-list-item">
                                                    <div className="list-item">
                                                        <div data-bs-toggle="tooltip" data-bs-placement="top" title="Bank Details" className="step-icon">
                                                            <i className="bx bx-edit"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>


                                            <div className="wizard-tab">
                                                <div className="text-center mb-4">
                                                    <h5>Seller Details</h5>
                                                    <p className="card-title-desc">Fill all information below</p>
                                                </div>
                                                <div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="basicpill-firstname-input">First
                                                                    Name</label>
                                                                <input type="text" placeholder="Enter First Name" id="basicpill-firstname-input" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="basicpill-lastname-input">Last
                                                                    Name</label>
                                                                <input type="text" placeholder="Enter Last Name" id="basicpill-lastname-input" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="basicpill-phoneno-input">Phone</label>
                                                                <input type="text" placeholder="Enter Phone" id="basicpill-phoneno-input" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="basicpill-email-input">Email</label>
                                                                <input type="email" placeholder="Enter Email" id="basicpill-email-input" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="basicpill-address-input">Address</label>
                                                                <textarea id="basicpill-address-input" placeholder="Enter Address" rows="2" className="form-control" ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="wizard-tab">
                                                <div>
                                                    <div className="text-center mb-4">
                                                        <h5>Company Document</h5>
                                                        <p className="card-title-desc">Fill all information below</p>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-pancard-input">PAN
                                                                        Card</label>
                                                                    <input type="text" placeholder="Enter Pan Card" id="basicpill-pancard-input" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-vatno-input">VAT/TIN No.</label>
                                                                    <input type="text" placeholder="Enter VAT/TIN No." id="basicpill-vatno-input" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-cstno-input">CST
                                                                        No.</label>
                                                                    <input type="text" placeholder="Enter CST No." id="basicpill-cstno-input" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-servicetax-input">Service Tax No.</label>
                                                                    <input type="text" placeholder="Enter Service Tax No." id="basicpill-servicetax-input" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-companyuin-input">Company UIN</label>
                                                                    <input type="text" placeholder="Enter Company UIN" id="basicpill-companyuin-input" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-declaration-input">Declaration</label>
                                                                    <input type="text" placeholder="Enter Declaration" id="basicpill-declaration-input" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="wizard-tab">
                                                <div>
                                                    <div className="text-center mb-4">
                                                        <h5>Bank Details</h5>
                                                        <p className="card-title-desc">Fill all information below</p>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-namecard-input">Name On Card</label>
                                                                    <input type="text" placeholder="Enter Name On Card" id="basicpill-namecard-input" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Credit Card Type</label>
                                                                    <select className="form-select">
                                                                        <option selected="">Select Card Type</option>
                                                                        <option value="AE">American Express</option>
                                                                        <option value="VI">Visa</option>
                                                                        <option value="MC">MasterCard</option>
                                                                        <option value="DI">Discover</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-cardno-input">Credit Card Number</label>
                                                                    <input type="text" placeholder="Enter Credit Card Number" id="basicpill-cardno-input" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-card-verification-input">Card Verification Number</label>
                                                                    <input type="text" placeholder="Enter Card Verification Number" id="basicpill-card-verification-input" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="basicpill-expiration-input">Expiration Date</label>
                                                                    <input type="text" id="datepicker-basic" placeholder="Enter Expiration Date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="d-flex align-items-start gap-3 mt-4">
                                                <button type="button" id="prevBtn" onclick="nextPrev(-1)" className="btn btn-primary w-sm">Previous</button>
                                                <button type="button" id="nextBtn" onclick="nextPrev(1)" className="btn btn-primary w-sm ms-auto">Next</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>



      </>
    );
};

export default FormWizard;
