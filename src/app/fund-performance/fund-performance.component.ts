import { Component, OnInit } from '@angular/core';
import { ChartType, getPackageForChart, Row, ScriptLoaderService } from 'angular-google-charts';

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.css']
})
export class FundPerformanceComponent implements OnInit {
  private readonly chartPackage = getPackageForChart(ChartType.Table);
  dateFormat: google.visualization.DateFormat;
  myFormatters: any;
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
  
  // column chart
  pieChartColumns = [
    'Sector',
    'value'
  ];
  
  pieChartData: Row[] = [
    ['Energy', 1],
    ['Consumer Durables & Apparel', 1],
    ['Consumer Services', 1],
    ['Insurance', 1],
    ['Material', 1],
    ['Software & Services', 1],
    ['Technology Hardware & Equipment', 1],
    ['Health Care Equipment & Services', 1]
  ];

  options = {
    colors: ['#7cbfb7', '#1898ac', '#344b79', '#ebac78', '#67809f', '#e8aea3', '#336e7b', '#d24d57'],
    pieHole: 0.4,
    width: 420,
    height: 290,
    legend: { maxLines: 1, textStyle: {fontSize: 11}, alignment:'center' },
    pieSliceText: 'value',
    chartArea: { left: 10, width: 390, height: 300 }
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


  // column chart
  tableColumns = [
    "Name", "Initial investment", "Main Industry", "Commit/Reserves", "Current ownership", "Total investment cost",
    "Current investment cost", "Realized", "Fair market value", "Total value", "Multiple of cost", "Gross IRR"
  ];
  
  tableData: Row[] = [
    ["Genesys", new Date(2016, 11), "Oil Gas & Consumable Fuels", "-", 12.10, 7, 7, null, 7, 7, 1, null],
    ["Treasury Tech", new Date(2017, 0), "Leisure Equipment & Products", "-", 10.00, 15.10, 0.10, 70, 0.10, 70.10, 4.64, 72.57],
    ["RS Education", new Date(2018, 0), "Diversified Consumer Services", "-", 3.04, 30.00, 30.00, null, 40.00, 40.00, 1.33, 9.27],
    ["SR Insurance Technology", new Date(2018, 4), "Insurance", "-", 5.07, 40.00, 40.00, null, 40.00, 40.00, 1, null],
    ["Syntec Automation", new Date(2018, 6), "Construction Materials", "-", 5.32, 30.00, 30.00, null, 30.00, 30.00, 1, null],
    ["Tinker Technologies", new Date(2018, 9), "Internet Software & Services", "-", 12.33, 40.00, 40.00, null, 40.00, 40.00, 1, null],
    ["TSM Healthcare", new Date(2019, 11), "Health Care Equipment & Supplies", "-", 18.72, 48.00, 48.00, null, 48.00, 48.00, 1, null],
    ["WD", new Date(2019, 10), "Computers & Peripherals", "-", 50.00, 8.00, 8.00, null, 30.00, 30.00, 3.75, 155.87],
  ];

  

  cssClassNames = {
    'headerRow': 'headerTable',
  }
  tableOptions = {
    'allowHtml': true, 'cssClassNames': this.cssClassNames, alternatingRowStyle: false
  };
}
