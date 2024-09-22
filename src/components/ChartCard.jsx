import React from 'react';
import DropdownMenu from './DropdownMenu';
import StatChart from './StatChart';

const ChartCard = ({ iconClass, title, value, changePercent, changeDirection, description, chartOptions, chartSeries }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="avatar">
            <div className="avatar-title rounded bg-primary-subtle">
              <i className={`bx ${iconClass} font-size-24 mb-0 text-primary`} />
            </div>
          </div>
          <div className="flex-grow-1 ms-3">
            <h6 className="mb-0 font-size-15">{title}</h6>
          </div>
          <div className="flex-shrink-0">
            <DropdownMenu />
          </div>
        </div>
        <div>
          <h4 className="mt-4 pt-1 mb-0 font-size-22">
            {value}{" "}
            <span className={`fw-medium font-size-13 align-middle ${changeDirection === 'up' ? 'text-success' : 'text-danger'}`}>
              <i className={`mdi mdi-arrow-${changeDirection}`} /> {changePercent}%
            </span>
          </h4>
          <div className="d-flex mt-1 align-items-end overflow-hidden">
            <div className="flex-grow-1">
              <p className="text-muted mb-0 text-truncate">{description}</p>
            </div>
            <div className="flex-shrink-0">
              <StatChart chartOptions={chartOptions} chartSeries={chartSeries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
