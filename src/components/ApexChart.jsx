import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ chartOptions, series, type }) => {
  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type={type}
      height={350} className="apex-chart"
    />
  );
};

export default ApexChart;
