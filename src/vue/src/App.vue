<style lang="scss">
  @import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
  @import "../node_modules/ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine-mixin.scss";

  .ag-theme-custom-vue {
    @include ag-theme-alpine((
      odd-row-background-color: #f5f5f5,
      row-border-color: transparent,
      row-hover-color: null,
      checkbox-checked-color: #2661ad,
      range-selection-border-color: #ff00b1,
      range-selection-background-color: #03305633
    ))
  }

  .ag-menu-option-active {
    background-color: #2661ad;
    color: white;
  }

  body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>


<template>
    <ag-grid-vue 
      style="width: 100%; height: 100%;"
      class="ag-theme-custom-vue"
      :columnDefs="columnDefs"
      :rowData="rowData"

      rowSelection = "multiple"
      :enableCharts = true
      :rowDragManaged = true
      :enableRangeSelection = true
      :animateRows = true
      :enableMultiRowDragging = true
      rowGroupPanelShow = "always"
      pivotPanelShow = "always"
      :enableStatusBar = true
      :autoGroupColumnDef = "{
        resizable: true,
        cellRendererParams: {
          checkbox: true
        }
      }"
      :sideBar = "{
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
      }"
    >
    </ag-grid-vue>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";

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

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
            }
        },
        components: {
            AgGridVue
        },
        beforeMount() {
            this.columnDefs = columnDefs;
            this.rowData = rowData;
        }
    }
</script>