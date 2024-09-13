import React from 'react';

const ContactsProfile = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xxl-3">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="user-profile-img">
                                            <img src="/images/pattern-bg.jpg" style={{ height: '120px' }} alt="" className="profile-img profile-foreground-img rounded-top" />
                                            <div className="overlay-content rounded-top">
                                                <div>
                                                    <div className="user-nav p-3">
                                                        <div className="d-flex justify-content-end">
                                                            <div className="dropdown">
                                                                <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                                    <i className="bx bx-dots-vertical text-white font-size-20"></i>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                    <a href="javascript:;" className="dropdown-item">Action</a>
                                                                    <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="p-4 pt-0">

                                            <div className="mt-n5 position-relative text-center border-bottom pb-3">
                                                <img src="/images/users/avatar-3.jpg" alt="" className="avatar-xl rounded-circle img-thumbnail" />

                                                <div className="mt-3">
                                                   <h5 className="mb-1">Martin Gurley</h5>
                                                    <p className="text-muted mb-0">
                                                        <i className="bx bxs-star text-warning font-size-14"></i>
                                                        <i className="bx bxs-star text-warning font-size-14"></i>
                                                        <i className="bx bxs-star text-warning font-size-14"></i>
                                                        <i className="bx bxs-star text-warning font-size-14"></i>
                                                        <i className="bx bxs-star-half text-warning font-size-14"></i>
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="table-responsive mt-3 border-bottom pb-3">
                                                <table className="table align-middle table-sm table-nowrap table-borderless table-centered mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <th className="fw-bold">
                                                                City :</th>
                                                            <td className="text-muted">New Your City</td>
                                                        </tr>

                                                        <tr>
                                                            <th className="fw-bold">
                                                                State :</th>
                                                            <td className="text-muted">New Your</td>
                                                        </tr>

                                                        <tr>
                                                            <th className="fw-bold">
                                                                Country :</th>
                                                            <td className="text-muted">USA</td>
                                                        </tr>

                                                        <tr>
                                                            <th className="fw-bold">Pin Code :</th>
                                                            <td className="text-muted">0005485</td>
                                                        </tr>


                                                        <tr>
                                                            <th className="fw-bold">Phone :</th>
                                                            <td className="text-muted">+214 5632564</td>
                                                        </tr>


                                                        <tr>
                                                            <th className="fw-bold">Email :</th>
                                                            <td className="text-muted">martingurley52@gmail.com</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>



                                            <div className="p-3 mt-3">
                                                <div className="row text-center">
                                                    <div className="col-6 border-end">
                                                        <div className="p-1">
                                                            <h5 className="mb-1">1,269</h5>
                                                            <p className="text-muted mb-0">Products</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="p-1">
                                                            <h5 className="mb-1">5.2k</h5>
                                                            <p className="text-muted mb-0">Followers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-2 text-center border-bottom pb-4">
                                                <a href="" className="btn btn-primary waves-effect waves-light btn-sm">Send Message <i className="bx bx-send ms-1 align-middle"></i></a>
                                            </div>

                                            <div className="mt-3 pt-1 text-center">
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void()" className="social-list-item bg-primary text-white border-primary">
                                                            <i className="bx bxl-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void()" className="social-list-item bg-info text-white border-info">
                                                            <i className="bx bxl-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void()" className="social-list-item bg-danger text-white border-danger">
                                                            <i className="bx bxl-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-9">
                                <div className="card">
                                    <div className="card-body">

                                         <ul role="tablist" className="nav nav-pills nav-justified">
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#overview" role="tab" className="nav-link active">
                                                    <span>Overview</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#messages" role="tab" className="nav-link">
                                                    <span>Messages</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#post" role="tab" className="nav-link">
                                                    <span>Post</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="tab-content">
                                    <div id="overview" role="tabpanel" className="tab-pane active">
                                        <div className="card">
                                           <div className="card-body">
                                                <h5 className="font-size-16 mb-3">Summary</h5>
                                                <div className="mt-3">
                                                    <p className="font-size-15 mb-1">Hi my name is Jennifer Bennett.</p>
                                                    <p className="font-size-15">I'm the Co-founder and Head of Design at Company agency.</p>

                                                    <p className="text-muted">Been the industry's standard dummy text To an English person.
                                                        Our team collaborators and clients to achieve cupidatat non proident, sunt in culpa
                                                        qui officia deserunt mollit anim id est some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences debitis aut rerum necessitatibus saepe eveniet ut et voluptates laborum growth.</p>

                                                    <h5 className="font-size-15">Experience :</h5>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <ul className="list-unstyled mb-0 pt-1">
                                                                <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Donec vitae libero venenatis faucibus</li>
                                                                <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Quisque rutrum aenean imperdiet</li>
                                                                <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Integer ante a consectetuer eget</li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="list-unstyled mb-0 pt-1">
                                                                <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Donec vitae libero venenatis faucibus</li>
                                                                <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Quisque rutrum aenean imperdiet</li>
                                                                <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Integer ante a consectetuer eget</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <h5 className="font-size-16 mb-4">Projects</h5>
                                                    <div className="table-responsive">
                                                        <table className="table table-nowrap table-hover mb-1">
                                                            <thead className="bg-light">
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Projects</th>
                                                                    <th scope="col">Date</th>
                                                                    <th scope="col">Budget</th>
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col" style={{ width : "120px" }}>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">01</th>
                                                                    <td><a href="javascript:;" className="text-body">Brand Logo Design</a></td>
                                                                    <td>
                                                                        18 Jun, 2021
                                                                    </td>
                                                                    <td>
                                                                        $523
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge bg-primary-subtle text-primary  font-size-12">Open</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">02</th>
                                                                    <td><a href="javascript:;" className="text-body">Chat app Design</a></td>
                                                                    <td>
                                                                        28 May, 2021
                                                                    </td>
                                                                    <td>
                                                                        $356
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge bg-success-subtle text-success  font-size-12">Complete</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">03</th>
                                                                    <td><a href="javascript:;" className="text-body">Minible Landing</a></td>
                                                                    <td>
                                                                        13 May, 2021
                                                                    </td>
                                                                    <td>
                                                                        $425
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge bg-success-subtle text-success  font-size-12">Complete</span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18 px-2">
                                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Action</a>
                                                                                <a href="javascript:;" className="dropdown-item">Another action</a>
                                                                                <a href="javascript:;" className="dropdown-item">Something else here</a>
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

                                    <div id="messages" role="tabpanel" className="tab-pane">
                                        <div className="card">
                                           <div className="card-body">

                                            <div className="py-2">

                                                <div data-simplebar="" style={{ maxHeight : "360px" }} className="mx-n4 px-4">
                                                    <div className="border-bottom pb-3">
                                                        <p className="float-sm-end text-muted font-size-13">12 July, 2021</p>
                                                        <div className="badge bg-success mb-2"><i className="mdi mdi-star"></i> 4.1</div>
                                                        <p className="text-muted mb-4">Maecenas non vestibulum ante, nec efficitur orci. Duis eu ornare mi, quis bibendum quam. Etiam imperdiet aliquam purus sit amet rhoncus. Vestibulum pretium consectetur leo, in mattis ipsum sollicitudin eget. Pellentesque vel mi tortor.
                                                            Nullam vitae maximus dui dolor sit amet, consectetur adipiscing elit.</p>
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex">
                                                                    <img src="/images/users/avatar-2.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-15 mb-0">Samuel</h5>
                                                                        <p className="text-muted mb-0 mt-1">65 Followers, 86 Reviews</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <ul className="list-inline product-review-link mb-0">
                                                                    <li className="list-inline-item">
                                                                        <a href="javascript:;"><i className="bx bx-like"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="javascript:;"><i className="bx bx-comment-dots"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="border-bottom py-3">
                                                        <p className="float-sm-end text-muted font-size-13">06 July, 2021</p>
                                                        <div className="badge bg-success mb-2"><i className="mdi mdi-star"></i> 4.0</div>
                                                        <p className="text-muted mb-4">Cras ac condimentum velit. Quisque vitae elit auctor quam egestas congue. Duis eget lorem fringilla, ultrices justo consequat, gravida lorem. Maecenas orci enim, sodales id condimentum et, nisl arcu aliquam velit,
                                                            sit amet vehicula turpis metus cursus dolor cursus eget dui.</p>
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex">
                                                                    <img src="/images/users/avatar-3.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-15 mb-0">Joseph</h5>
                                                                        <p className="text-muted mb-0 mt-1">85 Followers, 102 Reviews</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <ul className="list-inline product-review-link mb-0">
                                                                    <li className="list-inline-item">
                                                                        <a href="javascript:;"><i className="bx bx-like"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="javascript:;"><i className="bx bx-comment-dots"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pt-3">
                                                        <p className="float-sm-end text-muted font-size-13">26 June, 2021</p>
                                                        <div className="badge bg-success mb-2"><i className="mdi mdi-star"></i> 4.2</div>
                                                        <p className="text-muted mb-4">Aliquam sit amet eros eleifend, tristique ante sit amet, eleifend arcu. Cras ut diam quam. Fusce quis diam eu augue semper ullamcorper vitae sed massa. Mauris lacinia, massa a feugiat mattis, leo massa porta eros, sed congue arcu sem nec orci.
                                                            In ac consectetur augue. Nullam pulvinar risus non augue tincidunt blandit.</p>
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex">
                                                                    <img src="/images/users/avatar-6.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                    <div className="flex-1 ms-2 ps-1">
                                                                        <h5 className="font-size-15 mb-0">Paul</h5>
                                                                        <p className="text-muted mb-0 mt-1">27 Followers, 66 Reviews</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <ul className="list-inline product-review-link mb-0">
                                                                    <li className="list-inline-item">
                                                                        <a href="javascript:;"><i className="bx bx-like"></i></a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="javascript:;"><i className="bx bx-comment-dots"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mt-2">
                                                    <div className="border rounded mt-4">
                                                        <form action="#">
                                                            <div className="px-2 py-1 bg-light">
                                                                <div role="group" className="btn-group">
                                                                    <button type="button" className="btn btn-sm btn-link text-darbodyxt-decoration-none"><i className="bx bx-link"></i></button>
                                                                    <button type="button" className="btn btn-sm btn-link text-darbodyxt-decoration-none"><i className="bx bx-smile"></i></button>
                                                                    <button type="button" className="btn btn-sm btn-link text-darbodyxt-decoration-none"><i className="bx bx-at"></i></button>
                                                                </div>
                                                            </div>
                                                            <textarea rows="3" placeholder="Your Message..." className="form-control border-0 resize-none"></textarea>
                                                        </form>
                                                    </div>

                                                    <div className="text-end mt-3">
                                                        <button type="button" className="btn btn-success w-sm text-truncate ms-2"> Send <i className="bx bx-send ms-2 align-middle"></i></button>
                                                    </div>
                                               </div>

                                            </div>

                                           </div>
                                        </div>
                                    </div>

                                    <div id="post" role="tabpanel" className="tab-pane">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div data-simplebar="" style={{ maxHeight : "580px" }} className="mx-n3 px-3">
                                                        <div className="blog-post">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-3">
                                                                    <img src="/images/users/avatar-6.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h5 className="font-size-16 text-truncate mb-1"><a href="javascript:;" className="text-body">Richard Johnson</a></h5>
                                                                    <p className="font-size-13 text-muted mb-0">24 Mar, 2021</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-3">
                                                                <p className="text-muted">Aenean ornare mauris velit. Donec imperdiet, massa sit amet porta maximus, massa justo faucibus nisi,
                                                                     eget accumsan nunc ipsum nec lacus. Etiam dignissim turpis sit amet lectus porttitor eleifend. Maecenas ornare molestie metus eget feugiat.
                                                                     Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                                                            </div>
                                                            <div className="position-relative mt-3">
                                                                <img src="/images/post-1.jpg" alt="" className="img-thumbnail" />
                                                            </div>
                                                            <div className="pt-3">
                                                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                                                                    <div>
                                                                        <ul className="list-inline mb-0">
                                                                            <li className="list-inline-item me-3">
                                                                                <a href="javascript: void(0);" className="text-muted">
                                                                                    <i className="bx bx-purchase-tag-alt text-muted me-1"></i> Project
                                                                                </a>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <a href="javascript: void(0);" className="text-muted">
                                                                                    <i className="bx bx-like align-middle text-muted me-1"></i> 12 Like
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                    <div>
                                                                        <div className="d-flex align-items-center">
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
                                                                            <div className="ms-2">
                                                                                <button type="button" className="btn btn-outline-primary btn-sm waves-effect">Share <i className="bx bx-share-alt align-middle ms-1"></i></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="blog-post mt-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-3">
                                                                    <img src="/images/users/avatar-5.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h5 className="font-size-16 text-truncate mb-1"><a href="javascript:;" className="text-body">James Delgado</a></h5>
                                                                    <p className="font-size-13 text-muted mb-0">29 July, 2021</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-3">
                                                                <p className="text-muted">Aenean ornare mauris velit. Donec imperdiet, massa sit amet porta maximus, massa justo faucibus nisi,
                                                                     eget accumsan nunc ipsum nec lacus. Etiam dignissim turpis sit amet lectus porttitor eleifend. Maecenas ornare molestie metus eget feugiat.
                                                                     Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                                                            </div>
                                                            <div className="position-relative mt-3">
                                                                <img src="/images/post-2.jpg" alt="" className="img-thumbnail" />
                                                            </div>
                                                            <div className="pt-3">
                                                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                                                                    <div>
                                                                        <ul className="list-inline mb-0">
                                                                            <li className="list-inline-item me-3">
                                                                                <a href="javascript: void(0);" className="text-muted">
                                                                                    <i className="bx bx-purchase-tag-alt text-muted me-1"></i> Project
                                                                                </a>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <a href="javascript: void(0);" className="text-muted">
                                                                                    <i className="bx bx-like align-middle text-muted me-1"></i> 12 Like
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                    <div>
                                                                        <div className="d-flex align-items-center">
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
                                                                            <div className="ms-2">
                                                                                <button type="button" className="btn btn-outline-primary btn-sm waves-effect">Share <i className="bx bx-share-alt align-middle ms-1"></i></button>
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
                                </div>

                            </div>

                        </div>



                        <div className="row">

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Weekly Hours</h5>
                                    </div>
                                    <div className="card-body">
                                        <div id="overview-chart" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Team Members</h5>
                                    </div>

                                    <div className="card-body pt-1">
                                        <div className="table-responsive">
                                            <table className="table align-middle table-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width : "50px" }}><img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" /></td>
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

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Skill</h5>
                                    </div>
                                    <div className="card-body">

                                        <div className="row align-items-center g-0">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> Photoshop </p>
                                            </div>

                                            <div className="col-sm-9">
                                                <div style={{ height: "6px" }} className="progress mt-1">
                                                    <div role="progressbar" style={{ width : "72%" }} aria-valuenow="52" aria-valuemin="0" aria-valuemax="52" className="progress-bar progress-bar bg-primary">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> illustrator </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div style={{ height: "6px" }} className="progress mt-1">
                                                    <div role="progressbar" style={{ width : "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="45" className="progress-bar progress-bar bg-primary">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> HTML </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div style={{ height: "6px" }} className="progress mt-1">
                                                    <div role="progressbar" style={{ width : "68%" }} aria-valuenow="48" aria-valuemin="0" aria-valuemax="48" className="progress-bar progress-bar bg-primary">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> CSS </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div style={{ height: "6px" }} className="progress mt-1">
                                                    <div role="progressbar" style={{ width : "78%" }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="78" className="progress-bar progress-bar bg-primary">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> Javascript </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div style={{ height: "6px" }} className="progress mt-1">
                                                    <div role="progressbar" style={{ width : "63%" }} aria-valuenow="63" aria-valuemin="0" aria-valuemax="63" className="progress-bar progress-bar bg-primary">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> Php </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div style={{ height: "6px" }} className="progress mt-1">
                                                    <div role="progressbar" style={{ width : "48%" }} aria-valuenow="48" aria-valuemin="0" aria-valuemax="48" className="progress-bar progress-bar bg-primary">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> Python </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div style={{ height: "6px" }} className="progress mt-1">
                                                    <div role="progressbar" style={{ width : "78%" }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="78" className="progress-bar progress-bar bg-primary">
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



      </>
    );
};

export default ContactsProfile;
