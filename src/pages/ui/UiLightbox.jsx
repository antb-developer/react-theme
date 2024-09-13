import React from 'react';

const UiLightbox = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title"> Lightbox gallery</h4>
                                        <p className="card-title-desc">In this example lazy-loading of images is enabled for
                                            the next image based on move direction.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="popup-gallery">
                                            <div className="row">
                                                <div className="col-xl-2 col-md-4 col-6">
                                                    <div className="mt-4">
                                                        <a href="assets/images/small/img-1.jpg" className="thumb preview-thumb image-popup">
                                                            <div className="img-fluid">
                                                                <img src="/images/small/img-1.jpg" alt="" className="img-fluid d-block" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-md-4 col-6">
                                                    <div className="mt-4">
                                                        <a href="assets/images/small/img-2.jpg" className="thumb preview-thumb image-popup">
                                                            <div className="img-fluid">
                                                                <img src="/images/small/img-2.jpg" alt="" className="img-fluid d-block" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-md-4 col-6">
                                                    <div className="mt-4">
                                                        <a href="assets/images/small/img-3.jpg" className="thumb preview-thumb image-popup">
                                                            <div className="img-fluid">
                                                                <img src="/images/small/img-3.jpg" alt="" className="img-fluid d-block" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-md-4 col-6">
                                                    <div className="mt-4">
                                                        <a href="assets/images/small/img-4.jpg" className="thumb preview-thumb image-popup">
                                                            <div className="img-fluid">
                                                                <img src="/images/small/img-4.jpg" alt="" className="img-fluid d-block" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-md-4 col-6">
                                                    <div className="mt-4">
                                                        <a href="assets/images/small/img-5.jpg" className="thumb preview-thumb image-popup">
                                                            <div className="img-fluid">
                                                                <img src="/images/small/img-5.jpg" alt="" className="img-fluid d-block" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-md-4 col-6">
                                                    <div className="mt-4">
                                                        <a href="assets/images/small/img-6.jpg" className="thumb preview-thumb image-popup">
                                                            <div className="img-fluid">
                                                                <img src="/images/small/img-6.jpg" alt="" className="img-fluid d-block" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0"> Images with Description</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="">
                                                    <a href="assets/images/small/img-4.jpg" data-title="Project 01" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" className="thumb preview-thumb image-popup-desc">
                                                        <img src="/images/small/img-4.jpg" alt="work-thumbnail" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-sm-6">
                                                <div className="mt-4 mt-md-0">
                                                    <a href="assets/images/small/img-5.jpg" data-title="Project 02" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" className="thumb preview-thumb image-popup-desc">
                                                        <img src="/images/small/img-5.jpg" alt="work-thumbnail" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-sm-6">
                                                <div className="mt-4 mt-lg-0">
                                                    <a href="assets/images/small/img-1.jpg" data-title="Project 03" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" className="thumb preview-thumb image-popup-desc">
                                                        <img src="/images/small/img-1.jpg" alt="work-thumbnail" className="img-fluid" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Popup with Video or Map</h4>
                                        <p className="card-title-desc">In this example lazy-loading of images is enabled for the
                                            next image based on move direction. </p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="button-items">
                                                    <a data-title="YouTube Video" data-description="YouTube Video Popup" href="https://www.youtube.com/watch?v=0O2aH4XLbto" className="image-popup-video-map btn btn-light mo-mb-2">Open YouTube Video</a>
                                                    <a data-title="Vimeo Video" data-description="Vimeo Video Popup" href="https://vimeo.com/45830194" className="image-popup-video-map btn btn-light mo-mb-2">Open Vimeo Video</a>
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

export default UiLightbox;
