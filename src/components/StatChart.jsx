import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StatChart = ({ chartOptions, chartSeries }) => {
  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      height={50}
      width={140}
    />
  );
};

export default StatChart;
