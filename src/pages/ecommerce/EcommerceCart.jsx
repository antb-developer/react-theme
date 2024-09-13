import React from 'react';

const EcommerceCart = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="table-responsive">
                                            <table className="table align-middle mb-0 table-nowrap mb-0">

                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Product Name</th>
                                                        <th style={{width: "120px;"}}>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th><img src="/images/product/img-1.png" alt="" className="avatar-lg rounded p-1" /></th>
                                                        <td>
                                                            <div>
                                                                <h5 className="text-truncate font-size-16"><a href="ecommerce-product-detail.html" className="text-body">Home &amp; Office Chair Crime </a></h5>

                                                                <p className="mb-0 mt-1">Color : <span className="fw-medium">Gray</span></p>
                                                            </div>
                                                        </td>
                                                        <td>$260</td>
                                                        <td>
                                                            <div className="d-inline-flex">
                                                                <select className="form-select form-select-sm w-xl">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3" selected="">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>$780</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like" aria-label="Like" className="px-2 text-primary"><i className="bx bx-heart font-size-18"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><img src="/images/product/img-2.png" alt="" className="avatar-lg rounded p-1"/></th>
                                                        <td>
                                                            <div>
                                                                <h5 className="text-truncate font-size-16"><a href="ecommerce-product-detail.html" className="text-body">Sofa Home Chair Black</a></h5>

                                                                <p className="mb-0 mt-1">Color : <span className="fw-medium">Black</span></p>
                                                            </div>
                                                        </td>
                                                        <td>$320</td>
                                                        <td>
                                                            <div className="d-inline-flex">
                                                                <select className="form-select form-select-sm w-xl">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5" selected="">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>$1600</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like" aria-label="Like" className="px-2 text-primary"><i className="bx bx-heart font-size-18"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><img src="/images/product/img-5.png" alt="" className="avatar-lg rounded p-1"/></th>
                                                        <td>
                                                            <div>
                                                                <h5 className="text-truncate font-size-16"><a href="ecommerce-product-detail.html" className="text-body">Tuition Classes Chair Crime</a></h5>

                                                                <p className="mb-0 mt-1">Color : <span className="fw-medium">Blue</span></p>
                                                            </div>
                                                        </td>
                                                        <td>$190</td>
                                                        <td>
                                                            <div className="d-inline-flex">
                                                                <select className="form-select form-select-sm w-xl">
                                                                    <option value="1">1</option>
                                                                    <option value="2" selected="">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>$380</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like" aria-label="Like" className="px-2 text-primary"><i className="bx bx-heart font-size-18"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><img src="/images/product/img-7.png" alt="" className="avatar-lg rounded p-1"/></th>
                                                        <td>
                                                            <div>
                                                                <h5 className="text-truncate font-size-16"><a href="ecommerce-product-detail.html" className="text-body">Dining Table And Chair</a></h5>

                                                                <p className="mb-0 mt-1">Color : <span className="fw-medium">Green</span></p>
                                                            </div>
                                                        </td>
                                                        <td>$210</td>
                                                        <td>
                                                            <div className="d-inline-flex">
                                                                <select className="form-select form-select-sm w-xl">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3" selected="">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>$630</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like" aria-label="Like" className="px-2 text-primary"><i className="bx bx-heart font-size-18"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th><img src="/images/product/img-8.png" alt="" className="avatar-lg rounded p-1"/></th>
                                                        <td>
                                                            <div>
                                                                <h5 className="text-truncate font-size-16"><a href="ecommerce-product-detail.html" className="text-body">Home &amp; Office Chair Crime</a></h5>

                                                                <p className="mb-0 mt-1">Color : <span className="fw-medium">Crime</span></p>
                                                            </div>
                                                        </td>
                                                        <td>$330</td>
                                                        <td>
                                                            <div className="d-inline-flex">
                                                                <select className="form-select form-select-sm w-xl">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4" selected="">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>$1320</td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like" aria-label="Like" className="px-2 text-primary"><i className="bx bx-heart font-size-18"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>


                                <div className="row my-4">
                                    <div className="col-sm-6">
                                        <a href="ecommerce-products.html" className="btn btn-link text-muted">
                                            <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="text-sm-end mt-2 mt-sm-0">
                                            <a href="ecommerce-checkout.html" className="btn btn-success">
                                                <i className="mdi mdi-cart-outline me-1"></i> Checkout </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="mt-5 mt-lg-0">
                                    <div className="card">
                                        <div className="card-header bg-transparent border-bottom py-3 px-4">
                                            <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#MN0124</span></h5>
                                        </div>
                                        <div className="card-body p-4 pt-2">

                                            <div className="table-responsive">
                                                <table className="table mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>Sub Total :</td>
                                                            <td className="text-end">$ 780</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Discount : </td>
                                                            <td className="text-end">- $ 78</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping Charge :</td>
                                                            <td className="text-end">$ 25</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Estimated Tax : </td>
                                                            <td className="text-end">$ 18.20</td>
                                                        </tr>
                                                        <tr className="bg-light">
                                                            <th>Total :</th>
                                                            <td className="text-end">
                                                                <span className="fw-bold">
                                                                    $ 745.2
                                                                </span>
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

                </div>

      </>
    );
};

export default EcommerceCart;
