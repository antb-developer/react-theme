import React from 'react';

const FormUploads = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Dropzone</h4>
                                        <p className="card-title-desc">DropzoneJS is an open source library
                                            that provides drag’n’drop file uploads with image previews.
                                        </p>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <form action="#" className="dropzone">
                                                <div className="fallback">
                                                    <input name="file" type="file" multiple="multiple" />
                                                </div>
                                                <div className="dz-message needsclick">
                                                    <div className="mb-3">
                                                        <i className="display-4 text-muted mdi mdi-cloud-upload"></i>
                                                    </div>

                                                    <h4>Drop files here or click to upload.</h4>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="text-center mt-4">
                                            <button type="button" className="btn btn-primary waves-effect waves-light">Send Files</button>
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

export default FormUploads;
