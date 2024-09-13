import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Grid, _ } from 'gridjs-react';
import Button from '../../components/Button';
import OrderAction from '../../components/OrderAction';


const EcommerceOrders = () => {
  const salesChartsOptions = {
      series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
      chart: { type: "area", width: 110, height: 35, sparkline: { enabled: !0 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] } },
      stroke: { curve: "smooth", width: 2 },
      colors: ["#1f58c7"],
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (e) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  }
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <p className="text-muted text-truncate mb-0 pb-1">Active Orders</p>
                                                <h4 className="mb-0 mt-2">5263</h4>
                                            </div>
                                            <div className="col-6">
                                                <div className="overflow-hidden">
                                                  <ReactApexChart
                                                    options={salesChartsOptions}
                                                    series={salesChartsOptions.series}
                                                    height={50}
                                                    width={100}
                                                  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <p className="text-muted text-truncate mb-0 pb-1">UnFulfilled</p>
                                                <h4 className="mb-0 mt-2">3265</h4>
                                            </div>
                                            <div className="col-6">
                                                <div className="overflow-hidden">
                                                  <ReactApexChart
                                                    options={salesChartsOptions}
                                                    series={salesChartsOptions.series}
                                                    height={50}
                                                    width={100}
                                                  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <p className="text-muted text-truncate mb-0 pb-1">Pending Replace</p>
                                                <h4 className="mb-0 mt-2">2452</h4>
                                            </div>
                                            <div className="col-6">
                                                <div className="overflow-hidden">
                                                  <ReactApexChart
                                                    options={salesChartsOptions}
                                                    series={salesChartsOptions.series}
                                                    height={50}
                                                    width={100}
                                                  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <p className="text-muted text-truncate mb-0 pb-1">Fulfilled</p>
                                                <h4 className="mb-0 mt-2">6534</h4>
                                            </div>
                                            <div className="col-6">
                                                <div className="overflow-hidden">
                                                  <ReactApexChart
                                                    options={salesChartsOptions}
                                                    series={salesChartsOptions.series}
                                                    height={50}
                                                    width={100}
                                                  />
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
                                                <button type="button" data-bs-toggle="modal" data-bs-target=".add-new-order" className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"><i className="mdi mdi-plus me-1"></i> Add New Order</button>
                                            </div>
                                        </div>
                                        <Grid
                                          data={[
                                          ['#SK2540', _(<><img src="/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Neal Matthews</span></>), '07 Oct, 2021', '$400', 'Paid', 'Mastercard', _(<Button />), _(<OrderAction />)],
                                          ['#SK5623', _(<><img src="/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jamal Burnett</span></>), '05 Oct, 2021', '$452', 'Chargeback', 'Visa', _(<Button />), _(<OrderAction />)],
                                          ['#SK6263', _(<><img src="/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Juan Mitchell</span></>), '06 Oct, 2021', '$632', 'Refund', 'Paypal', _(<Button />), _(<OrderAction />)],
                                          ['#SK4521', _(<><img src="/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Barry Dick</span></>), '07 Oct, 2021', '$521', 'Refund', 'COD', _(<Button />), _(<OrderAction />)],
                                          ['#SK5263', _(<><img src="/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Ronald Taylor</span></>), '07 Oct, 2021', '$521', 'Paid', 'Mastercard', _(<Button />), _(<OrderAction />)],
                                          ['#SK4526', _(<><img src="/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jacob Hunter</span></>), '06 Oct, 2021', '$365', 'Chargeback', 'Visa', _(<Button />), _(<OrderAction />)],
                                          ['#SK2540', _(<><img src="/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Neal Matthews</span></>), '07 Oct, 2021', '$400', 'Paid', 'Mastercard', _(<Button />), _(<OrderAction />)],
                                          ['#SK5623', _(<><img src="/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jamal Burnett</span></>), '05 Oct, 2021', '$452', 'Chargeback', 'Visa', _(<Button />), _(<OrderAction />)],
                                          ['#SK6263', _(<><img src="/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Juan Mitchell</span></>), '06 Oct, 2021', '$632', 'Refund', 'Paypal', _(<Button />), _(<OrderAction />)],
                                          ['#SK4521', _(<><img src="/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Barry Dick</span></>), '07 Oct, 2021', '$521', 'Refund', 'COD', _(<Button />), _(<OrderAction />)],
                                          ['#SK5263', _(<><img src="/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Ronald Taylor</span></>), '07 Oct, 2021', '$521', 'Paid', 'Mastercard', _(<Button />), _(<OrderAction />)],
                                          ['#SK4526', _(<><img src="/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-circle me-2" /><span>Jacob Hunter</span></>), '06 Oct, 2021', '$365', 'Chargeback', 'Visa', _(<Button />), _(<OrderAction />)]
                                          ]}
                                          sort = {true}
                                          columns={['Order ID', 'Billing Name', 'Date', 'Total', 'Payment Status', 'Payment Method', 'View Details', 'Action']}
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



                <div tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" className="modal fade add-new-order">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="myExtraLargeModalLabel" className="modal-title">Add New Order</h5>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                               <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="AddOrder-Product">Choose Product</label>
                                        <select className="form-select">
                                            <option selected=""> Select Product </option>
                                            <option>Adidas Running Shoes</option>
                                            <option>Puma P103 Shoes</option>
                                            <option>Adidas AB23 Shoes</option>
                                        </select>
                                    </div>
                                </div>
                                   <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="AddOrder-Billing-Name">Billing Name</label>
                                            <input type="text" placeholder="Enter Billing Name" id="AddOrder-Billing-Name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Date</label>
                                            <input type="text" placeholder="Select Date" id="order-date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="AddOrder-Total">Total</label>
                                            <input type="text" placeholder="$565" id="AddOrder-Total" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="AddOrder-Payment-Status">Payment Status</label>
                                            <select className="form-select">
                                                <option selected=""> Select Card Type </option>
                                                <option>Paid</option>
                                                <option>Chargeback</option>
                                                <option>Refund</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="AddOrder-Payment-Method">Payment Method</label>
                                            <select className="form-select">
                                                <option selected=""> Select Payment Method </option>
                                                <option> Mastercard</option>
                                                <option>Visa</option>
                                                <option>Paypal</option>
                                                <option>COD</option>
                                            </select>
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



                <div id="success-btn" tabindex="-1" aria-labelledby="success-btnLabel" aria-hidden="true" data-bs-scroll="true" className="modal fade">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                               <div className="text-center">
                                   <i className="bx bx-check-circle display-1 text-success"></i>
                                   <h4 className="mt-3">Order Completed Successfully</h4>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div tabindex="-1" role="dialog" aria-labelledby="orderdetailsModalLabel&quot;" aria-hidden="true" className="modal fade orderdetailsModal">
                    <div role="document" className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="orderdetailsModalLabel" className="modal-title">Order Details</h5>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                                <p className="mb-4">Billing Name: <span className="text-primary">Martin Gurley</span></p>

                                <div className="table-responsive">
                                    <table className="table align-middle table-nowrap">
                                        <thead>
                                            <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div>
                                                        <img src="/images/product/img-1.png" alt="" className="rounded avatar-md" />
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        <h5 className="text-truncate font-size-14">Home &amp; Office Chair Crime</h5>
                                                        <p className="text-muted mb-0">$ 225 x 1</p>
                                                    </div>
                                                </td>
                                                <td>$ 255</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div>
                                                        <img src="/images/product/img-2.png" alt="" className="rounded avatar-md" />
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        <h5 className="text-truncate font-size-14">Tuition Classes Chair Crime</h5>
                                                        <p className="text-muted mb-0">$ 145 x 1</p>
                                                    </div>
                                                </td>
                                                <td>$ 145</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <h6 className="m-0 text-right">Sub Total:</h6>
                                                </td>
                                                <td>
                                                    $ 400
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <h6 className="m-0 text-right">Shipping:</h6>
                                                </td>
                                                <td>
                                                    Free
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <h6 className="m-0 text-right">Total:</h6>
                                                </td>
                                                <td>
                                                    $ 400
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


      </>
    );
};

export default EcommerceOrders;
