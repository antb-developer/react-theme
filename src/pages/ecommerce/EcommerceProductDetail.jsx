import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Controller } from 'swiper/modules';

const EcommerceProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <div dir="ltr" className="product-detail mt-3">

                                                <Swiper
                                                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                  spaceBetween={10}
                                                  slidesPerView={1}
                                                  navigation
                                                  onSwiper={(swiper) => console.log(swiper)}
                                                  onSlideChange={() => console.log('slide change')}
                                                >
                                                  <SwiperSlide>
                                                    <div className="swiper-slide rounded">
                                                       <div className="p-3">
                                                            <div className="product-img bg-light rounded p-3">
                                                                <img src="/images/product/img-1.png" className="img-fluid d-block" />
                                                            </div>
                                                       </div>
                                                    </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                    <div className="swiper-slide rounded">
                                                        <div className="p-3">
                                                            <div className="product-img bg-light rounded p-3">
                                                                <img src="/images/product/img-2.png" className="img-fluid d-block" />
                                                            </div>
                                                       </div>
                                                    </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                    <div className="swiper-slide rounded">
                                                        <div className="p-3">
                                                            <div className="product-img bg-light rounded p-3">
                                                                <img src="/images/product/img-3.png" className="img-fluid d-block" />
                                                            </div>
                                                       </div>
                                                    </div>
                                                  </SwiperSlide>
                                                  <SwiperSlide>
                                                    <div className="swiper-slide rounded">
                                                        <div className="p-3">
                                                            <div className="product-img bg-light rounded p-3">
                                                                <img src="/images/product/img-4.png" className="img-fluid d-block" />
                                                            </div>
                                                       </div>
                                                    </div>
                                                  </SwiperSlide>

                                                </Swiper>
                                                    <div className="mt-4">
                                                      <Swiper
                                                        modules={[Navigation]}
                                                        spaceBetween={5}
                                                        slidesPerView={4}
                                                        onSwiper={(swiper) => console.log(swiper)}
                                                        onSlideChange={() => console.log('slide change')}
                                                      >
                                                        <SwiperSlide>
                                                          <div className="nav-slide-item"><img src="/images/product/img-1.png" className="img-fluid p-1 d-block rounded" /></div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                          <div className="nav-slide-item"><img src="/images/product/img-2.png" className="img-fluid p-1 d-block rounded" /></div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                          <div className="nav-slide-item"><img src="/images/product/img-3.png" className="img-fluid p-1 d-block rounded" /></div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                          <div className="nav-slide-item"><img src="/images/product/img-4.png" className="img-fluid p-1 d-block rounded" /></div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                          <div className="nav-slide-item"><img src="/images/product/img-5.png" className="img-fluid p-1 d-block rounded" /></div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                          <div className="nav-slide-item"><img src="/images/product/img-6.png" className="img-fluid p-1 d-block rounded" /></div>
                                                        </SwiperSlide>
                                                      </Swiper>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-xl-8">
                                                <div className="mt-3 mt-xl-3 ps-xl-5">
                                                    <h4 className="font-size-20 mb-3"><a href="" className="text-body">Home &amp; Office Chair Crime</a></h4>

                                                    <p className="text-muted mb-0">
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star-half text-warning"></i>
                                                    </p>

                                                    <div className="text-muted mt-2">
                                                        <span className="badge bg-success font-size-14 me-1"><i className="mdi mdi-star"></i> 4.5</span> 234 Reviews
                                                    </div>

                                                    <h2 className="text-primary mt-4 py-2 mb-0">$460 <del className="text-muted font-size-18 fw-medium ps-1">$520</del>

                                                        <span className="badge bg-danger font-size-10 ms-1">20 % Off</span></h2>


                                                    <div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mt-3">
                                                                    <h5 className="font-size-14">Specification :</h5>
                                                                    <ul className="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle text-primary me-1"></i> Full heighted Hydraulic</p></li>
                                                                        <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle text-primary me-1"></i> Heavy Dencity Premium Cushion</p></li>
                                                                        <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle text-primary me-1"></i> Colour According To Salon Interior</p></li>
                                                                        <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle text-primary me-1"></i> 1 Year Gurantee On All Parts</p></li>
                                                                        <li><p className="text-muted mb-0 text-truncate"><i className="mdi mdi-circle-medium align-middle text-primary me-1"></i> Size 25inch x 25inch</p></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="mt-3">
                                                                    <h5 className="font-size-14">Services :</h5>
                                                                    <ul className="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle text-primary me-1"></i> 10 Days Replacement </p></li>
                                                                        <li><p className="text-muted mb-0 text-truncate"><i className="mdi mdi-circle-medium align-middle text-primary me-1"></i> Cash on Delivery available </p></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="mt-3">
                                                                    <h5 className="font-size-14">Delivery location :</h5>

                                                                    <div className="d-inline-flex mt-2">
                                                                        <div className="input-group mb-3">
                                                                            <input type="text" placeholder="Enter Delivery pincode" className="form-control" />
                                                                            <button type="button" className="btn btn-primary">Check</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-8">
                                                                <div className="product-desc-color mt-3">
                                                                    <h5 className="font-size-14">Colors :</h5>
                                                                    <ul className="list-inline mt-3">
                                                                        <li className="list-inline-item">
                                                                            <i className="mdi mdi-circle font-size-18 text-body"></i>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <i className="mdi mdi-circle font-size-18 text-success"></i>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <i className="mdi mdi-circle font-size-18 text-primary"></i>
                                                                        </li>

                                                                        <li className="list-inline-item">
                                                                            <a href="javascript:;" className="text-primary border-0 p-1">
                                                                                2 + Colors
                                                                            </a>
                                                                        </li>
                                                                    </ul>

                                                                </div>


                                                                <div className="row text-center mt-4 pt-1">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-grid">
                                                                            <button type="button" className="btn btn-primary waves-effect waves-light mt-2 me-1">
                                                                                <i className="bx bx-cart me-2"></i> Add to cart
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div className="d-grid">
                                                                            <button type="button" className="btn btn-light waves-effect  mt-2 waves-light">
                                                                                <i className="bx bx-shopping-bag me-2"></i>Buy now
                                                                            </button>
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

                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h5 className="font-size-14 mb-3">Product Track : </h5>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-3 col-lg-6">
                                                    <div className="border p-4 rounded mt-4 mt-lg-0">
                                                        <i className="bx bxs-truck h2 text-primary mb-0"></i>
                                                        <h5 className="font-size-17 mb-0 mt-3">Fast Delivery</h5>
                                                        <p className="text-muted mb-0 pt-2">Passages and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
                                                    </div>
                                                </div>

                                                <div className="col-xl-3 col-lg-6">
                                                    <div className="border p-4 rounded mt-4 mt-lg-0">
                                                        <i className="bx bx-rotate-right h2 text-primary mb-0"></i>
                                                        <h5 className="font-size-17 mb-0 mt-3">Returns in 7 Days</h5>
                                                        <p className="text-muted mb-0 pt-2">Principle of selection: he rejects pleasures to secure other greater pleasures or else endures pains worse pains."</p>
                                                    </div>
                                                </div>

                                                <div className="col-xl-3 col-lg-6">
                                                    <div className="border p-4 rounded mt-4 mt-lg-0">
                                                        <i className="bx bx-support h2 text-primary mb-0"></i>
                                                        <h5 className="font-size-17 mb-0 mt-3">Online Support 24/7</h5>
                                                        <p className="text-muted mb-0 pt-2">Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis volupta maiores alias consequatur aut perferendis.</p>
                                                    </div>
                                                </div>

                                                <div className="col-xl-3 col-lg-6">
                                                    <div className="border p-4 rounded mt-4 mt-lg-0">
                                                        <i className="bx bxs-wallet-alt h2 text-primary mb-0"></i>
                                                        <h5 className="font-size-17 mb-0 mt-3">Secure Payment</h5>
                                                        <p className="text-muted mb-0 pt-2">Welcomed and every pain avoided certain circumstances and owing to the business it will frequently occur that.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="">
                                                    <h5 className="font-size-14 mb-3">Reviews : </h5>
                                                    <div className="text-muted mb-3">
                                                        <span className="badge bg-success font-size-14 me-1"><i className="mdi mdi-star"></i> 4.2</span> 234 Reviews
                                                    </div>

                                                    <div className="border py-4 rounded">

                                                        <div data-simplebar="" style={{ maxHeight: "360px" }} className="px-4">
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
                                                                                <h5 className="font-size-16 mb-0">Samuel</h5>
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
                                                                                <h5 className="font-size-16 mb-0">Joseph</h5>
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
                                                                                <h5 className="font-size-16 mb-0">Paul</h5>
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

                                                        <div className="px-4 mt-2">
                                                            <div className="border rounded mt-4">
                                                                <form action="#">
                                                                    <div className="px-2 py-1 bg-light">
                                                                        <div role="group" className="btn-group">
                                                                            <button type="button" className="btn btn-sm btn-link text-body text-decoration-none"><i className="bx bx-link"></i></button>
                                                                            <button type="button" className="btn btn-sm btn-link text-body text-decoration-none"><i className="bx bx-smile"></i></button>
                                                                            <button type="button" className="btn btn-sm btn-link text-body text-decoration-none"><i className="bx bx-at"></i></button>
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

                                            <div className="col-4">
                                                <div className="product-desc">
                                                    <h5 className="font-size-14 mb-3">Product description : </h5>
                                                    <ul role="tablist" className="nav nav-tabs nav-tabs-custom">
                                                        <li className="nav-item">
                                                          <a id="desc-tab" data-bs-toggle="tab" href="#desc" role="tab" className="nav-link">Description</a>
                                                        </li>
                                                        <li className="nav-item">
                                                          <a id="specifi-tab" data-bs-toggle="tab" href="#specifi" role="tab" className="nav-link active">Specifications</a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content border border-top-0 p-4">
                                                        <div id="desc" role="tabpanel" className="tab-pane fade">
                                                            <div className="row">
                                                                <div className="col-sm-3 col-md-3">
                                                                    <div>
                                                                        <img src="/images/product/img.png" alt="" className="img-fluid mx-auto rounded d-block" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-9 col-md-9">
                                                                    <div className="text-muted p-2">
                                                                        <p>If several languages coalesce, the grammar of the resulting language is more simple.</p>

                                                                        <p>It will be as simple as occidental in fact.</p>

                                                                        <div>
                                                                            <ul className="list-unstyled product-desc-list text-body mb-0">
                                                                                <li><i className="mdi mdi-circle-medium me-1 align-middle text-primary"></i> Sed ut perspiciatis omnis iste</li>
                                                                                <li><i className="mdi mdi-circle-medium me-1 align-middle text-primary"></i> Neque porro quisquam est</li>
                                                                                <li><i className="mdi mdi-circle-medium me-1 align-middle text-primary"></i> Quis autem vel eum iure</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="specifi" role="tabpanel" className="tab-pane fade show active">
                                                            <div className="table-responsive">
                                                                <table className="table table-nowrap mb-0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row" style={{ width: "50%" }} >Category :</th>
                                                                            <td> Chairs </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Brand :</th>
                                                                            <td>Bajaj</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Color :</th>
                                                                            <td>Dark</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Quality :</th>
                                                                            <td>High</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Material :</th>
                                                                            <td>Metal</td>
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
                            </div>
                        </div>








                    </div>

                </div>

      </>
    );
};

export default EcommerceProductDetail;
