import React, { useState, useEffect } from 'react';

const RecentShipments = () => {

  return (
    <>
      <div className="row align-items-center">
        <div className="col-xl-3 align-self-lg-stretch">
          <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
        </div>
        <div className="col-xl-9 font-size-13">
          <p class="mb-0 mt-3">Master Bol</p>
          <p class="mb-0">House Bol</p>
          <p class="mb-0">Container Number</p>
          <p class="mb-0">Arrival Date</p>
          <p class="mb-0">Country of Origin</p>
          <p class="mb-0">Port of Arrival</p>
        </div>
      </div>
      <div className="row align-items-center mt-5">
        <div className="col-xl-3 align-self-lg-stretch">
          <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
        </div>
        <div className="col-xl-9 font-size-13">
          <p class="mb-0 mt-3">Master Bol</p>
          <p class="mb-0">House Bol</p>
          <p class="mb-0">Container Number</p>
          <p class="mb-0">Arrival Date</p>
          <p class="mb-0">Country of Origin</p>
          <p class="mb-0">Port of Arrival</p>
        </div>
      </div>
    </>
  );
};

export default RecentShipments;
