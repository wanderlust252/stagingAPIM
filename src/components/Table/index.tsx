import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ITableProps } from '@/interfaces';

const ComponentTable = <R extends any>({ columnDefs, rowData, onGridReady }: ITableProps<R>) => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const defaultColDef = useMemo(() => {
    return {
      editable: false,
      sortable: true,
      suppressAutoSize: false,
      suppressRowClickSelection: false,
      suppressColumnFilter: false,
      suppressColumnSelectAll: false,
      suppressColumnExpandAll: false,
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination></AgGridReact>
      </div>
    </div>
  );
};
export default ComponentTable;
