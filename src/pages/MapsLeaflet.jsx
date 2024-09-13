import React from 'react';

const MapsLeaflet = () => {
    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Example</h4>
                                     </div>
                                    <div className="card-body">
                                        <div id="leaflet-map" className="leaflet-map"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Markers, Circles and Polygons</h4>
                                     </div>
                                    <div className="card-body">
                                        <div id="leaflet-map-marker" className="leaflet-map"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Working with Popups</h4>
                                     </div>
                                    <div className="card-body">
                                        <div id="leaflet-map-popup" className="leaflet-map"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Markers with Custom Icons</h4>
                                     </div>
                                    <div className="card-body">
                                        <div id="leaflet-map-custom-icons" className="leaflet-map"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Interactive Choropleth Map</h4>
                                     </div>
                                    <div className="card-body">
                                        <div id="leaflet-map-interactive-map" className="leaflet-map"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Layer Groups and Layers Control</h4>
                                     </div>
                                    <div className="card-body">
                                        <div id="leaflet-map-group-control" className="leaflet-map"></div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>



      </>
    );
};

export default MapsLeaflet;
