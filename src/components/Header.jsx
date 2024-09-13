import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const toggleSidebar = () => {
    document.body.classList.toggle('sidebar-enable');
    if (document.body.getAttribute('data-sidebar-size') === 'lg') {
      document.body.setAttribute('data-sidebar-size', 'sm');
    } else {
      document.body.setAttribute('data-sidebar-size', 'lg');
    }
  }

  return (
    <header id="page-topbar" className="isvertical-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src="/images/logo-dark-sm.png" alt="" height={26} />
              </span>
              <span className="logo-lg">
                <img src="/images/logo-dark-sm.png" alt="" height={26} />
              </span>
            </Link>
            <Link to="/" className="logo logo-light">
              <span className="logo-lg">
                <img src="/images/logo-light.png" alt="" height={30} />
              </span>
              <span className="logo-sm">
                <img src="/images/logo-light-sm.png" alt="" height={26} />
              </span>
            </Link>
          </div>
          <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn" onClick={toggleSidebar}>
            <i className="bx bx-menu align-middle" />
          </button>
          <div className="page-title-box align-self-center d-none d-md-block">
            <h4 className="page-title mb-0">Hi, Welcome Back!</h4>
          </div>
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block language-switch ms-2">
            <button type="button" className="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="header-lang-img" src="/images/flags/us.jpg" alt="Header Language" height={18} />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <Link to="javascript:void(0);" className="dropdown-item notify-item language" data-lang="eng">
                <img src="/images/flags/us.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">English</span>
              </Link>
              {/* item*/}
              <Link to="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                <img src="/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
              </Link>
              {/* item*/}
              <Link to="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                <img src="/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
              </Link>
              {/* item*/}
              <Link to="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                <img src="/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
              </Link>
              {/* item*/}
              <Link to="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                <img src="/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
              </Link>
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
            <button type="button" className="btn header-item noti-icon" id="page-header-notifications-dropdown-v" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bx bx-bell icon-sm align-middle" />
              <span className="noti-dot bg-danger rounded-pill">4</span>
            </button>
            <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown-v">
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="m-0 font-size-15"> Notifications </h5>
                  </div>
                  <div className="col-auto">
                    <Link to="#!" className="small fw-semibold text-decoration-underline"> Mark all as read</Link>
                  </div>
                </div>
              </div>
              <div data-simplebar style={{maxHeight: '250px'}}>
                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img src="/images/users/avatar-3.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">1 hour ago</p>
                      <h6 className="mb-1">James Lemire</h6>
                      <div>
                        <p className="mb-0">It will seem like simplified English.</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar-sm me-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-18">
                        <i className="bx bx-cart" />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">3 min ago</p>
                      <h6 className="mb-1">Your order is placed</h6>
                      <div>
                        <p className="mb-0">If several languages coalesce the grammar</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar-sm me-3">
                      <span className="avatar-title bg-success rounded-circle font-size-18">
                        <i className="bx bx-badge-check" />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">8 min ago</p>
                      <h6 className="mb-1">Your item is shipped</h6>
                      <div>
                        <p className="mb-0">If several languages coalesce the grammar</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img src="/images/users/avatar-6.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">1 hour ago</p>
                      <h6 className="mb-1">Salena Layfield</h6>
                      <div>
                        <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-2 border-top d-grid">
                <Link className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                  <i className="uil-arrow-circle-right me-1" /> <span>View More..</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item user text-start d-flex align-items-center" id="page-header-user-dropdown-v" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="rounded-circle header-profile-user" src="/images/users/avatar-3.jpg" alt="Header Avatar" />
              <span className="d-none d-xl-inline-block ms-2 fw-medium font-size-15">Martin Gurley</span>
            </button>
            <div className="dropdown-menu dropdown-menu-end pt-0">
              <div className="p-3 border-bottom">
                <h6 className="mb-0">Martin Gurley</h6>
                <p className="mb-0 font-size-11 text-muted">martin.gurley@email.com</p>
              </div>
              <Link className="dropdown-item" to="contacts/profile"><i className="mdi mdi-account-circle text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Profile</span></Link>
              <Link className="dropdown-item" to="apps/chat"><i className="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Messages</span></Link>
              <Link className="dropdown-item" to="pages/faqs"><i className="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Help</span></Link>
              <Link className="dropdown-item d-flex align-items-center" to="#"><i className="mdi mdi-cog-outline text-muted font-size-16 align-middle me-2" /> <span className="align-middle me-3">Settings</span><span className="badge bg-success-subtle text-success  ms-auto">New</span></Link>
              <Link className="dropdown-item" to="auth/lock-screen"><i className="mdi mdi-lock text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Lock screen</span></Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="auth/logout"><i className="mdi mdi-logout text-muted font-size-16 align-middle me-2" /> <span className="align-middle">Logout</span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
