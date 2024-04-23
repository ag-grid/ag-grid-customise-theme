
// create cols, one for each letter
var columnDefs = [{
    headerName: 'Country',
    field: 'country',
    enableRowGroup: true,
    filter: true,
    width: 200,
    rowDrag: true
}].concat('ABCDEFG'.split('').map(letter => ({ field: letter })));

columnDefs[0].checkboxSelection = true;

// create 100 rows, and fill with random numbers
var rowData = [];
var countries = ['United Kingdom', 'Ireland', 'United States', 'India', 'Brazil', 'China', 'Russia'];

for (var i = 0; i < 100; i++) {
    var item = {};

    item.country = countries[i % countries.length];

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
    enableRangeSelection: true,
    rowDragManaged: true,
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
                toolPanel: 'agColumnsToolPanel'
            },
            {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel'
            }
        ],
        defaultToolPanel: 'filters'
    },

    columnDefs: columnDefs,
    rowData: rowData,
    enableFillHandle: true,
    rowSelection: 'multiple'
};

new agGrid.Grid(document.querySelector('#myGrid'), gridOptions);