import React, { useState } from 'react';
import { Grid, _ } from 'gridjs-react';
import { Calendar } from 'primereact/calendar';
import Button from '../components/Button';
import OrderAction from '../components/OrderAction';

const InvoicesList = () => {
  const [dates, setDates] = useState();
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="position-relative">
                                            <div className="modal-button mt-2">
                                                <div className="row align-items-start">
                                                    <div className="col-sm-auto">
                                                        <div className="d-flex gap-1">
                                                            <div className="input-group">
                                                                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection/>
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-link text-body shadow-none dropdown-toggle">
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
                                                    <div className="col-sm">
                                                        <div className="mt-3 mt-md-0 mb-3">
                                                            <button type="button" data-bs-toggle="modal" data-bs-target="#addInvoiceModal" className="btn btn-success"><i className="mdi mdi-plus me-1"></i> Add Invoice</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                        <Grid
                                          data={[
                                          ['#SK2540', '07 Oct, 2021', _(<span>Neal Matthews</span>), '$400', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK5623', '07 Oct, 2021', _(<span>Jamal Burnett</span>), '$452', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK6263', '07 Oct, 2021', _(<span>Juan Mitchell</span>), '$632', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK4521', '07 Oct, 2021', _(<span>Barry Dick</span>), '$521', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK5263', '07 Oct, 2021', _(<span>Ronald Taylor</span>), '$521', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK4526', '07 Oct, 2021', _(<span>Jacob Hunter</span>), '$365', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK2540', '07 Oct, 2021', _(<span>Neal Matthews</span>), '$400', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK5623', '07 Oct, 2021', _(<span>Jamal Burnett</span>), '$452', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK6263', '07 Oct, 2021', _(<span>Juan Mitchell</span>), '$632', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK4521', '07 Oct, 2021', _(<span>Barry Dick</span>), '$521', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK5263', '07 Oct, 2021', _(<span>Ronald Taylor</span>), '$521', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)],
                                          ['#SK4526', '07 Oct, 2021', _(<span>Jacob Hunter</span>),  '$365', _(<span class="badge badge-pill bg-success-subtle text-success  font-size-12">Paid</span>), _(<OrderAction />)]
                                          ]}
                                          sort = {true}
                                          columns={['Order ID', 'Date', 'Billing Name', 'Amount', 'Status', 'Action']}
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



                   <div id="addInvoiceModal" tabindex="-1" aria-labelledby="addInvoiceModalLabel" aria-hidden="true" className="modal fade">
                    <div className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="addInvoiceModalLabel" className="modal-title">Add Invoice</h5>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                            </div>
                            <div className="modal-body p-4">
                                <form>
                                    <div>
                                        <ul className="wizard-nav mb-5">
                                            <li className="wizard-list-item">
                                                <div className="list-item">
                                                    <div data-bs-toggle="tooltip" data-bs-placement="top" title="Customer Info" className="step-icon">
                                                        <i className="bx bx-user-circle"></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="wizard-list-item">
                                                <div className="list-item">
                                                    <div data-bs-toggle="tooltip" data-bs-placement="top" title="Invoice Details" className="step-icon">
                                                        <i className="bx bx-file"></i>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="wizard-list-item">
                                                <div className="list-item">
                                                    <div data-bs-toggle="tooltip" data-bs-placement="top" title="Order Summery" className="step-icon">
                                                        <i className="bx bx-edit"></i>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>


                                        <div className="wizard-tab">
                                            <div className="text-center mb-4">
                                                <h5>Customer Information</h5>
                                                <p className="card-title-desc">Fill all information below</p>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="customerinfo-name-input">Customer Name :</label>
                                                            <input type="text" placeholder="Enter Name" id="customerinfo-name-input" className="form-control" />
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="customerinfo-email-input">Email :</label>
                                                            <input type="email" placeholder="Enter Email" id="customerinfo-email-input" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">

                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="customerinfo-phone-input">Phone :</label>
                                                            <input type="text" placeholder="Enter Phone" id="customerinfo-phone-input" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="customerinfo-address-input">Address :</label>
                                                    <textarea placeholder="Enter Address" id="customerinfo-address-input" rows="2" className="form-control" ></textarea>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="wizard-tab">

                                            <div className="text-center mb-4">
                                                <h5>Invoice Details</h5>
                                                <p className="card-title-desc">Fill Invoice Details.</p>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-lg-6">

                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="invoicenumberinput">Invoice #</label>
                                                            <input type="text" placeholder="Enter Invoice" id="invoicenumberinput" className="form-control" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Invoice Date</label>
                                                            <input type="text" placeholder="Enter Date" id="datepicker-invoice" className="form-control" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="invoicedescriptioninput">Description (Optional)</label>
                                                            <input type="text" placeholder="Enter Description" id="invoicedescriptioninput" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Payment method :</label>
                                                            <select className="form-select">
                                                                <option selected="">Select Payment method</option>
                                                                <option value="CR">Credit / Debit Card</option>
                                                                <option value="PY">Paypal</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="wizard-tab">
                                            <div className="text-center mb-4">
                                                <h5>Order Summery</h5>
                                                <p className="card-title-desc">Fill Order Summery Details.</p>
                                            </div>
                                            <div>
                                                <div className="table-responsive">
                                                    <table className="table table-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Item name</th>
                                                                <th scope="col">Description</th>
                                                                <th scope="col" width="120px">Price</th>
                                                                <th scope="col" width="120px">Quantity</th>
                                                                <th scope="col" width="120px">Total</th>
                                                                <th scope="col" className="text-center">Action</th>
                                                            </tr>

                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>
                                                                    <div>
                                                                        <input placeholder="Enter Name" type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <textarea placeholder="Enter Description" rows="2" className="form-control" ></textarea>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <input placeholder="Enter Price" type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <input placeholder="Enter Quantity" type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <input type="text" value="0.00" readonly="" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="text-center">
                                                                        <a href="javascript:;" data-toggle="tooltip" data-placement="top" title="Delete" className="text-danger p-2 d-inline-block"><i className="fas fa-trash-alt"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>
                                                                    <div>
                                                                        <input placeholder="Enter Name" type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <textarea placeholder="Enter Description" rows="2" className="form-control" ></textarea>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <input placeholder="Enter Price" type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <input placeholder="Enter Quantity" type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>
                                                                        <input type="text" value="0.00" readonly="" className="form-control" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="text-center">
                                                                        <a href="javascript:;" data-toggle="tooltip" data-placement="top" title="Delete" className="text-danger p-2 d-inline-block"><i className="fas fa-trash-alt"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row justify-content-end">
                                                    <div className="col-xl-3 col-md-4">
                                                        <div>
                                                            <div>
                                                                <h5 className="font-size-14 py-2">Sub Total : <span className="float-end fw-normal text-body">0.00</span></h5>
                                                            </div>
                                                            <div>
                                                                <h5 className="font-size-14 py-2">Discount  : <span className="float-end fw-normal text-body"> - 0.00</span></h5>
                                                            </div>
                                                            <div>
                                                                <h5 className="font-size-14 py-2">Shipping Charge  : <span className="float-end fw-normal text-body"> 0.00</span></h5>
                                                            </div>
                                                            <div>
                                                                <h5 className="font-size-14 py-2">Tax  : <span className="float-end fw-normal text-body"> 0.00</span></h5>
                                                            </div>
                                                            <div>
                                                                <h5 className="font-size-14 py-2">Total  : <span className="float-end"> 0.00</span></h5>
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
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


      </>
    );
};

export default InvoicesList;
