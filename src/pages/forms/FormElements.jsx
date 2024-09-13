import React from 'react';

const FormElements = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Textual inputs</h4>
                                        <p className="card-title-desc">Here are examples of <code>.form-control</code> applied to each
                                            textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>
                                    </div>
                                    <div className="card-body">

                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-text-input">Text</label>
                                            <div className="col-md-10">
                                                <input type="text" value="Artisanal kale" id="example-text-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-search-input">Search</label>
                                            <div className="col-md-10">
                                                <input type="search" value="How do I shoot web" id="example-search-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-email-input">Email</label>
                                            <div className="col-md-10">
                                                <input type="email" value="bootstrap@example.com" id="example-email-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-url-input">URL</label>
                                            <div className="col-md-10">
                                                <input type="url" value="https://getbootstrap.com" id="example-url-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-tel-input">Telephone</label>
                                            <div className="col-md-10">
                                                <input type="tel" value="1-(555)-555-5555" id="example-tel-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-password-input">Password</label>
                                            <div className="col-md-10">
                                                <input type="password" value="hunter2" id="example-password-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-number-input">Number</label>
                                            <div className="col-md-10">
                                                <input type="number" value="42" id="example-number-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-datetime-local-input">Date and time</label>
                                            <div className="col-md-10">
                                                <input type="datetime-local" value="2019-08-19T13:45:00" id="example-datetime-local-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-date-input">Date</label>
                                            <div className="col-md-10">
                                                <input type="date" value="2019-08-19" id="example-date-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-month-input">Month</label>
                                            <div className="col-md-10">
                                                <input type="month" value="2019-08" id="example-month-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-week-input">Week</label>
                                            <div className="col-md-10">
                                                <input type="week" value="2019-W33" id="example-week-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-time-input">Time</label>
                                            <div className="col-md-10">
                                                <input type="time" value="13:45:00" id="example-time-input" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label" htmlFor="example-color-input">Color picker</label>
                                            <div className="col-md-10">
                                          <input type="color" id="exampleColorInput" value="#1f58c7" title="Choose your color" className="form-control form-control-color" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-md-2 col-form-label">Select</label>
                                            <div className="col-md-10">
                                                <select className="form-select">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <label className="col-md-2 col-form-label" htmlFor="exampleDataList">Datalist</label>
                                            <div className="col-md-10">
                                                <input list="datalistOptions" id="exampleDataList" placeholder="Type to search..." className="form-control" />
                                                <datalist id="datalistOptions">
                                                    <option value="San Francisco">
                                                    </option><option value="New York">
                                                    </option><option value="Seattle">
                                                    </option><option value="Los Angeles">
                                                    </option><option value="Chicago">
                                                </option></datalist>
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
                                        <h4 className="card-title mb-0">Form layouts</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="mt-4 mt-xl-0">
                                                    <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Form groups</h5>
                                                    <form>
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="formrow-firstname-input">First Name</label>
                                                            <input type="text" placeholder="Enter First Name" id="formrow-firstname-input" className="form-control" />
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="formrow-email-input">Email</label>
                                                                    <input type="email" placeholder="Enter Email" id="formrow-email-input" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="formrow-password-input">Password</label>
                                                                    <input type="password" placeholder="Enter password" id="formrow-password-input" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-check">
                                                            <input type="checkbox" id="formrow-customCheck" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="formrow-customCheck">Check me out</label>
                                                        </div>

                                                        <div className="mt-4">
                                                            <button type="submit" className="btn btn-primary w-md">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 ms-lg-auto">
                                                <div className="mt-5 mt-lg-4 mt-xl-0">
                                                    <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Horizontal form</h5>

                                                    <form>
                                                        <div className="row mb-4">
                                                            <label className="col-sm-3 col-form-label" htmlFor="horizontal-firstname-input">First name</label>
                                                            <div className="col-sm-9">
                                                              <input type="text" placeholder="Enter First Name" id="horizontal-firstname-input" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <label className="col-sm-3 col-form-label" htmlFor="horizontal-email-input">Email</label>
                                                            <div className="col-sm-9">
                                                                <input type="email" placeholder="Enter Email" id="horizontal-email-input" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <label className="col-sm-3 col-form-label" htmlFor="horizontal-password-input">Password</label>
                                                            <div className="col-sm-9">
                                                              <input type="password" placeholder="Enter Password" id="horizontal-password-input" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-end">
                                                            <div className="col-sm-9">
                                                                <div className="form-check mb-4">
                                                                    <input type="checkbox" id="horizontal-customCheck" className="form-check-input" />
                                                                    <label className="form-check-label" htmlFor="horizontal-customCheck">Remember me</label>
                                                                </div>

                                                                <div>
                                                                    <button type="submit" className="btn btn-primary w-md">Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Inline forms layout</h5>

                                            <form className="row row-cols-lg-auto gx-3 gy-2 align-items-center">
                                                <div className="col-12">
                                                  <label className="visually-hidden" htmlFor="specificSizeInputName">Name</label>
                                                  <input type="text" id="specificSizeInputName" placeholder="Enter Name" className="form-control" />
                                                </div>
                                                <div className="col-12">
                                                  <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</label>
                                                  <div className="input-group">
                                                    <div className="input-group-text">@</div>
                                                    <input type="text" id="specificSizeInputGroupUsername" placeholder="Username" className="form-control" />
                                                  </div>
                                                </div>
                                                <div className="col-12">
                                                  <div className="form-check">
                                                    <input type="checkbox" id="autoSizingCheck2" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="autoSizingCheck2">
                                                      Remember me
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="col-12">
                                                  <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-lg-6">
                                                <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Inline forms layout used by hstack</h5>
                                                <form className="row gx-3 gy-2 align-items-center">
                                                    <div className="hstack gap-3">
                                                        <input type="text" placeholder="Add your item here..." className="form-control me-auto" />
                                                        <button type="button" className="btn btn-secondary">Submit</button>
                                                        <div className="vr"></div>
                                                        <button type="reset" className="btn btn-outline-danger">Reset</button>
                                                    </div>
                                                </form>
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
                                        <h4 className="card-title">Sizing</h4>
                                        <p className="card-title-desc">Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="default-input">Default input</label>
                                                <input type="text" id="default-input" placeholder="Default input" className="form-control" />
                                            </div>

                                            <div className="mb-4 mt-4">
                                                <label className="form-label" htmlFor="form-sm-input">Form Small input</label>
                                                <input type="text" id="form-sm-input" placeholder=".form-control-sm" className="form-control form-control-sm" />
                                            </div>

                                            <div className="mt-4 mb-0">
                                                <label className="form-label" htmlFor="form-lg-input">Form Large input</label>
                                                <input type="text" id="form-lg-input" placeholder=".form-control-lg" className="form-control form-control-lg" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Range Inputs</h4>
                                        <p className="card-title-desc">Create custom <code>&lt;input type="range"&gt;</code>
                                            controls with <code>.form-range</code>.</p>
                                    </div>
                                    <div className="card-body">

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="customRange1">Example range</label>
                                            <input type="range" id="customRange1" className="form-range" />
                                        </div>

                                        <div className="mb-4">
                                            <h5 className="font-size-14 mb-1">Min and max</h5>
                                            <p className="card-title-desc mb-2">Range inputs have implicit values for min and
                                                max—0 and 100, respectively.</p>
                                            <input type="range" min="0" max="5" id="customRange2" className="form-range" />
                                        </div>

                                        <div>
                                            <h5 className="font-size-14 mb-1">Steps</h5>
                                            <p className="card-title-desc mb-2">By default, range inputs “snap” to integer
                                                values. To change this, you can specify a <code>step</code> value.</p>
                                            <input type="range" min="0" max="5" id="customRange3" className="form-range" />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Checkboxes</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-5">

                                                <div>
                                                    <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Form Checkboxes
                                                    </h5>
                                                    <div className="form-check mb-3">
                                                        <input type="checkbox" id="formCheck1" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="formCheck1">
                                                            Form Checkbox
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="formCheck2" checked="" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="formCheck2">
                                                            Form Checkbox checked
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 ms-auto">

                                                <div className="mt-md-0">
                                                    <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Form Checkboxes
                                                        Right</h5>
                                                    <div>
                                                        <div className="form-check form-check-right mb-3">
                                                            <input type="checkbox" id="formCheckRight1" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="formCheckRight1">
                                                                Form Checkbox Right
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="form-check form-check-right">
                                                            <input type="checkbox" id="formCheckRight2" checked="" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="formCheckRight2">
                                                                Form Checkbox Right checked
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Radios</h4>
                                    </div>
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-md-5">
                                                <div>
                                                    <h5 className="font-size-14 mb-4">Form Radios</h5>
                                                    <div className="form-check mb-3">
                                                        <input type="radio" name="formRadios" id="formRadios1" checked="" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="formRadios1">
                                                            Form Radio
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" name="formRadios" id="formRadios2" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="formRadios2">
                                                            Form Radio checked
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ms-auto">
                                                <div className="mt-lg-0">
                                                    <h5 className="font-size-14 mb-4">Form Radios Right</h5>
                                                    <div>
                                                        <div className="form-check form-check-right mb-3">
                                                            <input type="radio" name="formRadiosRight" id="formRadiosRight1" checked="" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="formRadiosRight1">
                                                                Form Radio Right
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="form-check form-check-right">
                                                            <input type="radio" name="formRadiosRight" id="formRadiosRight2" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="formRadiosRight2">
                                                                Form Radio Right checked
                                                            </label>
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
                                        <h4 className="card-title">Switches</h4>
                                        <p className="card-title-desc">A switch has the markup of a custom
                                             checkbox but uses the <code>.custom-switch</code> class to render a toggle switch.
                                             Switches also support the <code>disabled</code> attribute.</p>
                                    </div>
                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-md-6">
                                                <div>
                                                 <h5 className="font-size-14 mb-3"><i className="mdi mdi-arrow-right text-primary me-1"></i> Switch examples</h5>

                                                    <div dir="ltr" className="form-check form-switch mb-3">
                                                        <input type="checkbox" id="customSwitch1" checked="" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="customSwitch1">Toggle this switch element</label>
                                                    </div>
                                                    <div dir="ltr" className="form-check form-switch">
                                                        <input type="checkbox" disabled="" id="customSwitch2" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="customSwitch2">Disabled switch element</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mt-4 mt-md-0">
                                                    <h5 className="font-size-14 mb-3"><i className="mdi mdi-arrow-right text-primary me-1"></i> Switch sizes</h5>

                                                    <div dir="ltr" className="form-check form-switch mb-3">
                                                        <input type="checkbox" id="customSwitchsizesm" checked="" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="customSwitchsizesm">Small Size Switch</label>
                                                    </div>

                                                    <div dir="ltr" className="form-check form-switch form-switch-md mb-3">
                                                        <input type="checkbox" id="customSwitchsizemd" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="customSwitchsizemd">Medium Size Switch</label>
                                                    </div>

                                                    <div dir="ltr" className="form-check form-switch form-switch-lg mb-3">
                                                        <input type="checkbox" id="customSwitchsizelg" checked="" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="customSwitchsizelg">Large Size Switch</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">File browser</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="mt-4 mt-xl-0">
                                                    <h5 className="font-size-14"><i className="mdi mdi-arrow-right text-primary"></i> Default file input</h5>

                                                    <div className="mt-4">
                                                        <label className="form-label" htmlFor="formFile">Default file input example</label>
                                                        <input type="file" id="formFile" className="form-control" />
                                                    </div>

                                                    <div className="mt-4">
                                                        <div>
                                                            <label className="form-label" htmlFor="formFileSm">Small file input example</label>
                                                            <input id="formFileSm" type="file" className="form-control form-control-sm" />
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <div>
                                                            <label className="form-label" htmlFor="formFileLg">Large file input example</label>
                                                            <input id="formFileLg" type="file" className="form-control form-control-lg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="mt-4 mt-xl-0">
                                                    <h5 className="font-size-14"><i className="mdi mdi-arrow-right text-primary"></i> Custom file input</h5>
                                                    <div className="mt-4">
                                                            <label className="form-label">With Label</label>
                                                            <div className="input-group mb-3">
                                                                <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                                                                <input type="file" id="inputGroupFile01" className="form-control" />
                                                            </div>
                                                            <div className="input-group">
                                                                <input type="file" id="inputGroupFile02" className="form-control" />
                                                                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                                            </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <label className="form-label">With Button</label>
                                                        <div className="input-group mb-3">
                                                            <button type="button" id="inputGroupFileAddon03" className="btn btn-primary">Button</button>
                                                            <input type="file" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" className="form-control" />
                                                          </div>

                                                          <div className="input-group">
                                                            <input type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" className="form-control" />
                                                            <button type="button" id="inputGroupFileAddon04" className="btn btn-primary">Button</button>
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

export default FormElements;
