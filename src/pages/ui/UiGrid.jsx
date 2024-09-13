import React from 'react';

const UiGrid = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Grid Options</h4>
                                        <p className="card-title-desc">See how aspects of the Bootstrap grid
                                            system work across multiple devices with a handy table.</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col" className="text-center">
                                                          xs<br />
                                                          <span className="fw-normal">&lt;576px</span>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                          sm<br />
                                                          <span className="fw-normal">≥576px</span>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                          md<br />
                                                          <span className="fw-normal">≥768px</span>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                          lg<br />
                                                          <span className="fw-normal">≥992px</span>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                          xl<br />
                                                          <span className="fw-normal">≥1200px</span>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                          xxl<br />
                                                          <span className="fw-normal">≥1400px</span>
                                                        </th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Grid behavior</th>
                                                    <td>Horizontal at all times</td>
                                                    <td colspan="5">Collapsed to start, horizontal above breakpoints</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Max container width</th>
                                                    <td>None (auto)</td>
                                                    <td>540px</td>
                                                    <td>720px</td>
                                                    <td>960px</td>
                                                    <td>1140px</td>
                                                    <td>1320px</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Class prefix</th>
                                                    <td><code>.col-</code></td>
                                                    <td><code>.col-sm-</code></td>
                                                    <td><code>.col-md-</code></td>
                                                    <td><code>.col-lg-</code></td>
                                                    <td><code>.col-xl-</code></td>
                                                    <td><code>.col-xxl-</code></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap"># of columns</th>
                                                    <td colspan="6">12</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Gutter width</th>
                                                    <td colspan="6">24px (12px on each side of a column)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Custom gutters</th>
                                                    <td colspan="6">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Nestable</th>
                                                    <td colspan="6">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Offsets</th>
                                                    <td colspan="6">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-nowrap">Column ordering</th>
                                                    <td colspan="6">Yes</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Grid Example</h4>
                                        <p className="card-title-desc">Use flexbox alignment utilities to vertically and horizontally align columns</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="grid-structure">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="grid-container">
                                                        <code>col-lg-12</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-11">
                                                    <div className="grid-container">
                                                        <code>col-lg-11</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <div className="grid-container">
                                                        <code>col-lg-1</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-10">
                                                    <div className="grid-container">
                                                        <code>col-lg-10</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="grid-container">
                                                        <code>col-lg-2</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <div className="grid-container">
                                                        <code>col-lg-9</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="grid-container">
                                                        <code>col-lg-3</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="grid-container">
                                                        <code>col-lg-8</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="grid-container">
                                                        <code>col-lg-4</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <div className="grid-container">
                                                        <code>col-lg-7</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="grid-container">
                                                        <code>col-lg-5</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="grid-container">
                                                        <code>col-lg-6</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="grid-container">
                                                        <code>col-lg-6</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <div className="grid-container">
                                                        <code>col-lg-5</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="grid-container">
                                                        <code>col-lg-7</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="grid-container">
                                                        <code>col-lg-4</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="grid-container">
                                                        <code>col-lg-8</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="grid-container">
                                                        <code>col-lg-3</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="grid-container">
                                                        <code>col-lg-9</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <div className="grid-container">
                                                        <code>col-lg-2</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-10">
                                                    <div className="grid-container">
                                                        <code>col-lg-10</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-1">
                                                    <div className="grid-container">
                                                        <code>col-lg-1</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-11">
                                                    <div className="grid-container">
                                                        <code>col-lg-11</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <div className="grid-container">
                                                        <code>col-lg-2</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="grid-container">
                                                        <code>col-lg-3</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="grid-container">
                                                        <code>col-lg-4</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="grid-container">
                                                        <code>col-lg-2</code>
                                                    </div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <div className="grid-container">
                                                        <code>col-lg-1</code>
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
                                        <h4 className="card-title">Alignment</h4>
                                        <p className="card-title-desc">Use flexbox alignment utilities to vertically and horizontally align columns</p>
                                    </div>

                                    <div className="card-body">
                                        <div>
                                            <h5 className="font-size-13 mb-3">Vertical alignment (align-items-start)</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div style={{ minHeight: "6rem" }} className="row align-items-start">
                                                    <div className="col-sm-4">
                                                        <div className="grid-example">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="font-size-13 mb-2">Align Items Center</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div style={{ minHeight: "6rem" }} className="row align-items-center">
                                                    <div className="col-sm-4">
                                                        <div className="grid-example">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="font-size-13 mb-2">Align Items End</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div style={{ minHeight: "6rem" }} className="row align-items-end">
                                                    <div className="col-sm-4">
                                                        <div className="grid-example">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>col-sm-4</code>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="font-size-13 mb-2">Align Self</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div style={{ minHeight: "6rem" }} className="row">
                                                    <div className="col-4 align-self-start">
                                                        <div className="grid-example">
                                                            <code>align-self-start</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 align-self-center">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>align-self-center</code>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 align-self-end">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>align-self-end</code>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="font-size-13 mb-2">Horizontal Alignment</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div className="row justify-content-start">
                                                    <div className="col-4">
                                                        <div className="grid-example">
                                                            <code>justify-content-start</code>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>justify-content-center</code>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-end">
                                                    <div className="col-4">
                                                        <div className="grid-example mt-2 mt-sm-0">
                                                            <code>justify-content-end</code>
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
                                        <h4 className="card-title">Stacks</h4>
                                        <p className="card-title-desc">Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.</p>
                                    </div>

                                    <div className="card-body">
                                        <div>
                                            <h5 className="font-size-13 mb-3">Vertical Stacks (<code>.vstack</code>)</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div className="vstack gap-3">
                                                    <div className="grid-example">First item</div>
                                                    <div className="grid-example">Second item</div>
                                                    <div className="grid-example">Third item</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="font-size-13 mb-3">Horizontal Stacks (<code>.hstack</code>)</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div className="hstack gap-3">
                                                    <div className="grid-example">First item</div>
                                                    <div className="grid-example">Second item</div>
                                                    <div className="grid-example">Third item</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="font-size-13 mb-3">Horizontal Stacks (<code>.hstack</code>) with Vertical Rule (<code>.vr</code>)</h5>
                                            <div className="bg-light-subtle p-3 text-center">
                                                <div className="hstack gap-3">
                                                    <div className="grid-example">First item</div>
                                                    <div className="vr"></div>
                                                    <div className="grid-example">Second item</div>
                                                    <div className="vr"></div>
                                                    <div className="grid-example">Third item</div>
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

export default UiGrid;
