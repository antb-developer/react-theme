import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const TopHSCodes = () => {


    const salesCategoryChartsOptions = {
      chart: { ype: "donut" },
      series: [24, 18, 13, 15],
      labels: ["Fashion", "Beauty", "Clothing", "Others"],
      colors: ["#1f58c7", "#4976cf","#6a92e1", "#e6ecf9"],
        plotOptions: { pie: { startAngle: 25, donut: { size: "72%", labels: { show: !0, total: { show: !0, label: "Products", fontSize: "18px", fontFamily: "Montserrat,sans-serif", fontWeight: 600 } } } } },
      legend: { show: !1, position: "bottom", horizontalAlign: "center", verticalAlign: "middle", floating: !1, fontSize: "14px", offsetX: 0 },
      dataLabels: {
          style: { fontSize: "11px", fontFamily: "Montserrat,sans-serif", fontWeight: "bold", colors: void 0 },
          background: { enabled: !0, foreColor: "#fff", padding: 4, borderRadius: 2, borderWidth: 1, borderColor: "#fff", opacity: 1 },
      },
      responsive: [{ breakpoint: 600, options: { chart: { height: 260 }, legend: { show: false } } }]
    }
  return (
    <>
    <div className="d-flex align-items-start">
      <div className="flex-grow-1 overflow-hidden">
        <h5 className="card-title mb-4 text-truncate">
          Top HS Codes
        </h5>
      </div>
      <div className="flex-shrink-0 ms-2">
        <div className="dropdown">
          <a
            className="dropdown-toggle text-reset"
            href="#"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="fw-semibold">Sort By:</span>{" "}
            <span className="text-muted">
              Weekly
              <i className="mdi mdi-chevron-down ms-1" />
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">
              Yearly
            </a>
            <a className="dropdown-item" href="#">
              Monthly
            </a>
            <a className="dropdown-item" href="#">
              Weekly
            </a>
          </div>
        </div>
      </div>
    </div>
    {<ReactApexChart
      options={salesCategoryChartsOptions}
      series={salesCategoryChartsOptions.series}
      type="donut"
      height={ '280' }
      className="position-relative"
      style={{top: "10px"}}
    />}
    <div className="position-relative row" style={{top: "20px"}}>
      <div className="col-md-6">
        <div className="px-2 mt-2">
          <div className="d-flex align-items-center mt-sm-0 mt-2">
            <i className="mdi mdi-circle font-size-10 text-primary" />
            <div className="flex-grow-1 ms-2 overflow-hidden">
              <p className="font-size-15 mb-1 text-truncate">
                Men Fashion
              </p>
            </div>
            <div className="flex-shrink-0 ms-2">
              <span className="fw-bold">34.3%</span>
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <i className="mdi mdi-circle font-size-10 text-success" />
            <div className="flex-grow-1 ms-2 overflow-hidden">
              <p className="font-size-15 mb-0 text-truncate">
                Women Clothing
              </p>
            </div>
            <div className="flex-shrink-0 ms-2">
              <span className="fw-bold">25.7%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="px-2 mt-2">
          <div className="d-flex align-items-center mt-sm-0 mt-2">
            <i className="mdi mdi-circle font-size-10 text-info" />
            <div className="flex-grow-1 ms-2 overflow-hidden">
              <p className="font-size-15 mb-1 text-truncate">
                Beauty Products
              </p>
            </div>
            <div className="flex-shrink-0 ms-2">
              <span className="fw-bold">18.6%</span>
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <i className="mdi mdi-circle font-size-10 text-secondary" />
            <div className="flex-grow-1 ms-2 overflow-hidden">
              <p className="font-size-15 mb-0 text-truncate">
                Others Products
              </p>
            </div>
            <div className="flex-shrink-0 ms-2">
              <span className="fw-bold">21.4%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TopHSCodes;
