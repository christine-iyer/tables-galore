import React, { useState, useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const EditableTableAGG = () => {
  const initialData = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  const [rowData, setRowData] = useState(initialData);

  // Reference to AG Grid API
  const gridRef = useRef();

  // Define columns with editable cells
  const columnDefs = useMemo(
    () => [
      { field: "id", headerName: "ID", editable: false },
      { field: "name", headerName: "Name", editable: true },
      { field: "age", headerName: "Age", editable: true },
    ],
    []
  );

  // Add new row with default values
  const addRow = useCallback(() => {
    const newRow = { id: rowData.length + 1, name: "", age: 0 };
    setRowData([...rowData, newRow]);
    gridRef.current.api.refreshCells({ force: true });
  }, [rowData]);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <button onClick={addRow} style={{ marginBottom: "10px" }}>
        Add Row
      </button>
      <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ flex: 1, minWidth: 100 }}
          animateRows={true}
          onCellValueChanged={(event) => {
            const { data, colDef, newValue } = event;
            const field = colDef.field;
            if (field) {
              setRowData((prevData) =>
                prevData.map((row) =>
                  row.id === data.id ? { ...row, [field]: newValue } : row
                )
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default EditableTableAGG;
