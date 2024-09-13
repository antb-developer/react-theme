import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const EcommerceProducts = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-3 col-lg-4">
                                <div className="card">
                                    <div className="card-header bg-transparent border-bottom">
                                        <h5 className="mb-0">Filters</h5>
                                    </div>

                                    <div>
                                        <div className="custom-accordion p-4">
                                            <h5 className="font-size-14 mb-0"><a href="#categories-collapse" data-bs-toggle="collapse" className="text-body d-block">Categories <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></a></h5>

                                            <div id="categories-collapse" className="collapse show mt-4">
                                                <div className="categories-group-card">
                                                    <a href="#collapseOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne" className="text-body fw-semibold pb-3 d-block collapsed">
                                                        <i className="bx bx-desktop font-size-16 align-middle me-2"></i> Electronic
                                                        <i className="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                                    </a>

                                                    <div id="collapseOne" data-parent="#accordion" className="collapse">
                                                        <div className="card p-2 border shadow-none">
                                                            <ul className="list-unstyled categories-list mb-0">
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Mobile</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Cemera</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Mobile accessories</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Computers</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Laptops</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Speakers</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="categories-group-card">
                                                    <a href="#collapseTwo" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseTwo" className="text-body fw-semibold pb-3 d-block">
                                                        <i className="bx bx-radar font-size-16 align-middle me-2"></i> Furniture
                                                        <i className="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                                    </a>
                                                    <div id="collapseTwo" data-parent="#accordion" className="collapse show">
                                                        <div className="card p-2 border shadow-none">
                                                            <ul className="list-unstyled categories-list mb-0">
                                                                <li className="active"><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Chairs </a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Tables</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Beds </a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Seating</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="categories-group-card">
                                                    <a href="#collapseThree" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree" className="text-body fw-semibold pb-3 d-block collapsed">
                                                        <i className="bx bx-command font-size-16 align-middle me-2"></i> Baby &amp; Kids
                                                        <i className="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                                    </a>
                                                    <div id="collapseThree" data-parent="#accordion" className="collapse">
                                                        <div className="card p-2 border shadow-none">
                                                            <ul className="list-unstyled categories-list mb-0">
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Clothing</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Footwear</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Toys</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Baby care</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="categories-group-card">
                                                    <a href="#collapseFour" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseFour" className="text-body fw-semibold pb-3 d-block collapsed">
                                                        <i className="bx bx-dumbbell font-size-16 align-middle me-2"></i> Fitness
                                                        <i className="mdi mdi-chevron-up float-end accor-down-icon"></i>
                                                    </a>
                                                    <div id="collapseFour" data-parent="#accordion" className="collapse">
                                                        <div className="card p-2 border shadow-none">
                                                            <ul className="list-unstyled categories-list mb-0">
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Gym equipment</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Yoga mat</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Dumbbells</a></li>
                                                                <li><a href="javascript:;"><i className="mdi mdi-circle-medium me-1"></i> Protein supplements</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="p-4 border-top">
                                            <div>
                                                <h5 className="font-size-14 mb-3">Price</h5>
                                                <div id="priceslider" className="mb-4"></div>
                                            </div>
                                        </div>

                                        <div className="custom-accordion">
                                            <div className="p-4 border-top">
                                                <div>
                                                    <h5 className="font-size-14 mb-0"><a href="#filtersizes-collapse" data-bs-toggle="collapse" className="text-body d-block">Sizes <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></a></h5>

                                                    <div id="filtersizes-collapse" className="collapse show">
                                                        <div className="mt-4">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-grow-1">
                                                                    <h5 className="font-size-15 mb-0">Select Sizes</h5>
                                                                </div>
                                                                <div className="w-xs">
                                                                    <select className="form-select">
                                                                        <option value="1">3</option>
                                                                        <option value="2">4</option>
                                                                        <option value="3">5</option>
                                                                        <option value="4">6</option>
                                                                        <option value="5" selected="">7</option>
                                                                        <option value="6">8</option>
                                                                        <option value="7">9</option>
                                                                        <option value="8">10</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="p-4 border-top">
                                                <div>
                                                    <h5 className="font-size-14 mb-0"><a href="#filterprodductcolor-collapse" data-bs-toggle="collapse" className="text-body d-block">Colors <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></a></h5>

                                                    <div id="filterprodductcolor-collapse" className="collapse show">
                                                        <div className="mt-4">
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck1" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck1"><i className="mdi mdi-circle text-body mx-1"></i> Black</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck2" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck2"><i className="mdi mdi-circle text-light mx-1"></i> White</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck3" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck3"><i className="mdi mdi-circle text-secondary mx-1"></i> Gray</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck4" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck4"><i className="mdi mdi-circle text-primary mx-1"></i> Blue</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck5" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck5"><i className="mdi mdi-circle text-success mx-1"></i> Green</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck6" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck6"><i className="mdi mdi-circle text-danger mx-1"></i> Red</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck7" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck7"><i className="mdi mdi-circle text-warning mx-1"></i> Yellow</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="checkbox" id="productcolorCheck8" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productcolorCheck8"><i className="mdi mdi-circle text-purple mx-1"></i> Purple</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="p-4 border-top">
                                                <div>
                                                    <h5 className="font-size-14 mb-0"><a href="#filterproduct-color-collapse" data-bs-toggle="collapse" className="text-body d-block">Customer Rating <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></a></h5>

                                                    <div id="filterproduct-color-collapse" className="collapse show">
                                                        <div className="mt-4">
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productratingRadio1" name="productratingRadio1" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productratingRadio1">4 <i className="mdi mdi-star text-warning"></i>  &amp; Above</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productratingRadio2" name="productratingRadio1" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productratingRadio2">3 <i className="mdi mdi-star text-warning"></i>  &amp; Above</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productratingRadio3" name="productratingRadio1" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productratingRadio3">2 <i className="mdi mdi-star text-warning"></i>  &amp; Above</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productratingRadio4" name="productratingRadio1" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productratingRadio4">1 <i className="mdi mdi-star text-warning"></i></label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="p-4 border-top">
                                                <div>
                                                    <h5 className="font-size-14 mb-0"><a href="#filterproduct-discount-collapse" data-bs-toggle="collapse" className="text-body d-block">Discount <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></a></h5>

                                                    <div id="filterproduct-discount-collapse" className="collapse show">
                                                        <div className="mt-4">
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productdiscountRadio1" name="productdiscountRadio" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productdiscountRadio1">50% or more</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productdiscountRadio2" name="productdiscountRadio" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productdiscountRadio2">40% or more</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productdiscountRadio3" name="productdiscountRadio" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productdiscountRadio3">30% or more</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productdiscountRadio4" name="productdiscountRadio" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productdiscountRadio4">20% or more</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productdiscountRadio5" name="productdiscountRadio" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productdiscountRadio5">10% or more</label>
                                                            </div>
                                                            <div className="form-check mt-2">
                                                                <input type="radio" id="productdiscountRadio6" name="productdiscountRadio" className="form-check-input" />
                                                                <label className="form-check-label" htmlFor="productdiscountRadio6">Less than 10%</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-9 col-lg-8">
                                <div className="card">
                                    <div className="card-body p-0">
                                    <Swiper
                                      // install Swiper modules
                                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                                      spaceBetween={50}
                                      slidesPerView={1}
                                      navigation
                                      onSwiper={(swiper) => console.log(swiper)}
                                      onSlideChange={() => console.log('slide change')}
                                    >
                                      <SwiperSlide>
                                        <div className="swiper-slide rounded overflow-hidden ecommerce-slied-bg">
                                            <div className="row justify-content-center">
                                                <div className="col-xl-11 col-lg-11">
                                                   <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="p-4 p-xl-0">
                                                          <img src="/images/product/img-8.png" alt="" className="img-fluid" />
                                                        </div>
                                                     </div>

                                                     <div className="col-md-6">
                                                       <div className="p-4 p-xl-0">
                                                            <h3 className="mb-2 text-truncate"><a href="ecommerce-product-detail.html">Tuition Classes Chair Crime </a></h3>
                                                            <h5 className="fw-normal font-size-16 mt-1 text-truncate">SKU: Fluid HB - Lite - AN White</h5>
                                                            <ul className="list-unstyled px-0 mb-0 mt-4">
                                                                <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle me-1"></i> 3 Year Warranty and Stock Available</p></li>
                                                                <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle me-1"></i> Material : Steel + PVC Leather + Sponge</p></li>
                                                                </ul>
                                                            <h2 className="mb-0 mt-4 text-truncate"><span className="font-size-20">Form</span><b> $2,360</b> <span className="text-muted me-2"><del className="font-size-20 fw-normal">$3500</del></span></h2>
                                                            <div className="mt-4">
                                                                <button type="button" className="btn btn-success w-lg waves-effect waves-light">Buy Now</button>
                                                            </div>
                                                       </div>
                                                    </div>
                                                   </div>
                                                </div>
                                           </div>
                                        </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                        <div className="swiper-slide rounded overflow-hidden ecommerce-slied-bg">
                                            <div className="row justify-content-center">
                                                <div className="col-xl-11 col-lg-11">
                                                   <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="p-4 p-xl-0">
                                                          <img src="/images/product/img-8.png" alt="" className="img-fluid" />
                                                        </div>
                                                     </div>

                                                     <div className="col-md-6">
                                                       <div className="p-4 p-xl-0">
                                                            <h3 className="mb-2 text-truncate"><a href="ecommerce-product-detail.html">Tuition Classes Chair Crime </a></h3>
                                                            <h5 className="fw-normal font-size-16 mt-1 text-truncate">SKU: Fluid HB - Lite - AN White</h5>
                                                            <ul className="list-unstyled px-0 mb-0 mt-4">
                                                                <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle me-1"></i> 3 Year Warranty and Stock Available</p></li>
                                                                <li><p className="text-muted mb-1 text-truncate"><i className="mdi mdi-circle-medium align-middle me-1"></i> Material : Steel + PVC Leather + Sponge</p></li>
                                                                </ul>
                                                            <h2 className="mb-0 mt-4 text-truncate"><span className="font-size-20">Form</span><b> $2,360</b> <span className="text-muted me-2"><del className="font-size-20 fw-normal">$3500</del></span></h2>
                                                            <div className="mt-4">
                                                                <button type="button" className="btn btn-success w-lg waves-effect waves-light">Buy Now</button>
                                                            </div>
                                                       </div>
                                                    </div>
                                                   </div>
                                                </div>
                                           </div>
                                        </div>
                                      </SwiperSlide>
                                    </Swiper>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div>
                                                        <h5>Showing result for "Chairs"</h5>
                                                        <ol className="breadcrumb p-0 bg-transparent mb-2">
                                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Furniture</a></li>
                                                            <li className="breadcrumb-item active">Chairs</li>
                                                        </ol>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-inline float-md-end">
                                                        <div className="search-box ms-2">
                                                            <div className="position-relative">
                                                                <input type="text" placeholder="Search..." className="form-control bg-light border-light rounded" />
                                                                <i className="bx bx-search search-icon"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="nav nav-tabs nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list">
                                                <li className="nav-item">
                                                    <a href="javascript:;" tabindex="-1" aria-disabled="true" className="nav-link disabled fw-medium">Sort by:</a>
                                                  </li>
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#popularity" role="tab" className="nav-link active">Popularity</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#newest" role="tab" className="nav-link">Newest</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a data-bs-toggle="tab" href="#discount" role="tab" className="nav-link">Discount</a>
                                                </li>
                                            </ul>


                                                <div className="tab-content p-3 text-muted">
                                                    <div id="popularity" role="tabpanel" className="tab-pane active">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge">New</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-1.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Home &amp; Office Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-2.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Black, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Sofa Home Chair Black</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$180 <del className="text-muted font-size-15 fw-medium ps-1">$200</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge bg-danger">- 20 %</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-3.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Tuition Classes Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$410 <del className="text-muted font-size-15 fw-medium ps-1">$340</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-4.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Dining Table And Chair</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge">New</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-5.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Home &amp; Office Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-6.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Home &amp; Office Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div id="newest" role="tabpanel" className="tab-pane">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge">New</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-7.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Tuition Classes Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$410 <del className="text-muted font-size-15 fw-medium ps-1">$340</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge">New</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-8.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Dining Table And Chair</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge">New</span>
                                                                    </div>
                                                                    <div className="pricing-badge">
                                                                        <span className="badge">New</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-9.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Home &amp; Office Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge">New</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-6.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Home &amp; Office Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div id="discount" role="tabpanel" className="tab-pane">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge bg-danger"> 20 %</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-9.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Gray, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Home &amp; Office Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star-half text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$260 <del className="text-muted font-size-15 fw-medium ps-1">$280</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge bg-danger"> 20 %</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-6.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Black, Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Sofa Home Chair Black</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$180 <del className="text-muted font-size-15 fw-medium ps-1">$200</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-4 col-sm-6">
                                                                <div className="product-box rounded p-3 mt-4">
                                                                    <div className="pricing-badge">
                                                                        <span className="badge bg-danger"> 20 %</span>
                                                                    </div>
                                                                    <div className="product-img bg-light p-3 rounded">
                                                                        <img src="/images/product/img-5.png" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                    <div className="product-content pt-3">
                                                                        <p className="text-muted font-size-13 mb-0">Chair</p>
                                                                        <h5 className="mt-1 mb-0"><a href="javascript:;" className="text-body font-size-16">Tuition Classes Chair Crime</a></h5>
                                                                        <p className="text-muted mb-0">
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                            <i className="bx bxs-star text-warning font-size-12"></i>
                                                                        </p>
                                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add To Cart" className="product-buy-icon bg-primary">
                                                                            <i className="mdi mdi-cart-outline text-white font-size-16"></i>
                                                                        </a>
                                                                        <h5 className="font-size-20 text-primary mt-3 mb-0">$410 <del className="text-muted font-size-15 fw-medium ps-1">$340</del></h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            <div className="row mt-4">
                                                <div className="col-sm-6">
                                                    <div>
                                                        <p className="mb-sm-0">Page 2 of 84</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="float-sm-end">
                                                        <ul className="pagination pagination-rounded mb-sm-0">
                                                            <li className="page-item disabled">
                                                                <a href="javascript:;" className="page-link"><i className="mdi mdi-chevron-left"></i></a>
                                                            </li>
                                                            <li className="page-item active">
                                                                <a href="javascript:;" className="page-link">1</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:;" className="page-link">2</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:;" className="page-link">3</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:;" className="page-link">4</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:;" className="page-link">5</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:;" className="page-link"><i className="mdi mdi-chevron-right"></i></a>
                                                            </li>
                                                        </ul>
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

export default EcommerceProducts;
