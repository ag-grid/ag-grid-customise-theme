require('./styles/styles.scss');
var Grid = require('ag-grid-community').Grid;
require('ag-grid-enterprise');

// create cols, one for each letter
var columnDefs = [{
    headerName: 'Country',
    field: 'country',
    enableRowGroup: true,
    filter: true,
    width: 200,
    rowDrag: true
}].concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({ field: letter })));

// create 100 rows, and fill with random numbers
var rowData = [];
var countries = ['United Kingdom', 'Ireland', 'United States', 'India', 'Brazil', 'China', 'Russia']; 
for (var i = 0; i < 100; i++) {
    var item = {};
    item['country'] = countries[i % countries.length];
    for (var j = 1; j < columnDefs.length; j++) {
        var colDef = columnDefs[j];
        item[colDef.field] = Math.floor(Math.random() * 100000);
    }
    
    rowData.push(item);
}

var gridOptions = {

    // we do not hide the menu icons, so easier to see any style changes that impact the icons
    suppressMenuHide: true,

    defaultColDef: {
        // make all cols more narrow
        width: 100,
        filter: 'number',
        sortable: true,
        resizable: true
    },
    enableCharts: true,
    animateRows: true,
    // enable these, so they can be demonstrated
    enableSorting: true,
    enableFilter: true,
    enableStatusBar: true,
    enableRangeSelection: true,
    rowDragManaged: true,
    headerHeight: 50,
    rowHeight: 40,
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always', 
    pivotColumnGroupTotals: 'before',
    pivotRowTotals: 'before',
    sideBar: {
        toolPanels: [
            {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
            },
            {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel',
            }
        ],
        defaultToolPanel: 'columns'
    },

    columnDefs: columnDefs,
    rowData: rowData
};


function initialise() {
  if (cssHasLoaded("ag-theme-balham")) {
    new Grid(document.querySelector('#myGrid'), gridOptions);
  } else {
    setTimeout(initialise, 100);
  }
}
function cssHasLoaded(theme) {
  // test if the theme has loaded by looking for the effect of a known style,
  // in this case we know that the theme applies padding to cells
  const themeEl = document.createElement("div");
  document.body.appendChild(themeEl);
  try {
    themeEl.className = theme;
    const cellEl = document.createElement("div");
    cellEl.className = "ag-cell";
    themeEl.appendChild(cellEl);
    const computedStyle = window.getComputedStyle(cellEl);
    return parseFloat(computedStyle.paddingLeft) > 0;
  } finally {
    document.body.removeChild(themeEl);
  }
}

initialise();

