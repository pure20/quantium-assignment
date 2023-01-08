import { Component, OnInit } from '@angular/core';
import { ChartType, getPackageForChart, Row, ScriptLoaderService } from 'angular-google-charts';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { 
  pieChartColumns as pieChartColumnsData,
  pieChartData as pieChartDataData,
  options as optionsData } from './mock-data/deal-allocation';

import { 
  lineChartColumns as lineChartColumnsData,
  lineChartData as lineChartDataData,
  lineOptions as lineOptionsData } from './mock-data/investment-quarter';

import { 
  tableColumns as tableColumnsData,
  tableData as tableDataData,
  tableOptions as tableOptionsData } from './mock-data/portfolio-summary';

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.css']
})
export class FundPerformanceComponent implements OnInit {
  private readonly chartPackage = getPackageForChart(ChartType.Table);
  dateFormat: google.visualization.DateFormat;
  myFormatters: any;
  faCalendar = faCalendarDays;
  constructor(private loaderService: ScriptLoaderService)
  {

  }

  ngOnInit(): void {
    this.loaderService.loadChartPackages(this.chartPackage).subscribe(() => {
      // Start creating your chart now
      this.myFormatters = [
        {
          formatter: new google.visualization.DateFormat({ pattern: "MM-yyyy" }),
          colIndex: 1
        },
        {
          formatter: new google.visualization.NumberFormat({ suffix: "%" }),
          colIndex: 4
        },
        {
          formatter: new google.visualization.NumberFormat({ prefix: "$" }),
          colIndex: 5
        },
        {
          formatter: new google.visualization.NumberFormat({ prefix: "$" }),
          colIndex: 6
        },
        {
          formatter: new google.visualization.NumberFormat({ prefix: "$" }),
          colIndex: 7
        },
        {
          formatter: new google.visualization.NumberFormat({ prefix: "$" }),
          colIndex: 8
        },
        {
          formatter: new google.visualization.NumberFormat({ prefix: "$" }),
          colIndex: 9
        },
        {
          formatter: new google.visualization.NumberFormat({ suffix: "x" }),
          colIndex: 10
        },
        {
          formatter: new google.visualization.NumberFormat({ suffix: "%" }),
          colIndex: 11
        }
      ];
    });
  }

  title = 'Google Chart Example';
  type: ChartType = ChartType.PieChart;
  lineType: ChartType = ChartType.ComboChart;
  tableType: ChartType = ChartType.Table;
  
  // Deal allocation
  pieChartColumns = pieChartColumnsData;
  pieChartData = pieChartDataData;
  options = optionsData;

  // Investment by quarter
  lineChartColumns = lineChartColumnsData;
  lineChartData = lineChartDataData;
  lineOptions = lineOptionsData;

  // Portfolio summary
  tableColumns = tableColumnsData;
  tableData = tableDataData;
  tableOptions = tableOptionsData;
}
