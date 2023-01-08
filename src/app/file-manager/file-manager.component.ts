import { Component, OnInit } from '@angular/core';
import { ChartType, ScriptLoaderService } from 'angular-google-charts';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  dateFormat: google.visualization.DateFormat;
  myFormatters: any;
  constructor(private loaderService: ScriptLoaderService)
  {

  }
  
  ngOnInit(): void {
    this.loaderService.loadChartPackages().subscribe(() => {
      // Start creating your chart now
      this.myFormatters = [
        {
          formatter: new google.visualization.DateFormat({ pattern: "yyyy-MM-dd HH:mm:ss" }),
          colIndex: 4
        }
      ];
    });
  }
  faEllipsisVertical = faEllipsisVertical;
  tableType: ChartType = ChartType.Table;
  tableColumns = ['', 'Name', '', 'Size', 'Last modified', 'Modified by'];
  tableData = [
    ['<input type="radio" />', '<img src="assets/images/p-folder.png" class="inline-block folder" /> USD Fund I, L.P.', '', '22 item(s)', new Date(2021, 3, 20, 1, 33, 25), ''],
    ['', '<div class="sub-1"><img src="assets/images/p-s-folder.png" class="inline-block folder" /> Legal</div>', '', '2 item(s)', new Date(2021, 1, 11, 21, 22, 13), '2020demo1@quantiumfund.com'],
    ['', '<div class="sub-1"><img src="assets/images/pdf.png" class="inline-block file" /> Article of association.pdf</div>', '', '17.20 KB', new Date(2021, 1, 11, 21, 23, 39), '2020demo1@quantiumfund.com'],
    ['', '<div class="sub-2"><img src="assets/images/pdf.png" class="inline-block file" /> Fund formation.pdf</div>', '', '17.20 KB', new Date(2021, 1, 11, 21, 23, 39), '2020demo1@quantiumfund.com'],
    ['', '<div class="sub-2"><img src="assets/images/p-s-c-folder.png" class="inline-block folder" /> Transaction Attachment</div>', '', '20 item(s)', new Date(2021, 4, 20, 1, 33, 25), ''],
    ['', '<div class="sub-1"><img src="assets/images/p-s-c-folder.png" class="inline-block folder" /> Reports</div>', '', '0 item(s)', new Date(2021, 4, 20, 1, 33, 25), '']
  ];

  cssClassNames = {
    'headerRow': 'headerTable',
    'tableRow': 'rowTable',
}
  tableOptions = {
    'allowHtml': true,
    width: 930,
    'cssClassNames': this.cssClassNames
  };



  select(): void{
    console.log('test');
  }
}
