import React from 'react';

const FormMask = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Imask</h4>
                                        <p className="card-title-desc mb-0">vanilla javascript input mask</p>
                                    </div>
                                    <div className="card-body">

                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div>
                                                        <div>
                                                            <label className="form-label" htmlFor="regexp-mask">RegExp (Russian postal code)</label>
                                                            <input type="text" id="regexp-mask" className="form-control" />
                                                            <div className="text-muted">/^[1-6]\d{0,5}$/</div>
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="form-label" htmlFor="phone-mask">Pattern (Phone)</label>
                                                            <input type="text" id="phone-mask" className="form-control" />
                                                            <div className="text-muted">+{7}(000)000-00-00</div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <label className="form-label" htmlFor="number-mask">Number</label>
                                                            <input type="text" id="number-mask" className="form-control" />
                                                            <div className="text-muted">in range [-10000, 10000]</div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-6">
                                                    <div className="mt-4 mt-lg-0">
                                                        <div>
                                                            <label className="form-label" htmlFor="date-mask">Date</label>
                                                            <input type="text" id="date-mask" className="form-control" />
                                                            <div className="text-muted">'dd.mm.yyyy' in range [01.01.1990, 01.01.2020]</div>
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="form-label">On-the-fly select</label>
                                                            <input type="text" id="dynamic-mask" className="form-control" />
                                                            <div className="text-muted">phone or email</div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <label className="form-label">Mask in mask</label>
                                                            <input type="text" id="currency-mask" className="form-control" />
                                                            <div className="text-muted">currency input</div>
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

export default FormMask;
