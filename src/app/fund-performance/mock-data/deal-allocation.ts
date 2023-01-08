import { Row } from "angular-google-charts";

export const pieChartColumns = [
    'Sector',
    'value'
];
  
export const pieChartData: Row[] = [
    ['Energy', 1],
    ['Consumer Durables & Apparel', 1],
    ['Consumer Services', 1],
    ['Insurance', 1],
    ['Material', 1],
    ['Software & Services', 1],
    ['Technology Hardware & Equipment', 1],
    ['Health Care Equipment & Services', 1]
  ];

export const options = {
    colors: ['#7cbfb7', '#1898ac', '#344b79', '#ebac78', '#67809f', '#e8aea3', '#336e7b', '#d24d57'],
    pieHole: 0.4,
    width: 420,
    height: 290,
    legend: { maxLines: 1, textStyle: {fontSize: 11}, alignment:'center' },
    pieSliceText: 'value',
    chartArea: { left: 10, width: 390, height: 300 }
};