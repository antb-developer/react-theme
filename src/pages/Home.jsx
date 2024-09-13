import React, { useState, useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import SimpleBarReact from "simplebar-react";
import { VectorMap } from "react-jvectormap";
import { Link } from 'react-router-dom';

const Home = () => {

  const chartOptions = {
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };

  const salesChartsOptions = {
      series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
      chart: { type: "area", width: 110, height: 35, sparkline: { enabled: !0 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] } },
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
      },
  }

  const salesCategoryChartsOptions = {
    chart: { height: 350, type: "donut" },
    series: [24, 18, 13, 15],
    labels: ["Fashion", "Beauty", "Clothing", "Others"],
    colors: ["#1f58c7", "#4976cf","#6a92e1", "#e6ecf9"],
    plotOptions: { pie: { startAngle: 25, donut: { size: "72%", labels: { show: !0, total: { show: !0, label: "Products", fontSize: "22px", fontFamily: "Montserrat,sans-serif", fontWeight: 600 } } } } },
    legend: { show: !1, position: "bottom", horizontalAlign: "center", verticalAlign: "middle", floating: !1, fontSize: "14px", offsetX: 0 },
    dataLabels: {
        style: { fontSize: "11px", fontFamily: "Montserrat,sans-serif", fontWeight: "bold", colors: void 0 },
        background: { enabled: !0, foreColor: "#fff", padding: 4, borderRadius: 2, borderWidth: 1, borderColor: "#fff", opacity: 1 },
    },
    responsive: [{ breakpoint: 600, options: { chart: { height: 240 }, legend: { show: !1 } } }]
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
      <div className="page-content">
        <div className="container-fluid">
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
                      height={350} className="apex-chart"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-6">
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
                                width={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
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
                                width={100}
                              />
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
                                width={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
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
                                width={100}
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
            <div className="col-xxl-8">
              <div className="row">
                <div className="col-xl-7">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-start mb-2">
                        <div className="flex-grow-1">
                          <h5 className="card-title">Popular Products</h5>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="dropdown">
                            <a
                              className="dropdown-toggle text-muted"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Today
                              <i className="mdi mdi-chevron-down ms-1" />
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
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div className="popular-product-img p-2">
                            <img src="/images/product/img.png" alt="" />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <span className="badge bg-primary-subtle text-primary  font-size-10 text-uppercase ls-05">
                            {" "}
                            Popular Item
                          </span>
                          <h5 className="mt-2 font-size-16">
                            <a href="" className="text-body">
                              Home &amp; Office Chair Blue
                            </a>
                          </h5>
                          <p className="text-muted">
                            But who has any right to find chooses enjoy.
                          </p>
                          <div className="row g-0 mt-3 pt-1 align-items-end">
                            <div className="col-4">
                              <div className="mt-1">
                                <h4 className="font-size-16">800</h4>
                                <p className="text-muted mb-1">Total Selling</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="mt-1">
                                <h4 className="font-size-16">250</h4>
                                <p className="text-muted mb-1">Total Stock</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="mt-1">
                                <a href="" className="btn btn-primary btn-sm mb-1">
                                  Buy Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <SimpleBarReact style={{ maxHeight: 205 }} className="mx-n4">
                        <div className="popular-product-box rounded my-2">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar-md">
                                <div className="product-img avatar-title img-thumbnail bg-primary-subtle  border-0">
                                  <img
                                    src="/images/product/img-1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="mb-1 text-truncate">
                                <a href="" className="font-size-15 text-body">
                                  Wood Chair dark Brown
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0 text-truncate">
                                $230.00
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end ms-3">
                              <h5 className="mb-1">
                                <a href="" className="font-size-15 text-body">
                                  $62300.00
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0">
                                562 Sales
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="popular-product-box rounded my-2">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar-md">
                                <div className="product-img avatar-title img-thumbnail bg-success-subtle  border-0">
                                  <img
                                    src="/images/product/img-8.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="mb-1 text-truncate">
                                <a href="" className="font-size-15 text-body">
                                  Home &amp; Office Chair Crime
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0 text-truncate">
                                $190.00
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end ms-3">
                              <h5 className="mb-1">
                                <a href="" className="font-size-15 text-body">
                                  $25698.00
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0">
                                856 Sales
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="popular-product-box rounded my-2">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar-md">
                                <div className="product-img avatar-title img-thumbnail bg-danger-subtle  border-0">
                                  <img
                                    src="/images/product/img-3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="mb-1 text-truncate">
                                <a href="" className="font-size-15 text-body">
                                  Office Chair Blue
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0 text-truncate">
                                $420.00
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end ms-3">
                              <h5 className="mb-1">
                                <a href="" className="font-size-15 text-body">
                                  $64351.00
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0">
                                524 Sales
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="popular-product-box rounded my-2">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar-md">
                                <div className="product-img avatar-title img-thumbnail bg-success-subtle  border-0">
                                  <img
                                    src="/images/product/img-4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="mb-1 text-truncate">
                                <a href="" className="font-size-15 text-body">
                                  Home &amp; Office Chair Green
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0 text-truncate">
                                $230.00
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end ms-3">
                              <h5 className="mb-1">
                                <a href="" className="font-size-15 text-body">
                                  $96485.00
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0">
                                634 Sales
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="popular-product-box rounded my-2">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar-md">
                                <div className="product-img avatar-title img-thumbnail bg-danger-subtle  border-0">
                                  <img
                                    src="/images/product/img-5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="mb-1 text-truncate">
                                <a href="" className="font-size-15 text-body">
                                  Wood Chair dark Brown
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0 text-truncate">
                                $230.00
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end ms-3">
                              <h5 className="mb-1">
                                <a href="" className="font-size-15 text-body">
                                  $56230.00
                                </a>
                              </h5>
                              <p className="text-muted fw-semibold mb-0">
                                964 Sales
                              </p>
                            </div>
                          </div>
                        </div>
                      </SimpleBarReact>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-start mb-2">
                        <div className="flex-grow-1">
                          <h5 className="card-title">Loyal Customers</h5>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="dropdown">
                            <a
                              className="dropdown-toggle text-muted"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-horizontal font-size-22" />
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
                      <SimpleBarReact style={{ maxHeight: 421 }} className="mx-n4">
                        <div className="border-bottom loyal-customers-box pt-2">
                          <div className="d-flex align-items-center">
                            <img
                              src="/images/users/avatar-4.jpg"
                              className="rounded-circle avatar img-thumbnail"
                              alt=""
                            />
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="font-size-15 mb-1 text-truncate">
                                Michelle Bernard
                              </h5>
                              <p className="text-muted text-truncate mb-0">
                                Michelle@gmail.com
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                4.7{" "}
                                <i className="bx bxs-star font-size-14 text-primary ms-1" />
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="border-bottom loyal-customers-box">
                          <div className="d-flex align-items-center">
                            <img
                              src="/images/users/avatar-5.jpg"
                              className="rounded-circle avatar img-thumbnail"
                              alt=""
                            />
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="font-size-15 mb-1 text-truncate">
                                David Grajeda
                              </h5>
                              <p className="text-muted text-truncate mb-0">
                                David@gmail.com
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                3.4{" "}
                                <i className="bx bxs-star font-size-14 text-primary ms-1" />
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="border-bottom loyal-customers-box">
                          <div className="d-flex align-items-center">
                            <img
                              src="/images/users/avatar-6.jpg"
                              className="rounded-circle avatar img-thumbnail"
                              alt=""
                            />
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="font-size-15 mb-1 text-truncate">
                                Charles Roman
                              </h5>
                              <p className="text-muted text-truncate mb-0">
                                Charles@gmail.com
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end">
                              <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                4.9{" "}
                                <i className="bx bxs-star font-size-14 text-primary ms-1" />
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="border-bottom loyal-customers-box">
                          <div className="d-flex align-items-center">
                            <img
                              src="/images/users/avatar-7.jpg"
                              className="rounded-circle avatar img-thumbnail"
                              alt=""
                            />
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="font-size-15 mb-1 text-truncate">
                                David Reynolds
                              </h5>
                              <p className="text-muted text-truncate mb-0">
                                David@gmail.com
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end">
                              <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                3.5{" "}
                                <i className="bx bxs-star font-size-14 text-primary ms-1" />
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="border-bottom loyal-customers-box">
                          <div className="d-flex align-items-center">
                            <img
                              src="/images/users/avatar-8.jpg"
                              className="rounded-circle avatar img-thumbnail"
                              alt=""
                            />
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="font-size-15 mb-1 text-truncate">
                                Marion Munroe
                              </h5>
                              <p className="text-muted text-truncate mb-0">
                                Marion@gmail.com
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end">
                              <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                2.3{" "}
                                <i className="bx bxs-star font-size-14 text-primary ms-1" />
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="py-3 loyal-customers-box">
                          <div className="d-flex align-items-center">
                            <img
                              src="/images/users/avatar-5.jpg"
                              className="rounded-circle avatar img-thumbnail"
                              alt=""
                            />
                            <div className="flex-grow-1 ms-3 overflow-hidden">
                              <h5 className="font-size-15 mb-1 text-truncate">
                                Christina Emerson
                              </h5>
                              <p className="text-muted text-truncate mb-0">
                                Christina@gmail.com
                              </p>
                            </div>
                            <div className="flex-shrink-0 text-end">
                              <h5 className="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                4.1{" "}
                                <i className="bx bxs-star font-size-14 text-primary ms-1" />
                              </h5>
                            </div>
                          </div>
                        </div>
                      </SimpleBarReact>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="card-title mb-4 text-truncate">
                        Top Selling Categories
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
                  />}
                  <div className="row mt-3 pt-1">
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
          </div>
          <div className="row">
            <div className="col-xl-7">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Sales Revenue</h5>
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
                          <span className="fw-semibold">Year:</span>{" "}
                          <span className="text-muted">
                            2021
                            <i className="mdi mdi-chevron-down ms-1" />
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
                            2019
                          </a>
                          <a className="dropdown-item" href="#">
                            2020
                          </a>
                          <a className="dropdown-item" href="#">
                            2021
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-xxl-7">
                      <div className="py-3">
                        <div>
                        <VectorMap
                          ref={mapRef}
                          zoomOnScroll={false}
                          zoomButtons={false}
                          map={"world_mill"}
                          backgroundColor="white"
                          containerStyle={{
                            height: "300px",
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

                        />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="table-responsive">
                        <table className="table table-centered align-middle table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th style={{ width: 500 }}>Countries</th>
                              <th>Orders</th>
                              <th>Earnings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="/images/flags/us.jpg"
                                    className="rounded"
                                    alt="user-image"
                                    height={18}
                                  />
                                  <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 text-truncate">
                                      United States
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>46k</td>
                              <td>$6,524.30</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="/images/flags/italy.jpg"
                                    className="rounded"
                                    alt="user-image"
                                    height={18}
                                  />
                                  <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 text-truncate">Italy</p>
                                  </div>
                                </div>
                              </td>
                              <td>86k</td>
                              <td>$6,985.94</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="/images/flags/spain.jpg"
                                    className="rounded"
                                    alt="user-image"
                                    height={18}
                                  />
                                  <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 text-truncate">Spain</p>
                                  </div>
                                </div>
                              </td>
                              <td>86k</td>
                              <td>$5,685.47</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="/images/flags/french.jpg"
                                    className="rounded"
                                    alt="user-image"
                                    height={18}
                                  />
                                  <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 text-truncate">French</p>
                                  </div>
                                </div>
                              </td>
                              <td>56k</td>
                              <td>$5,645.45</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center mb-3">
                    <h5 className="card-title me-2">Invoice List</h5>
                    <div className="ms-auto">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle text-reset"
                          href="#"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="text-muted font-size-12">Sort By: </span>{" "}
                          <span className="fw-medium">
                            {" "}
                            Weekly
                            <i className="mdi mdi-chevron-down ms-1" />
                          </span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <a className="dropdown-item" href="#">
                            Monthly
                          </a>
                          <a className="dropdown-item" href="#">
                            Yearly
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SimpleBarReact style={{ maxHeight: 332 }} className="mx-n4">
                    <div className="table-responsive">
                      <table className="table table-striped table-centered align-middle table-nowrap mb-0 table-check">
                        <thead>
                          <tr>
                            <th style={{ width: 30 }}>
                              <div className="form-check font-size-16">
                                <input
                                  type="checkbox"
                                  name="check"
                                  className="form-check-input"
                                  id="checkAll"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkAll"
                                />
                              </div>
                            </th>
                            <th>#Invoice</th>
                            <th style={{ width: 190 }}>User Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label className="form-check-label" />
                              </div>
                            </td>
                            <td className="fw-semibold">#562354</td>
                            <td style={{ width: 190 }}>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle avatar-sm"
                                  src="/images/users/avatar-1.jpg"
                                  alt=""
                                />
                                <div className="flex-grow-1 ms-3">
                                  Neal Matthews
                                </div>
                              </div>
                            </td>
                            <td>10 Dec</td>
                            <td>
                              <div className="badge bg-success-subtle text-success  font-size-12">
                                Paid
                              </div>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a
                                  className="text-muted dropdown-toggle font-size-18"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Print
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label className="form-check-label" />
                              </div>
                            </td>
                            <td className="fw-semibold">#485625</td>
                            <td style={{ width: 190 }}>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle avatar-sm"
                                  src="/images/users/avatar-2.jpg"
                                  alt=""
                                />
                                <div className="flex-grow-1 ms-3">
                                  Connie Franco
                                </div>
                              </div>
                            </td>
                            <td>10 Dec</td>
                            <td>
                              <div className="badge bg-success-subtle text-success  font-size-12">
                                Paid
                              </div>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a
                                  className="text-muted dropdown-toggle font-size-18"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Print
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label className="form-check-label" />
                              </div>
                            </td>
                            <td className="fw-semibold">#321458</td>
                            <td style={{ width: 190 }}>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle avatar-sm"
                                  src="/images/users/avatar-3.jpg"
                                  alt=""
                                />
                                <div className="flex-grow-1 ms-3">Adella Perez</div>
                              </div>
                            </td>
                            <td>12 Dec</td>
                            <td>
                              <div className="badge bg-danger-subtle text-danger  font-size-12">
                                Unpaid
                              </div>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a
                                  className="text-muted dropdown-toggle font-size-18"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Print
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label className="form-check-label" />
                              </div>
                            </td>
                            <td className="fw-semibold">#214569</td>
                            <td style={{ width: 190 }}>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle avatar-sm"
                                  src="/images/users/avatar-4.jpg"
                                  alt=""
                                />
                                <div className="flex-grow-1 ms-3">
                                  Theresa Mayers
                                </div>
                              </div>
                            </td>
                            <td>21 Dec</td>
                            <td>
                              <div className="badge bg-success-subtle text-success  font-size-12">
                                Paid
                              </div>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a
                                  className="text-muted dropdown-toggle font-size-18"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Print
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label className="form-check-label" />
                              </div>
                            </td>
                            <td className="fw-semibold">#565423</td>
                            <td style={{ width: 190 }}>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle avatar-sm"
                                  src="/images/users/avatar-5.jpg"
                                  alt=""
                                />
                                <div className="flex-grow-1 ms-3">
                                  Oliver Gonzales
                                </div>
                              </div>
                            </td>
                            <td>25 Dec</td>
                            <td>
                              <div className="badge bg-danger-subtle text-danger  font-size-12">
                                Unpaid
                              </div>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a
                                  className="text-muted dropdown-toggle font-size-18"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Print
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label className="form-check-label" />
                              </div>
                            </td>
                            <td className="fw-semibold">#565423</td>
                            <td style={{ width: 190 }}>
                              <div className="d-flex align-items-center">
                                <img
                                  className="rounded-circle avatar-sm"
                                  src="/images/users/avatar-6.jpg"
                                  alt=""
                                />
                                <div className="flex-grow-1 ms-3">
                                  Willie Verner
                                </div>
                              </div>
                            </td>
                            <td>30 Dec</td>
                            <td>
                              <div className="badge bg-success-subtle text-success  font-size-12">
                                Paid
                              </div>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a
                                  className="text-muted dropdown-toggle font-size-18"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Print
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </SimpleBarReact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Home;
