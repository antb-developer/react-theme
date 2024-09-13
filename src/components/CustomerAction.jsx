import React from 'react';

const CustomerAction = () => {
  return (
      <>
        <div class="dropdown">
          <a href="#" class="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="mdi mdi-dots-horizontal font-size-18"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a href="#" class="dropdown-item"><i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit</a>
            </li>
            <li>
              <a href="#" class="dropdown-item"><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Delete</a>
            </li>
          </ul>
        </div>
      </>
  );
};

export default CustomerAction;
