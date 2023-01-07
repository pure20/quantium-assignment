import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Row } from 'angular-google-charts/lib/components/chart-base/chart-base.component';

@Component({
  selector: 'app-investor-summary',
  templateUrl: './investor-summary.component.html',
  styleUrls: ['./investor-summary.component.css']
})
export class InvestorSummaryComponent {
  title = 'Google Chart Example';
  type: ChartType = ChartType.PieChart;

  lineType: ChartType = ChartType.LineChart;
  
  // column chart
  pieChartColumns = [
    'Year',
    'value',
    { role: 'style' },
    { role: 'annotation' },
  ];
  
  pieChartData: Row[] = [
    ['Energy', 1, '', null],
    ['Consumer Durables & Apparel', 1, '', null],
    ['Consumer Services', 1, '', null],
    ['Insurance', 1, '', null],
    ['Material', 1, '', null],
    ['Software & Services', 1, '', null],
    ['Technology Hardware & Equipment', 1, '', null],
    ['Health Care Equipment & Services', 1, '', null]
  ];

  options = {
    colors: ['#7cbfb7', '#1898ac', '#344b79', '#ebac78', '#67809f', '#e8aea3', '#336e7b', '#d24d57'],
    pieHole: 0.4,
    width: 600,
    height: 400,
    legend: { maxLines: 1, textStyle: {fontSize: 11}, alignment:'center' },
    pieSliceText: 'value'
  };

  // column chart
  lineChartColumns = [
    "Month", "Cumulative investment cost", "Cumulative total value"
  ];
  
  lineChartData: Row[] = [
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
    [new Date(2018, 6), 220, 200],
    [new Date(2018, 9), 220, 200],
    [new Date(2019, 0), 220, 200],
    [new Date(2019, 3), 300, 220],
    [new Date(2019, 6), 300, 220],
    [new Date(2019, 9), 300, 220],
    [new Date(2020, 0), 300, 220],
    [new Date(2020, 3), 300, 220],
    [new Date(2020, 6), 300, 220],
    [new Date(2020, 9), 300, 220],
  ];

  lineOptions = {
    hAxis: {
      title: '',
      viewWindow: {
        max: new Date(2026, 9)
      }
    },
    vAxis:{
        title: 'USD (M)',
        ticks: [50,100,150,200,250,300,350,400],
        viewWindow: {
          max: 400
        }
    },
    width: 800,
    height: 300,
    colors: ['#eab676', '#063970'],
    legend: { position: 'bottom'},
  };
}
