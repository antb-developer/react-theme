import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="ishorizontal-topbar" style={{display: 'block'}}>
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img src="/images/logo-dark-sm.png" alt="" height={26} />
              </span>
              <span className="logo-lg">
                <img src="/images/logo-dark.png" alt="" height={28} />
              </span>
            </a>
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="/images/logo-light-sm.png" alt="" height={26} />
              </span>
              <span className="logo-lg">
                <img src="/images/logo-light.png" alt="" height={30} />
              </span>
            </a>
          </div>
          <button type="button" className="btn btn-sm px-3 font-size-24 d-lg-none header-item" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
            <i className="bx bx-menu align-middle" />
          </button>
          {/* start page title */}
          <div className="page-title-box align-self-center d-none d-md-block">
            <h4 className="page-title mb-0">Horizontal</h4>
          </div>
          {/* end page title */}
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block language-switch ms-2 ms-xl-3">
            <button type="button" className="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="header-lang-img" src="/images/flags/us.jpg" alt="Header Language" height={18} />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="eng">
                <img src="/images/flags/us.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">English</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                <img src="/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                <img src="/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                <img src="/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
              </a>
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                <img src="/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
              </a>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bx bx-search icon-sm align-middle" />
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
              <form className="p-2">
                <div className="search-box">
                  <div className="position-relative">
                    <input type="text" className="form-control rounded bg-light border-0" placeholder="Search..." />
                    <i className="bx bx-search search-icon" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bx bx-bell icon-sm align-middle" />
              <span className="noti-dot bg-danger rounded-pill">4</span>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="m-0 font-size-15"> Notifications </h5>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="small fw-semibold text-decoration-underline"> Mark all as read</a>
                  </div>
                </div>
              </div>
              <div data-simplebar="init" style={{maxHeight: '250px'}}><div className="simplebar-wrapper" style={{margin: '0px'}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: '0px', bottom: '0px'}}><div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" style={{height: 'auto', overflow: 'hidden'}}><div className="simplebar-content" style={{padding: '0px'}}>
                          <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <img src="/images/users/avatar-3.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">James Lemire</h6>
                                <div className="font-size-13 text-muted">
                                  <p className="mb-1">It will seem like simplified English.</p>
                                  <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span>1 hour ago</span></p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 avatar-sm me-3">
                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                  <i className="bx bx-cart" />
                                </span>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Your order is placed</h6>
                                <div className="font-size-13 text-muted">
                                  <p className="mb-1">If several languages coalesce the grammar</p>
                                  <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span>3 min ago</span></p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 avatar-sm me-3">
                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                  <i className="bx bx-badge-check" />
                                </span>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Your item is shipped</h6>
                                <div className="font-size-13 text-muted">
                                  <p className="mb-1">If several languages coalesce the grammar</p>
                                  <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span>3 min ago</span></p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="text-reset notification-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <img src="/images/users/avatar-6.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Salena Layfield</h6>
                                <div className="font-size-13 text-muted">
                                  <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                  <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span>1 hour ago</span></p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div></div></div></div><div className="simplebar-placeholder" style={{width: '0px', height: '0px'}} /></div><div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div className="simplebar-scrollbar" style={{width: '0px', display: 'none'}} /></div><div className="simplebar-track simplebar-vertical" style={{visibility: 'hidden'}}><div className="simplebar-scrollbar" style={{height: '0px', display: 'none'}} /></div></div>
              <div className="p-2 border-top d-grid">
                <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                  <i className="uil-arrow-circle-right me-1" /> <span>View More..</span>
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item user text-start d-flex align-items-center" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="rounded-circle header-profile-user" src="/images/users/avatar-3.jpg" alt="Header Avatar" />
              <span className="d-none d-xl-inline-block ms-2 fw-medium font-size-15">Martin Gurley</span>
            </button>
            <div className="dropdown-menu dropdown-menu-end pt-0">
              <div className="p-3 border-bottom">
                <h6 className="mb-0">Martin Gurley</h6>
                <p className="mb-0 font-size-11 text-muted">martin.gurley@email.com</p>
              </div>
              <a className="dropdown-item" href="contacts-profile.html"><i className="mdi mdi-account-circle text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Profile</span></a>
              <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Messages</span></a>
              <a className="dropdown-item" href="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Help</span></a>
              <a className="dropdown-item d-flex align-items-center" href="#"><i className="mdi mdi-cog-outline text-muted font-size-16 align-middle me-2" /> <span className="align-middle me-3">Settings</span><span className="badge bg-success-subtle text-success  ms-auto">New</span></a>
              <a className="dropdown-item" href="auth-lock-screen.html"><i className="mdi mdi-lock text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Lock screen</span></a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="auth-logout.html"><i className="mdi mdi-logout text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Logout</span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="topnav" style={{display: 'block'}}>
        <div className="container-fluid active">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu active">
            <div className="collapse navbar-collapse active" id="topnav-menu-content">
              <ul className="navbar-nav active">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bx bx-home-alt icon nav-icon" />
                    <span data-key="t-dashboards">Dashboards</span> <div className="arrow-down" />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="topnav-dashboard">
                    <a href="index.html" className="dropdown-item" data-key="t-ecommerce">Ecommerce</a>
                    <a href="dashboard-sales.html" className="dropdown-item" data-key="t-sales">Sales</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bx bx-cube icon nav-icon" />
                    <span data-key="t-elements">Elements</span> <div className="arrow-down" />
                  </a>
                  <div className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl" aria-labelledby="topnav-uielement">
                    <div className="ps-2 p-lg-0">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <div className="menu-title">Elements</div>
                            <div className="row g-0">
                              <div className="col-lg-4">
                                <div>
                                  <a href="ui-alerts.html" className="dropdown-item" data-key="t-alerts">Alerts</a>
                                  <a href="ui-buttons.html" className="dropdown-item" data-key="t-buttons">Buttons</a>
                                  <a href="ui-cards.html" className="dropdown-item" data-key="t-cards">Cards</a>
                                  <a href="ui-carousel.html" className="dropdown-item" data-key="t-carousel">Carousel</a>
                                  <a href="ui-dropdowns.html" className="dropdown-item" data-key="t-dropdowns">Dropdowns</a>
                                  <a href="ui-grid.html" className="dropdown-item" data-key="t-grid">Grid</a>
                                  <a href="ui-images.html" className="dropdown-item" data-key="t-images">Images</a>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div>
                                  <a href="ui-lightbox.html" className="dropdown-item" data-key="t-lightbox">Lightbox</a>
                                  <a href="ui-modals.html" className="dropdown-item" data-key="t-modals">Modals</a>
                                  <a href="ui-offcanvas.html" className="dropdown-item" data-key="t-offcanvas">Offcanvas</a>
                                  <a href="ui-rangeslider.html" className="dropdown-item" data-key="t-range-slider">Range Slider</a>
                                  <a href="ui-progressbars.html" className="dropdown-item" data-key="t-progress-bars">Progress Bars</a>
                                  <a href="ui-sweet-alert.html" className="dropdown-item" data-key="t-sweet-alert">Sweet-Alert</a>
                                  <a href="ui-tabs-accordions.html" className="dropdown-item" data-key="t-tabs-accordions">Tabs &amp; Accordions</a>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div>
                                  <a href="ui-typography.html" className="dropdown-item" data-key="t-typography">Typography</a>
                                  <a href="ui-video.html" className="dropdown-item" data-key="t-video">Video</a>
                                  <a href="ui-general.html" className="dropdown-item" data-key="t-general">General</a>
                                  <a href="ui-colors.html" className="dropdown-item" data-key="t-colors">Colors</a>
                                  <a href="ui-rating.html" className="dropdown-item" data-key="t-rating">Rating</a>
                                  <a href="ui-notifications.html" className="dropdown-item" data-key="t-notifications">Notifications</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button">
                    <i className="bx bx-store icon nav-icon" />
                    <span data-key="t-apps">Apps</span> <div className="arrow-down" />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="topnav-pages">
                    <a href="apps-calendar.html" className="dropdown-item" data-key="t-calendar">Calendar</a>
                    <a href="apps-todo.html" className="dropdown-item" data-key="t-todo">Todo</a>
                    <a href="apps-file-manager.html" className="dropdown-item" data-key="t-filemanager">File Manager</a>
                    <a href="apps-chat.html" className="dropdown-item" data-key="t-chat">Chat</a>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce" role="button">
                        <span data-key="t-ecommerce">Ecommerce</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
                        <a href="ecommerce-products.html" className="dropdown-item" data-key="t-products">Products</a>
                        <a href="ecommerce-product-detail.html" className="dropdown-item" data-key="t-product-detail">Product Detail</a>
                        <a href="ecommerce-orders.html" className="dropdown-item" data-key="t-orders">Orders</a>
                        <a href="ecommerce-customers.html" className="dropdown-item" data-key="t-customers">Customers</a>
                        <a href="ecommerce-cart.html" className="dropdown-item" data-key="t-cart">Cart</a>
                        <a href="ecommerce-checkout.html" className="dropdown-item" data-key="t-checkout">Checkout</a>
                        <a href="ecommerce-shops.html" className="dropdown-item" data-key="t-shops">Shops</a>
                        <a href="ecommerce-add-product.html" className="dropdown-item" data-key="t-add-product">Add Product</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button">
                        <span data-key="t-email">Email</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-email">
                        <a href="email-inbox.html" className="dropdown-item" data-key="t-inbox">Inbox</a>
                        <a href="email-read.html" className="dropdown-item" data-key="t-read-email">Read Email</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-invoices" role="button">
                        <span data-key="t-invoices">Invoices</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-invoices">
                        <a href="invoices-list.html" className="dropdown-item" data-key="t-invoice-list">Invoice List</a>
                        <a href="invoices-detail.html" className="dropdown-item" data-key="t-invoice-detail">Invoice Detail</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-contact" role="button">
                        <span data-key="t-contacts">Contacts</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-contact">
                        <a href="contacts-grid.html" className="dropdown-item" data-key="t-user-grid">User Grid</a>
                        <a href="contacts-list.html" className="dropdown-item" data-key="t-user-list">User List</a>
                        <a href="contacts-profile.html" className="dropdown-item" data-key="t-user-profile">Profile</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button">
                    <i className="bx bx-layer icon nav-icon" />
                    <span data-key="t-components">Components</span> <div className="arrow-down" />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="topnav-components">
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form" role="button">
                        <span data-key="t-forms">Forms</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-form">
                        <a href="form-elements.html" className="dropdown-item" data-key="t-form-elements">Form Elements</a>
                        <a href="form-layouts.html" className="dropdown-item" data-key="t-form-layouts">Form Layouts</a>
                        <a href="form-validation.html" className="dropdown-item" data-key="t-form-validation">Form Validation</a>
                        <a href="form-advanced.html" className="dropdown-item" data-key="t-form-advanced">Form Advanced</a>
                        <a href="form-editors.html" className="dropdown-item" data-key="t-form-editors">Form Editors</a>
                        <a href="form-uploads.html" className="dropdown-item" data-key="t-form-upload">Form File Upload</a>
                        <a href="form-wizard.html" className="dropdown-item" data-key="t-form-wizard">Form Wizard</a>
                        <a href="form-mask.html" className="dropdown-item" data-key="t-form-mask">Form Mask</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table" role="button">
                        <span data-key="t-tables">Tables</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-table">
                        <a href="tables-basic.html" className="dropdown-item" data-key="t-basic-tables">Basic Tables</a>
                        <a href="tables-advanced.html" className="dropdown-item" data-key="t-advanced-tables">Advance Tables</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts" role="button">
                        <span data-key="t-charts">Charts</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-charts">
                        <a href="charts-apex.html" className="dropdown-item" data-key="t-apex-charts">Apex Charts</a>
                        <a href="charts-chartjs.html" className="dropdown-item" data-key="t-chartjs-charts">Chartjs Charts</a>
                        <a href="charts-tui.html" className="dropdown-item" data-key="t-ui-charts">Toast UI Charts</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons" role="button">
                        <span data-key="t-icons">Icons</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-icons">
                        <a href="icons-evaicons.html" className="dropdown-item" data-key="t-evaicons">Eva Icons</a>
                        <a href="icons-boxicons.html" className="dropdown-item" data-key="t-boxicons">Boxicons</a>
                        <a href="icons-materialdesign.html" className="dropdown-item" data-key="t-material-design">Material Design</a>
                        <a href="icons-fontawesome.html" className="dropdown-item" data-key="t-font-awesome">Font Awesome 5</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map" role="button">
                        <span data-key="t-maps">Maps</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-map">
                        <a href="maps-google.html" className="dropdown-item" data-key="t-google">Google</a>
                        <a href="maps-vector.html" className="dropdown-item" data-key="t-vector">Vector</a>
                        <a href="maps-leaflet.html" className="dropdown-item" data-key="t-leaflet">Leaflet</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button">
                    <i className="bx bx-file icon nav-icon" />
                    <span data-key="t-pages">Pages</span> <div className="arrow-down" />
                  </a>
                  <div className="dropdown-menu active" aria-labelledby="topnav-more">
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-authentication" role="button">
                        <span data-key="t-authentication">Authentication</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-authentication">
                        <a href="auth-login.html" className="dropdown-item" data-key="t-login">Login</a>
                        <a href="auth-register.html" className="dropdown-item" data-key="t-register">Register</a>
                        <a href="auth-recoverpw.html" className="dropdown-item" data-key="t-recover-password">Recover Password</a>
                        <a href="auth-lock-screen.html" className="dropdown-item" data-key="t-lock-screen">Lock Screen</a>
                        <a href="auth-logout.html" className="dropdown-item" data-key="t-logout">Logout</a>
                        <a href="auth-confirm-mail.html" className="dropdown-item" data-key="t-confirm-mail">Confirm Mail</a>
                        <a href="auth-email-verification.html" className="dropdown-item" data-key="t-email-verification">Email Verification</a>
                        <a href="auth-two-step-verification.html" className="dropdown-item" data-key="t-two-step-verification">Two Step Verification</a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility" role="button">
                        <span data-key="t-utility">Utility</span> <div className="arrow-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="topnav-utility">
                        <a href="pages-starter.html" className="dropdown-item" data-key="t-starter-page">Starter Page</a>
                        <a href="pages-maintenance.html" className="dropdown-item" data-key="t-maintenance">Maintenance</a>
                        <a href="pages-comingsoon.html" className="dropdown-item" data-key="t-coming-soon">Coming Soon</a>
                        <a href="pages-timeline.html" className="dropdown-item" data-key="t-timeline">Timeline</a>
                        <a href="pages-faqs.html" className="dropdown-item" data-key="t-faqs">FAQs</a>
                        <a href="pages-pricing.html" className="dropdown-item" data-key="t-pricing">Pricing</a>
                        <a href="pages-404.html" className="dropdown-item" data-key="t-error-404">Error 404</a>
                        <a href="pages-500.html" className="dropdown-item" data-key="t-error-500">Error 500</a>
                      </div>
                    </div>
                    <a href="layouts-horizontal.html" className="dropdown-item active" data-key="t-horizontal">Horizontal</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
