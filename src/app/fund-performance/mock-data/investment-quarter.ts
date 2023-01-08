import { Row } from "angular-google-charts";

export const lineChartColumns = [
    "Month", "Cumulative investment cost", "Cumulative total value"
];
  
export const lineChartData: Row[] = [
    [new Date(2015, 0), 0, null],
    [new Date(2015, 3), 0, null],
    [new Date(2015, 6), 0, null],
    [new Date(2015, 9), 0, null],
    [new Date(2016, 0), 0, null],
    [new Date(2016, 3), 0, null],
    [new Date(2016, 6), 0, null],
    [new Date(2016, 9), 20, null],
    [new Date(2017, 0), 20, null],
    [new Date(2017, 3), 20, 20],
    [new Date(2017, 6), 60, 50],
    [new Date(2017, 9), 100, 90],
    [new Date(2018, 0), 120, 110],
    [new Date(2018, 3), 150, 140],
    [new Date(2018, 6), 210, 200],
    [new Date(2018, 9), 210, 200],
    [new Date(2019, 0), 210, 200],
    [new Date(2019, 3), 300, 220],
    [new Date(2019, 6), 300, 220],
    [new Date(2019, 9), 300, 220],
    [new Date(2020, 0), 300, 220],
    [new Date(2020, 3), 300, 220],
    [new Date(2020, 6), 300, 220],
    [new Date(2020, 9), 300, 220],
];

export const lineOptions = {
    hAxis: {
      title: '',
      viewWindow: {
        max: new Date(2026, 9)
      },
      format: "yyyy",
      gridlines: { color: 'transparent' },
      textStyle: {fontSize: 11}
    },
    pointSize: 3,
    vAxis:{
        title: 'USD (M)',
        viewWindow: {
          max: 400
        },
        textStyle: {fontSize: 11},
    },
    chartArea: { left: 90, width: 590 },
    width: 670,
    height: 300,
    colors: ['#eab676', '#063970'],
    legend: { left: 0, position: 'bottom', textStyle: {fontSize: 11} },
};