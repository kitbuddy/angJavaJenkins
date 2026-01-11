import {Component} from "@angular/core";
import {AgGridAngular} from "ag-grid-angular";
import {
  ColDef, colorSchemeDark,
  colorSchemeDarkBlue, colorSchemeDarkWarm,
  colorSchemeLightWarm,
  GridApi,
  GridOptions,
  GridReadyEvent, ITextCellEditorParams,
  themeQuartz
} from "ag-grid-community";
import {AllCommunityModule, ModuleRegistry} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  isSelected: boolean;
  value: string;
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  myTheme = themeQuartz.withParams({
    backgroundColor: 'rgb(249, 245, 227)',
    foregroundColor: 'rgb(126, 46, 132)',
    headerTextColor: 'rgb(204, 245, 172)',
    headerBackgroundColor: 'rgb(209, 64, 129)',
    oddRowBackgroundColor: 'rgb(0, 0, 0, 0.03)',
    headerColumnResizeHandleColor: 'rgb(126, 46, 132)',
  });

  myTheme2 = themeQuartz
    .withPart(colorSchemeDarkBlue)
    .withParams({
      // We prefer red to blue. Because the built in color schemes
      // derive all colors from foreground, background and
      // accent colors, changing these two values is sufficient.
      backgroundColor: 'darkred',
      accentColor: 'red',
    });

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    {isSelected: true, value: "", make: "Tesla", model: "Model Y", price: 64950, electric: true},
    {isSelected: true, value: "", make: "Ford", model: "F-Series", price: 33850, electric: false},
    {isSelected: true, value: "", make: "Toyota", model: "Corolla", price: 29600, electric: false},
    {isSelected: true, value: "", make: "Mercedes", model: "EQA", price: 48890, electric: true},
    {isSelected: true, value: "", make: "Fiat", model: "500", price: 15774, electric: false},
    {isSelected: true, value: "", make: "Nissan", model: "Juke", price: 20675, electric: false},
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    {
      field: 'isSelected',
      cellRenderer: 'agCheckboxCellRenderer',
      cellEditor: 'agCheckboxCellEditor',
      editable: true
    },
    {
      field: "value",
      editable: true,
      valueFormatter: (params) => `£ ${params.value}`,
      cellEditor: "agCellEditor",
      cellEditorParams: {
        maxLength: 20,
      } as ITextCellEditorParams,
    },
    {field: "make"},
    {field: "model"},
    {field: "price"},
    {field: "electric"},
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  private gridApi: GridApi<any> | undefined;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params?.api;
    // others things you want to do on grid ready state
  }

  gridOptions: GridOptions = {
    domLayout: 'autoHeight',
    undoRedoCellEditing: true,
    rowSelection: "single",
  };
  protected readonly themeQuartz = themeQuartz;
  protected readonly colorSchemeDarkWarm = colorSchemeDarkWarm;
}
