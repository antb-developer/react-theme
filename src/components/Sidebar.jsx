import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MetisMenu from '@metismenu/react';

const Header = () => {

  const toggleSidebar = () => {
    console.log(document.body.classList);
    document.body.classList.toggle('sidebar-enable');

    if (document.body.getAttribute('data-sidebar-size') === 'lg') {
      document.body.setAttribute('data-sidebar-size', 'sm');
    } else {
        document.body.setAttribute('data-sidebar-size', 'lg');
    }
  }

    return (
    <div className="vertical-menu">
      <div className="navbar-brand-box">
        <Link to="/" className="logo logo-dark">
          <span className="logo-sm">
            <img src='/images/logo-dark-sm.png' alt="" height={26} />
          </span>
          <span className="logo-lg">
            <img src="/images/logo-dark.png" alt="" height={28} />
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
      <div data-simplebar className="sidebar-menu-scroll">
        <div id="sidebar-menu">
        <MetisMenu>
            <li className="menu-title" data-key="t-menu">Dashboard</li>
            <li>
              <Link to="javascript: void(0);">
                <i className="bx bx-home-alt icon nav-icon" />
                <span className="menu-item" data-key="t-dashboard">Dashboard</span>
                <span className="badge rounded-pill bg-primary">2</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/dashboard/ecommerce" data-key="t-ecommerce">Ecommerce</Link></li>
                <li><Link to="dashboard/sales" data-key="t-sales">Sales</Link></li>
                <li><Link to="dashboard/custom" data-key="t-sales">Custome</Link></li>
              </ul>
            </li>
            <li className="menu-title" data-key="t-applications">Applications</li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-envelope icon nav-icon" />
                <span className="menu-item" data-key="t-email">Email</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="email/inbox" data-key="t-inbox">Inbox</Link></li>
                <li><Link to="email/read" data-key="t-read-email">Read Email</Link></li>
              </ul>
            </li>
            <li>
              <Link to="apps/calendar">
                <i className="bx bx-calendar-event icon nav-icon" />
                <span className="menu-item" data-key="t-calendar">Calendar</span>
              </Link>
            </li>
            <li>
              <Link to="apps/todo">
                <i className="bx bx-check-square icon nav-icon" />
                <span className="menu-item" data-key="t-todo">Todo</span>
              </Link>
            </li>
            <li>
              <Link to="apps/file-manager">
                <i className="bx bx-file-find icon nav-icon" />
                <span className="menu-item" data-key="t-filemanager">File Manager</span>
              </Link>
            </li>
            <li>
              <Link to="apps/chat">
                <i className="bx bx-chat icon nav-icon" />
                <span className="menu-item" data-key="t-chat">Chat</span>
                <span className="badge rounded-pill bg-danger" data-key="t-hot">Hot</span>
              </Link>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-store icon nav-icon" />
                <span className="menu-item" data-key="t-ecommerce">Ecommerce</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="ecommerce/products" data-key="t-products">Products</Link></li>
                <li><Link to="ecommerce/product-detail" data-key="t-product-detail">Product Detail</Link></li>
                <li><Link to="ecommerce/orders" data-key="t-orders">Orders</Link></li>
                <li><Link to="ecommerce/customers" data-key="t-customers">Customers</Link></li>
                <li><Link to="ecommerce/cart" data-key="t-cart">Cart</Link></li>
                <li><Link to="ecommerce/checkout" data-key="t-checkout">Checkout</Link></li>
                <li><Link to="ecommerce/shops" data-key="t-shops">Shops</Link></li>
                <li><Link to="ecommerce/add-product" data-key="t-add-product">Add Product</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-receipt icon nav-icon" />
                <span className="menu-item" data-key="t-invoices">Invoices</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="invoices/list" data-key="t-invoice-list">Invoice List</Link></li>
                <li><Link to="invoices/detail" data-key="t-invoice-detail">Invoice Detail</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-user-circle icon nav-icon" />
                <span className="menu-item" data-key="t-contacts">Contacts</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="contacts/grid" data-key="t-user-grid">User Grid</Link></li>
                <li><Link to="contacts/list" data-key="t-user-list">User List</Link></li>
                <li><Link to="contacts/profile" data-key="t-user-profile">Profile</Link></li>
              </ul>
            </li>
            <li className="menu-title" data-key="t-components">Components</li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-cube icon nav-icon" />
                <span className="menu-item" data-key="t-ui-elements">UI Elements</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="ui/alerts" data-key="t-alerts">Alerts</Link></li>
                <li><Link to="ui/buttons" data-key="t-buttons">Buttons</Link></li>
                <li><Link to="ui/cards" data-key="t-cards">Cards</Link></li>
                <li><Link to="ui/carousel" data-key="t-carousel">Carousel</Link></li>
                <li><Link to="ui/dropdowns" data-key="t-dropdowns">Dropdowns</Link></li>
                <li><Link to="ui/grid" data-key="t-grid">Grid</Link></li>
                <li><Link to="ui/images" data-key="t-images">Images</Link></li>
                <li><Link to="ui/lightbox" data-key="t-lightbox">Lightbox</Link></li>
                <li><Link to="ui/modals" data-key="t-modals">Modals</Link></li>
                <li><Link to="ui/offcanvas" data-key="t-offcanvas">Offcanvas</Link></li>
                <li><Link to="ui/rangeslider" data-key="t-range-slider">Range Slider</Link></li>
                <li><Link to="ui/progressbars" data-key="t-progress-bars">Progress Bars</Link></li>
                <li><Link to="ui/sweet-alert" data-key="t-sweet-alert">Sweet-Alert</Link></li>
                <li><Link to="ui/tabs-accordions" data-key="t-tabs-accordions">Tabs &amp; Accordions</Link></li>
                <li><Link to="ui/typography" data-key="t-typography">Typography</Link></li>
                <li><Link to="ui/video" data-key="t-video">Video</Link></li>
                <li><Link to="ui/general" data-key="t-general">General</Link></li>
                <li><Link to="ui/colors" data-key="t-colors">Colors</Link></li>
                <li><Link to="ui/rating" data-key="t-rating">Rating</Link></li>
                <li><Link to="ui/notifications" data-key="t-notifications">Notifications</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-layout icon nav-icon" />
                <span className="menu-item" data-key="t-forms">Forms</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="form/elements" data-key="t-form-elements">Form Elements</Link></li>
                <li><Link to="form/layouts" data-key="t-form-layouts">Form Layouts</Link></li>
                <li><Link to="form/validation" data-key="t-form-validation">Form Validation</Link></li>
                <li><Link to="form/advanced" data-key="t-form-advanced">Form Advanced</Link></li>
                <li><Link to="form/editors" data-key="t-form-editors">Form Editors</Link></li>
                <li><Link to="form/uploads" data-key="t-form-upload">Form File Upload</Link></li>
                <li><Link to="form/wizard" data-key="t-form-wizard">Form Wizard</Link></li>
                <li><Link to="form/mask" data-key="t-form-mask">Form Mask</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-table icon nav-icon" />
                <span className="menu-item" data-key="t-tables">Tables</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="tables-basic" data-key="t-basic-tables">Basic Tables</Link></li>
                <li><Link to="tables-advanced" data-key="t-advanced-tables">Advance Tables</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-pie-chart-alt-2 icon nav-icon" />
                <span className="menu-item" data-key="t-charts">Charts</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="charts/apex" data-key="t-apex-charts">Apex Charts</Link></li>
                <li><Link to="charts/chartjs" data-key="t-chartjs-charts">Chartjs Charts</Link></li>
                <li><Link to="charts/tui" data-key="t-ui-charts">Toast UI Charts</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-cuboid icon nav-icon" />
                <span className="menu-item" data-key="t-icons">Icons</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="icons/evaicons" data-key="t-evaicons">Eva Icons</Link></li>
                <li><Link to="icons/boxicons" data-key="t-boxicons">Boxicons</Link></li>
                <li><Link to="icons/materialdesign" data-key="t-material-design">Material Design</Link></li>
                <li><Link to="icons/fontawesome" data-key="t-font-awesome">Font Awesome 5</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-map-alt icon nav-icon" />
                <span className="menu-item" data-key="t-maps">Maps</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="maps/google" data-key="t-google">Google</Link></li>
                <li><Link to="maps/vector" data-key="t-vector">Vector</Link></li>
                <li><Link to="maps/leaflet" data-key="t-leaflet">Leaflet</Link></li>
              </ul>
            </li>
            <li className="menu-title" data-key="t-pages">Pages</li>
            <li>
              <Link to="javascript: void(0);">
                <i className="bx bx-user-pin icon nav-icon" />
                <span className="menu-item" data-key="t-authentication">Authentication</span>
                <span className="badge rounded-pill bg-info">8</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="auth/login" data-key="t-login">Login</Link></li>
                <li><Link to="auth/register" data-key="t-register">Register</Link></li>
                <li><Link to="auth/recoverpw" data-key="t-recover-password">Recover Password</Link></li>
                <li><Link to="auth/lock-screen" data-key="t-lock-screen">Lock Screen</Link></li>
                <li><Link to="auth/logout" data-key="t-logout">Logout</Link></li>
                <li><Link to="auth/confirm-mail" data-key="t-confirm-mail">Confirm Mail</Link></li>
                <li><Link to="auth/email-verification" data-key="t-email-verification">Email Verification</Link></li>
                <li><Link to="auth/two-step-verification" data-key="t-two-step-verification">Two Step Verification</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-file icon nav-icon" />
                <span className="menu-item" data-key="t-utility">Utility</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li><Link to="pages/starter" data-key="t-starter-page">Starter Page</Link></li>
                <li><Link to="pages/maintenance" data-key="t-maintenance">Maintenance</Link></li>
                <li><Link to="pages/comingsoon" data-key="t-coming-soon">Coming Soon</Link></li>
                <li><Link to="pages/timeline" data-key="t-timeline">Timeline</Link></li>
                <li><Link to="pages/faqs" data-key="t-faqs">FAQs</Link></li>
                <li><Link to="pages/pricing" data-key="t-pricing">Pricing</Link></li>
                <li><Link to="pages/404" data-key="t-error-404">Error 404</Link></li>
                <li><Link to="pages/500" data-key="t-error-500">Error 500</Link></li>
              </ul>
            </li>
            <li>
              <Link to="javascript: void(0);" className="has-arrow">
                <i className="bx bx-share-alt icon nav-icon" />
                <span className="menu-item" data-key="t-multi-level">Multi Level</span>
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li className="disabled"><Link to="#" data-key="t-disabled-item">Disabled Item</Link></li>
                <li><Link to="javascript: void(0);" data-key="t-level-1.1">Level 1.1</Link></li>
                <li><Link to="javascript: void(0);" className="has-arrow" data-key="t-level-1.2">Level 1.2</Link>
                  <ul className="sub-menu" aria-expanded="true">
                    <li><Link to="javascript: void(0);" data-key="t-level-2.1">Level 2.1</Link></li>
                    <li><Link to="javascript: void(0);" data-key="t-level-2.2">Level 2.2</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
        </MetisMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
