import React from 'react';

const LayoutsHorizontal = () => {
  document.body.setAttribute('data-layout', 'horizontal');
    return (
      <>
      <div classname="page-content">
        <div classname="container-fluid">
          <div classname="row">
            <div classname="col-xl-6">
              <div classname="card">
                <div classname="card-body pb-0">
                  <div classname="d-flex align-items-start">
                    <div classname="flex-grow-1">
                      <h5 classname="card-title mb-4">Overview</h5>
                    </div>
                    <div classname="flex-shrink-0">
                      <div classname="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle text-reset">
                          <span classname="fw-semibold">Sort By:</span>
                          <span classname="text-muted">Yearly<i classname="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div classname="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" classname="dropdown-item">Yearly</a>
                          <a href="javascript:;" classname="dropdown-item">Monthly</a>
                          <a href="javascript:;" classname="dropdown-item">Weekly</a>
                          <a href="javascript:;" classname="dropdown-item">Today</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div id="overview" data-colors="[&quot;#e6ecf9&quot;, &quot;#e6ecf9&quot;, &quot;#e6ecf9&quot;,&quot;#e6ecf9&quot;, &quot;#e6ecf9&quot;, &quot;#e6ecf9&quot;,&quot;#e6ecf9&quot;,&quot;#e6ecf9&quot;,&quot;#e6ecf9&quot;,&quot;#1f58c7&quot;,&quot;#1f58c7&quot;, &quot;#1f58c7&quot;]" classname="apex-chart" />
                  </div>
                </div>
              </div>
            </div>
            <div classname="col-xl-6">
              <div classname="row">
                <div classname="col-xl-6">
                  <div classname="card">
                    <div classname="card-body">
                      <div>
                        <div classname="d-flex align-items-center">
                          <div classname="avatar">
                            <div classname="avatar-title rounded bg-primary-subtle ">
                              <i classname="bx bx-check-shield font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div classname="flex-grow-1 ms-3">
                            <h6 classname="mb-0 font-size-15">Total Sales</h6>
                          </div>
                          <div classname="flex-shrink-0">
                            <div classname="dropdown">
                              <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle">
                                <i classname="bx bx-dots-horizontal text-muted font-size-22" />
                              </a>
                              <div classname="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" classname="dropdown-item">Yearly</a>
                                <a href="javascript:;" classname="dropdown-item">Monthly</a>
                                <a href="javascript:;" classname="dropdown-item">Weekly</a>
                                <a href="javascript:;" classname="dropdown-item">Today</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 classname="mt-4 pt-1 mb-0 font-size-22">$34,123.20 <span classname="text-success fw-medium font-size-13 align-middle"> <i classname="mdi mdi-arrow-up" /> 8.34% </span> </h4>
                          <div classname="d-flex mt-1 align-items-end overflow-hidden">
                            <div classname="flex-grow-1">
                              <p classname="text-muted mb-0 text-truncate">Total Sales World Wide</p>
                            </div>
                            <div classname="flex-shrink-0">
                              <div id="mini-1" data-colors="[&quot;#1f58c7&quot;]" classname="apex-charts" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-xl-6">
                  <div classname="card">
                    <div classname="card-body">
                      <div>
                        <div classname="d-flex align-items-center">
                          <div classname="avatar">
                            <div classname="avatar-title rounded bg-primary-subtle ">
                              <i classname="bx bx-cart-alt font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div classname="flex-grow-1 ms-3">
                            <h6 classname="mb-0 font-size-15">Total Orders</h6>
                          </div>
                          <div classname="flex-shrink-0">
                            <div classname="dropdown">
                              <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle">
                                <i classname="bx bx-dots-horizontal text-muted font-size-22" />
                              </a>
                              <div classname="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" classname="dropdown-item">Yearly</a>
                                <a href="javascript:;" classname="dropdown-item">Monthly</a>
                                <a href="javascript:;" classname="dropdown-item">Weekly</a>
                                <a href="javascript:;" classname="dropdown-item">Today</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 classname="mt-4 pt-1 mb-0 font-size-22">63,234.20 <span classname="text-danger fw-medium font-size-13 align-middle"> <i classname="mdi mdi-arrow-down" /> 3.68% </span> </h4>
                          <div classname="d-flex mt-1 align-items-end overflow-hidden">
                            <div classname="flex-grow-1">
                              <p classname="text-muted mb-0 text-truncate">Total Orders World Wide</p>
                            </div>
                            <div classname="flex-shrink-0">
                              <div id="mini-2" data-colors="[&quot;#1f58c7&quot;]" classname="apex-charts" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="row">
                <div classname="col-xl-6">
                  <div classname="card">
                    <div classname="card-body">
                      <div>
                        <div classname="d-flex align-items-center">
                          <div classname="avatar">
                            <div classname="avatar-title rounded bg-primary-subtle ">
                              <i classname="bx bx-package font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div classname="flex-grow-1 ms-3">
                            <h6 classname="mb-0 font-size-15">Today Visitor</h6>
                          </div>
                          <div classname="flex-shrink-0">
                            <div classname="dropdown">
                              <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle">
                                <i classname="bx bx-dots-horizontal text-muted font-size-22" />
                              </a>
                              <div classname="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" classname="dropdown-item">Yearly</a>
                                <a href="javascript:;" classname="dropdown-item">Monthly</a>
                                <a href="javascript:;" classname="dropdown-item">Weekly</a>
                                <a href="javascript:;" classname="dropdown-item">Today</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 classname="mt-4 pt-1 mb-0 font-size-22">425,34.45 <span classname="text-danger fw-medium font-size-13 align-middle"> <i classname="mdi mdi-arrow-down" /> 2.64% </span> </h4>
                          <div classname="d-flex mt-1 align-items-end overflow-hidden">
                            <div classname="flex-grow-1">
                              <p classname="text-muted mb-0 text-truncate">Total Visitor World Wide</p>
                            </div>
                            <div classname="flex-shrink-0">
                              <div id="mini-3" data-colors="[&quot;#1f58c7&quot;]" classname="apex-charts" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-xl-6">
                  <div classname="card">
                    <div classname="card-body">
                      <div>
                        <div classname="d-flex align-items-center">
                          <div classname="avatar">
                            <div classname="avatar-title rounded bg-primary-subtle ">
                              <i classname="bx bx-rocket font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div classname="flex-grow-1 ms-3">
                            <h6 classname="mb-0 font-size-15">Total Expense</h6>
                          </div>
                          <div classname="flex-shrink-0">
                            <div classname="dropdown">
                              <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle">
                                <i classname="bx bx-dots-horizontal text-muted font-size-22" />
                              </a>
                              <div classname="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" classname="dropdown-item">Yearly</a>
                                <a href="javascript:;" classname="dropdown-item">Monthly</a>
                                <a href="javascript:;" classname="dropdown-item">Weekly</a>
                                <a href="javascript:;" classname="dropdown-item">Today</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 classname="mt-4 pt-1 mb-0 font-size-22">6,482.46 <span classname="text-success fw-medium font-size-13 align-middle"> <i classname="mdi mdi-arrow-down" /> 5.79% </span> </h4>
                          <div classname="d-flex mt-1 align-items-end overflow-hidden">
                            <div classname="flex-grow-1">
                              <p classname="text-muted mb-0 text-truncate">Total Expense World Wide</p>
                            </div>
                            <div classname="flex-shrink-0">
                              <div id="mini-4" data-colors="[&quot;#1f58c7&quot;]" classname="apex-charts" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div classname="row">
            <div classname="col-xxl-8">
              <div classname="row">
                <div classname="col-xl-7">
                  <div classname="card">
                    <div classname="card-body">
                      <div classname="d-flex align-items-start mb-2">
                        <div classname="flex-grow-1">
                          <h5 classname="card-title">Popular Products</h5>
                        </div>
                        <div classname="flex-shrink-0">
                          <div classname="dropdown">
                            <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle text-muted">
                              Today<i classname="mdi mdi-chevron-down ms-1" />
                            </a>
                            <div classname="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;" classname="dropdown-item">Yearly</a>
                              <a href="javascript:;" classname="dropdown-item">Monthly</a>
                              <a href="javascript:;" classname="dropdown-item">Weekly</a>
                              <a href="javascript:;" classname="dropdown-item">Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div classname="row align-items-center">
                        <div classname="col-md-5">
                          <div classname="popular-product-img p-2">
                            <img src=".//images/product/img.png" alt="" />
                          </div>
                        </div>
                        <div classname="col-md-7">
                          <span classname="badge bg-primary-subtle text-primary  font-size-10 text-uppercase ls-05"> Popular Item</span>
                          <h5 classname="mt-2 font-size-16"><a href classname="text-body">Home &amp; Office Chair Blue</a></h5>
                          <p classname="text-muted">But who has any right to find chooses enjoy.</p>
                          <div classname="row g-0 mt-3 pt-1 align-items-end">
                            <div classname="col-4">
                              <div classname="mt-1">
                                <h4 classname="font-size-16">800</h4>
                                <p classname="text-muted mb-1">Total Selling</p>
                              </div>
                            </div>
                            <div classname="col-4">
                              <div classname="mt-1">
                                <h4 classname="font-size-16">250</h4>
                                <p classname="text-muted mb-1">Total Stock</p>
                              </div>
                            </div>
                            <div classname="col-4">
                              <div classname="mt-1">
                                <a href classname="btn btn-primary btn-sm mb-1">Buy
                                  Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-simplebar style={{maxHeight: '205px'}} classname="mx-n4">
                        <div classname="popular-product-box rounded my-2">
                          <div classname="d-flex align-items-center">
                            <div classname="flex-shrink-0">
                              <div classname="avatar-md">
                                <div classname="product-img avatar-title img-thumbnail bg-primary-subtle  border-0">
                                  <img src="/images/product/img-1.png" alt="" classname="img-fluid" />
                                </div>
                              </div>
                            </div>
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="mb-1 text-truncate"><a href classname="font-size-15 text-body">Wood Chair dark Brown</a></h5>
                              <p classname="text-muted fw-semibold mb-0 text-truncate">$230.00</p>
                            </div>
                            <div classname="flex-shrink-0 text-end ms-3">
                              <h5 classname="mb-1"><a href classname="font-size-15 text-body">$62300.00</a></h5>
                              <p classname="text-muted fw-semibold mb-0">562 Sales</p>
                            </div>
                          </div>
                        </div>
                        <div classname="popular-product-box rounded my-2">
                          <div classname="d-flex align-items-center">
                            <div classname="flex-shrink-0">
                              <div classname="avatar-md">
                                <div classname="product-img avatar-title img-thumbnail bg-success-subtle  border-0">
                                  <img src="/images/product/img-8.png" alt="" classname="img-fluid" />
                                </div>
                              </div>
                            </div>
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="mb-1 text-truncate"><a href classname="font-size-15 text-body">Home &amp; Office Chair Crime</a></h5>
                              <p classname="text-muted fw-semibold mb-0 text-truncate">$190.00</p>
                            </div>
                            <div classname="flex-shrink-0 text-end ms-3">
                              <h5 classname="mb-1"><a href classname="font-size-15 text-body">$25698.00</a></h5>
                              <p classname="text-muted fw-semibold mb-0">856 Sales</p>
                            </div>
                          </div>
                        </div>
                        <div classname="popular-product-box rounded my-2">
                          <div classname="d-flex align-items-center">
                            <div classname="flex-shrink-0">
                              <div classname="avatar-md">
                                <div classname="product-img avatar-title img-thumbnail bg-danger-subtle  border-0">
                                  <img src="/images/product/img-3.png" alt="" classname="img-fluid" />
                                </div>
                              </div>
                            </div>
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="mb-1 text-truncate"><a href classname="font-size-15 text-body">Office Chair Blue</a></h5>
                              <p classname="text-muted fw-semibold mb-0 text-truncate">$420.00</p>
                            </div>
                            <div classname="flex-shrink-0 text-end ms-3">
                              <h5 classname="mb-1"><a href classname="font-size-15 text-body">$64351.00</a></h5>
                              <p classname="text-muted fw-semibold mb-0">524 Sales</p>
                            </div>
                          </div>
                        </div>
                        <div classname="popular-product-box rounded my-2">
                          <div classname="d-flex align-items-center">
                            <div classname="flex-shrink-0">
                              <div classname="avatar-md">
                                <div classname="product-img avatar-title img-thumbnail bg-success-subtle  border-0">
                                  <img src="/images/product/img-4.png" alt="" classname="img-fluid" />
                                </div>
                              </div>
                            </div>
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="mb-1 text-truncate"><a href classname="font-size-15 text-body">Home &amp; Office Chair Green</a></h5>
                              <p classname="text-muted fw-semibold mb-0 text-truncate">$230.00</p>
                            </div>
                            <div classname="flex-shrink-0 text-end ms-3">
                              <h5 classname="mb-1"><a href classname="font-size-15 text-body">$96485.00</a></h5>
                              <p classname="text-muted fw-semibold mb-0">634 Sales</p>
                            </div>
                          </div>
                        </div>
                        <div classname="popular-product-box rounded my-2">
                          <div classname="d-flex align-items-center">
                            <div classname="flex-shrink-0">
                              <div classname="avatar-md">
                                <div classname="product-img avatar-title img-thumbnail bg-danger-subtle  border-0">
                                  <img src="/images/product/img-5.png" alt="" classname="img-fluid" />
                                </div>
                              </div>
                            </div>
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="mb-1 text-truncate"><a href classname="font-size-15 text-body">Wood Chair dark Brown</a></h5>
                              <p classname="text-muted fw-semibold mb-0 text-truncate">$230.00</p>
                            </div>
                            <div classname="flex-shrink-0 text-end ms-3">
                              <h5 classname="mb-1"><a href classname="font-size-15 text-body">$56230.00</a></h5>
                              <p classname="text-muted fw-semibold mb-0">964 Sales</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-xl-5">
                  <div classname="card">
                    <div classname="card-body">
                      <div classname="d-flex align-items-start mb-2">
                        <div classname="flex-grow-1">
                          <h5 classname="card-title">Loyal Customers</h5>
                        </div>
                        <div classname="flex-shrink-0">
                          <div classname="dropdown">
                            <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle text-muted">
                              <i classname="bx bx-dots-horizontal font-size-22" />
                            </a>
                            <div classname="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;" classname="dropdown-item">Yearly</a>
                              <a href="javascript:;" classname="dropdown-item">Monthly</a>
                              <a href="javascript:;" classname="dropdown-item">Weekly</a>
                              <a href="javascript:;" classname="dropdown-item">Today</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-simplebar style={{maxHeight: '421px'}} classname="mx-n4">
                        <div classname="border-bottom loyal-customers-box pt-2">
                          <div classname="d-flex align-items-center">
                            <img src="/images/users/avatar-4.jpg" alt="" classname="rounded-circle avatar img-thumbnail" />
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="font-size-15 mb-1 text-truncate">Michelle Bernard</h5>
                              <p classname="text-muted text-truncate mb-0">Michelle@gmail.com</p>
                            </div>
                            <div classname="flex-shrink-0">
                              <h5 classname="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                4.7 <i classname="bx bxs-star font-size-14 text-primary ms-1" /></h5>
                            </div>
                          </div>
                        </div>
                        <div classname="border-bottom loyal-customers-box">
                          <div classname="d-flex align-items-center">
                            <img src="/images/users/avatar-5.jpg" alt="" classname="rounded-circle avatar img-thumbnail" />
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="font-size-15 mb-1 text-truncate">David Grajeda</h5>
                              <p classname="text-muted text-truncate mb-0">David@gmail.com</p>
                            </div>
                            <div classname="flex-shrink-0">
                              <h5 classname="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                3.4 <i classname="bx bxs-star font-size-14 text-primary ms-1" /></h5>
                            </div>
                          </div>
                        </div>
                        <div classname="border-bottom loyal-customers-box">
                          <div classname="d-flex align-items-center">
                            <img src="/images/users/avatar-6.jpg" alt="" classname="rounded-circle avatar img-thumbnail" />
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="font-size-15 mb-1 text-truncate">Charles Roman</h5>
                              <p classname="text-muted text-truncate mb-0">Charles@gmail.com</p>
                            </div>
                            <div classname="flex-shrink-0 text-end">
                              <h5 classname="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                4.9 <i classname="bx bxs-star font-size-14 text-primary ms-1" /></h5>
                            </div>
                          </div>
                        </div>
                        <div classname="border-bottom loyal-customers-box">
                          <div classname="d-flex align-items-center">
                            <img src="/images/users/avatar-7.jpg" alt="" classname="rounded-circle avatar img-thumbnail" />
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="font-size-15 mb-1 text-truncate">David Reynolds</h5>
                              <p classname="text-muted text-truncate mb-0">David@gmail.com</p>
                            </div>
                            <div classname="flex-shrink-0 text-end">
                              <h5 classname="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                3.5 <i classname="bx bxs-star font-size-14 text-primary ms-1" /></h5>
                            </div>
                          </div>
                        </div>
                        <div classname="border-bottom loyal-customers-box">
                          <div classname="d-flex align-items-center">
                            <img src="/images/users/avatar-8.jpg" alt="" classname="rounded-circle avatar img-thumbnail" />
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="font-size-15 mb-1 text-truncate">Marion Munroe</h5>
                              <p classname="text-muted text-truncate mb-0">Marion@gmail.com</p>
                            </div>
                            <div classname="flex-shrink-0 text-end">
                              <h5 classname="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                2.3 <i classname="bx bxs-star font-size-14 text-primary ms-1" /></h5>
                            </div>
                          </div>
                        </div>
                        <div classname="py-3 loyal-customers-box">
                          <div classname="d-flex align-items-center">
                            <img src="/images/users/avatar-5.jpg" alt="" classname="rounded-circle avatar img-thumbnail" />
                            <div classname="flex-grow-1 ms-3 overflow-hidden">
                              <h5 classname="font-size-15 mb-1 text-truncate">Christina Emerson</h5>
                              <p classname="text-muted text-truncate mb-0">Christina@gmail.com</p>
                            </div>
                            <div classname="flex-shrink-0 text-end">
                              <h5 classname="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                4.1 <i classname="bx bxs-star font-size-14 text-primary ms-1" /></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div classname="col-xxl-4">
              <div classname="card">
                <div classname="card-body">
                  <div classname="d-flex align-items-start">
                    <div classname="flex-grow-1 overflow-hidden">
                      <h5 classname="card-title mb-4 text-truncate">Top Saleing Categories</h5>
                    </div>
                    <div classname="flex-shrink-0 ms-2">
                      <div classname="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle text-reset">
                          <span classname="fw-semibold">Sort By:</span> <span classname="text-muted">Weekly<i classname="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div classname="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" classname="dropdown-item">Yearly</a>
                          <a href="javascript:;" classname="dropdown-item">Monthly</a>
                          <a href="javascript:;" classname="dropdown-item">Weekly</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="saleing-categories" data-colors="[&quot;#1f58c7&quot;, &quot;#4976cf&quot;,&quot;#6a92e1&quot;, &quot;#e6ecf9&quot;]" dir="ltr" classname="apex-charts" />
                  <div classname="row mt-3 pt-1">
                    <div classname="col-md-6">
                      <div classname="px-2 mt-2">
                        <div classname="d-flex align-items-center mt-sm-0 mt-2">
                          <i classname="mdi mdi-circle font-size-10 text-primary" />
                          <div classname="flex-grow-1 ms-2 overflow-hidden">
                            <p classname="font-size-15 mb-1 text-truncate">Men Fashion</p>
                          </div>
                          <div classname="flex-shrink-0 ms-2">
                            <span classname="fw-bold">34.3%</span>
                          </div>
                        </div>
                        <div classname="d-flex align-items-center mt-2">
                          <i classname="mdi mdi-circle font-size-10 text-success" />
                          <div classname="flex-grow-1 ms-2 overflow-hidden">
                            <p classname="font-size-15 mb-0 text-truncate">Women Clothing</p>
                          </div>
                          <div classname="flex-shrink-0 ms-2">
                            <span classname="fw-bold">25.7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div classname="col-md-6">
                      <div classname="px-2 mt-2">
                        <div classname="d-flex align-items-center mt-sm-0 mt-2">
                          <i classname="mdi mdi-circle font-size-10 text-info" />
                          <div classname="flex-grow-1 ms-2 overflow-hidden">
                            <p classname="font-size-15 mb-1 text-truncate">Beauty Products</p>
                          </div>
                          <div classname="flex-shrink-0 ms-2">
                            <span classname="fw-bold">18.6%</span>
                          </div>
                        </div>
                        <div classname="d-flex align-items-center mt-2">
                          <i classname="mdi mdi-circle font-size-10 text-secondary" />
                          <div classname="flex-grow-1 ms-2 overflow-hidden">
                            <p classname="font-size-15 mb-0 text-truncate">Others Products</p>
                          </div>
                          <div classname="flex-shrink-0 ms-2">
                            <span classname="fw-bold">21.4%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div classname="row">
            <div classname="col-xl-7">
              <div classname="card">
                <div classname="card-body">
                  <div classname="d-flex align-items-start mb-3">
                    <div classname="flex-grow-1">
                      <h5 classname="card-title">Sales Revenue</h5>
                    </div>
                    <div classname="flex-shrink-0">
                      <div classname="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle text-reset">
                          <span classname="fw-semibold">Year:</span> <span classname="text-muted">2021<i classname="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div classname="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" classname="dropdown-item">2019</a>
                          <a href="javascript:;" classname="dropdown-item">2020</a>
                          <a href="javascript:;" classname="dropdown-item">2021</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classname="row align-items-center">
                    <div classname="col-xxl-7">
                      <div classname="py-3">
                        <div id="world-map-markers" style={{height: '300px'}} />
                      </div>
                    </div>
                    <div classname="col-xl-5">
                      <div classname="table-responsive">
                        <table classname="table table-centered align-middle table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th style={{width: '500px'}}>Countries</th>
                              <th>Orders</th>
                              <th>Earnings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div classname="d-flex align-items-center">
                                  <img src="/images/flags/us.jpg" alt="user-image" height={18} classname="rounded" />
                                  <div classname="flex-grow-1 ms-3">
                                    <p classname="mb-0 text-truncate">United States</p>
                                  </div>
                                </div>
                              </td>
                              <td>46k</td>
                              <td>$6,524.30</td>
                            </tr>
                            <tr>
                              <td>
                                <div classname="d-flex align-items-center">
                                  <img src="/images/flags/italy.jpg" alt="user-image" height={18} classname="rounded" />
                                  <div classname="flex-grow-1 ms-3">
                                    <p classname="mb-0 text-truncate">Italy</p>
                                  </div>
                                </div>
                              </td>
                              <td>86k</td>
                              <td>$6,985.94</td>
                            </tr>
                            <tr>
                              <td>
                                <div classname="d-flex align-items-center">
                                  <img src="/images/flags/spain.jpg" alt="user-image" height={18} classname="rounded" />
                                  <div classname="flex-grow-1 ms-3">
                                    <p classname="mb-0 text-truncate">Spain</p>
                                  </div>
                                </div>
                              </td>
                              <td>86k</td>
                              <td>$5,685.47</td>
                            </tr>
                            <tr>
                              <td>
                                <div classname="d-flex align-items-center">
                                  <img src="/images/flags/french.jpg" alt="user-image" height={18} classname="rounded" />
                                  <div classname="flex-grow-1 ms-3">
                                    <p classname="mb-0 text-truncate">French</p>
                                  </div>
                                </div>
                              </td>
                              <td>56k</td>
                              <td>$5,645.45</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div classname="col-xxl-5">
              <div classname="card">
                <div classname="card-body">
                  <div classname="d-flex flex-wrap align-items-center mb-3">
                    <h5 classname="card-title me-2">Invoice List</h5>
                    <div classname="ms-auto">
                      <div classname="dropdown">
                        <a href="javascript:;" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" classname="dropdown-toggle text-reset">
                          <span classname="text-muted font-size-12">Sort By: </span> <span classname="fw-medium"> Weekly<i classname="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div aria-labelledby="dropdownMenuButton1" classname="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" classname="dropdown-item">Monthly</a>
                          <a href="javascript:;" classname="dropdown-item">Yearly</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{maxHeight: '332px'}} classname="mx-n4">
                    <div classname="table-responsive">
                      <table classname="table table-striped table-centered align-middle table-nowrap mb-0 table-check">
                        <thead>
                          <tr>
                            <th style={{width: '30px'}}>
                              <div classname="form-check font-size-16">
                                <input type="checkbox" name="check" id="checkAll" classname="form-check-input" />
                                <label classname="form-check-label" htmlfor="checkAll" />
                              </div>
                            </th>
                            <th>#Invoice</th>
                            <th style={{ width: "190px" }}>User Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div classname="form-check font-size-16">
                                <input type="checkbox" classname="form-check-input" />
                                <label classname="form-check-label" />
                              </div>
                            </td>
                            <td classname="fw-semibold">#562354</td>
                            <td style={{ width: "190px" }}>
                              <div classname="d-flex align-items-center">
                                <img src="/images/users/avatar-1.jpg" alt="" classname="rounded-circle avatar-sm" />
                                <div classname="flex-grow-1 ms-3">
                                  Neal Matthews
                                </div>
                              </div>
                            </td>
                            <td>
                              10 Dec
                            </td>
                            <td>
                              <div classname="badge bg-success-subtle text-success  font-size-12">Paid</div>
                            </td>
                            <td>
                              <div classname="dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" classname="text-muted dropdown-toggle font-size-18">
                                  <i classname="mdi mdi-dots-horizontal" />
                                </a>
                                <div classname="dropdown-menu dropdown-menu-end">
                                  <a href="javascript:;" classname="dropdown-item">Edit</a>
                                  <a href="javascript:;" classname="dropdown-item">Print</a>
                                  <a href="javascript:;" classname="dropdown-item">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div classname="form-check font-size-16">
                                <input type="checkbox" classname="form-check-input" />
                                <label classname="form-check-label" />
                              </div>
                            </td>
                            <td classname="fw-semibold">#485625</td>
                            <td style={{ width: "190px" }}>
                              <div classname="d-flex align-items-center">
                                <img src="/images/users/avatar-2.jpg" alt="" classname="rounded-circle avatar-sm" />
                                <div classname="flex-grow-1 ms-3">
                                  Connie Franco
                                </div>
                              </div>
                            </td>
                            <td>
                              10 Dec
                            </td>
                            <td>
                              <div classname="badge bg-success-subtle text-success  font-size-12">Paid</div>
                            </td>
                            <td>
                              <div classname="dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" classname="text-muted dropdown-toggle font-size-18">
                                  <i classname="mdi mdi-dots-horizontal" />
                                </a>
                                <div classname="dropdown-menu dropdown-menu-end">
                                  <a href="javascript:;" classname="dropdown-item">Edit</a>
                                  <a href="javascript:;" classname="dropdown-item">Print</a>
                                  <a href="javascript:;" classname="dropdown-item">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div classname="form-check font-size-16">
                                <input type="checkbox" classname="form-check-input" />
                                <label classname="form-check-label" />
                              </div>
                            </td>
                            <td classname="fw-semibold">#321458</td>
                            <td style={{ width: "190px" }}>
                              <div classname="d-flex align-items-center">
                                <img src="/images/users/avatar-3.jpg" alt="" classname="rounded-circle avatar-sm" />
                                <div classname="flex-grow-1 ms-3">
                                  Adella Perez
                                </div>
                              </div>
                            </td>
                            <td>
                              12 Dec
                            </td>
                            <td>
                              <div classname="badge bg-danger-subtle text-danger  font-size-12">Unpaid</div>
                            </td>
                            <td>
                              <div classname="dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" classname="text-muted dropdown-toggle font-size-18">
                                  <i classname="mdi mdi-dots-horizontal" />
                                </a>
                                <div classname="dropdown-menu dropdown-menu-end">
                                  <a href="javascript:;" classname="dropdown-item">Edit</a>
                                  <a href="javascript:;" classname="dropdown-item">Print</a>
                                  <a href="javascript:;" classname="dropdown-item">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div classname="form-check font-size-16">
                                <input type="checkbox" classname="form-check-input" />
                                <label classname="form-check-label" />
                              </div>
                            </td>
                            <td classname="fw-semibold">#214569</td>
                            <td style={{ width: "190px" }}>
                              <div classname="d-flex align-items-center">
                                <img src="/images/users/avatar-4.jpg" alt="" classname="rounded-circle avatar-sm" />
                                <div classname="flex-grow-1 ms-3">
                                  Theresa Mayers
                                </div>
                              </div>
                            </td>
                            <td>
                              21 Dec
                            </td>
                            <td>
                              <div classname="badge bg-success-subtle text-success  font-size-12">Paid</div>
                            </td>
                            <td>
                              <div classname="dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" classname="text-muted dropdown-toggle font-size-18">
                                  <i classname="mdi mdi-dots-horizontal" />
                                </a>
                                <div classname="dropdown-menu dropdown-menu-end">
                                  <a href="javascript:;" classname="dropdown-item">Edit</a>
                                  <a href="javascript:;" classname="dropdown-item">Print</a>
                                  <a href="javascript:;" classname="dropdown-item">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div classname="form-check font-size-16">
                                <input type="checkbox" classname="form-check-input" />
                                <label classname="form-check-label" />
                              </div>
                            </td>
                            <td classname="fw-semibold">#565423</td>
                            <td style={{ width: "190px" }}>
                              <div classname="d-flex align-items-center">
                                <img src="/images/users/avatar-5.jpg" alt="" classname="rounded-circle avatar-sm" />
                                <div classname="flex-grow-1 ms-3">
                                  Oliver Gonzales
                                </div>
                              </div>
                            </td>
                            <td>
                              25 Dec
                            </td>
                            <td>
                              <div classname="badge bg-danger-subtle text-danger  font-size-12">Unpaid</div>
                            </td>
                            <td>
                              <div classname="dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" classname="text-muted dropdown-toggle font-size-18">
                                  <i classname="mdi mdi-dots-horizontal" />
                                </a>
                                <div classname="dropdown-menu dropdown-menu-end">
                                  <a href="javascript:;" classname="dropdown-item">Edit</a>
                                  <a href="javascript:;" classname="dropdown-item">Print</a>
                                  <a href="javascript:;" classname="dropdown-item">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div classname="form-check font-size-16">
                                <input type="checkbox" classname="form-check-input" />
                                <label classname="form-check-label" />
                              </div>
                            </td>
                            <td classname="fw-semibold">#565423</td>
                            <td style={{ width: "190px" }}>
                              <div classname="d-flex align-items-center">
                                <img src="/images/users/avatar-6.jpg" alt="" classname="rounded-circle avatar-sm" />
                                <div classname="flex-grow-1 ms-3">
                                  Willie Verner
                                </div>
                              </div>
                            </td>
                            <td>
                              30 Dec
                            </td>
                            <td>
                              <div classname="badge bg-success-subtle text-success  font-size-12">Paid</div>
                            </td>
                            <td>
                              <div classname="dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" classname="text-muted dropdown-toggle font-size-18">
                                  <i classname="mdi mdi-dots-horizontal" />
                                </a>
                                <div classname="dropdown-menu dropdown-menu-end">
                                  <a href="javascript:;" classname="dropdown-item">Edit</a>
                                  <a href="javascript:;" classname="dropdown-item">Print</a>
                                  <a href="javascript:;" classname="dropdown-item">Delete</a>
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
            </div>
          </div>
        </div>
      </div>

      </>
    );
};

export default LayoutsHorizontal;
