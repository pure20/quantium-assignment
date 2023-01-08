import { Row } from "angular-google-charts";

export const tableColumns = [
    "Fund", "Investor Entity", "Commitment", "Invested", "Realized", "Remaining Fair Value","Gross MoC", "Net IRR"
 ];
  
export const tableData: Row[] = [
    ["GGV USD Fund V", "Asia Alternative I", 1.0, 1.0, 1.0, 1.0, 2.0, 0.20],
    ["GGV USD Fund VI", "Asia Alternative Asia", 1.0, 1.0, 1.0, 1.0, 2.0, 0.20],
    ["GGV USD Fund VI", "Asia Alternative I", 1.0, 1.0, 1.0, 1.0, 2.0, 0.20],
    ["Total", "", 3.0, 3.0, 3.0, 3.0, 2.0, 0.20]
 ];

  

export const cssClassNames = {
    'headerRow': 'headerTable',
    'tableRow': 'rowTable',
}

export const tableOptions = {
    'allowHtml': true, 'cssClassNames': cssClassNames, alternatingRowStyle: false
  };