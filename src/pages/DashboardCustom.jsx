import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import SimpleBarReact from "simplebar-react";
import { VectorMap } from "react-jvectormap";
import { Calendar } from 'primereact/calendar';

import DataTableComponent from '../components/DataTableComponent';

const DashboardCustom = () => {

  const [dates, setDates] = useState();
  const salesCountries = {
      series: [{ data: [430, 570, 640, 680, 790] }],
      chart: { type: "bar", height: 500, width: 500, toolbar: { show: !1 } },
      colors: ["#1f58c7"],
      plotOptions: { bar: { distributed: true , barHeight: '90%', borderRadius: 4, horizontal: !0, dataLabels : { position : 'bottom' } } },
      dataLabels: {
        textAnchor: 'start',
         formatter: function(val, opt) {
           return opt.w.globals.labels[opt.dataPointIndex];
         },
         offsetX: 0
      },
      stroke: { width: 0 },
      yaxis: { labels: { show: false } },
      xaxis: { categories: ["Shanghai, China (Mainland)", "Yantian, China (Mainland)", "Ningpo, China (Mainland)", "Kaohsiung, China (Mainland)", "Tsingtao, China (Mainland)"] },
      legend: { show: false }
  };

  const topPortsOfArrival = { ...salesCountries, xaxis: { categories: ["Los Angles, California", "New York/Newyark Area, New York", "Long Beach, California", "Tacoma, Washington", "Seattle, Washington"] } };
  const topSuplliers = { ...salesCountries, xaxis: { categories: ["ZF Wind Power Coimbatore Pv", "Jiangsu Guotai Huasheng Industries","Kuehne & Nagel Limited","Shanghai Qiangling Electronics","Shanxi Taigang Stainless Steel"] } };
  const topImporters = { ...salesCountries, xaxis: { categories: ["Kohler Co.", "Primark Us Corp", "Costco Wholesale Canada Ltd", "Golden Stage Fc gesellIdControl", "Safety Zone Lic"] } };

  const chartOptions = {
    // colors: ["#1f58c7"],
    plotOptions: {
      bar: {
        borderRadius: 10,
      }
    },
    dataLabels : { enabled : false },
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    colors: [
      function ({ dataPointIndex }) {
        return dataPointIndex < 5 ? "#E6ECF9" : "#1f58c7";
      }
    ]
  };

  const salesChartsOptions = {
    series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
    chart: { type: "area", width: 150, height: 50, sparkline: { enabled: !0 },
    dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        color: '#1f58c7',
        opacity: 0.3
    }},
    // fill: { type: "gradient" },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#1f58c7"],
    tooltip: {
        fixed: { enabled: !1 },
        x: { show: !1 },
        y: {
            title: {
                formatter: function (e) {
                    return "";
                },
            },
        },
        marker: { show: !1 },
    }
  }

  const salesChartsOptionspp = {
    series: [
      {
        data: [
          50,
          15,
          35,
          62,
          23,
          56,
          44,
          12,
          36,
          9,
          54,
          23
        ]
      }
    ],
    chart: {
      type: "area",
      width: 200,
      height: 40,
      sparkline: {
        enabled: !0
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: .45,
        opacityTo: .05,
        stops: [
          20,
          100,
          100,
          100
        ]
      }
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    colors: ["#1f58c7"],
    tooltip: {
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function(r){
            return""
          }
        }
      },
      marker: {
        show: !1
      }
    }
  };


  const salesCategoryChartsOptions = {
    chart: { height: 650, type: "donut" },
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

  var mapData = {
    AU: 760,
    BR: 550,
    CA: 120,
    DE: 1300,
    FR: 540,
    GB: 690,
    GE: 200,
    IN: 200,
    RO: 600,
    RU: 300,
    US: 2920
  };

  const regionStyle = {
    initial: {
      fill: "#e4e4e4",
      "fill-opacity": 0.9,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 0
    }
  };

  const series = {
    regions: [
      {
        values: mapData,
        scale: ["#AAAAAA"],
        normalizeFunction: "polynomial"
      }
    ]
  }

  const containerStyle = {
    width: "100%",
    height: "420px"
  };

  useEffect(() => {
  }, []);

  const mapRef = useRef();
    return (
      <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <form className="row gx-3 align-items-center">
                      <div className="hstack gap-3">
                        <label> Search </label>
                        <input
                          className="form-control me-auto"
                          type="text"
                          placeholder="Jane Doe"
                          style={{ width : "30%" }}
                        />
                        <select className="form-select" style={{ width : "20%" }}>
                          <option value="Product">Product</option>
                          <option value="Supplier">Supplier</option>
                          <option value="Importer">Importer</option>
                          <option value="Master BOL">Master BOL</option>
                          <option value="Notify Party">Notify Party</option>
                          <option value="HS Code">HS Code</option>
                        </select>
                        <button type="button" className="btn btn-primary">
                          Submit
                        </button>
                        <button type="reset" className="btn btn-outline-danger">
                          Reset
                        </button>
                        <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection  style={{ width : "40%" }}/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-title rounded bg-primary-subtle ">
                              <i className="bx bx-check-shield font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-0 font-size-15">Total Sales</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal text-muted font-size-22" />
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
                                <a className="dropdown-item" href="#">
                                  Today
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="mt-4 pt-1 mb-0 font-size-22">
                            $34,123.20{" "}
                            <span className="text-success fw-medium font-size-13 align-middle">
                              {" "}
                              <i className="mdi mdi-arrow-up" /> 8.34%{" "}
                            </span>{" "}
                          </h4>
                          <div className="d-flex mt-1 align-items-end overflow-hidden">
                            <div className="flex-grow-1">
                              <p className="text-muted mb-0 text-truncate">
                                Total Sales World Wide
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <ReactApexChart
                                options={salesChartsOptions}
                                series={salesChartsOptions.series}
                                height={50}
                                width={140}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-title rounded bg-primary-subtle ">
                              <i className="bx bx-cart-alt font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-0 font-size-15">Total Orders</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal text-muted font-size-22" />
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
                                <a className="dropdown-item" href="#">
                                  Today
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="mt-4 pt-1 mb-0 font-size-22">
                            63,234.20{" "}
                            <span className="text-danger fw-medium font-size-13 align-middle">
                              {" "}
                              <i className="mdi mdi-arrow-down" /> 3.68%{" "}
                            </span>{" "}
                          </h4>
                          <div className="d-flex mt-1 align-items-end overflow-hidden">
                            <div className="flex-grow-1">
                              <p className="text-muted mb-0 text-truncate">
                                Total Orders World Wide
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <ReactApexChart
                                options={salesChartsOptions}
                                series={salesChartsOptions.series}
                                height={50}
                                width={140}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-title rounded bg-primary-subtle ">
                              <i className="bx bx-package font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-0 font-size-15">Today Visitor</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal text-muted font-size-22" />
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
                                <a className="dropdown-item" href="#">
                                  Today
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="mt-4 pt-1 mb-0 font-size-22">
                            425,34.45{" "}
                            <span className="text-danger fw-medium font-size-13 align-middle">
                              {" "}
                              <i className="mdi mdi-arrow-down" /> 2.64%{" "}
                            </span>{" "}
                          </h4>
                          <div className="d-flex mt-1 align-items-end overflow-hidden">
                            <div className="flex-grow-1">
                              <p className="text-muted mb-0 text-truncate">
                                Total Visitor World Wide
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <ReactApexChart
                                options={salesChartsOptions}
                                series={salesChartsOptions.series}
                                height={50}
                                width={140}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-title rounded bg-primary-subtle ">
                              <i className="bx bx-rocket font-size-24 mb-0 text-primary" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-0 font-size-15">Total Expense</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal text-muted font-size-22" />
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
                                <a className="dropdown-item" href="#">
                                  Today
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="mt-4 pt-1 mb-0 font-size-22">
                            6,482.46{" "}
                            <span className="text-success fw-medium font-size-13 align-middle">
                              {" "}
                              <i className="mdi mdi-arrow-down" /> 5.79%{" "}
                            </span>{" "}
                          </h4>
                          <div className="d-flex mt-1 align-items-end overflow-hidden">
                            <div className="flex-grow-1">
                              <p className="text-muted mb-0 text-truncate">
                                Total Expense World Wide
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <ReactApexChart
                                options={salesChartsOptions}
                                series={salesChartsOptions.series}
                                height={50}
                                width={140}
                              />
                            </div>
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
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body pb-0">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-4">Overview</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle text-reset"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="fw-semibold">Sort By:</span>
                          <span className="text-muted">
                            Yearly
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
                          <a className="dropdown-item" href="#">
                            Today
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      options={chartOptions}
                      series={chartOptions.series}
                      type="bar"
                      height={320} className="apex-chart"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-4">
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
                    width={ '100%' }
                  />}
                  <div className="row mt-5 pt-1">
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
                </div>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-4">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Recent Shipments</h5>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-xl-3 align-self-lg-stretch">
                      <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".shipperDetails">Details</button>
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
                      <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".shipperDetails">Details</button>
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
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="mb-0 font-size-14">Top Ports Of Origin</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset font-size-13">
                          <span className="fw-semibold">Sort By:</span>
                          <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" className="dropdown-item">Yearly</a>
                          <a href="javascript:;" className="dropdown-item">Monthly</a>
                          <a href="javascript:;" className="dropdown-item">Weekly</a>
                          <a href="javascript:;" className="dropdown-item">Today</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      options={salesCountries}
                      series={salesCountries.series}
                      type="bar"
                      height={ '240px'}
                      width={ '280px'}
                      className="apex-chart"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="mb-0 font-size-14">Top Ports Of Arrival</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset">
                          <span className="fw-semibold">Sort By:</span>
                          <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" className="dropdown-item">Yearly</a>
                          <a href="javascript:;" className="dropdown-item">Monthly</a>
                          <a href="javascript:;" className="dropdown-item">Weekly</a>
                          <a href="javascript:;" className="dropdown-item">Today</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      options={topPortsOfArrival}
                      series={topPortsOfArrival.series}
                      type="bar"
                      height={ '240px'}
                      width={ '280px'}
                      className="apex-chart"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Top Suppliers</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset">
                          <span className="fw-semibold">Sort By:</span>
                          <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" className="dropdown-item">Yearly</a>
                          <a href="javascript:;" className="dropdown-item">Monthly</a>
                          <a href="javascript:;" className="dropdown-item">Weekly</a>
                          <a href="javascript:;" className="dropdown-item">Today</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      options={topSuplliers}
                      series={topSuplliers.series}
                      type="bar"
                      height={ '240px'}
                      width={ '280px'}
                      className="apex-chart"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Top Importers</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset">
                          <span className="fw-semibold">Sort By:</span>
                          <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" className="dropdown-item">Yearly</a>
                          <a href="javascript:;" className="dropdown-item">Monthly</a>
                          <a href="javascript:;" className="dropdown-item">Weekly</a>
                          <a href="javascript:;" className="dropdown-item">Today</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      options={topImporters}
                      series={topImporters.series}
                      type="bar"
                      height={ '240px'}
                      width={ '280px'}
                      className="apex-chart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-xl-12">
                      <DataTableComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Shipment</h4>
                </div>

                <div className="card-body">
                    <div id="accordionFlushExample" className="accordion accordion-flush">
                        <div className="accordion-item">
                            <h2 id="flush-headingOne" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne" className="accordion-button fw-medium">
                                    Bill Of Lading Details
                                </button>
                            </h2>
                            <div id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-sm-3">
                                      <div className="">
                                          <h5 className="font-size-16 mb-3">Name:</h5>
                                          <h5 className="font-size-16 mb-3">Address</h5>
                                          <h5 className="font-size-16 mb-3">City:</h5>
                                          <h5 className="font-size-16 mb-3">State:</h5>
                                          <h5 className="font-size-16 mb-3">Zip Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Name:</h5>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className="text-muted">
                                          <div>
                                            <h5 className="font-size-16 mb-3">John Doe</h5>
                                            <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                            <h5 className="font-size-16 mb-3">Springfield</h5>
                                            <h5 className="font-size-16 mb-3">Illinois</h5>
                                            <h5 className="font-size-16 mb-3">62704</h5>
                                            <h5 className="font-size-16 mb-3">US</h5>
                                            <h5 className="font-size-16 mb-3">United States</h5>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".billOfLadingDetails">View Details</button>
                              </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 id="flush-headingTwo" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" className="accordion-button fw-medium collapsed">
                                  Shipper Details
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-sm-3">
                                      <div className="">
                                          <h5 className="font-size-16 mb-3">Name:</h5>
                                          <h5 className="font-size-16 mb-3">Address</h5>
                                          <h5 className="font-size-16 mb-3">City:</h5>
                                          <h5 className="font-size-16 mb-3">State:</h5>
                                          <h5 className="font-size-16 mb-3">Zip Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Name:</h5>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className="text-muted">
                                          <div>
                                            <h5 className="font-size-16 mb-3">John Doe</h5>
                                            <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                            <h5 className="font-size-16 mb-3">Springfield</h5>
                                            <h5 className="font-size-16 mb-3">Illinois</h5>
                                            <h5 className="font-size-16 mb-3">62704</h5>
                                            <h5 className="font-size-16 mb-3">US</h5>
                                            <h5 className="font-size-16 mb-3">United States</h5>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".shipperDetails">View Details</button>
                              </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 id="flush-headingThree" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" className="accordion-button fw-medium collapsed">
                                    Notify Party
                                </button>
                            </h2>
                            <div id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-sm-3">
                                      <div className="">
                                          <h5 className="font-size-16 mb-3">Name:</h5>
                                          <h5 className="font-size-16 mb-3">Address</h5>
                                          <h5 className="font-size-16 mb-3">City:</h5>
                                          <h5 className="font-size-16 mb-3">State:</h5>
                                          <h5 className="font-size-16 mb-3">Zip Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Name:</h5>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className="text-muted">
                                          <div>
                                            <h5 className="font-size-16 mb-3">John Doe</h5>
                                            <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                            <h5 className="font-size-16 mb-3">Springfield</h5>
                                            <h5 className="font-size-16 mb-3">Illinois</h5>
                                            <h5 className="font-size-16 mb-3">62704</h5>
                                            <h5 className="font-size-16 mb-3">US</h5>
                                            <h5 className="font-size-16 mb-3">United States</h5>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".notifyParty">View Details</button>
                              </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 id="flush-headingFour" className="accordion-header">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-headingFour" className="accordion-button fw-medium collapsed">
                                    Container & cargo Details
                                </button>
                            </h2>
                            <div id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample" className="accordion-collapse collapse">
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-sm-3">
                                      <div className="">
                                          <h5 className="font-size-16 mb-3">Name:</h5>
                                          <h5 className="font-size-16 mb-3">Address</h5>
                                          <h5 className="font-size-16 mb-3">City:</h5>
                                          <h5 className="font-size-16 mb-3">State:</h5>
                                          <h5 className="font-size-16 mb-3">Zip Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Code:</h5>
                                          <h5 className="font-size-16 mb-3">Country Name:</h5>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className="text-muted">
                                          <div>
                                            <h5 className="font-size-16 mb-3">John Doe</h5>
                                            <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                            <h5 className="font-size-16 mb-3">Springfield</h5>
                                            <h5 className="font-size-16 mb-3">Illinois</h5>
                                            <h5 className="font-size-16 mb-3">62704</h5>
                                            <h5 className="font-size-16 mb-3">US</h5>
                                            <h5 className="font-size-16 mb-3">United States</h5>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                <button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".Container_cargo_Details">View Details</button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
          </div>

        </div>
      </div>


        <div id="composemodal" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true" className="modal fade billOfLadingDetails">
            <div role="document" className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="composemodalTitle" className="modal-title">Bill of Lading details</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close">
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                      <div className="col-sm-3">
                          <div className="">
                              <h5 className="font-size-16 mb-3">Name:</h5>
                              <h5 className="font-size-16 mb-3">Address</h5>
                              <h5 className="font-size-16 mb-3">City:</h5>
                              <h5 className="font-size-16 mb-3">State:</h5>
                              <h5 className="font-size-16 mb-3">Zip Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Name:</h5>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="text-muted">
                              <div>
                                <h5 className="font-size-16 mb-3">John Doe</h5>
                                <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                <h5 className="font-size-16 mb-3">Springfield</h5>
                                <h5 className="font-size-16 mb-3">Illinois</h5>
                                <h5 className="font-size-16 mb-3">62704</h5>
                                <h5 className="font-size-16 mb-3">US</h5>
                                <h5 className="font-size-16 mb-3">United States</h5>
                              </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-primary">Ok</button>
                    </div>
                </div>
            </div>
        </div>


        <div id="composemodal" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true" className="modal fade shipperDetails">
            <div role="document" className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="composemodalTitle" className="modal-title">Shipper Details</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close">
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                      <div className="col-sm-3">
                          <div className="">
                              <h5 className="font-size-16 mb-3">Name:</h5>
                              <h5 className="font-size-16 mb-3">Address</h5>
                              <h5 className="font-size-16 mb-3">City:</h5>
                              <h5 className="font-size-16 mb-3">State:</h5>
                              <h5 className="font-size-16 mb-3">Zip Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Name:</h5>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="text-muted">
                              <div>
                                <h5 className="font-size-16 mb-3">John Doe</h5>
                                <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                <h5 className="font-size-16 mb-3">Springfield</h5>
                                <h5 className="font-size-16 mb-3">Illinois</h5>
                                <h5 className="font-size-16 mb-3">62704</h5>
                                <h5 className="font-size-16 mb-3">US</h5>
                                <h5 className="font-size-16 mb-3">United States</h5>
                              </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-primary">Send <i className="fab fa-telegram-plane ms-1"></i></button>
                    </div>
                </div>
            </div>
        </div>


        <div id="composemodal" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true" className="modal fade notifyParty">
            <div role="document" className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="composemodalTitle" className="modal-title">Notify party</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close">
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                      <div className="col-sm-3">
                          <div className="">
                              <h5 className="font-size-16 mb-3">Name:</h5>
                              <h5 className="font-size-16 mb-3">Address</h5>
                              <h5 className="font-size-16 mb-3">City:</h5>
                              <h5 className="font-size-16 mb-3">State:</h5>
                              <h5 className="font-size-16 mb-3">Zip Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Name:</h5>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="text-muted">
                              <div>
                                <h5 className="font-size-16 mb-3">John Doe</h5>
                                <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                <h5 className="font-size-16 mb-3">Springfield</h5>
                                <h5 className="font-size-16 mb-3">Illinois</h5>
                                <h5 className="font-size-16 mb-3">62704</h5>
                                <h5 className="font-size-16 mb-3">US</h5>
                                <h5 className="font-size-16 mb-3">United States</h5>
                              </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-primary">Send <i className="fab fa-telegram-plane ms-1"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div id="composemodal" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true" className="modal fade Container_cargo_Details">
            <div role="document" className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="composemodalTitle" className="modal-title">Container & cargo Details</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close">
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                      <div className="col-sm-3">
                          <div className="">
                              <h5 className="font-size-16 mb-3">Name:</h5>
                              <h5 className="font-size-16 mb-3">Address</h5>
                              <h5 className="font-size-16 mb-3">City:</h5>
                              <h5 className="font-size-16 mb-3">State:</h5>
                              <h5 className="font-size-16 mb-3">Zip Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Code:</h5>
                              <h5 className="font-size-16 mb-3">Country Name:</h5>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="text-muted">
                              <div>
                                <h5 className="font-size-16 mb-3">John Doe</h5>
                                <h5 className="font-size-16 mb-3">1234 Elm Street, Apt 567</h5>
                                <h5 className="font-size-16 mb-3">Springfield</h5>
                                <h5 className="font-size-16 mb-3">Illinois</h5>
                                <h5 className="font-size-16 mb-3">62704</h5>
                                <h5 className="font-size-16 mb-3">US</h5>
                                <h5 className="font-size-16 mb-3">United States</h5>
                              </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-primary">Send <i className="fab fa-telegram-plane ms-1"></i></button>
                    </div>
                </div>
            </div>
        </div>

      </>
    );
  }
  export default DashboardCustom;
