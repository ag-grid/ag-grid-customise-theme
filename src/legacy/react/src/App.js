import React, { Component } from 'react';
import './App.scss';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';

class App extends Component {
  constructor(props) {
    // create cols, one for each letter
    const columnDefs = [{
        headerName: 'Country',
        field: 'country',
        enableRowGroup: true,
        checkboxSelection: true,
        headerCheckboxSelection: true,
        filter: true,
        filterParams: {
            newRowsAction: 'keep',
            resetButton: true,
            applyButton: true
        },
        width: 200,
        rowDrag: true
    }].concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({ field: letter })));

    // create 100 rows, and fill with random numbers
    const rowData = [];
    const countries = ['United Kingdom', 'Ireland', 'United States', 'India', 'Brazil', 'China', 'Russia']; 
    for (let i = 0; i < 100; i++) {
      const item = {};
      
      item['country'] = countries[i % countries.length];
      
      for (let j = 1; j < columnDefs.length; j++) {
        const colDef = columnDefs[j];
        item[colDef.field] = Math.floor(Math.random() * 100000);
      }

      rowData.push(item);
    }

    super(props);

    this.state = {
      columnDefs,
      rowData
    };
  }

  render() {
    const { columnDefs, rowData } = this.state;
    return (
      <div className="ag-theme-custom-react"
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        <AgGridReact
          autoGroupColumnDef={{
            resizable: true,
            cellRendererParams: {
              checkbox: true
            }
          }}
          rowSelection='multiple'
          enableCharts={true}
          rowDragManaged={true}
          enableRangeSelection={true}
          animateRows={true}
          enableMultiRowDragging={true}
          columnDefs={columnDefs}
          rowData={rowData}
          rowGroupPanelShow='always'
          pivotPanelShow='always'
          enableStatusBar={true}
          sideBar={{
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
          defaultToolPanel: null
        }}
          >
        </AgGridReact>
      </div>
    );
  }
}

export default App;