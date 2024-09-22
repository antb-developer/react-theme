import React from 'react';

const DropdownMenu = () => {
  return (
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
        <a className="dropdown-item" href="#">Yearly</a>
        <a className="dropdown-item" href="#">Monthly</a>
        <a className="dropdown-item" href="#">Weekly</a>
        <a className="dropdown-item" href="#">Today</a>
      </div>
    </div>
  );
};

export default DropdownMenu;
