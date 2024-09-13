import React from 'react';
import { VectorMap } from "react-jvectormap";

const Map = () => {


<VectorMap
  ref={mapRef}
  zoomOnScroll={false}
  zoomButtons={false}
  map={"world_mill"}
  backgroundColor="white"
  containerStyle={{
    height: "400px",
    width: "100%"
  }}
  markerStyle={{
    initial: {
      fill: "#5E32CA",
      stroke: "#383f47",
    },
  }}
  containerClassName="map"
  series={{
    regions: [
      {
        scale: ["#E2AEFF"],
        attribute: "fill",
        values: { SG: 100, IN: 100 },
        normalizeFunction: "polynomial",
        min: 0,
        max: 100,
      },
    ],
  }}
  markers={[
    {
      latLng: [1.3521, 103.8198],
      name: "Singapore",
    },
  ]}
  regionStyle={{
    initial: {
      fill: "#D1D5DB",
      "fill-opacity": 1,
      stroke: "#ff0000",
    },
    hover: {
      "fill-opacity": 0.8,
      fill: "#ffff00",
      stroke: "#ff0000",
    },
    selected: {
      fill: "#FFFB00",
    },
  }}

/>    );
  }
  export default DashboardCustom;
