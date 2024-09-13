import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6">
                  <script>document.write(new Date().getFullYear())</script>2024 © webadmin.
              </div>
              <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                      Crafted with <i className="mdi mdi-heart text-danger"></i> by <a href="https://Themesdesign.com/" target="_blank" className="text-reset">Themesdesign</a>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
