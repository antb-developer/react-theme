import React from 'react';
import { Grid, _ } from 'gridjs-react';
import OrderAction from '../../components/OrderAction';

const EcommerceShops = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                      <Grid
                                        data={[
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Neal Matthews</span></>), '07 Oct, 2021', '$400', 'Paid', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-2.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Jamal Burnett</span></>), '05 Oct, 2021', '$452', 'Chargeback', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-3.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Juan Mitchell</span></>), '06 Oct, 2021', '$632', 'Refund', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-4.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Barry Dick</span></>), '07 Oct, 2021', '$521', 'Refund', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-5.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Ronald Taylor</span></>), '07 Oct, 2021', '$521', 'Paid', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-6.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Jacob Hunter</span></>), '06 Oct, 2021', '$365', 'Chargeback', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Neal Matthews</span></>), '07 Oct, 2021', '$400', 'Paid', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-2.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Jamal Burnett</span></>), '05 Oct, 2021', '$452', 'Chargeback', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-3.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Juan Mitchell</span></>), '06 Oct, 2021', '$632', 'Refund', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-4.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Barry Dick</span></>), '07 Oct, 2021', '$521', 'Refund', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-5.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Ronald Taylor</span></>), '07 Oct, 2021', '$521', 'Paid', '$34,523	', _(<OrderAction />)],
                                        [_(<div className="avatar"><span className="avatar-title bg-primary-subtle  text-primary font-size-16 rounded-circle"> M </span></div>), _(<><img src="/images/users/avatar-6.jpg" alt="" className="avatar-sm rounded-circle me-2" /><span>Jacob Hunter</span></>), '06 Oct, 2021', '$365', 'Chargeback', '$34,523	', _(<OrderAction />)]
                                        ]}
                                        sort = {true}
                                        columns={['Brand', 'Name', 'Email', 'Date', 'Product', 'Current Balance', 'Action']}
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


      </>
    );
};

export default EcommerceShops;
