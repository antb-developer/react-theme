import React from 'react';

const MapsGoogle = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Markers</h4>
                                        <p className="card-title-desc">Example of google maps.</p>
                                    </div>
                                    <div className="card-body">
                                        <div id="gmaps-markers" className="gmaps"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Overlays</h4>
                                        <p className="card-title-desc">Example of google maps.</p>
                                    </div>
                                    <div className="card-body">
                                        <div id="gmaps-overlay" className="gmaps"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Street View Panoramas</h4>
                                        <p className="card-title-desc">Example of google maps.</p>
                                    </div>
                                    <div className="card-body">
                                        <div id="panorama" className="gmaps-panaroma"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Map Types</h4>
                                        <p className="card-title-desc">Example of google maps.</p>
                                    </div>
                                    <div className="card-body">
                                        <div id="gmaps-types" className="gmaps"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



      </>
    );
};

export default MapsGoogle;
