import React from 'react';

const EcommerceAddProduct = () => {
    return (
      <>
        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <div id="addproduct-accordion" className="custom-accordion">
                            <div className="card">
                                <a href="#addproduct-productinfo-collapse" data-bs-toggle="collapse" aria-expanded="true" aria-controls="addproduct-productinfo-collapse" className="text-body">
                                    <div className="p-4">

                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <div className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                        <h5 className="text-primary font-size-17 mb-0">01</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-16 mb-1">Product Info</h5>
                                                <p className="text-muted text-truncate mb-0">Fill all information below</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                                            </div>

                                        </div>

                                    </div>
                                </a>

                                <div id="addproduct-productinfo-collapse" data-bs-parent="#addproduct-accordion" className="collapse show">
                                    <div className="p-4 border-top">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="productname">Product Name</label>
                                                <input id="productname" name="productname" placeholder="Enter Product Name" type="text" className="form-control" />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">

                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="manufacturername">Manufacturer Name</label>
                                                        <input id="manufacturername" name="manufacturername" placeholder="Enter Manufacturer Name" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">

                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="manufacturerbrand">Manufacturer Brand</label>
                                                        <input id="manufacturerbrand" name="manufacturerbrand" placeholder="Enter Manufacturer Brand" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="price">Price</label>
                                                        <input id="price" name="price" placeholder="Enter Price" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="choices-single-default">Category</label>
                                                        <select data-trigger="" name="choices-single-category" id="choices-single-category" className="form-control" >
                                                            <option value="">Select</option>
                                                            <option value="EL">Electronic</option>
                                                            <option value="FA">Fashion</option>
                                                            <option value="FI">Fitness</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="choices-single-specifications">Specifications</label>
                                                        <select data-trigger="" name="choices-single-category" id="choices-single-specifications" className="form-control" >
                                                            <option value="HI" selected="">High Quality</option>
                                                            <option value="LE" selected="">Leather</option>
                                                            <option value="NO">Notifications</option>
                                                            <option value="SI">Sizes</option>
                                                            <option value="DI">Different Color</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-0">
                                                <label className="form-label" htmlFor="productdesc">Product Description</label>
                                                <textarea id="productdesc" placeholder="Enter Description" rows="4" className="form-control" ></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <a href="#addproduct-img-collapse" data-bs-toggle="collapse" aria-haspopup="true" aria-expanded="false" aria-controls="addproduct-img-collapse" className="text-body collbodyd">
                                    <div className="p-4">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <div className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                        <h5 className="text-primary font-size-17 mb-0">02</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-16 mb-1">Product Image</h5>
                                                <p className="text-muted text-truncate mb-0">Fill all information below</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div id="addproduct-img-collapse" data-bs-parent="#addproduct-accordion" className="collapse">
                                    <div className="p-4 border-top">
                                        <form action="#" className="dropzone">
                                            <div className="fallback">
                                                <input name="file" type="file" multiple="multiple" />
                                            </div>
                                            <div className="dz-message needsclick">
                                                <div className="mb-3">
                                                    <i className="display-4 text-muted mdi mdi-cloud-upload"></i>
                                                </div>
                                                <h4 className="mb-0">Drop files here or click to upload.</h4>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <a href="#addproduct-metadata-collapse" data-bs-toggle="collapse" aria-haspopup="true" aria-expanded="false" aria-controls="addproduct-metadata-collapse" className="text-body collbodyd">
                                    <div className="p-4">

                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <div className="avatar-title rounded-circle bg-primary-subtle  text-primary">
                                                        <h5 className="text-primary font-size-17 mb-0">03</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-16 mb-1">Meta Data</h5>
                                                <p className="text-muted text-truncate mb-0">Fill all information below</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                                            </div>

                                        </div>

                                    </div>
                                </a>

                                <div id="addproduct-metadata-collapse" data-bs-parent="#addproduct-accordion" className="collapse">
                                    <div className="p-4 border-top">
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="metatitle">Meta Title</label>
                                                        <input id="metatitle" name="metatitle" placeholder="Enter Title" type="text" className="form-control" />
                                                    </div>

                                                </div>

                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="metakeywords">Meta Keywords</label>
                                                        <input id="metakeywords" name="metakeywords" placeholder="Enter Keywords" type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-0">
                                                <label className="form-label" htmlFor="metadescription">Meta Description</label>
                                                <textarea id="metadescription" placeholder="Enter Description" rows="4" className="form-control" ></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-4">
                    <div className="col text-end">
                        <a href="javascript:;" className="btn btn-danger"> <i className="bx bx-x me-1"></i> Cancel </a>
                        <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#success-btn" className="btn btn-success"> <i className=" bx bx-file me-1"></i> Save </a>
                    </div>
                </div>




            </div>

        </div>

      </>
    );
};

export default EcommerceAddProduct;
