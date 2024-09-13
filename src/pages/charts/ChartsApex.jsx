import React from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment'
import ApexChart from '../../components/ApexChart';

const ChartsApex = () => {
  const chartOptions = {
    series: [{ name: "Desktops", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }],
    chart: { height: 350, type: "line", zoom: { enabled: !1 }, toolbar: { show: !1 } },
    markers: { size: 4 },
    dataLabels: { enabled: !1 },
    stroke: { curve: "straight" },
    colors: ["#1f58c7"],
    title: { text: "Product Trends by Month", align: "left", style: { fontWeight: 500 } },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"] },
  };

  const zoomableOptions = {
      series: [
          {
              name: "XYZ MOTORS",
              data: [
                  { x: new Date("2018-01-12").getTime(), y: 140 },
                  { x: new Date("2018-01-13").getTime(), y: 147 },
                  { x: new Date("2018-01-14").getTime(), y: 150 },
                  { x: new Date("2018-01-15").getTime(), y: 154 },
                  { x: new Date("2018-01-16").getTime(), y: 160 },
                  { x: new Date("2018-01-17").getTime(), y: 165 },
                  { x: new Date("2018-01-18").getTime(), y: 162 },
                  { x: new Date("2018-01-20").getTime(), y: 159 },
                  { x: new Date("2018-01-21").getTime(), y: 164 },
                  { x: new Date("2018-01-22").getTime(), y: 160 },
                  { x: new Date("2018-01-23").getTime(), y: 165 },
                  { x: new Date("2018-01-24").getTime(), y: 169 },
                  { x: new Date("2018-01-25").getTime(), y: 172 },
                  { x: new Date("2018-01-26").getTime(), y: 177 },
                  { x: new Date("2018-01-27").getTime(), y: 173 },
                  { x: new Date("2018-01-28").getTime(), y: 169 },
                  { x: new Date("2018-01-29").getTime(), y: 163 },
                  { x: new Date("2018-01-30").getTime(), y: 158 },
                  { x: new Date("2018-02-01").getTime(), y: 153 },
                  { x: new Date("2018-02-02").getTime(), y: 149 },
                  { x: new Date("2018-02-03").getTime(), y: 144 },
                  { x: new Date("2018-02-05").getTime(), y: 150 },
                  { x: new Date("2018-02-06").getTime(), y: 155 },
                  { x: new Date("2018-02-07").getTime(), y: 159 },
                  { x: new Date("2018-02-08").getTime(), y: 163 },
                  { x: new Date("2018-02-09").getTime(), y: 156 },
                  { x: new Date("2018-02-11").getTime(), y: 151 },
                  { x: new Date("2018-02-12").getTime(), y: 157 },
                  { x: new Date("2018-02-13").getTime(), y: 161 },
                  { x: new Date("2018-02-14").getTime(), y: 150 },
                  { x: new Date("2018-02-15").getTime(), y: 154 },
                  { x: new Date("2018-02-16").getTime(), y: 160 },
                  { x: new Date("2018-02-17").getTime(), y: 165 },
                  { x: new Date("2018-02-18").getTime(), y: 162 },
                  { x: new Date("2018-02-20").getTime(), y: 159 },
                  { x: new Date("2018-02-21").getTime(), y: 164 },
                  { x: new Date("2018-02-22").getTime(), y: 160 },
                  { x: new Date("2018-02-23").getTime(), y: 165 },
                  { x: new Date("2018-02-24").getTime(), y: 169 },
                  { x: new Date("2018-02-25").getTime(), y: 172 },
                  { x: new Date("2018-02-26").getTime(), y: 177 },
                  { x: new Date("2018-02-27").getTime(), y: 173 },
                  { x: new Date("2018-02-28").getTime(), y: 169 },
                  { x: new Date("2018-02-29").getTime(), y: 163 },
                  { x: new Date("2018-02-30").getTime(), y: 162 },
                  { x: new Date("2018-03-01").getTime(), y: 158 },
                  { x: new Date("2018-03-02").getTime(), y: 152 },
                  { x: new Date("2018-03-03").getTime(), y: 147 },
                  { x: new Date("2018-03-05").getTime(), y: 142 },
                  { x: new Date("2018-03-06").getTime(), y: 147 },
                  { x: new Date("2018-03-07").getTime(), y: 151 },
                  { x: new Date("2018-03-08").getTime(), y: 155 },
                  { x: new Date("2018-03-09").getTime(), y: 159 },
                  { x: new Date("2018-03-11").getTime(), y: 162 },
                  { x: new Date("2018-03-12").getTime(), y: 157 },
                  { x: new Date("2018-03-13").getTime(), y: 161 },
                  { x: new Date("2018-03-14").getTime(), y: 166 },
                  { x: new Date("2018-03-15").getTime(), y: 169 },
                  { x: new Date("2018-03-16").getTime(), y: 172 },
                  { x: new Date("2018-03-17").getTime(), y: 177 },
                  { x: new Date("2018-03-18").getTime(), y: 181 },
                  { x: new Date("2018-03-20").getTime(), y: 178 },
                  { x: new Date("2018-03-21").getTime(), y: 173 },
                  { x: new Date("2018-03-22").getTime(), y: 169 },
                  { x: new Date("2018-03-23").getTime(), y: 163 },
                  { x: new Date("2018-03-24").getTime(), y: 159 },
                  { x: new Date("2018-03-25").getTime(), y: 164 },
                  { x: new Date("2018-03-26").getTime(), y: 168 },
                  { x: new Date("2018-03-27").getTime(), y: 172 },
                  { x: new Date("2018-03-28").getTime(), y: 169 },
                  { x: new Date("2018-03-29").getTime(), y: 163 },
                  { x: new Date("2018-03-30").getTime(), y: 162 },
                  { x: new Date("2018-04-01").getTime(), y: 158 },
                  { x: new Date("2018-04-02").getTime(), y: 152 },
                  { x: new Date("2018-04-03").getTime(), y: 147 },
                  { x: new Date("2018-04-05").getTime(), y: 142 },
                  { x: new Date("2018-04-06").getTime(), y: 147 },
                  { x: new Date("2018-04-07").getTime(), y: 151 },
                  { x: new Date("2018-04-08").getTime(), y: 155 },
                  { x: new Date("2018-04-09").getTime(), y: 159 },
                  { x: new Date("2018-04-11").getTime(), y: 162 },
                  { x: new Date("2018-04-12").getTime(), y: 157 },
                  { x: new Date("2018-04-13").getTime(), y: 161 },
                  { x: new Date("2018-04-14").getTime(), y: 166 },
                  { x: new Date("2018-04-15").getTime(), y: 169 },
                  { x: new Date("2018-04-16").getTime(), y: 172 },
                  { x: new Date("2018-04-17").getTime(), y: 177 },
                  { x: new Date("2018-04-18").getTime(), y: 181 },
                  { x: new Date("2018-04-20").getTime(), y: 178 },
                  { x: new Date("2018-04-21").getTime(), y: 173 },
                  { x: new Date("2018-04-22").getTime(), y: 169 },
                  { x: new Date("2018-04-23").getTime(), y: 163 },
                  { x: new Date("2018-04-24").getTime(), y: 159 },
                  { x: new Date("2018-04-25").getTime(), y: 164 },
                  { x: new Date("2018-04-26").getTime(), y: 168 },
                  { x: new Date("2018-04-27").getTime(), y: 172 },
                  { x: new Date("2018-04-28").getTime(), y: 169 },
                  { x: new Date("2018-04-29").getTime(), y: 163 },
                  { x: new Date("2018-04-30").getTime(), y: 162 },
                  { x: new Date("2018-05-01").getTime(), y: 158 },
                  { x: new Date("2018-05-02").getTime(), y: 152 },
                  { x: new Date("2018-05-03").getTime(), y: 147 },
                  { x: new Date("2018-05-04").getTime(), y: 142 },
                  { x: new Date("2018-05-05").getTime(), y: 147 },
                  { x: new Date("2018-05-07").getTime(), y: 151 },
                  { x: new Date("2018-05-08").getTime(), y: 155 },
                  { x: new Date("2018-05-09").getTime(), y: 159 },
                  { x: new Date("2018-05-11").getTime(), y: 162 },
                  { x: new Date("2018-05-12").getTime(), y: 157 },
                  { x: new Date("2018-05-13").getTime(), y: 161 },
                  { x: new Date("2018-05-14").getTime(), y: 166 },
                  { x: new Date("2018-05-15").getTime(), y: 169 },
                  { x: new Date("2018-05-16").getTime(), y: 172 },
                  { x: new Date("2018-05-17").getTime(), y: 177 },
                  { x: new Date("2018-05-18").getTime(), y: 181 },
                  { x: new Date("2018-05-20").getTime(), y: 178 },
                  { x: new Date("2018-05-21").getTime(), y: 173 },
                  { x: new Date("2018-05-22").getTime(), y: 169 },
                  { x: new Date("2018-05-23").getTime(), y: 163 },
                  { x: new Date("2018-05-24").getTime(), y: 159 },
                  { x: new Date("2018-05-25").getTime(), y: 164 },
                  { x: new Date("2018-05-26").getTime(), y: 168 },
                  { x: new Date("2018-05-27").getTime(), y: 172 },
                  { x: new Date("2018-05-28").getTime(), y: 169 },
                  { x: new Date("2018-05-29").getTime(), y: 163 },
                  { x: new Date("2018-05-30").getTime(), y: 162 },
              ],
          },
      ],
      chart: { type: "area", stacked: !1, height: 350, zoom: { type: "x", enabled: !0, autoScaleYaxis: !0 }, toolbar: { autoSelected: "zoom" } },
      dataLabels: { enabled: !1 },
      markers: { size: 0 },
      title: { text: "Stock Price Movement", align: "left", style: { fontWeight: 500 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 90, 100] } },
      yaxis: {
          showAlways: !0,
          labels: {
              show: !0,
              formatter: function (e) {
                  return (e / 1e6).toFixed(0);
              },
          },
          title: { text: "Price", style: { fontWeight: 500 } },
      },
      xaxis: { type: "datetime" },
      tooltip: {
          shared: !1,
          y: {
              formatter: function (e) {
                  return (e / 1e6).toFixed(0);
              },
          },
      },
  };

  const areaOptions = {
    // series: [{ name: "STOCK ABC", data: series.monthDataSeries1.prices }],
    // chart: { type: "area", height: 350, zoom: { enabled: !1 } },
    // dataLabels: { enabled: !1 },
    // stroke: { curve: "straight" },
    // title: { text: "Fundamental Analysis of Stocks", align: "left", style: { fontWeight: 500 } },
    // subtitle: { text: "Price Movements", align: "left" },
    // labels: series.monthDataSeries1.dates,
    // xaxis: { type: "datetime" },
    // yaxis: { opposite: !0 },
    // legend: { horizontalAlign: "left" },
  };

  const splineOptions = {
    series: [
        { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
        { name: "series2", data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    chart: { height: 350, type: "area" },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth" },
    xaxis: {
        type: "datetime",
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
    },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
  };

  const columnChartOptions = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { horizontal: !1, columnWidth: "45%", endingShape: "rounded" } },
    dataLabels: { enabled: !1 },
    stroke: { show: !0, width: 2, colors: ["transparent"] },
    series: [
        { name: "Net Profit", data: [46, 57, 59, 54, 62, 58, 64, 60, 66] },
        { name: "Revenue", data: [74, 83, 102, 97, 86, 106, 93, 114, 94] },
        { name: "Free Cash Flow", data: [37, 42, 38, 26, 47, 50, 54, 55, 43] },
    ],
    xaxis: { categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"] },
    yaxis: { title: { text: "$ (thousands)" } },
    grid: { borderColor: "#f1f1f1" },
    fill: { opacity: 1 },
    tooltip: {
        y: {
            formatter: function (e) {
                return "$ " + e + " thousands";
            },
        },
    }
  };

  const columnDataLabelsOptions = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { dataLabels: { position: "top" } } },
    dataLabels: {
        enabled: !0,
        formatter: function (e) {
            return e + "%";
        },
        offsetY: -20,
        style: { fontSize: "12px", colors: ["#adb5bd"] },
    },
    series: [{ name: "Inflation", data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8] }],
    grid: { borderColor: "#f1f1f1" },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: { offsetY: -18 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        crosshairs: { fill: { type: "gradient", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } } },
        tooltip: { enabled: !0, offsetY: -35 },
    },
    fill: { gradient: { shade: "light", type: "horizontal", shadeIntensity: 0.25, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [50, 0, 100, 100] } },
    yaxis: {
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
            show: !1,
            formatter: function (e) {
                return e + "%";
            },
        },
    },
    title: { text: "Monthly Inflation in Argentina, 2002", floating: !0, offsetY: 320, align: "center", style: { fontWeight: 500 } }
  };

  const basicBarOptions = {
    chart: { height: 350, type: "bar", toolbar: { show: !1 } },
    plotOptions: { bar: { horizontal: !0 } },
    dataLabels: { enabled: !1 },
    series: [{ data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365] }],
    grid: { borderColor: "#f1f1f1" },
    xaxis: { categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"] }
  };

  const dataLabelsBarOptions = {
    series: [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }],
    chart: { type: "bar", height: 350, toolbar: { show: !1 } },
    plotOptions: { bar: { barHeight: "100%", distributed: !0, horizontal: !0, dataLabels: { position: "bottom" } } },
    dataLabels: {
        enabled: !0,
        textAnchor: "start",
        style: { colors: ["#fff"] },
        formatter: function (e, t) {
            return t.w.globals.labels[t.dataPointIndex] + ":  " + e;
        },
        offsetX: 0,
        dropShadow: { enabled: !1 },
    },
    stroke: { width: 1, colors: ["#fff"] },
    xaxis: { categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "India"] },
    yaxis: { labels: { show: !1 } },
    title: { text: "Custom DataLabels", align: "center", floating: !0, style: { fontWeight: 600 } },
    subtitle: { text: "Category Names as DataLabels inside bars", align: "center" },
    tooltip: {
        theme: "dark",
        x: { show: !1 },
        y: {
            title: {
                formatter: function () {
                    return "";
                },
            },
        },
    }
  };

  const lineColumnCharts = {
    series: [
        { name: "Website Blog", type: "column", data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160] },
        { name: "Social Media", type: "line", data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16] },
    ],
    chart: { height: 350, type: "line", toolbar: { show: !1 } },
    stroke: { width: [0, 4] },
    title: { text: "Traffic Sources", style: { fontWeight: 600 } },
    dataLabels: { enabled: !0, enabledOnSeries: [1] },
    labels: ["01 Jan 2001", "02 Jan 2001", "03 Jan 2001", "04 Jan 2001", "05 Jan 2001", "06 Jan 2001", "07 Jan 2001", "08 Jan 2001", "09 Jan 2001", "10 Jan 2001", "11 Jan 2001", "12 Jan 2001"],
    xaxis: { type: "datetime" },
    yaxis: [{ title: { text: "Website Blog", style: { fontWeight: 600 } } }, { opposite: !0, title: { text: "Social Media", style: { fontWeight: 600 } } }],
  };

  const yAxisCharts = {
    series: [
        { name: "Income", type: "column", data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6] },
        { name: "Cashflow", type: "column", data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5] },
        { name: "Revenue", type: "line", data: [20, 29, 37, 36, 44, 45, 50, 58] },
    ],
    chart: { height: 350, type: "line", stacked: !1, toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { width: [1, 1, 4] },
    title: { text: "XYZ - Stock Analysis (2009 - 2016)", align: "left", offsetX: 110, style: { fontWeight: 600 } },
    xaxis: { categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
    yaxis: [
        { axisTicks: { show: !0 }, axisBorder: { show: !0, color: "#038edc" }, labels: { style: { colors: "#038edc" } }, title: { text: "Income (thousand crores)", style: { color: "#038edc", fontWeight: 600 } }, tooltip: { enabled: !0 } },
        {
            seriesName: "Income",
            opposite: !0,
            axisTicks: { show: !0 },
            axisBorder: { show: !0, color: "#038edc" },
            labels: { style: { colors: "#038edc" } },
            title: { text: "Operating Cashflow (thousand crores)", style: { color: "#038edc", fontWeight: 600 } },
        },
        {
            seriesName: "Revenue",
            opposite: !0,
            axisTicks: { show: !0 },
            axisBorder: { show: !0, color: "#51d28c" },
            labels: { style: { colors: "#51d28c" } },
            title: { text: "Revenue (thousand crores)", style: { color: "#51d28c", fontWeight: 600 } },
        },
    ],
    tooltip: { fixed: { enabled: !0, position: "topLeft", offsetY: 30, offsetX: 60 } },
    legend: { horizontalAlign: "left", offsetX: 40 },
  };

  const timeLineCharts = {
    series: [
        {
            data: [
                { x: "Code", y: [new Date("2019-03-02").getTime(), new Date("2019-03-04").getTime()] },
                { x: "Test", y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()] },
                { x: "Validation", y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()] },
                { x: "Deployment", y: [new Date("2019-03-12").getTime(), new Date("2019-03-18").getTime()] },
            ],
        },
    ],
    chart: { height: 350, type: "rangeBar", toolbar: { show: !1 } },
    plotOptions: { bar: { horizontal: !0 } },
    xaxis: { type: "datetime" },
  };

  const diffColorForEachBar = {
    series: [
        {
            data: [
                { x: "Analysis", y: [new Date("2019-02-27").getTime(), new Date("2019-03-04").getTime()] },
                { x: "Design", y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()] },
                { x: "Coding", y: [new Date("2019-03-07").getTime(), new Date("2019-03-10").getTime()] },
                { x: "Testing", y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()] },
                { x: "Deployment", y: [new Date("2019-03-12").getTime(), new Date("2019-03-17").getTime()] },
            ],
        },
    ],
    chart: { height: 330, type: "rangeBar", toolbar: { show: !1 } },
    plotOptions: { bar: { horizontal: !0, distributed: !0, dataLabels: { hideOverflowingLabels: !1 } } },
    dataLabels: {
        enabled: !0,
        formatter: function (e, t) {
            var a = t.w.globals.labels[t.dataPointIndex],
                r = moment(e[0]),
                o = moment(e[1]).diff(r, "days");
            return a + ": " + o + (1 < o ? " days" : " day");
        },
    },
    xaxis: { type: "datetime" },
    yaxis: { show: !0 },  };

  const candleChart = {
  };

  const candleBrushChart = {
  };

  const basicBoxChart = {
  };

  const boxScatterChart = {
  };

  const bubbleChart = {
  };

  const threeDbubbleChart = {
  };

  const scatterChart = {
  };

  const scatterImagesChart = {
  };


  const treemapChart = {
  };

  const mDtreemapChart = {
  };

  const simplePie = {
  };

  const simpleDonut = {
  };

  const radialbarChart = {
  };

  const mradialbarChart = {
  };

    return (
      <>
        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Line Chart</h4>
                            </div>
                            <div className="card-body">
                                <ApexChart
                                  colors={[ "#1f58c7" ] }
                                  chartOptions={chartOptions}
                                  series={chartOptions.series}
                                  type={"line"}
                                  height={350} className="apex-chart"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Zoomable Timeseries</h4>
                            </div>
                            <div className="card-body">
                                <div id="line_chart_zoomable" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                                <ApexChart
                                  colors={[ "#1f58c7" ] }
                                  chartOptions={zoomableOptions}
                                  series={zoomableOptions.series}
                                  type={"line"}
                                  height={350} className="apex-chart"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Area Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="area_chart_basic" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Spline Area Chart</h4>
                            </div>
                            <div className="card-body">
                              <ApexChart
                                colors={[ "#1f58c7" ] }
                                chartOptions={splineOptions}
                                series={splineOptions.series}
                                height={350} className="apex-chart"
                              />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Column Chart</h4>
                            </div>
                            <div className="card-body">
                                <ApexChart
                                  colors={[ "#ed5555", "#1f58c7", "#28b765" ] }
                                  chartOptions={columnChartOptions}
                                  series={columnChartOptions.series}
                                  type={"bar"}
                                  height={350} className="apex-chart"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Column with Data Labels</h4>
                            </div>
                            <div className="card-body">
                              <ApexChart
                                colors={[ "#1f58c7" ] }
                                chartOptions={columnDataLabelsOptions}
                                series={columnDataLabelsOptions.series}
                                type={"bar"}
                                height={350} className="apex-chart"
                              />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Bar Chart</h4>
                            </div>
                            <div className="card-body">
                                <ApexChart
                                  colors={[ "#28b765" ] }
                                  chartOptions={basicBarOptions}
                                  series={basicBarOptions.series}
                                  type={"bar"}
                                  height={350} className="apex-chart"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Custom DataLabels Bar</h4>
                            </div>
                            <div className="card-body">
                              <ApexChart
                                colors={[ "#28b765" ] }
                                chartOptions={dataLabelsBarOptions}
                                series={dataLabelsBarOptions.series}
                                type={"bar"}
                                height={350} className="apex-chart"
                              />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Line &amp; Column Charts</h4>
                            </div>
                            <div className="card-body">
                                <div id="line_column_chart" data-colors="[&quot;#1f58c7&quot;, &quot;#28b765&quot;]" dir="ltr" className="apex-charts"></div>
                                <ApexChart
                                  colors={[ "#1f58c7" ] }
                                  chartOptions={lineColumnCharts}
                                  series={lineColumnCharts.series}
                                  type={"line"}
                                  height={350} className="apex-chart"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Multiple Y-Axis Charts</h4>
                            </div>
                            <div className="card-body">
                              <ApexChart
                                colors={[ "#1f58c7" ] }
                                chartOptions={yAxisCharts}
                                series={yAxisCharts.series}
                                type={"line"}
                                height={350} className="apex-chart"
                              />
                                <div id="multi_chart" data-colors="[&quot;#1f58c7&quot;, &quot;#52c6ea&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic TimeLine Charts</h4>
                            </div>
                            <div className="card-body">
                              <ApexChart
                                colors={[ "#1f58c7" ] }
                                chartOptions={timeLineCharts}
                                series={timeLineCharts.series}
                                type={"rangeBar"}
                                height={350} className="apex-chart"
                              />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Different Color For Each Bar</h4>
                            </div>
                            <div className="card-body">
                                <div id="color_timeline" data-colors="[&quot;#1f58c7&quot;,&quot;#28b765&quot;, &quot;#f4c238&quot;, &quot;#ed5555&quot;, &quot;#974be0&quot;]" dir="ltr"></div>
                                <ApexChart
                                  colors={[ "#1f58c7", "#28b765" ] }
                                  chartOptions={diffColorForEachBar}
                                  series={diffColorForEachBar.series}
                                  type={"rangeBar"}
                                  height={350} className="apex-chart"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Candlestick Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_candlestick" data-colors="[&quot;#ed5555&quot;, &quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Candlestick Synced with Brush Chart (Combo)</h4>
                            </div>
                            <div className="card-body">
                                <div id="combo_candlestick" data-colors="[&quot;#ed5555&quot;, &quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                                <div id="combo_candlestick_chart" data-colors="[&quot;#ed5555&quot;, &quot;#f4c238&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Box Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_box" data-colors="[&quot;#1f58c7&quot;, &quot;#52c6ea&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Boxplot with Scatter Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="box_plot" data-colors="[&quot;#ed5555&quot;, &quot;#974be0&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Simple Bubble Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="simple_bubble" data-colors="[&quot;#1f58c7&quot;, &quot;#974be0&quot;,&quot;#f4c238&quot;, &quot;#28b765&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">3D Bubble Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="bubble_chart" data-colors="[&quot;#1f58c7&quot;, &quot;#974be0&quot;,&quot;#f4c238&quot;, &quot;#28b765&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Scatter Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_scatter" data-colors="[&quot;#1f58c7&quot;, &quot;#28b765&quot;,&quot;#f4c238&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Scatter Images Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="images_scatter" data-colors="[&quot;#974be0&quot;, &quot;#ed5555&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header justify-content-between d-flex align-items-center">
                                <h4 className="card-title mb-0">Basic Treemap Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_treemap" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header justify-content-between d-flex align-items-center">
                                <h4 className="card-title mb-0">Multi-Dimensional Treemap Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="multi_treemap" data-colors="[&quot;#1f58c7&quot;,&quot;#28b765&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Simple Pie Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="simple_pie_chart" data-colors="[&quot;#1f58c7&quot;, &quot;#28b765&quot;,&quot;#f4c238&quot;, &quot;#ed5555&quot;,&quot;#974be0&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Simple Donut Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="simple_dount_chart" data-colors="[&quot;#1f58c7&quot;, &quot;#28b765&quot;,&quot;#f4c238&quot;, &quot;#ed5555&quot;,&quot;#974be0&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Radialbar Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_radialbar" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Multiple Radialbar</h4>
                            </div>
                            <div className="card-body">
                                <div id="multiple_radialbar" data-colors="[&quot;#1f58c7&quot;,&quot;#28b765&quot;,&quot;#f4c238&quot;,&quot;#ed5555&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic Radar Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_radar" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Radar Chart - Multiple series</h4>
                            </div>
                            <div className="card-body">
                                <div id="multi_radar" data-colors="[&quot;#1f58c7&quot;,&quot;#52c6ea&quot;,&quot;#28b765&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic-Polar Area Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_polar_area" data-colors="[&quot;#1f58c7&quot;, &quot;#51d28c&quot;, &quot;#f7cc53&quot;, &quot;#f34e4e&quot;, &quot;#974be0&quot;, &quot;#5fd0f3&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Polar-Area Monochrome</h4>
                            </div>
                            <div className="card-body">
                                <div id="monochrome_polar_area" data-colors="[&quot;#1f58c7&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic-Pyramid Area Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_pyramid_area" data-colors="[&quot;#1f58c7&quot;, &quot;#51d28c&quot;, &quot;#f7cc53&quot;, &quot;#f34e4e&quot;, &quot;#974be0&quot;, &quot;#5fd0f3&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Basic-Recruitment Area Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="basic_recruitment_area" data-colors="[&quot;#1f58c7&quot;, &quot;#51d28c&quot;, &quot;#f7cc53&quot;, &quot;#f34e4e&quot;, &quot;#974be0&quot;, &quot;#5fd0f3&quot;]" dir="ltr" className="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


      </>
    );
};

export default ChartsApex;
