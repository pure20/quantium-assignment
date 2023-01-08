import { Component, OnInit } from '@angular/core';
import { ChartType, getPackageForChart, ScriptLoaderService } from 'angular-google-charts';
import { Row } from 'angular-google-charts/lib/components/chart-base/chart-base.component';

@Component({
  selector: 'app-investor-summary',
  templateUrl: './investor-summary.component.html',
  styleUrls: ['./investor-summary.component.css']
})
export class InvestorSummaryComponent implements OnInit {
  private readonly chartPackage = getPackageForChart(ChartType.Table);
  dateFormat: google.visualization.DateFormat;
  myFormatters: any;
  myAggregatedFormatters: any;
  constructor(private loaderService: ScriptLoaderService)
  {

  }

  ngOnInit(): void {
    this.loaderService.loadChartPackages(this.chartPackage).subscribe(() => {
      // Start creating your chart now
      this.myFormatters = [
        {
          formatter: new google.visualization.PatternFormat('<a class="link" href="">{0}</a>'),
          colIndex: [0],
        },
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
  columnChartColumns = [
    'Name',
    'USD Fund V',
    'USD Fund VI'
  ];
  
  columnChartData: Row[] = [
    ['Contribution', 10, 10],
    ['Distribution', 10, 0],
    ['NAV', 30, 20],
    ['Total value', 50, 20],
   
  ];
 
  options = {
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



  // column chart
  tableAggregatedColumns = [
    "USD", "2020-12-31", "2020-12-31", "QoQ"
  ];
  
  tableAggregatedData: Row[] = [
    ["Commitment", 8591.00, 7, 0.75],
    ["Contribution", 1643.68, 15.10, 0.52],
    ["Distribution", 115.00, 30.00, null],
    ["Nav", 1992.44, 40.00, 4.96],
    ["Total invested", 958.29, 30.00, 0.08],
    ["Total value", 2107.44, 40.00, 4.96],
    ["DPI", 0.07, 0.07, 0.00],
    ["RVPI", 1.21, 1.22, 0.00],
    ["TVPI", 1.28, 1.29, 0.00],
  ];

  cssAggregatedClassNames = {
    'headerRow': 'headerTable',
    'tableRow': 'rowTable',
  }
  tableAggregatedOptions = {
    'allowHtml': true, 'cssClassNames': this.cssAggregatedClassNames, alternatingRowStyle: false
  };

  // column chart
  tableColumns = [
    "Fund", "Investor Entity", "Commitment", "Invested", "Realized", "Remaining Fair Value","Gross MoC", "Net IRR"
  ];
  
  tableData: Row[] = [
    ["GGV USD Fund V", "Asia Alternative I", 1.0, 1.0, 1.0, 1.0, 2.0, 0.20],
    ["GGV USD Fund VI", "Asia Alternative Asia", 1.0, 1.0, 1.0, 1.0, 2.0, 0.20],
    ["GGV USD Fund VI", "Asia Alternative I", 1.0, 1.0, 1.0, 1.0, 2.0, 0.20]
  ];

  

  cssClassNames = {
    'headerRow': 'headerTable',
    'tableRow': 'rowTable',
  }
  tableOptions = {
    'allowHtml': true, 'cssClassNames': this.cssClassNames, alternatingRowStyle: false
  };
}
