import { Row } from "angular-google-charts";

export const tableColumns = [
    "Name", "Initial investment", "Main Industry", "Commit/Reserves", "Current ownership", "Total investment cost",
    "Current investment cost", "Realized", "Fair market value", "Total value", "Multiple of cost", "Gross IRR"
];
  
export const  tableData: Row[] = [
    ["Genesys", new Date(2016, 11), "Oil Gas & Consumable Fuels", "-", 12.10, 7, 7, null, 7, 7, 1, null],
    ["Treasury Tech", new Date(2017, 0), "Leisure Equipment & Products", "-", 10.00, 15.10, 0.10, 70, 0.10, 70.10, 4.64, 72.57],
    ["RS Education", new Date(2018, 0), "Diversified Consumer Services", "-", 3.04, 30.00, 30.00, null, 40.00, 40.00, 1.33, 9.27],
    ["SR Insurance Technology", new Date(2018, 4), "Insurance", "-", 5.07, 40.00, 40.00, null, 40.00, 40.00, 1, null],
    ["Syntec Automation", new Date(2018, 6), "Construction Materials", "-", 5.32, 30.00, 30.00, null, 30.00, 30.00, 1, null],
    ["Tinker Technologies", new Date(2018, 9), "Internet Software & Services", "-", 12.33, 40.00, 40.00, null, 40.00, 40.00, 1, null],
    ["TSM Healthcare", new Date(2019, 11), "Health Care Equipment & Supplies", "-", 18.72, 48.00, 48.00, null, 48.00, 48.00, 1, null],
    ["WD", new Date(2019, 10), "Computers & Peripherals", "-", 50.00, 8.00, 8.00, null, 30.00, 30.00, 3.75, 155.87],
    ["Total", null, null, "-", null, 218.10, 203.10, 70.00, 235.10, 305.10, 1.40, 15.30],
];

  

export const cssClassNames = {
    'headerRow': 'headerTable',
    'tableRow': 'rowTable',
}

export const tableOptions = {
    'allowHtml': true, 'cssClassNames': cssClassNames, alternatingRowStyle: false
};