import React from 'react';

const UiImages = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Image Rounded &amp; Circle</h4>
                                        <p className="card-title-desc">Use classes
                                            <code>.rounded</code> and <code>.rounded-circle</code>.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img alt="200x200" width="200" src="/images/small/img-4.jpg" data-holder-rendered="true" className="rounded me-2" />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mt-4 mt-md-0">
                                                    <img alt="200x200" src="/images/users/avatar-4.jpg" data-holder-rendered="true" className="rounded-circle avatar-xl" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Image Thumbnails</h4>
                                        <p className="card-title-desc">In addition to our border-radius utilities, you can use
                                            <code className="highlighter-rouge">.img-thumbnail</code> to give an image a
                                            rounded 1px border appearance.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img alt="200x200" width="200" src="/images/small/img-3.jpg" data-holder-rendered="true" className="img-thumbnail"/>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mt-4 mt-md-0">
                                                    <img alt="200x200" src="/images/users/avatar-3.jpg" data-holder-rendered="true" className="img-thumbnail rounded-circle avatar-xl"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Responsive Images</h4>
                                        <p className="card-title-desc">Images in Bootstrap are made responsive
                                            with <code className="highlighter-rouge">.img-fluid</code>. <code className="highlighter-rouge">max-width: 100%;</code> and <code className="highlighter-rouge">height: auto;</code> are applied to
                                            the image so that it scales with the parent element.</p>
                                    </div>

                                    <div className="card-body">
                                        <div>
                                            <img src="/images/small/img-2.jpg" alt="Responsive image" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Image Sizes</h4>
                                        <p className="card-title-desc">Avatar Different sizes: xs, sm, md, lg, xl</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <img src="/images/users/avatar-3.jpg" alt="" className="rounded avatar-sm" />
                                                            <p className="mt-2 mb-lg-0"><code>.avatar-sm</code></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <img src="/images/users/avatar-4.jpg" alt="" className="rounded avatar-md" />
                                                            <p className="mt-2  mb-lg-0"><code>.avatar-md</code></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <img src="/images/users/avatar-5.jpg" alt="" className="rounded avatar-lg" />
                                                            <p className="mt-2 mb-lg-0"><code>.avatar-lg</code></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                            <p className="mt-2 mb-lg-0"><code>.avatar-sm</code></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-md" />
                                                            <p className="mt-2  mb-lg-0"><code>.avatar-md</code></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-lg" />
                                                            <p className="mt-2 mb-lg-0"><code>.avatar-lg</code></p>
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
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Media Object</h4>
                                        <p className="card-title-desc">The images or other media can be
                                            aligned top, middle, or bottom. The default is top aligned.
                                        </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="/images/users/avatar-3.jpg" alt="Generic placeholder image" className="rounded avatar-md" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-16">Top-aligned media</h5>
                                                <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="/images/users/avatar-5.jpg" alt="Generic placeholder image" className="rounded avatar-md" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-16">Center-aligned media</h5>
                                                <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="d-flex align-items-end">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="/images/users/avatar-1.jpg" alt="Generic placeholder image" className="rounded avatar-md" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-16">Bottom-aligned media</h5>
                                                <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
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

export default UiImages;
