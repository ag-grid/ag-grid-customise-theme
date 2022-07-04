require('./styles/styles.scss');
var Grid = require('ag-grid-community').Grid;
require('ag-grid-enterprise');

// create cols, one for each letter
var columnDefs = [
    {
        headerName: 'Country',
        field: 'country',
        enableRowGroup: true,
        filter: true,
        width: 200,
        rowDrag: true,
        checkboxSelection: true,
        headerCheckboxSelection: true
    }
].concat(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function(letter) { return { field: letter }; })
);

// create 100 rows, and fill with random numbers
var rowData = [];
var countries = [
    'United Kingdom',
    'Ireland',
    'United States',
    'India',
    'Brazil',
    'China',
    'Russia'
];
for (var i = 0; i < 100; i++) {
    var item = {};
    item.country = countries[i % countries.length];
    for (var j = 1; j < columnDefs.length; j++) {
        var colDef = columnDefs[j];
        item[colDef.field] = Math.floor(Math.random() * 100000);
    }

    rowData.push(item);
}

function getGridOptions() {
    return {
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
        rowSelection: 'multiple',
        suppressRowClickSelection: true
    };
}

var propertyNames = [
    'foreground-color',
    'data-color',
    'secondary-foreground-color',
    'header-foreground-color',
    'disabled-foreground-color',
    'background-color',
    'header-background-color',
    'subheader-background-color',
    'subheader-toolbar-background-color',
    'control-panel-background-color',
    'selected-row-background-color',
    'odd-row-background-color',
    'row-hover-color',
    'range-selection-border-color',
    'range-selection-background-color',
    'selected-tab-underline-color',
    'range-selection-chart-category-background-color',
    'range-selection-chart-background-color',
    'header-cell-hover-background-color',
    'header-cell-moving-background-color',
    'chip-background-color',
    'border-color',
    'secondary-border-color',
    'row-border-color',
    'header-column-separator-color',
    'header-column-resize-handle-color',
    'input-border-color',
    'input-disabled-border-color',
    'input-disabled-background-color',
    'checkbox-background-color',
    'checkbox-checked-color',
    'checkbox-unchecked-color',
    'checkbox-indeterminate-color',
    'toggle-button-off-border-color',
    'toggle-button-off-background-color',
    'toggle-button-on-border-color',
    'toggle-button-on-background-color',
    'toggle-button-switch-background-color',
    'toggle-button-switch-border-color',
    'minichart-selected-chart-color',
    'minichart-selected-page-color'
];

window.onClearClick = function(name) {
    document.getElementById(name + '-value').innerHTML = '';
    document.getElementById(name + '-clear').style.display = 'none';
    document.getElementById(name + '-name').style.fontWeight = '';
    document.getElementById(name + '-value').style.fontWeight = '';
    document.body.style.setProperty(name, '');
};

function randomHex() {
    return Math.floor(Math.random() * 16).toString(16);
}

window.onSetClick = function(name) {
    var def = '#' + randomHex() + randomHex() + randomHex() + randomHex() + randomHex() + randomHex();
    var value = window.prompt('Choose a color', def);
    if (value) {
        document.getElementById(name + '-value').textContent = ': ' + value;
        document.getElementById(name + '-name').style.fontWeight = 'bold';
        document.getElementById(name + '-value').style.fontWeight = 'bold';
        document.getElementById(name + '-clear').style.display = '';
        document.body.style.setProperty(name, value);
    } else {
        onClearClick(name);
    }
};

function initialise() {
    if (cssHasLoaded()) {
        new Grid(document.querySelector('#grid-1'), getGridOptions());
        new Grid(document.querySelector('#grid-2'), getGridOptions());

        var addVarField = function(name) {
            return document.querySelector('#controls').insertAdjacentHTML('beforeend',
                '<div>' +
        '  <span id="' + name + '-name">' + name + '</span>' +
        '  <span id="' + name + '-value"></span>' +
        '  <a href="javascript:onSetClick(\'' + name + '\')">set</a>' +
        '  <a style="display:none" id="' + name + '-clear" href="javascript:onClearClick(\'' + name + '\')">clear</a>' +
        '</div>'
            );
        };

        propertyNames.forEach(function(name) {
            addVarField('--ag-' + name);
            addVarField('--custom-' + name);
        });
    } else {
        setTimeout(initialise, 100);
    }
}

function cssHasLoaded() {
    // test if the theme has loaded by looking for the effect of a known style,
    // in this case we know that the theme applies padding to cells
    var themeEl = document.createElement('div');
    document.body.appendChild(themeEl);
    try {
        themeEl.className = document.querySelector("[class^='ag-theme']").className;
        var cellEl = document.createElement('div');
        cellEl.className = 'ag-cell';
        themeEl.appendChild(cellEl);
        var computedStyle = window.getComputedStyle(cellEl);
        return parseFloat(computedStyle.paddingLeft) > 0;
    } finally {
        document.body.removeChild(themeEl);
    }
}

initialise();
