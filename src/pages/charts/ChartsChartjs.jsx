import React from 'react';
import Chart from 'chart.js/auto';
import { Line, Bar, Pie, Doughnut, PolarArea, Radar } from 'react-chartjs-2';

const ChartsChartjs = () => {

  const colors = [
    "rgba(31, 88, 199, 0.2)",
    "#3b76e1",
    "rgba(35, 239, 242, 0.2)",
    "#ebeff2",
    "green",
    "orange"
  ];

  const lineChartData = {
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
            datasets: [
                {
                    label: "Sales Analytics",
                    fill: !0,
                    lineTension: 0.5,
                    backgroundColor: colors[0],
                    borderColor: colors[1],
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    pointBorderColor: colors[1],
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: colors[1],
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80],
                },
                {
                    label: "Monthly Earnings",
                    fill: !0,
                    lineTension: 0.5,
                    backgroundColor: colors[2],
                    borderColor: colors[3],
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    pointBorderColor: colors[3],
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: colors[3],
                    pointHoverBorderColor: "#eef0f2",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36],
                },
            ],
        },
  };

  const barChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "Sales Analytics",
              backgroundColor: colors[0],
              borderColor: colors[0],
              borderWidth: 1,
              hoverBackgroundColor: colors[1],
              hoverBorderColor: colors[1],
              data: [65, 59, 81, 45, 56, 80, 50, 20],
          },
      ],
  }

  const pieData = {
      labels: ["Desktops", "Tablets"], datasets: [{ data: [300, 180], backgroundColor: colors, hoverBackgroundColor: colors, hoverBorderColor: "#fff" }]
  }

  const doughnutData = {
    labels: ["Desktops", "Tablets"], datasets: [{ data: [300, 210], backgroundColor: colors, hoverBackgroundColor: colors, hoverBorderColor: "#fff" }]
  }

  const polarData = {
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"], datasets: [{ data: [11, 16, 7, 18], backgroundColor: colors, label: "My dataset", hoverBorderColor: "#fff" }]
  }

  const radarData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "Desktops",
            backgroundColor: colors[0],
            borderColor: colors[1],
            pointBackgroundColor: colors[1],
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: colors[1],
            data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
            label: "Tablets",
            backgroundColor: colors[2],
            borderColor: colors[3],
            pointBackgroundColor: colors[3],
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: colors[3],
            data: [28, 48, 40, 19, 96, 27, 100],
        },
    ]
  }

    return (
      <>
        <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Line Chart</h4>
                                    </div>
                                    <div className="card-body">
                                        <Line data={ lineChartData.data } />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Bar Chart</h4>
                                    </div>
                                    <div className="card-body">
                                      <Bar data={ barChartData } />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Pie Chart</h4>
                                    </div>
                                    <div className="card-body">
                                      <Pie data={ pieData } />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Donut Chart</h4>
                                    </div>
                                    <div className="card-body">
                                      <Doughnut data={ doughnutData } />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Polar Chart</h4>
                                    </div>
                                    <div className="card-body">
                                      <PolarArea data={ polarData } />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Radar Chart</h4>
                                    </div>
                                    <div className="card-body">
                                      <Radar data={ radarData } />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

      </>
    );
};

export default ChartsChartjs;
