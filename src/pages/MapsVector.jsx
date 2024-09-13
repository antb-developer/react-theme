import React from 'react';

const MapsVector = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">World Vector Map</h4>
                                     </div>
                                    <div className="card-body">
                                        <div id="world-map-line-markers" style="height: 420px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">World Vector Map with Markers</h4>
                                    </div>

                                    <div className="card-body">
                                        <div id="world-map-markers" style="height: 350px"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">World Vector Map with Image Markers</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="world-map-markers-image" style="height: 350px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0"></h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="usa-vectormap" style="height: 350px"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Canada Vector Map</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="canada-vectormap" style="height: 350px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>



      </>
    );
};

export default MapsVector;
