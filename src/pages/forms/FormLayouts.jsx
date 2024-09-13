import React from 'react';

const FormLayouts = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Form Grid Layout</h4>
                                    </div>
                                    <div className="card-body">

                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="formrow-firstname-input">Enter First Name</label>
                                                <input type="text" placeholder="First Name" id="formrow-firstname-input" className="form-control" />
                                            </div>

                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="formrow-email-input">Enter Email</label>
                                                        <input type="email" placeholder="Email" id="formrow-email-input" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="formrow-password-input">Password</label>
                                                        <input type="password" placeholder="Enter Password" id="formrow-password-input" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="formrow-inputCity">City</label>
                                                        <input type="text" placeholder="Enter City" id="formrow-inputCity" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="formrow-inputState">State</label>
                                                        <select id="formrow-inputState" className="form-select">
                                                            <option selected="">Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="formrow-inputZip">Zip</label>
                                                        <input type="text" placeholder="Enter Zip" id="formrow-inputZip" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">

                                                <div className="form-check">
                                                    <input type="checkbox" id="gridCheck" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                      Check me out
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">Submit</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>


                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Horizontal Form Layout</h4>
                                    </div>
                                    <div className="card-body">

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
                                                        <input type="checkbox" id="horizontalLayout-Check" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="horizontalLayout-Check">
                                                            Remember me
                                                        </label>
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

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Auto Sizing</h5>
                                    </div>
                                    <div className="card-body">

                                        <form className="row gy-2 gx-3 align-items-center">
                                            <div className="col-sm-auto">
                                                <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
                                                <input type="text" id="autoSizingInput" placeholder="Jane Doe" className="form-control" />
                                            </div>
                                            <div className="col-sm-auto">
                                                <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
                                                <div className="input-group">
                                                    <div className="input-group-text">@</div>
                                                    <input type="text" id="autoSizingInputGroup" placeholder="Username" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-auto">
                                                <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                                <select id="autoSizingSelect" className="form-select">
                                                    <option selected="">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-auto">
                                                <div className="form-check">
                                                    <input type="checkbox" id="autoSizingCheck" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="autoSizingCheck">
                                                    Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-auto">
                                                <button type="submit" className="btn btn-primary w-md">Submit</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Inline forms</h5>
                                    </div>
                                    <div className="card-body">

                                        <form className="row row-cols-lg-auto g-3 align-items-center">
                                            <div className="col-12">
                                                <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                                                <div className="input-group">
                                                    <div className="input-group-text">@</div>
                                                    <input type="text" id="inlineFormInputGroupUsername" placeholder="Username" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                                                <select id="inlineFormSelectPref" className="form-select">
                                                    <option selected="">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input type="checkbox" id="inlineFormCheck" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="inlineFormCheck">
                                                    Remember me
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary w-md">Submit</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Floating labels</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title-desc">Create beautifully simple form labels that float over your input fields.</p>

                                        <form>
                                            <div className="form-floating mb-3">
                                                <input type="text" id="floatingnameInput" placeholder="Enter Name" className="form-control" />
                                                <label htmlFor="floatingnameInput">Name</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <input type="email" id="floatingemailInput" placeholder="Enter Email address" className="form-control" />
                                                        <label htmlFor="floatingemailInput">Email address</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <select id="floatingSelectGrid" aria-label="Floating label select example" className="form-select">
                                                            <option selected="">Open this select menu</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Works with selects</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">

                                                <div className="form-check">
                                                    <input type="checkbox" id="floatingCheck" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="floatingCheck">
                                                      Check me out
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">Submit</button>
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

export default FormLayouts;
