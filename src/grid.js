require('./styles.scss');
var Grid = require('ag-grid').Grid;
require('ag-grid-enterprise');

// create cols, one for each letter
var columnDefs = [];
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach( function(letter) {
    columnDefs.push({field: letter});
});

// create 100 rows, and fill with random numbers
var rowData = [];
for (var i = 0; i<100; i++) {
    var item = {};
    columnDefs.forEach( function(colDef) {
        item[colDef.field] = Math.floor(Math.random() * 100000);
    });
    rowData.push(item);
}

var gridOptions = {
    defaultColDef: {
        width: 100,
        filter: 'number'
    },
    enableSorting: true,
    enableFilter: true,
    suppressMenuHide: true,
    enableStatusBar: true,
    enableRangeSelection: true,
    columnDefs: columnDefs,
    rowData: rowData
};

new Grid(document.querySelector('#myGrid'), gridOptions);
