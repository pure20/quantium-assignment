import { Row } from "angular-google-charts";

export const aggregatedColumns = [
    "USD", "2020-12-31", "2020-12-31", "QoQ"
  ];
  
  export const aggregatedData: Row[] = [
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

  export const aggregatedDataClassNames = {
    'headerRow': 'headerTable',
    'tableRow': 'rowTable',
  }

  export const aggregatedOptions = {
    'allowHtml': true, 'cssClassNames': aggregatedDataClassNames, alternatingRowStyle: false
  };