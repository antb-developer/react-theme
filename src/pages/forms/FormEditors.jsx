import React from 'react';

const FormEditors = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Ckeditor Classic Editor</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="ckeditor-classic"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="justify-content-between d-flex align-items-center my-1">
                                    <h5 className="mb-2 pb-3">Quilljs Editor</h5>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Snow Editor</h4>
                                    </div>
                                    <div className="card-body">

                                        <div id="snow-editor" style={{ height: "300px" }}>
                                            <h3><span className="ql-size-large">Hello World!</span></h3>
                                            <p><br /></p>
                                            <h3>This is an simple editable area.</h3>
                                            <p><br /></p>
                                            <ul>
                                                <li>
                                                    Select a text to reveal the toolbar.
                                                </li>
                                                <li>
                                                    Edit rich document on-the-fly, so elastic!
                                                </li>
                                            </ul>
                                            <p><br /></p>
                                            <p>
                                                End of simple area
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Bubble Editor</h4>
                                    </div>
                                    <div className="card-body">

                                        <div id="bubble-editor" style={{ height: "300px" }}>
                                            <h3><span className="ql-size-large">Hello World!</span></h3>
                                            <p><br /></p>
                                            <h3>This is an simple editable area.</h3>
                                            <p><br /></p>
                                            <ul>
                                                <li>
                                                    Select a text to reveal the toolbar.
                                                </li>
                                                <li>
                                                    Edit rich document on-the-fly, so elastic!
                                                </li>
                                            </ul>
                                            <p><br /></p>
                                            <p>
                                                End of simple area
                                            </p>
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

export default FormEditors;
