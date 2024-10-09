import { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { colorSchemeDarkBlue, themeQuartz } from "ag-grid-community";
import "./App.css";
import { ColDef } from "ag-grid-community";

type Row = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
};

const myTheme = themeQuartz
  .withParams({ spacing: 10, accentColor: "red" })
  .withPart(colorSchemeDarkBlue);

function App() {
  // Row Data: The data to be displayed.
  const [rowData] = useState<Row[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<ColDef<Row>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return <AgGridReact rowData={rowData} columnDefs={colDefs} theme={myTheme} />;
}

export default App;
