import React from 'react';
import { Grid, _ } from 'gridjs-react';
import Button from '../components/Button';
import OrderAction from '../components/OrderAction';

const TablesAdvanced = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">GridJs Table</h4>
                                    </div>
                                    <div className="card-body">
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
                                        columns={['Order ID', 'Billing Name', 'Date', 'Total', 'Payment Status', 'Payment Method', 'View Details', 'Action']}
                                      />
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Pagination</h4>
                                    </div>
                                    <div className="card-body">
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
                                        columns={['Order ID', 'Billing Name', 'Date', 'Total', 'Payment Status', 'Payment Method', 'View Details', 'Action']}
                                        pagination={{
                                          limit: 7,
                                        }}
                                      />
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Search</h4>
                                    </div>
                                    <div className="card-body">
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


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Sorting</h4>
                                    </div>
                                    <div className="card-body">
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


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Loading State</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="table-loading-state"></div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header justify-content-between d-flex align-items-center">
                                        <h4 className="card-title mb-0">Fixed Header</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="table-fixed-header"></div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Hidden Columns</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="table-hidden-column"></div>
                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>

                </div>

      </>
    );
};

export default TablesAdvanced;
