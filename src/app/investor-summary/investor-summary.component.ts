import { Component, OnInit } from '@angular/core';
import { ChartType, getPackageForChart, ScriptLoaderService } from 'angular-google-charts';
import { Row } from 'angular-google-charts/lib/components/chart-base/chart-base.component';
import { columnChartColumns as columnChartColumnsData, columnChartData as columnChartDataData, options as optionsData } from './column-mock-data';
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
      this.myAggregatedFormatters = [
        {
          formatter: new google.visualization.NumberFormat({ pattern: "$#,###.0m" }),
          colIndex: 1
        },
        {
          formatter: new google.visualization.NumberFormat({ pattern: "$#,###.0m" }),
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
  columnChartColumns = columnChartColumnsData;
  columnChartData = columnChartDataData;
  options = optionsData;
  



  // column chart
  tableAggregatedColumns = [
    "USD", "2020-12-31", "2020-12-31", "QoQ"
  ];
  
  tableAggregatedData: Row[] = [
    ["Commitment", 8591.00, 8590.25, -0.75],
    ["Contribution", 1643.68, 1643.16, -0.52],
    ["Distribution", 115.00, 115, null],
    ["NAV", 1992.44, 1997.40, 4.96],
    ["Total invested", 958.29, 958.21, -0.08],
    ["Total value", 2107.44, 2112.40, 4.96],
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
