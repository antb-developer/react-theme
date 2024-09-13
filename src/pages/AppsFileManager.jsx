import React, { useCallback } from 'react'
import ReactApexChart from 'react-apexcharts';
import Dropzone from 'react-dropzone'

const AppsFileManager = () => {

  var options = {
      series: [76],
      chart: {
          type: 'radialBar',
          height: 380,
          sparkline: {
              enabled: true
          }
      },
      plotOptions: {
          radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                  background: "#e6ecf9",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                      enabled: false,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                  }
              },
              hollow: {
                  margin: 15,
                  size: "65%"
              },
              dataLabels: {
                  name: {
                      show: false
                  },
                  value: {
                      offsetY: -2,
                      fontSize: '22px'
                  }
              }
          }
      },

      grid: {
          padding: {
              top: -10
          }
      },
      fill: {
        opacity: 1,
      },
      colors: ["#1f58c7"],
      labels: ['Average Results'],
  };

    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="d-xl-flex">
                            <div className="w-100">
                                <div className="d-xl-flex">
                                    <div className="card filemanager-sidebar me-md-3">
                                        <div className="card-body">
                                            <div className="d-flex flex-column h-100">
                                                <div className="mb-4">
                                                    <div className="mb-3">
                                                        <div className="dropdown">
                                                            <button type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-primary dropdown-toggle w-100">
                                                                <i className="mdi mdi-plus me-1"></i> Create New
                                                            </button>
                                                            <div className="dropdown-menu">
                                                              <a href="javascript:;" className="dropdown-item"><i className="bx bx-folder me-1"></i> Folder</a>
                                                              <a href="javascript:;" className="dropdown-item"><i className="bx bx-file me-1"></i> File</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled categories-list">
                                                        <li>
                                                            <div className="custom-accordion">
                                                                <a data-bs-toggle="collapse" href="#categories-collapse" role="button" aria-expanded="false" aria-controls="categories-collapse" className="text-body fw-medium py-1 d-flex align-items-center">
                                                                    <i className="mdi mdi-folder font-size-20 text-warning me-2"></i> My Files <i className="mdi mdi-chevron-up accor-down-icon ms-auto"></i>
                                                                </a>
                                                                <div id="categories-collapse" className="collapse show">
                                                                    <div className="card border-0 shadow-none ps-2 mb-0">
                                                                        <ul className="list-unstyled mb-0">
                                                                            <li><a href="javascript:;" className="d-flex align-items-center"><span className="me-auto">Analytics</span></a></li>
                                                                            <li><a href="javascript:;" className="d-flex align-items-center"><span className="me-auto">Design</span></a></li>
                                                                            <li><a href="javascript:;" className="d-flex align-items-center"><span className="me-auto">Development</span> <i className="mdi mdi-pin ms-auto"></i></a></li>
                                                                            <li><a href="javascript:;" className="d-flex align-items-center"><span className="me-auto">Project A</span></a></li>
                                                                            <li><a href="javascript:;" className="d-flex align-items-center"><span className="me-auto">Admin</span> <i className="mdi mdi-pin ms-auto"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);" className="text-body d-flex align-items-center">
                                                                <i className="mdi mdi-google-drive font-size-20 text-muted me-2"></i> <span className="me-auto">Google Drive</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);" className="text-body d-flex align-items-center">
                                                                <i className="mdi mdi-dropbox font-size-20 me-2 text-primary"></i> <span className="me-auto">Dropbox</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);" className="text-body d-flex align-items-center">
                                                                <i className="mdi mdi-share-variant font-size-20 me-2"></i> <span className="me-auto">Shared</span> <i className="mdi mdi-circle-medium text-danger ms-2"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);" className="text-body d-flex align-items-center">
                                                                <i className="mdi mdi-star-outline text-muted font-size-20 me-2"></i> <span className="me-auto">Starred</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);" className="text-body d-flex align-items-center">
                                                                <i className="mdi mdi-trash-can text-danger font-size-20 me-2"></i> <span className="me-auto">Trash</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);" className="text-body d-flex align-items-center">
                                                                <i className="mdi mdi-cog text-muted font-size-20 me-2"></i> <span className="me-auto">Setting</span><span className="badge bg-success rounded-pill ms-2">01</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="mt-4 pt-3 mt-auto text-center">
                                                    <div className="card mb-0">
                                                        <div className="card-body">
                                                            <div className="px-4">
                                                                <img src="/images/Upgrade-img.png" alt="" className="img-fluid" />
                                                            </div>
                                                            <h5 className="mt-4">Upgrade Features</h5>
                                                            <p className="pt-1">4 integrations, 30 team members, advanced features </p>
                                                            <div className="text-center pt-2">
                                                                <button type="button" className="btn btn-primary w-100">Upgrade <i className="mdi mdi-arrow-right ms-1"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="w-100">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="font-size-16 me-3 mb-0">My Files</h5>

                                                <div className="row mt-4">
                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="dropdown float-end">
                                                                        <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                                            <i className="bx bx-dots-vertical-rounded font-size-20"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center overflow-hidden">

                                                                        <div className="flex-shrink-0 me-3">
                                                                            <div className="avatar align-self-center">
                                                                                <div className="avatar-title rounded bg-primary-subtle  text-primary font-size-24">
                                                                                    <i className="mdi mdi-google-drive"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-15 mb-1 text-truncate">Google Drive</h5>
                                                                            <a href="" className="font-size-14 text-muted text-truncate"><u>View Folder</u></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-3 pt-1">
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-muted font-size-13 mb-1">15GB</p>
                                                                            <p className="text-muted font-size-13 mb-1 text-truncate">25GB used</p>
                                                                        </div>
                                                                        <div className="progress animated-progess custom-progress">
                                                                            <div role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90" className="progress-bar bg-gradient bg-primary">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">

                                                                <div className="">
                                                                    <div className="dropdown float-end">
                                                                        <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                                            <i className="bx bx-dots-vertical-rounded font-size-20"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center overflow-hidden">

                                                                        <div className="flex-shrink-0 me-3">
                                                                            <div className="avatar align-self-center">
                                                                                <div className="avatar-title rounded bg-info-subtle  text-info font-size-24">
                                                                                    <i className="mdi mdi-dropbox"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-15 mb-1 text-truncate">Dropbox</h5>
                                                                            <a href="" className="font-size-14 text-muted text-truncate"><u>View Folder</u></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-3 pt-1">
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-muted font-size-13 mb-1">20GB</p>
                                                                            <p className="text-muted font-size-13 mb-1 text-truncate">50GB used</p>
                                                                        </div>
                                                                        <div className="progress animated-progess custom-progress">
                                                                            <div role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90" className="progress-bar bg-gradient bg-primary">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="dropdown float-end">
                                                                        <a href="javascript:;" role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="text-muted dropdown-toggle font-size-16">
                                                                            <i className="bx bx-dots-vertical-rounded font-size-20"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                            <a href="javascript:;" className="dropdown-item">Action</a>
                                                                            <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center overflow-hidden">

                                                                        <div className="flex-shrink-0 me-3">
                                                                            <div className="avatar align-self-center me-3">
                                                                                <div className="avatar-title rounded bg-primary-subtle  text-primary font-size-24">
                                                                                    <i className="mdi mdi-apple-icloud"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-15 mb-1 text-truncate">One Drive</h5>
                                                                            <a href="" className="font-size-14 text-muted text-truncate"><u>View Folder</u></a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="mt-3 pt-1">
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-muted font-size-13 mb-1">10GB</p>
                                                                            <p className="text-muted font-size-13 mb-1 text-truncate">20GB used</p>
                                                                        </div>
                                                                        <div className="progress animated-progess custom-progress">
                                                                            <div role="progressbar" style={{ width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="70" className="progress-bar bg-gradient bg-primary">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>


                                                <h5 className="font-size-16 me-3 mb-0">Folders</h5>

                                                <div className="row mt-4">
                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <i className="bx bxs-folder h2 mb-0 text-warning"></i>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                                                            A
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex mt-3">
                                                                        <div className="overflow-hidden me-auto">
                                                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Analytics</a></h5>
                                                                            <p className="text-muted text-truncate mb-0">12 Files</p>
                                                                        </div>
                                                                        <div className="align-self-end ms-2">
                                                                            <p className="text-muted mb-0 font-size-13"><i className="bx bx-time-five align-middle me-1"></i> 15 min ago</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <i className="bx bxs-folder h2 mb-0 text-warning"></i>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex mt-3">
                                                                        <div className="overflow-hidden me-auto">
                                                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Sketch Design</a></h5>
                                                                            <p className="text-muted text-truncate mb-0">235 Files</p>
                                                                        </div>
                                                                        <div className="align-self-end ms-2">
                                                                            <p className="text-muted mb-0 font-size-13"><i className="bx bx-time-five align-middle me-1"></i> 23 min ago</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <i className="bx bxs-folder h2 mb-0 text-warning"></i>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                                                                            K
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex mt-3">
                                                                        <div className="overflow-hidden me-auto">
                                                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Applications</a></h5>
                                                                            <p className="text-muted text-truncate mb-0">20 Files</p>
                                                                        </div>
                                                                        <div className="align-self-end ms-2">
                                                                            <p className="text-muted mb-0 font-size-13"><i className="bx bx-time-five align-middle me-1"></i> 45 min ago</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <i className="bx bxs-folder h2 mb-0 text-warning"></i>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex mt-3">
                                                                        <div className="overflow-hidden me-auto">
                                                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Photoshop</a></h5>
                                                                            <p className="text-muted text-truncate mb-0">366 Files</p>
                                                                        </div>
                                                                        <div className="align-self-end ms-2">
                                                                            <p className="text-muted mb-0 font-size-13"><i className="bx bx-time-five align-middle me-1"></i> 5 hrs ago</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <i className="bx bxs-folder h2 mb-0 text-warning"></i>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                                                            3+
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex mt-3">
                                                                        <div className="overflow-hidden me-auto">
                                                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Laravel Design</a></h5>
                                                                            <p className="text-muted text-truncate mb-0">185 Files</p>
                                                                        </div>
                                                                        <div className="align-self-end ms-2">
                                                                            <p className="text-muted mb-0 font-size-13"><i className="bx bx-time-five align-middle me-1"></i> 23 min ago</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-xl-4 col-sm-6">
                                                        <div className="card">
                                                            <div className="card-body p-3">
                                                                <div className="">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <i className="bx bxs-folder h2 mb-0 text-warning"></i>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex mt-3">
                                                                        <div className="overflow-hidden me-auto">
                                                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Ecommerce</a></h5>
                                                                            <p className="text-muted text-truncate mb-0">56 Files</p>
                                                                        </div>
                                                                        <div className="align-self-end ms-2">
                                                                            <p className="text-muted mb-0 font-size-13"><i className="bx bx-time-five align-middle me-1"></i> 8 hrs ago</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>


                                                <h5 className="font-size-16 me-3 mb-0">Recent Files</h5>


                                                <div data-simplebar="" style={{maxHeight: "350px"}} className="mx-n4 mt-4">
                                                    <div className="table-responsive">

                                                        <table className="table align-middle table-nowrap table-hover mb-0">
                                                            <thead className="table-light">
                                                                <tr>
                                                                  <th scope="col">Name</th>
                                                                  <th scope="col">Date modified</th>
                                                                  <th scope="col">Size</th>
                                                                  <th scope="col" colspan="2">Members</th>
                                                                </tr>
                                                              </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-file-document font-size-20 align-middle text-primary me-2"></i> index.html</a></td>
                                                                    <td>12-10-2021</td>
                                                                    <td>09 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                                                            A
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-folder-zip font-size-20 align-middle text-warning me-2"></i> Project-A.zip</a></td>
                                                                    <td>11-10-2021</td>
                                                                    <td>115 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-image font-size-20 align-middle text-muted me-2"></i> Img-1.jpeg</a></td>
                                                                    <td>11-10-2021</td>
                                                                    <td>86 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                                                                            K
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-text-box font-size-20 align-middle text-muted me-2"></i> update list.txt</a></td>
                                                                    <td>10-10-2021</td>
                                                                    <td>08 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-folder font-size-20 align-middle text-warning me-2"></i> Project B</a></td>
                                                                    <td>10-10-2021</td>
                                                                    <td>72 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                                                            3+
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-text-box font-size-20 align-middle text-muted me-2"></i> Changes list.txt</a></td>
                                                                    <td>09-10-2021</td>
                                                                    <td>07 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-image font-size-20 align-middle text-success me-2"></i> Img-2.png</a></td>
                                                                    <td>09-10-2021</td>
                                                                    <td>31 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-pink text-white font-size-16">
                                                                                            L
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="mdi mdi-folder font-size-20 align-middle text-warning me-2"></i> Project C</a></td>
                                                                    <td>09-10-2021</td>
                                                                    <td>20 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <div className="avatar-sm">
                                                                                        <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                                                            A
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript: void(0);" className="text-body fw-medium"><i className="bx bxs-file font-size-20 align-middle text-primary me-2"></i> starter-page.html</a></td>
                                                                    <td>08-10-2021</td>
                                                                    <td>11 KB</td>
                                                                    <td>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <a href="javascript: void(0);" className="d-inline-block">
                                                                                    <img src="/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-sm" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a role="button" data-bs-toggle="dropdown" aria-haspopup="true" className="font-size-16 text-muted">
                                                                                <i className="mdi mdi-dots-horizontal"></i>
                                                                            </a>

                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a href="javascript:;" className="dropdown-item">Open</a>
                                                                                <a href="javascript:;" className="dropdown-item">Edit</a>
                                                                                <a href="javascript:;" className="dropdown-item">Rename</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a href="javascript:;" className="dropdown-item">Remove</a>
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

                            <div className="card filemanager-sidebar ms-lg-3">
                                <div className="card-body">
                                    <div className="d-flex flex-column h-100">

                                        <div className="mb-4">
                                            <h5 className="font-size-16 me-3 mb-0">Usage Storage</h5>
                                            <div className="text-center mt-3">
                                                <div id="chart-radialBar" data-colors="[&quot;#1f58c7&quot;]" className="apex-charts"></div>
                                                <ReactApexChart
                                                  options={options}
                                                  series={options.series}
                                                  type="radialBar"
                                                />

                                                <p className="text-muted mt-3 pt-1">48.02 GB (76%) of 64 GB used</p>
                                            </div>

                                            <h5 className="font-size-16 mb-0 mt-5">Recent Files</h5>

                                            <div className="mt-4">
                                                <div className="pb-2 mb-2">
                                                    <a href="javascript: void(0);" className="text-body">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar align-self-center me-3">
                                                                <div className="avatar-title rounded bg-success-subtle  text-success font-size-24">
                                                                    <i className="mdi mdi-image"></i>
                                                                </div>
                                                            </div>
                                                            <div className="overflow-hidden me-auto">
                                                                <h5 className="font-size-15 text-truncate mb-1">Images</h5>
                                                                <p className="text-muted text-truncate mb-0">1,876 Files</p>
                                                            </div>
                                                            <div className="ms-2">
                                                                <p className="text-muted font-size-14">8.4 GB</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="py-2 mb-2">
                                                    <a href="javascript: void(0);" className="text-body">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar align-self-center me-3">
                                                                <div className="avatar-title rounded bg-danger-subtle  text-danger font-size-24">
                                                                    <i className="mdi mdi-play-circle-outline"></i>
                                                                </div>
                                                            </div>
                                                            <div className="overflow-hidden me-auto">
                                                                <h5 className="font-size-15 text-truncate mb-1">Video</h5>
                                                                <p className="text-muted text-truncate mb-0">45 Files</p>
                                                            </div>
                                                            <div className="ms-2">
                                                                <p className="text-muted font-size-14">4.1 GB</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="py-2 mb-2">
                                                    <a href="javascript: void(0);" className="text-body">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar align-self-center me-3">
                                                                <div className="avatar-title rounded bg-info-subtle  text-info font-size-24">
                                                                    <i className="mdi mdi-music"></i>
                                                                </div>
                                                            </div>
                                                            <div className="overflow-hidden me-auto">
                                                                <h5 className="font-size-15 text-truncate mb-1">Music</h5>
                                                                <p className="text-muted text-truncate mb-0">21 Files</p>
                                                            </div>
                                                            <div className="ms-2">
                                                                <p className="text-muted font-size-14">3.2 GB</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="py-2 mb-2">
                                                    <a href="javascript: void(0);" className="text-body">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar align-self-center me-3">
                                                                <div className="avatar-title rounded bg-primary-subtle  text-primary font-size-24">
                                                                    <i className="mdi mdi-file-document"></i>
                                                                </div>
                                                            </div>
                                                            <div className="overflow-hidden me-auto">
                                                                <h5 className="font-size-15 text-truncate mb-1">Document</h5>
                                                                <p className="text-muted text-truncate mb-0">21 Files</p>
                                                            </div>
                                                            <div className="ms-2">
                                                                <p className="text-muted font-size-14">2 GB</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="py-2 mb-2">
                                                    <a href="javascript: void(0);" className="text-body">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar align-self-center me-3">
                                                                <div className="avatar-title rounded bg-warning-subtle  text-warning font-size-24">
                                                                    <i className="mdi mdi-folder"></i>
                                                                </div>
                                                            </div>
                                                            <div className="overflow-hidden me-auto">
                                                                <h5 className="font-size-15 text-truncate mb-1">Others</h5>
                                                                <p className="text-muted text-truncate mb-0">20 Files</p>
                                                            </div>
                                                            <div className="ms-2">
                                                                <p className="text-muted font-size-14">1.4 GB</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-5 mt-auto">

                                            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                              {({getRootProps, getInputProps}) => (
                                                <section>
                                                  <div {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <form action="#" className="dropzone">
                                                        <div className="fallback">
                                                            <input name="file" type="file" multiple="multiple" />
                                                        </div>
                                                        <div className="dz-message needsclick">
                                                            <div className="mb-3">
                                                                <i className="display-4 text-muted mdi mdi-cloud-upload"></i>
                                                            </div>

                                                            <h5>Import Files</h5>
                                                        </div>
                                                    </form>

                                                  </div>
                                                </section>
                                              )}
                                            </Dropzone>
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

export default AppsFileManager;
