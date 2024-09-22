import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DataTableComponent1 from '../components/DataTableComponent1';
import RecentShipments from '../components/RecentShipments';
import TopHSCodes from '../components/TopHSCodes';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';

import Dropdown from 'react-bootstrap/Dropdown';

const DashboardCustom = () => {

  const salesCountries = {
      series: [{ data: [430, 570, 640, 680, 790] }],
      chart: { type: "bar", height: 500, width: '100%', offsetX: -15, toolbar: { show: !1 }},
      colors: ["#1f58c7"],
      plotOptions: { bar: { barHeight: '90%', borderRadius: 4, horizontal: !0, dataLabels : { position : 'bottom' } } },
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
  const topSuplliers = { ...salesCountries, chart: { type: "bar", height: 500, width: '130%', toolbar: { show: !1 }}, xaxis: { categories: ["ZF Wind Power Coimbatore Pv", "Jiangsu Guotai Huasheng Industries","Kuehne & Nagel Limited","Shanghai Qiangling Electronics","Shanxi Taigang Stainless Steel"] } };
  const topImporters = { ...salesCountries, chart: { type: "bar", height: 500, width: '130%', toolbar: { show: !1 }}, xaxis: { categories: ["Kohler Co.", "Primark Us Corp", "Costco Wholesale Canada Ltd", "Golden Stage Fc gesellIdControl", "Safety Zone Lic"] } };

  const chartOptions = {
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

  const search = () => {

  }

  useEffect(() => {
  }, []);

  const mapRef = useRef();
    return (
      <>
      <div className="page-content">
        <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-lg-10 col-md-12">
            <Card body={ <SearchBar /> } />
          </div>
        </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-3">
                  <StatCard
                    iconClass="bx-check-shield"
                    title="Total Shipments"
                    value="$34,123.20"
                    changePercent="8.34"
                    changeDirection="up"
                    description="Total Containers XX,XXX"
                    chartOptions={salesChartsOptions}
                    chartSeries={salesChartsOptions.series}
                  />
                </div>
                <div className="col-xl-3">
                  <StatCard
                    iconClass="bx-check-shield"
                    title="Gross Weight"
                    value="$63,234.20"
                    changePercent="3.68"
                    changeDirection="down"
                    description="Total KG's XX,XXX"
                    chartOptions={salesChartsOptions}
                    chartSeries={salesChartsOptions.series}
                  />
                </div>
                <div className="col-xl-3">
                  <StatCard
                    iconClass="bx-check-shield"
                    title="Supplier"
                    value="$425,34.45"
                    changePercent="2.64"
                    changeDirection="down"
                    description="Total Port of Lading XX"
                    chartOptions={salesChartsOptions}
                    chartSeries={salesChartsOptions.series}
                  />
                </div>
                <div className="col-xl-3">
                  <StatCard
                    iconClass="bx-check-shield"
                    title="Importers"
                    value="6,482.46"
                    changePercent="5.79"
                    changeDirection="down"
                    description="Ports of Unlading"
                    chartOptions={salesChartsOptions}
                    chartSeries={salesChartsOptions.series}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-stretch">
            <div className="col-xl-6">
              <ChartCard
                title="Overview"
                value="6,482.46"
                changePercent="5.79"
                changeDirection="down"
                description="Ports of Unlading"
                chartOptions={salesChartsOptions}
                chartSeries={salesChartsOptions.series}
              />
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
              <div className="card hsChartsCard">
                <div className="card-body">
                  <TopHSCodes />
                </div>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-4">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Recent Shipments</h5>
                      <RecentShipments />
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
                      <h6 className="mb-0 font-size-13">Top Ports Of Origin</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset font-size-12">
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
                  <ReactApexChart
                      options={salesCountries}
                      series={salesCountries.series}
                      type="bar"
                      height={ '240px'}
                      className="apex-chart custom-chart-row"
                    />
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="mb-0 font-size-13">Top Ports Of Arrival</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset font-size-12">
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
                  <ReactApexChart
                    options={topPortsOfArrival}
                    series={topPortsOfArrival.series}
                    type="bar"
                    height={ '240px'}
                    className="apex-chart custom-chart-row"
                    />
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="card-title font-size-13">Top Suppliers</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset font-size-12">
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
                  <div className='supplier_row chart-has-button'>
                    <div className='buttons_col pr-0'>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                    </div>
                    <div className='progres_col pl-0'>
                    <ReactApexChart
                        options={topSuplliers}
                        series={topSuplliers.series}
                        type="bar"
                        height={ '240px'}
                        className="apex-chart custom-chart-row"
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="card-title font-size-13">Top Importers</h6>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="dropdown">
                        <a href="javascript:;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle text-reset font-size-12">
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
                  <div className='supplier_row chart-has-button'>
                    <div className='buttons_col pr-0'>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                      <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target=".charts_Details">Details</button>
                    </div>
                    <div className='progres_col pl-0'>
                    <ReactApexChart
                        options={topImporters}
                        series={topImporters.series}
                        type="bar"
                        height={ '240px'}
                        className="apex-chart custom-chart-row"
                        />
                    </div>
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
                      <DataTableComponent1 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


        <div id="details" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true" className="modal fade charts_Details">
            <div role="document" className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="composemodalTitle" className="modal-title">Chart Details</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close">
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                      <div className="col-sm-12">
                        Details
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>


      </>
    );
  }
  export default DashboardCustom;
