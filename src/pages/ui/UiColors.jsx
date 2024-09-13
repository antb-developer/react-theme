import React from 'react';

const UiColors = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Grid options</h4>
                                        <p className="card-title-desc">See how aspects of the Bootstrap grid
                                            system work across multiple devices with a handy table.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-nowrap align-middle mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            Colors
                                                        </th>
                                                        <th scope="col" colspan="2" className="text-center">
                                                           Background <br /> Gradient
                                                        </th>
                                                        <th scope="col" colspan="2" className="text-center">
                                                            Background <br /> Color
                                                        </th>
                                                        <th scope="col" colspan="2" className="text-center">
                                                            Background <br /> Soft
                                                        </th>
                                                        <th scope="col" colspan="2" className="text-center">
                                                            Border <br /> Colors
                                                        </th>
                                                        <th scope="col" colspan="2" className="text-center">
                                                            Text <br /> Colors
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Primary
                                                        </th>
                                                        <td style={{ width: "100px" }} >
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "180px" }} >
                                                            <div className="bg-primary bg-gradient p-2"></div>
                                                        </td>
                                                        <td style={{ width: "100px" }} >
                                                            <code>.bg-primary</code>
                                                        </td>
                                                        <td style={{ width: "180px" }} >
                                                            <div className="bg-primary p-2"></div>
                                                        </td>
                                                        <td style={{ width: "100px" }} >
                                                            <code>.bg-subtle-primary</code>
                                                        </td>
                                                        <td style={{ width: "180px" }} >
                                                            <div className="bg-primary-subtle p-2"></div>
                                                        </td>
                                                        <td style={{ width: "100px" }} >
                                                            <code>.border-primary</code>
                                                        </td>
                                                        <td style={{ width: "180px" }} >
                                                            <div className="border border-primary p-2"></div>
                                                        </td>
                                                        <td style={{ width: "100px" }} >
                                                            <code>.text-primary</code>
                                                        </td>
                                                        <td style={{ width: "100px" }} >
                                                            <div className="text-primary">text-primary</div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <th scope="row" className="">
                                                            Secondary
                                                        </th>
                                                        <td>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-secondary bg-gradient p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-secondary</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-secondary p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-subtle-secondary</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-secondary-subtle p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.border-secondary</code>
                                                        </td>
                                                        <td>
                                                            <div className="border border-secondary p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.text-secondary</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-secondary">text-secondary</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Success
                                                        </th>
                                                        <td>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-success bg-gradient p-2 align-self-center"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-success</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-success p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-subtle-success</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-success-subtle p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.border-success</code>
                                                        </td>
                                                        <td>
                                                            <div className="border border-success p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.text-success</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-success">text-success</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Info
                                                        </th>
                                                        <td>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-info bg-gradient p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-info</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-info p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-subtle-info</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-info-subtle p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.border-info</code>
                                                        </td>
                                                        <td>
                                                            <div className="border border-info p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.text-info</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-info">text-info</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Warning
                                                        </th>
                                                        <td>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-warning bg-gradient p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-warning</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-warning p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-subtle-warning</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-warning-subtle p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.border-warning</code>
                                                        </td>
                                                        <td>
                                                            <div className="border border-warning p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.text-warning</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-warning">text-warning</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Danger
                                                        </th>
                                                        <td>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-danger bg-gradient p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-danger</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-danger p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-subtle-danger</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-danger-subtle p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.border-danger</code>
                                                        </td>
                                                        <td>
                                                            <div className="border border-danger p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.text-danger</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-danger">text-danger</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Dark
                                                        </th>
                                                        <td>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-dark bg-gradient p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-dark</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-dark p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-subtle-dark</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-dark-subtle p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.border-dark</code>
                                                        </td>
                                                        <td>
                                                            <div className="border border-dark p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.text-dark</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-dark">text-dark</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Light
                                                        </th>
                                                        <td>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-light bg-gradient p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-light</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-light p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.bg-subtle-light</code>
                                                        </td>
                                                        <td>
                                                            <div className="bg-light-subtle p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.border-light</code>
                                                        </td>
                                                        <td>
                                                            <div className="border border-light p-2"></div>
                                                        </td>
                                                        <td>
                                                            <code>.text-light</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-light bg-dark">text-light</div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <th scope="row" className="">
                                                            Body
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-body</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-body">text-body</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Muted
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-muted</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-muted">text-muted</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            White
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-white</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-white bg-dark">text-white</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            White-50
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-white-50</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-white-50 bg-dark">text-white-50</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Black-50
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-black-50</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-black-50">text-black-50</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Opacity-25
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center"><code>.opacity-25</code></div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <div className="bg-primary opacity-25 p-2"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-opacity-25</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-opacity-25 text-primary">text-opacity-25</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Opacity-50
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center"><code>.opacity-50</code></div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <div className="bg-primary opacity-50 p-2"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-opacity-50</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-opacity-50 text-primary">text-opacity-50</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Opacity-75
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center"><code>.opacity-75</code></div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <div className="bg-primary opacity-75 p-2"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-opacity-75</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-opacity-75 text-primary">text-opacity-75</div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="">
                                                            Opacity-100
                                                        </th>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center"><code>.opacity-100</code></div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <div className="bg-primary opacity-100 p-2"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">-</div>
                                                        </td>
                                                        <td>
                                                            <code>.text-opacity-100</code>
                                                        </td>
                                                        <td>
                                                            <div className="text-opacity-100 text-primary">text-opacity-100</div>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
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

export default UiColors;
