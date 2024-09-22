import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';

const SearchBar = () => {

  const [dates, setDates] = useState();
  return (
    <>
      <form className="gx-3 align-items-center">
        <div className="row gy-2 align-items-center">
          <div className="col-auto">
            <label className="form-label mb-0">Search</label>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <input
              className="form-control"
              type="text"
              placeholder="Jane Doe"
            />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12">
            <select className="form-select">
              <option value="Product">Product</option>
              <option value="Supplier">Supplier</option>
              <option value="Importer">Importer</option>
              <option value="Master BOL">Master BOL</option>
              <option value="Notify Party">Notify Party</option>
              <option value="HS Code">HS Code</option>
              <option value="Address">Address</option>
            </select>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col-auto">
            <button type="reset" className="btn btn-outline-danger">
              Reset
            </button>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 cal-input">
            <Calendar
              className="w-100"
              value={dates}
              onChange={(e) => setDates(e.value)}
              selectionMode="range"
              readOnlyInput
              hideOnRangeSelection
              showIcon  icon={() => <i className="bx bx-calendar-event" />}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
