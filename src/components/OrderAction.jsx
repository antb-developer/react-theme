import React from 'react';

const OrderAction = () => {
  return (
      <>
        <div className="d-flex gap-3">
          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="text-success">
            <i className="mdi mdi-pencil font-size-18"></i>
          </a>
          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="text-danger">
            <i className="mdi mdi-delete font-size-18"></i>
          </a>
        </div>
      </>
  );
};

export default OrderAction;
