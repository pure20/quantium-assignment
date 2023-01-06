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
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    pieHole: 0.4,
  };
}
