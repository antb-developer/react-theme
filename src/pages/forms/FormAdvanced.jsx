import React from 'react';

const FormAdvanced = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Css Switch</h4>
                                        <p className="card-title-desc">Here are a few types of switches. </p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h5 className="font-size-14 mb-3">Example switch</h5>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <input type="checkbox" id="switch1" switch="none" checked="" />
                                                    <label data-on-label="On" data-off-label="Off" htmlFor="switch1"></label>

                                                    <input type="checkbox" id="switch2" switch="default" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch2"></label>

                                                    <input type="checkbox" id="switch3" switch="bool" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch3"></label>

                                                    <input type="checkbox" id="switch6" switch="primary" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch6"></label>

                                                    <input type="checkbox" id="switch4" switch="success" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch4"></label>

                                                    <input type="checkbox" id="switch7" switch="info" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch7"></label>

                                                    <input type="checkbox" id="switch5" switch="warning" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch5"></label>

                                                    <input type="checkbox" id="switch8" switch="danger" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch8"></label>

                                                    <input type="checkbox" id="switch9" switch="dark" checked="" />
                                                    <label data-on-label="Yes" data-off-label="No" htmlFor="switch9"></label>
                                                </div>
                                            </div>


                                            <div className="col-lg-6">
                                                <div className="mt-4 mt-lg-0">
                                                    <h5 className="font-size-14 mb-3">Square switch</h5>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        <div className="square-switch">
                                                            <input type="checkbox" id="square-switch1" switch="none" checked="" />
                                                            <label data-on-label="On" data-off-label="Off" htmlFor="square-switch1"></label>
                                                        </div>
                                                        <div className="square-switch">
                                                            <input type="checkbox" id="square-switch2" switch="info" checked="" />
                                                            <label data-on-label="Yes" data-off-label="No" htmlFor="square-switch2"></label>
                                                        </div>
                                                        <div className="square-switch">
                                                            <input type="checkbox" id="square-switch3" switch="bool" checked="" />
                                                            <label data-on-label="Yes" data-off-label="No" htmlFor="square-switch3"></label>
                                                        </div>
                                                        <div className="square-switch">
                                                            <input type="checkbox" id="square-switch4" switch="warning" checked="" />
                                                            <label data-on-label="Yes" data-off-label="No" htmlFor="square-switch4"></label>
                                                        </div>
                                                        <div className="square-switch">
                                                            <input type="checkbox" id="square-switch5" switch="danger" checked="" />
                                                            <label data-on-label="Yes" data-off-label="No" htmlFor="square-switch5"></label>
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
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Choices</h4>
                                        <p className="card-title-desc">Choices.js is a lightweight, configurable select box/text input plugin.</p>
                                    </div>


                                    <div className="card-body">
                                        <div>
                                            <h5 className="font-size-14 mb-3">Single select input Example</h5>

                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-single-default">Default</label>
                                                        <select data-trigger="" name="choices-single-default" id="choices-single-default" placeholder="This is a search placeholder" className="form-control" >
                                                            <option value="">This is a placeholder</option>
                                                            <option value="Choice 1">Choice 1</option>
                                                            <option value="Choice 2">Choice 2</option>
                                                            <option value="Choice 3">Choice 3</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-single-groups">Option
                                                            groups</label>
                                                        <select data-trigger="" name="choices-single-groups" id="choices-single-groups" className="form-control" >
                                                            <option value="">Choose a city</option>
                                                            <optgroup label="UK">
                                                                <option value="London">London</option>
                                                                <option value="Manchester">Manchester</option>
                                                                <option value="Liverpool">Liverpool</option>
                                                            </optgroup>
                                                            <optgroup label="FR">
                                                                <option value="Paris">Paris</option>
                                                                <option value="Lyon">Lyon</option>
                                                                <option value="Marseille">Marseille</option>
                                                            </optgroup>
                                                            <optgroup label="DE" disabled="">
                                                                <option value="Hamburg">Hamburg</option>
                                                                <option value="Munich">Munich</option>
                                                                <option value="Berlin">Berlin</option>
                                                            </optgroup>
                                                            <optgroup label="US">
                                                                <option value="New York">New York</option>
                                                                <option value="Washington" disabled="">Washington</option>
                                                                <option value="Michigan">Michigan</option>
                                                            </optgroup>
                                                            <optgroup label="SP">
                                                                <option value="Madrid">Madrid</option>
                                                                <option value="Barcelona">Barcelona</option>
                                                                <option value="Malaga">Malaga</option>
                                                            </optgroup>
                                                            <optgroup label="CA">
                                                                <option value="Montreal">Montreal</option>
                                                                <option value="Toronto">Toronto</option>
                                                                <option value="Vancouver">Vancouver</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-single-no-search">Options added
                                                            via config with no search</label>
                                                        <select name="choices-single-no-search" id="choices-single-no-search" className="form-control" >
                                                            <option value="0">Zero</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-single-no-sorting">Options added
                                                            via config with no search</label>
                                                        <select name="choices-single-no-sorting" id="choices-single-no-sorting" className="form-control" >
                                                            <option value="Madrid">Madrid</option>
                                                            <option value="Toronto">Toronto</option>
                                                            <option value="Vancouver">Vancouver</option>
                                                            <option value="London">London</option>
                                                            <option value="Manchester">Manchester</option>
                                                            <option value="Liverpool">Liverpool</option>
                                                            <option value="Paris">Paris</option>
                                                            <option value="Malaga">Malaga</option>
                                                            <option value="Washington" disabled="">Washington</option>
                                                            <option value="Lyon">Lyon</option>
                                                            <option value="Marseille">Marseille</option>
                                                            <option value="Hamburg">Hamburg</option>
                                                            <option value="Munich">Munich</option>
                                                            <option value="Barcelona">Barcelona</option>
                                                            <option value="Berlin">Berlin</option>
                                                            <option value="Montreal">Montreal</option>
                                                            <option value="New York">New York</option>
                                                            <option value="Michigan">Michigan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                        <div className="mt-4">
                                            <h5 className="font-size-14 mb-3">Multiple select input</h5>

                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-multiple-default">Default</label>
                                                        <select data-trigger="" name="choices-multiple-default" id="choices-multiple-default" placeholder="This is a placeholder" multiple="" className="form-control" >
                                                            <option value="Choice 1" selected="">Choice 1</option>
                                                            <option value="Choice 2">Choice 2</option>
                                                            <option value="Choice 3">Choice 3</option>
                                                            <option value="Choice 4" disabled="">Choice 4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-multiple-remove-button">With
                                                            remove button</label>
                                                        <select name="choices-multiple-remove-button" id="choices-multiple-remove-button" placeholder="This is a placeholder" multiple="" className="form-control" >
                                                            <option value="Choice 1" selected="">Choice 1</option>
                                                            <option value="Choice 2">Choice 2</option>
                                                            <option value="Choice 3">Choice 3</option>
                                                            <option value="Choice 4">Choice 4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-multiple-groups">Option
                                                            groups</label>
                                                        <select name="choices-multiple-groups" id="choices-multiple-groups" placeholder="This is a placeholder" multiple="" className="form-control" >
                                                            <option value="">Choose a city</option>
                                                            <optgroup label="UK">
                                                                <option value="London">London</option>
                                                                <option value="Manchester">Manchester</option>
                                                                <option value="Liverpool">Liverpool</option>
                                                            </optgroup>
                                                            <optgroup label="FR">
                                                                <option value="Paris">Paris</option>
                                                                <option value="Lyon">Lyon</option>
                                                                <option value="Marseille">Marseille</option>
                                                            </optgroup>
                                                            <optgroup label="DE" disabled="">
                                                                <option value="Hamburg">Hamburg</option>
                                                                <option value="Munich">Munich</option>
                                                                <option value="Berlin">Berlin</option>
                                                            </optgroup>
                                                            <optgroup label="US">
                                                                <option value="New York">New York</option>
                                                                <option value="Washington" disabled="">Washington</option>
                                                                <option value="Michigan">Michigan</option>
                                                            </optgroup>
                                                            <optgroup label="SP">
                                                                <option value="Madrid">Madrid</option>
                                                                <option value="Barcelona">Barcelona</option>
                                                                <option value="Malaga">Malaga</option>
                                                            </optgroup>
                                                            <optgroup label="CA">
                                                                <option value="Montreal">Montreal</option>
                                                                <option value="Toronto">Toronto</option>
                                                                <option value="Vancouver">Vancouver</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="mt-4">
                                            <h5 className="font-size-14 mb-3">Text inputs</h5>

                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-text-remove-button">Limited to 5
                                                            values with remove button</label>
                                                        <input id="choices-text-remove-button" type="text" value="Task-1,Task-2" placeholder="Enter something" className="form-control" />
                                                    </div>
                                                </div>


                                                <div className="col-lg-4 col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label font-size-13 text-muted" htmlFor="choices-text-unique-values">Unique values
                                                            only, no pasting</label>
                                                        <input id="choices-text-unique-values" type="text" value="Project-A, Project-B" placeholder="This is a placeholder" className="form-control" />
                                                    </div>
                                                </div>

                                            </div>


                                            <div>
                                                <label className="form-label font-size-13 text-muted" htmlFor="choices-text-disabled">Disabled</label>
                                                <input id="choices-text-disabled" type="text" value="josh@joshuajohnson.co.uk, joe@bloggs.co.uk" placeholder="This is a placeholder" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Colorpicker</h4>
                                        <p className="card-title-desc">Flat, Simple, Hackable Color-Picker.</p>
                                    </div>
                                    <div className="card-body">

                                        <div className="text-center">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="mt-4">
                                                        <h5 className="font-size-14">Classic Demo</h5>
                                                        <div className="classic-colorpicker"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="mt-4">
                                                        <h5 className="font-size-14">Monolith Demo</h5>
                                                        <div className="monolith-colorpicker"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="mt-4">
                                                        <h5 className="font-size-14">Nano Demo</h5>
                                                        <div className="nano-colorpicker"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Datepicker</h4>
                                        <p className="card-title-desc">flatpickr is a lightweight and powerful datetime picker.</p>
                                    </div>
                                    <div className="card-body">

                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Basic</label>
                                                        <input type="text" id="datepicker-basic" className="form-control" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label">DateTime</label>
                                                        <input type="text" id="datepicker-datetime" className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Human-friendly Dates</label>
                                                        <input type="text" id="datepicker-humanfd" className="form-control flatpickr-input" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label">MinDate and MaxDate</label>
                                                        <input type="text" id="datepicker-minmax" className="form-control" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label">Disabling dates</label>
                                                        <input type="text" id="datepicker-disable" className="form-control" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label">Selecting multiple dates</label>
                                                        <input type="text" id="datepicker-multiple" className="form-control" />
                                                    </div>

                                                    <div>
                                                        <label className="form-label">Range</label>
                                                        <input type="text" id="datepicker-range" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="mt-3 mt-lg-0">
                                                        <div className="mb-3">
                                                            <label className="form-label">Timepicker</label>
                                                            <input type="text" id="datepicker-timepicker" className="form-control" />
                                                        </div>

                                                        <div>
                                                            <label className="form-label">Inline Date Picker Demo</label>
                                                            <input type="text" id="datepicker-inline" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>


      </>
    );
};

export default FormAdvanced;
