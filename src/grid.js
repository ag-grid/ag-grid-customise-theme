require('./styles.scss');
var Grid = require('ag-grid').Grid;

var gridOptions = {
    enableSorting: true,
    enableFilter: true,
    suppressMenuHide: true,
    columnDefs: [{headerName: 'Make', field: 'make'}, {headerName: 'Model', field: 'model'}, {headerName: 'Price', field: 'price'}],
    rowData: [{make: 'Toyota', model: 'Celica', price: 35000}, {make: 'Ford', model: 'Mondeo', price: 32000}, {make: 'Porsche', model: 'Boxter', price: 72000}]
};

new Grid(document.querySelector('#myGrid'), gridOptions);
