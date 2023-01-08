import { Component, OnInit } from '@angular/core';
import { ChartType, getPackageForChart, ScriptLoaderService } from 'angular-google-charts';
import { Row } from 'angular-google-charts/lib/components/chart-base/chart-base.component';
import { 
  columnChartColumns as columnChartColumnsData,
  columnChartData as columnChartDataData,
  options as optionsData } from './mock-data/column-mock-data';
import { 
  aggregatedColumns as aggregatedColumnsData,
  aggregatedData as aggregatedDataData,
  aggregatedOptions as aggregatedOptionsData } from './mock-data/aggregated-overview';
import { 
  tableColumns as tableColumnsData,
  tableData as tableDataData,
  tableOptions as tableOptionsData } from './mock-data/aa-performance';

@Component({
  selector: 'app-investor-summary',
  templateUrl: './investor-summary.component.html',
  styleUrls: ['./investor-summary.component.css']
})
export class InvestorSummaryComponent implements OnInit {
  dateFormat: google.visualization.DateFormat;
  myFormatters: any;
  myAggregatedFormatters: any;
  

  constructor(private loaderService: ScriptLoaderService)
  {

  }

  ngOnInit(): void {
    this.loaderService.loadChartPackages().subscribe(() => {
      this.myAggregatedFormatters = [
        {
          formatter: new google.visualization.NumberFormat({ pattern: "$#,###.00m" }),
          colIndex: 1
        },
        {
          formatter: new google.visualization.NumberFormat({ pattern: "$#,###.00m" }),
          colIndex: 2
        },
        {
          formatter: new google.visualization.NumberFormat({ prefix: "$", negativeColor: "#ab0602", negativeParens: true }),
          colIndex: 3
        }
        ,
        {
          formatter: new google.visualization.ArrowFormat(),
          colIndex: 3
        }
      ]
      // Start creating your chart now
      this.myFormatters = [
        {
          formatter: new google.visualization.NumberFormat({ pattern: "#,###.0" }),
          colIndex: 2
        },
        {
          formatter: new google.visualization.NumberFormat({ pattern: "#,###.0" }),
          colIndex: 3
        },
        {
          formatter: new google.visualization.NumberFormat({ pattern: "#,###.0" }),
          colIndex: 4
        },
        {
          formatter: new google.visualization.NumberFormat({ pattern: "#,###.0" }),
          colIndex: 5
        },
        {
          formatter: new google.visualization.NumberFormat({ pattern: "#,###.0x" }),
          colIndex: 6
        },
        {
          formatter: new google.visualization.NumberFormat({ pattern: "#,###.0%" }),
          colIndex: 7
        }
      ];
    });
  }

  title = 'Google Chart Example';
  type: ChartType = ChartType.PieChart;
  lineType: ChartType = ChartType.ComboChart;
  tableType: ChartType = ChartType.Table;
  columnType: ChartType =ChartType.ColumnChart;

  // column chart
  columnChartColumns = columnChartColumnsData;
  columnChartData = columnChartDataData;
  options = optionsData;

  tableAggregatedColumns = aggregatedColumnsData;
  tableAggregatedData = aggregatedDataData;
  tableAggregatedOptions = aggregatedOptionsData;

  // column chart
  tableColumns = tableColumnsData;
  tableData = tableDataData;
  tableOptions = tableOptionsData;
}
