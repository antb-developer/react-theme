import React from 'react';

const UiCarousel = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Slides only</h4>
                                        <p className="card-title-desc">Here’s a carousel with slides only.
                                            Note the presence of the <code>.d-block</code>
                                            and <code>.img-fluid</code> on carousel images
                                            to prevent browser default image alignment.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="carouselExampleSlidesOnly" data-bs-ride="carousel" data-bs-interval="3000" className="carousel slide">
                                            <div role="listbox" className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/small/img-1.jpg" alt="First slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-2.jpg" alt="Second slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-3.jpg" alt="Third slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">With Controls</h4>
                                        <p className="card-title-desc">Adding in the previous and next controls.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="carouselExampleControls" data-bs-ride="carousel" className="carousel slide">
                                            <div role="listbox" className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/small/img-4.jpg" alt="First slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-5.jpg" alt="Second slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-6.jpg" alt="Third slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                            </div>
                                            <a href="#carouselExampleControls" role="button" data-bs-slide="prev" className="carousel-control-prev">
                                                <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a href="#carouselExampleControls" role="button" data-bs-slide="next" className="carousel-control-next">
                                                <span aria-hidden="true" className="carousel-control-next-icon"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">With indicators</h4>
                                        <p className="card-title-desc">You can also add the indicators to the
                                            carousel, alongside the controls, too.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="carouselExampleIndicators" data-bs-ride="carousel" className="carousel slide">
                                            <ol className="carousel-indicators list-unstyled">
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                                            </ol>
                                            <div role="listbox" className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/small/img-3.jpg" alt="First slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-2.jpg" alt="Second slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-1.jpg" alt="Third slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                            </div>
                                            <a href="#carouselExampleIndicators" role="button" data-bs-slide="prev" className="carousel-control-prev">
                                                <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a href="#carouselExampleIndicators" role="button" data-bs-slide="next" className="carousel-control-next">
                                                <span aria-hidden="true" className="carousel-control-next-icon"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">With captions</h4>
                                        <p className="card-title-desc">Add captions to your slides easily with the <code>.carousel-caption</code> element within
                                            any <code>.carousel-item</code>.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="carouselExampleCaption" data-bs-ride="carousel" className="carousel slide">
                                            <div role="listbox" className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/small/img-7.jpg" alt="..." className="d-block img-fluid mx-auto" />
                                                    <div className="carousel-caption d-none d-md-block text-white-50">
                                                        <h5 className="text-white">First slide label</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-5.jpg" alt="..." className="d-block img-fluid mx-auto" />
                                                    <div className="carousel-caption d-none d-md-block text-white-50">
                                                        <h5 className="text-white">Second slide label</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-4.jpg" alt="..." className="d-block img-fluid mx-auto" />
                                                    <div className="carousel-caption d-none d-md-block text-white-50">
                                                        <h5 className="text-white">Third slide label</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#carouselExampleCaption" role="button" data-bs-slide="prev" className="carousel-control-prev">
                                                <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a href="#carouselExampleCaption" role="button" data-bs-slide="next" className="carousel-control-next">
                                                <span aria-hidden="true" className="carousel-control-next-icon"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Crossfade</h4>
                                        <p className="card-title-desc">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
                                    </div>

                                    <div className="card-body">
                                        <div id="carouselExampleFade" data-ride="carousel" className="carousel slide carousel-fade">
                                            <ol className="carousel-indicators list-unstyled">
                                                <li data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active"></li>
                                                <li data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/small/img-1.jpg" alt="First slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-2.jpg" alt="Second slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="/images/small/img-3.jpg" alt="Third slide" className="d-block img-fluid mx-auto" />
                                                </div>
                                            </div>
                                            <a href="#carouselExampleFade" role="button" data-bs-slide="prev" className="carousel-control-prev">
                                                <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a href="#carouselExampleFade" role="button" data-bs-slide="next" className="carousel-control-next">
                                                <span aria-hidden="true" className="carousel-control-next-icon"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
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

export default UiCarousel;
