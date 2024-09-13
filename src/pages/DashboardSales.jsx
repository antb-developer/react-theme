import React from 'react';
import ReactApexChart from 'react-apexcharts';
import SimpleBarReact from "simplebar-react";

const DashboardSales = () => {

  const barchartColors = ['#e6ecf9', 'green'];
  const salesColor = ['#1f58c7', 'e6ecf9'];
  const sparklineColors = ['#1f58c7'];

  const mini1 = {
          series: [{ data: [25, 66, 41, 89, 63, 25, 44, 23, 40, 40, 54, 41] }],
          fill: { colors: barchartColors, opacity: 1 },
          chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
          plotOptions: { bar: { columnWidth: "65%", borderRadius: 4 } },
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          xaxis: { crosshairs: { width: 1 } },
          tooltip: {
              fixed: { enabled: !1 },
              x: { show: !1 },
              y: {
                  title: {
                      formatter: function (r) {
                          return "";
                      },
                  },
              },
              marker: { show: !1 },
          },
  }

  const mini2 = {
      series: [{ data: [56, 20, 80, 40, 75, 41, 25, 66, 41, 89, 63, 25] }],
      fill: { colors: barchartColors, opacity: 1 },
      chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
      plotOptions: { bar: { columnWidth: "65%", borderRadius: 4 } },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };

  const mini3 = {
      series: [{ data: [59, 63, 35, 75, 50, 66, 25, 66, 41, 40, 54, 41] }],
      fill: { colors: barchartColors, opacity: 1 },
      chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
      plotOptions: { bar: { columnWidth: "65%", borderRadius: 4 } },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };


  const mini4 = {
      series: [{ data: [45, 36, 40, 64, 41, 66, 41, 89, 63, 25, 44, 20] }],
      fill: { colors: barchartColors, opacity: 1 },
      chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
      plotOptions: { bar: { columnWidth: "65%", borderRadius: 4 } },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };

  const salesReport = {
      chart: { type: "area", height: 360, toolbar: { show: !1 } },
      series: [
          { name: "Incomes", data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75] },
          { name: "Expenses", data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62] },
      ],
      stroke: { curve: "straight", width: ["4", "4"] },
      grid: { xaxis: { lines: { show: !0 } }, yaxis: { lines: { show: !0 } } },
      colors: salesColor,
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Now", "Des"] },
      legend: { show: !1 },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.4, opacityTo: 0.1, stops: [30, 100, 100, 100] } },
      dataLabels: { enabled: !1 },
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };


  const chartRadialBar = {
          series: [76],
          chart: { type: "radialBar", height: 370, sparkline: { enabled: !0 } },
          plotOptions: {
              radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  track: { background: "#e6ecf9", strokeWidth: "97%", margin: 5, dropShadow: { enabled: !1, top: 2, left: 0, color: "#999", opacity: 1, blur: 2 } },
                  hollow: { margin: 15, size: "65%" },
                  dataLabels: { name: { show: !1 }, value: { offsetY: -2, fontSize: "22px" } },
              },
          },
          grid: { padding: { top: -10 } },
          fill: { opacity: 1 },
          colors: ["#1f58c7"],
          labels: ["Average Results"],
      };

  const salesCountries = {
      series: [{ data: [430, 570, 640, 680, 790, 1100, 1200, 1380] }],
      chart: { type: "bar", height: 323, toolbar: { show: !1 } },
      labels: ["Canada", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"],
      colors: ["#1f58c7"],
      plotOptions: { bar: { borderRadius: 4, horizontal: !0 } },
      dataLabels: { enabled: !1 },
      xaxis: { categories: ["Canada", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"] },
  };

  const sparklineoptions1 = {
          series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 84] }],
          chart: { type: "area", width: 200, height: 40, sparkline: { enabled: !0 } },
          fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] } },
          stroke: { curve: "smooth", width: 2 },
          colors: sparklineColors,
          tooltip: {
              fixed: { enabled: !1 },
              x: { show: !1 },
              y: {
                  title: {
                      formatter: function (r) {
                          return "";
                      },
                  },
              },
              marker: { show: !1 },
          },
    };

  const sparklineoptions2 = {
      series: [{ data: [50, 15, 35, 62, 23, 56, 44, 12, 36, 9, 54, 23] }],
      chart: { type: "area", width: 200, height: 40, sparkline: { enabled: !0 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] } },
      stroke: { curve: "smooth", width: 2 },
      colors: sparklineColors,
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };

  const sparklineoptions3 = {
      series: [{ data: [25, 35, 35, 89, 63, 25, 44, 12, 36, 9, 54, 25] }],
      chart: { type: "area", width: 200, height: 40, sparkline: { enabled: !0 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] } },
      stroke: { curve: "smooth", width: 2 },
      colors: sparklineColors,
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };


  const sparklineoptions4 = {
      series: [{ data: [50, 15, 35, 34, 23, 56, 65, 41, 36, 41, 32, 25] }],
      chart: { type: "area", width: 200, height: 40, sparkline: { enabled: !0 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] } },
      stroke: { curve: "smooth", width: 2 },
      colors: sparklineColors,
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };


  const sparklineoptions5 = {
      series: [{ data: [45, 53, 24, 89, 63, 60, 36, 50, 36, 32, 54, 63] }],
      chart: { type: "area", width: 200, height: 40, sparkline: { enabled: !0 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] } },
      stroke: { curve: "smooth", width: 2 },
      colors: sparklineColors,
      tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
              title: {
                  formatter: function (r) {
                      return "";
                  },
              },
          },
          marker: { show: !1 },
      },
  };

    return (
      <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="font-size-15">Sales</h6>
                      <h4 className="mt-3 pt-1 mb-0 font-size-22">$12,253 <span className="text-success fw-medium font-size-14 align-middle"> <i className="mdi mdi-arrow-up" />2.64% </span> </h4>
                    </div>
                    <div classname>
                      <div className="avatar">
                        <div className="avatar-title rounded bg-primary-subtle ">
                          <i className="bx bx-store-alt font-size-24 mb-0 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ReactApexChart
                    options={mini1}
                    series={mini1.series}
                    type="bar"
                    width={ '100%'}
                    height={50}
                    className="apex-chart"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0 font-size-15">Purchase</h6>
                      <h4 className="mt-3 mb-0 font-size-22">$63,756 <span className="text-danger fw-medium font-size-14 align-middle"> <i className="mdi mdi-arrow-down" /> 4.84% </span> </h4>
                    </div>
                    <div classname>
                      <div className="avatar">
                        <div className="avatar-title rounded bg-primary-subtle ">
                          <i className="bx bx-money font-size-24 mb-0 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ReactApexChart
                    options={mini2}
                    series={mini2.series}
                    type="bar"
                    width={ '100%'}
                    height={50}
                    className="apex-chart"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0 font-size-15">Return</h6>
                      <h4 className="mt-3 mb-0 font-size-22">$14,568 <span className="text-success fw-medium font-size-14 align-middle"> <i className="mdi mdi-arrow-up" /> 6.54% </span> </h4>
                    </div>
                    <div classname>
                      <div className="avatar">
                        <div className="avatar-title rounded bg-primary-subtle ">
                          <i className="bx bx-revision font-size-24 mb-0 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ReactApexChart
                    options={mini3}
                    series={mini3.series}
                    type="bar"
                    width={ '100%'}
                    height={50}
                    className="apex-chart"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0 font-size-15">Marketing</h6>
                      <h4 className="mt-3 mb-0 font-size-22">$47,658 <span className="text-danger fw-medium font-size-14 align-middle"> <i className="mdi mdi-arrow-down" /> 8.15% </span> </h4>
                    </div>
                    <div classname>
                      <div className="avatar">
                        <div className="avatar-title rounded bg-primary-subtle ">
                          <i className="bx bx-chart font-size-24 mb-0 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ReactApexChart
                    options={mini4}
                    series={mini4.series}
                    type="bar"
                    width={ '100%'}
                    height={50}
                    className="apex-chart"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Sales Report</h5>
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
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h4 className="font-size-22">$23,590.00</h4>
                    </div>
                    <div className="col-md-8">
                      <ul className="list-inline main-chart text-md-end mb-0">
                        <li className="list-inline-item chart-border-left me-0 border-0">
                          <h4 className="text-primary font-size-22">$584k <span className="text-muted d-inline-block font-size-14 align-middle ms-2">Incomes</span></h4>
                        </li>
                        <li className="list-inline-item chart-border-left me-0">
                          <h4 className="font-size-22">$497k<span className="text-muted d-inline-block font-size-14 align-middle ms-2">Expenses</span>
                          </h4>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      options={salesReport}
                      series={salesReport.series}
                      type="area"
                      width={ '100%'}
                      className="apex-chart"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Source of Purchases</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-muted">
                          Today<i className="mdi mdi-chevron-down ms-1" />
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
                </div>
                <div className="card-body pt-0">
                  <div>
                    <ReactApexChart
                      options={chartRadialBar}
                      series={chartRadialBar.series}
                      type="radialBar"
                      width={ '100%'}
                      className="apex-chart"
                    />
                  </div>
                  <div className="mt-4 px-1 pt-1">
                    <SimpleBarReact style={{ maxHeight: 214 }} className="mx-n4">
                      <div className="border-bottom sale-social-box">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="avatar">
                              <div className="avatar-title rounded bg-primary-subtle ">
                                <i className="bx bxl-facebook font-size-24 mb-0 text-primary" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3 overflow-hidden">
                            <h5 className="font-size-15 mb-1 text-truncate">Facebook</h5>
                            <p className="text-muted text-truncate mb-0">3.2k Sale - 4.2k Like</p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                              50% <i className="mdi mdi-arrow-top-right text-success align-middle" /></h5>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom sale-social-box">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="avatar">
                              <div className="avatar-title rounded bg-primary-subtle ">
                                <i className="bx bxl-twitter font-size-24 mb-0 text-primary" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3 overflow-hidden">
                            <h5 className="font-size-15 mb-1 text-truncate">Twitter</h5>
                            <p className="text-muted text-truncate mb-0">3.1k Sale - 3.7k Like</p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                              34% <i className="mdi mdi-arrow-bottom-left text-danger align-middle" /></h5>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom sale-social-box">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="avatar">
                              <div className="avatar-title rounded bg-primary-subtle ">
                                <i className="bx bxl-linkedin font-size-24 mb-0 text-primary" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3 overflow-hidden">
                            <h5 className="font-size-15 mb-1 text-truncate">Linkedin </h5>
                            <p className="text-muted text-truncate mb-0">2.1k Sale - 4.3k Like</p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                              64% <i className="mdi mdi-arrow-top-right text-success align-middle" /></h5>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom sale-social-box">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="avatar">
                              <div className="avatar-title rounded bg-primary-subtle ">
                                <i className="bx bxl-youtube font-size-24 mb-0 text-primary" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3 overflow-hidden">
                            <h5 className="font-size-15 mb-1 text-truncate">Youtube</h5>
                            <p className="text-muted text-truncate mb-0">5.7k Sale - 8.4k Like</p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                              47% <i className="mdi mdi-arrow-bottom-left text-danger align-middle" /></h5>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom sale-social-box">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="avatar">
                              <div className="avatar-title rounded bg-primary-subtle ">
                                <i className="bx bxl-google font-size-24 mb-0 text-primary" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3 overflow-hidden">
                            <h5 className="font-size-15 mb-1 text-truncate">Google</h5>
                            <p className="text-muted text-truncate mb-0">2.4k Sale - 3.7k Like</p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                              61% <i className="mdi mdi-arrow-bottom-left text-danger align-middle" /></h5>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom sale-social-box">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="avatar">
                              <div className="avatar-title rounded bg-primary-subtle ">
                                <i className="bx bxl-github font-size-24 mb-0 text-primary" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3 overflow-hidden">
                            <h5 className="font-size-15 mb-1 text-truncate">Github</h5>
                            <p className="text-muted text-truncate mb-0">1.3k Sale - 8.6k Like</p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                              50% <i className="mdi mdi-arrow-bottom-left text-danger align-middle" /></h5>
                          </div>
                        </div>
                      </div>
                    </SimpleBarReact>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-1">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Sales History</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-muted">
                          <i className="bx bx-dots-horizontal font-size-22" />
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
                  <SimpleBarReact style={{ maxHeight: 390 }} className="mx-n4">
                    <p className="text-muted mb-0">Recent</p>
                    <div className="border-bottom sales-history">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar img-thumbnail" />
                        </div>
                        <div className="flex-grow-1 ms-3 overflow-hidden">
                          <h5 className="font-size-15 mb-1 text-truncate">Neal Matthews</h5>
                          <p className="font-size-14 text-muted text-truncate mb-0">United States</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="badge font-size-12 bg-danger-subtle text-danger ">- $62.45</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom sales-history">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar img-thumbnail" />
                        </div>
                        <div className="flex-grow-1 ms-3 overflow-hidden">
                          <h5 className="font-size-15 mb-1 text-truncate">Jamal Burnett</h5>
                          <p className="font-size-14 text-muted text-truncate mb-0">India</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="badge font-size-12 bg-success-subtle text-success ">+ $45.84</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mt-3 mb-0">Yesterday</p>
                    <div className="border-bottom sales-history">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar img-thumbnail" />
                        </div>
                        <div className="flex-grow-1 ms-3 overflow-hidden">
                          <h5 className="font-size-15 mb-1 text-truncate">Barry Dick </h5>
                          <p className="text-muted text-truncate mb-0">United States</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="badge font-size-12 bg-success-subtle text-success ">+ $25.52</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom sales-history">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar img-thumbnail" />
                        </div>
                        <div className="flex-grow-1 ms-3 overflow-hidden">
                          <h5 className="font-size-15 mb-1 text-truncate">Ronald Taylor</h5>
                          <p className="text-muted text-truncate mb-0">United States</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="badge font-size-12 bg-danger-subtle text-danger ">- $84.45</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom sales-history">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar img-thumbnail" />
                        </div>
                        <div className="flex-grow-1 ms-3 overflow-hidden">
                          <h5 className="font-size-15 mb-1 text-truncate">Jacob Hunter</h5>
                          <p className="text-muted text-truncate mb-0">England</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="badge font-size-12 bg-success-subtle text-success ">+ $53.23</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom sales-history">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar img-thumbnail" />
                        </div>
                        <div className="flex-grow-1 ms-3 overflow-hidden">
                          <h5 className="font-size-15 mb-1 text-truncate">William Cruz</h5>
                          <p className="text-muted text-truncate mb-0">United States</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="badge font-size-12 bg-success-subtle text-success ">+ $42.63</span>
                        </div>
                      </div>
                    </div>
                  </SimpleBarReact>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="p-3 border-bottom">
                  <div className="row">
                    <div className="col-xl-4 col-7">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 avatar me-3 d-sm-block d-none">
                          <img src="/images/users/avatar-6.jpg" alt="" className="img-fluid d-block rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="font-size-16 mb-1 text-truncate"><a href="javascript:;" className="text-body">Jennie Sherlock</a></h5>
                          <p className="text-muted text-truncate mb-0">Online</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-5">
                      <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn nav-btn dropdown-toggle">
                              <i className="bx bx-search" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
                              <form className="px-2">
                                <div>
                                  <input type="text" placeholder="Search..." className="form-control border bg-light-subtle" />
                                </div>
                              </form>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn nav-btn dropdown-toggle">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;" className="dropdown-item">Profile</a>
                              <a href="javascript:;" className="dropdown-item">Archive</a>
                              <a href="javascript:;" className="dropdown-item">Muted</a>
                              <a href="javascript:;" className="dropdown-item">Delete</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="small-chat">
                  <SimpleBarReact style={{ maxHeight: 316 }} className="chat-conversation mx-n4">
                    <ul className="list-unstyled mb-0">
                      <li className="chat-day-title">
                        <span className="title">Today</span>
                      </li>
                      <li>
                        <div className="conversation-list">
                          <div className="d-flex">
                            <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar" />
                            <div className="flex-1">
                              <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                  <div className="conversation-name"><span className="time">10:00</span></div>
                                  <p className="mb-0">Hi Jordan! <br />
                                    Feels like it's been a while! Home are you?
                                    with an ongoing project?</p>
                                </div>
                                <div className="dropdown align-self-start">
                                  <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <div className="dropdown-menu">
                                    <a href="javascript:;" className="dropdown-item">Copy</a>
                                    <a href="javascript:;" className="dropdown-item">Save</a>
                                    <a href="javascript:;" className="dropdown-item">Forward</a>
                                    <a href="javascript:;" className="dropdown-item">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right">
                        <div className="conversation-list">
                          <div className="d-flex">
                            <div className="flex-1">
                              <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                  <div className="conversation-name"><span className="time">10:02</span></div>
                                  <p className="mb-0 text-start">Hi Martin, Glad to hear from you, I'm fine,what about you? and how it's going with the velocity website?
                                  </p>
                                </div>
                                <div className="dropdown align-self-start">
                                  <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <div className="dropdown-menu">
                                    <a href="javascript:;" className="dropdown-item">Copy</a>
                                    <a href="javascript:;" className="dropdown-item">Save</a>
                                    <a href="javascript:;" className="dropdown-item">Forward</a>
                                    <a href="javascript:;" className="dropdown-item">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="conversation-list">
                          <div className="d-flex">
                            <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar" />
                            <div className="flex-1">
                              <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                  <div className="conversation-name"><span className="time">10:04</span></div>
                                  <p className="mb-0">
                                    Super, I will get you the new brief for our own site over to you this evening, so you have time to read over I'm good thank you!
                                  </p>
                                </div>
                                <div className="dropdown align-self-start">
                                  <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <div className="dropdown-menu">
                                    <a href="javascript:;" className="dropdown-item">Copy</a>
                                    <a href="javascript:;" className="dropdown-item">Save</a>
                                    <a href="javascript:;" className="dropdown-item">Forward</a>
                                    <a href="javascript:;" className="dropdown-item">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right">
                        <div className="conversation-list">
                          <div className="d-flex">
                            <div className="flex-1">
                              <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                  <div className="conversation-name"><span className="time">10:08</span></div>
                                  <p className="mb-0 text-start">
                                    Of course I can, just catching up with Steve on it and i'll write
                                    it out.
                                  </p>
                                  <p className="mb-0 text-start mt-2">
                                    img-1.jpg &amp; img-2.jpg images for a New Projects
                                  </p>
                                  <ul className="list-inline message-img mt-2 mb-0">
                                    <li className="list-inline-item message-img-list">
                                      <a href className="d-inline-block">
                                        <img src="/images/small/img-1.jpg" alt="" className="rounded img-thumbnail" />
                                      </a>
                                    </li>
                                    <li className="list-inline-item message-img-list">
                                      <a href className="d-inline-block">
                                        <img src="/images/small/img-2.jpg" alt="" className="rounded img-thumbnail" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="dropdown align-self-start">
                                  <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <div className="dropdown-menu">
                                    <a href="javascript:;" className="dropdown-item">Copy</a>
                                    <a href="javascript:;" className="dropdown-item">Save</a>
                                    <a href="javascript:;" className="dropdown-item">Forward</a>
                                    <a href="javascript:;" className="dropdown-item">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="conversation-list">
                          <div className="d-flex">
                            <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar" />
                            <div className="flex-1">
                              <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                  <div className="conversation-name"><span className="time">10:06</span></div>
                                  <p className="mb-0">
                                    Thank You very much, I am waiting Project.
                                  </p>
                                </div>
                                <div className="dropdown align-self-start">
                                  <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <div className="dropdown-menu">
                                    <a href="javascript:;" className="dropdown-item">Copy</a>
                                    <a href="javascript:;" className="dropdown-item">Save</a>
                                    <a href="javascript:;" className="dropdown-item">Forward</a>
                                    <a href="javascript:;" className="dropdown-item">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right">
                        <div className="conversation-list">
                          <div className="d-flex">
                            <div className="flex-1">
                              <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                  <div className="conversation-name"><span className="time">10:08</span></div>
                                  <p className="mb-0 text-start">
                                    When someone thanks us, our automatic response is to say, “You’re welcome.” This is something that we have
                                    learned from our parents and family and have been doing for a long time.
                                  </p>
                                </div>
                                <div className="dropdown align-self-start">
                                  <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <div className="dropdown-menu">
                                    <a href="javascript:;" className="dropdown-item">Copy</a>
                                    <a href="javascript:;" className="dropdown-item">Save</a>
                                    <a href="javascript:;" className="dropdown-item">Forward</a>
                                    <a href="javascript:;" className="dropdown-item">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </SimpleBarReact>
                  <div className="p-3 border-top">
                    <div className="row">
                      <div className="col">
                        <div className="position-relative">
                          <input type="text" placeholder="Enter Message..." className="form-control border bg-light-subtle" />
                        </div>
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Top Sales Countries</h5>
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
                  <div className="row">
                    <div className="col-4">
                      <div className="text-center">
                        <h4 className="font-size-18">23,568</h4>
                        <p className="mb-1 text-muted font-size-14">Completed <span className="badge bg-success-subtle text-success ">+40%</span></p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <h4 className="font-size-18">12,865</h4>
                        <p className="mb-1 text-muted font-size-14">Pending <span className="badge bg-danger-subtle text-danger ">-10%</span></p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <h4 className="font-size-18">2,355</h4>
                        <p className="mb-1 text-muted font-size-14">Cancel <span className="badge bg-success-subtle text-success ">+20%</span></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ReactApexChart
                      options={salesCountries}
                      series={salesCountries.series}
                      type="bar"
                      width={ '100%'}
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
                  <div className="d-flex flex-wrap align-items-center mb-2">
                    <h5 className="card-title">Products Of The Month</h5>
                    <div className="ms-auto">
                      <div className="dropdown">
                        <a href="javascript:;" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset">
                          <span className="text-muted font-size-12">Sort By: </span> <span className="fw-medium"> Monthly<i className="mdi mdi-chevron-down ms-1" /></span>
                        </a>
                        <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:;" className="dropdown-item">Weekly</a>
                          <a href="javascript:;" className="dropdown-item">Monthly</a>
                          <a href="javascript:;" className="dropdown-item">Yearly</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped table-centered align-middle table-nowrap mb-0 table-check">
                      <thead>
                        <tr>
                          <th style={{width: '90px'}}>
                            Product
                          </th>
                          <th style={{width: '210px'}}>Product Name</th>
                          <th>Customer Name</th>
                          <th>Order ID</th>
                          <th>Color</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th style={{width: '270px'}}>Trend</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="avatar">
                              <div className="product-img avatar-title img-thumbnail bg-primary-subtle  border-0">
                                <img src="/images/product/img-1.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </td>
                          <td className="fw-semibold">Office Chair Crime</td>
                          <td>
                            Neal Matthews
                          </td>
                          <td>
                            #526552
                          </td>
                          <td>
                            Gray
                          </td>
                          <td>12/01/2022</td>
                          <td><span className="badge bg-primary-subtle text-primary  font-size-12">Pending</span></td>
                          <td>
                            <ReactApexChart
                              options={sparklineoptions1}
                              series={sparklineoptions1.series}
                              type="area"
                              height={ '50px' }
                              width={ '100%'}
                              className="apex-chart"
                            />
                          </td>
                          <td>
                            <div className="dropdown">
                              <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18">
                                <i className="mdi mdi-dots-horizontal" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                <a href="javascript:;" className="dropdown-item">Print</a>
                                <a href="javascript:;" className="dropdown-item">Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="avatar">
                              <div className="product-img avatar-title img-thumbnail bg-success-subtle  border-0">
                                <img src="/images/product/img-2.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </td>
                          <td className="fw-semibold">Sofa Home Chair Black</td>
                          <td>
                            Connie Franco
                          </td>
                          <td>
                            #746648
                          </td>
                          <td>
                            Black
                          </td>
                          <td>14/01/2022</td>
                          <td><span className="badge bg-success-subtle text-success  font-size-12">Active</span></td>
                          <td>
                            <ReactApexChart
                              colors={ "#1f58c7" }
                              options={sparklineoptions2}
                              series={sparklineoptions2.series}
                              type="area"
                              height={ '50px' }
                              width={ '100%'}
                              className="apex-chart"
                            />
                          </td>
                          <td>
                            <div className="dropdown">
                              <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18">
                                <i className="mdi mdi-dots-horizontal" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                <a href="javascript:;" className="dropdown-item">Print</a>
                                <a href="javascript:;" className="dropdown-item">Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="avatar">
                              <div className="product-img avatar-title img-thumbnail bg-danger-subtle  border-0">
                                <img src="/images/product/img-3.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </td>
                          <td className="fw-semibold">Tuition Classes Chair</td>
                          <td>
                            Paul Reynolds
                          </td>
                          <td>
                            #125635
                          </td>
                          <td>
                            Crime
                          </td>
                          <td>17/01/2022</td>
                          <td><span className="badge bg-success-subtle text-success  font-size-12">Active</span></td>
                          <td>
                            <ReactApexChart
                              options={sparklineoptions3}
                              series={sparklineoptions3.series}
                              type="area"
                              height={ '50px' }
                              width={ '100%'}
                              className="apex-chart"
                            />
                          </td>
                          <td>
                            <div className="dropdown">
                              <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18">
                                <i className="mdi mdi-dots-horizontal" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                <a href="javascript:;" className="dropdown-item">Print</a>
                                <a href="javascript:;" className="dropdown-item">Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="avatar">
                              <div className="product-img avatar-title img-thumbnail bg-primary-subtle  border-0">
                                <img src="/images/product/img-4.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </td>
                          <td className="fw-semibold">Dining Table Chair</td>
                          <td>
                            Ronald Patterson
                          </td>
                          <td>
                            #236521
                          </td>
                          <td>
                            Crime
                          </td>
                          <td>18/01/2022</td>
                          <td><span className="badge bg-primary-subtle text-primary  font-size-12">Pending</span></td>
                          <td>
                          <ReactApexChart
                            options={sparklineoptions4}
                            series={sparklineoptions4.series}
                            type="area"
                            height={ '50px' }
                            width={ '100%'}
                            className="apex-chart"
                          />
                          </td>
                          <td>
                            <div className="dropdown">
                              <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18">
                                <i className="mdi mdi-dots-horizontal" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                <a href="javascript:;" className="dropdown-item">Print</a>
                                <a href="javascript:;" className="dropdown-item">Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="avatar">
                              <div className="product-img avatar-title img-thumbnail bg-success-subtle  border-0">
                                <img src="/images/product/img-5.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </td>
                          <td className="fw-semibold">Home &amp; Office Chair</td>
                          <td>
                            Adella Perez
                          </td>
                          <td>
                            #236521
                          </td>
                          <td>
                            Crime
                          </td>
                          <td>18/01/2022</td>
                          <td><span className="badge bg-primary-subtle text-primary  font-size-12">Pending</span></td>
                          <td>
                          <ReactApexChart
                            options={sparklineoptions5}
                            series={sparklineoptions5.series}
                            type="area"
                            height={ '50px' }
                            width={ '100%'}
                            className="apex-chart"
                          />
                          </td>
                          <td>
                            <div className="dropdown">
                              <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-18">
                                <i className="mdi mdi-dots-horizontal" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                <a href="javascript:;" className="dropdown-item">Print</a>
                                <a href="javascript:;" className="dropdown-item">Delete</a>
                              </div>
                            </div>
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

export default DashboardSales;
