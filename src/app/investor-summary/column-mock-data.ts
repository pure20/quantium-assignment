import { Row } from "angular-google-charts";

export const columnChartColumns = [
    'Name',
    'USD Fund V',
    'USD Fund VI'
];

export const columnChartData: Row[] = [
    ['Contribution', 10, 10],
    ['Distribution', 10, 0],
    ['NAV', 30, 20],
    ['Total value', 50, 20],
];

export const options = {
    colors: ['#0070c0', '#1f4e79'],
    width: 620,
    height: 290,
    chartArea: { width: 560 },
    legend: { position: 'top', textStyle: {fontSize: 11}, alignment:'center' },
    isStacked: true,
    hAxis: {
      gridlines: { color: 'transparent' },
    },
    vAxis:{
      gridlines: { color: 'transparent' },
    },
};