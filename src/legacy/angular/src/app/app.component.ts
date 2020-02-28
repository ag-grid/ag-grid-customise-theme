import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-theme';

    columnDefs = (() => {
        var columns = [{
            headerName: 'Country',
            field: 'country',
            enableRowGroup: true,
            filter: true,
            width: 200,
            rowDrag: true
        }];
        
        var additionalColumns = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')).map(letter => ({ field: letter }));
        
        return columns.concat(additionalColumns as any[]);
    })();

    rowData = (() => {
        var rowData = [];
        var countries = ['United Kingdom', 'Ireland', 'United States', 'India', 'Brazil', 'China', 'Russia'];

        for (var i = 0; i < 100; i++) {
            var item = {};
            item['country'] = countries[i % countries.length];
            for (var j = 1; j < this.columnDefs.length; j++) {
                var colDef = this.columnDefs[j];
                item[colDef.field] = Math.floor(Math.random() * 100000);
            }
            
            rowData.push(item);
        }
        return rowData;
    })();

    defaultColDef = {
        // make all cols more narrow
        width: 100,
        filter: 'number',
        sortable: true,
        resizable: true
    }

    sideBar = {
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
    };
}
