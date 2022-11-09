import { AgGridReact } from 'ag-grid-react';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const GridExample = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const { t } = useTranslation();
  const [rowData, setRowData] = useState();
  //   const [columnDefs, setColumnDefs] = useState([
  //     { field: '운동선수' },
  //     { field: '나이' },
  //     { field: '국가' },
  //     { field: '년도' },
  //     { field: '데이트' },
  //     { field: '스포츠' },
  //     { field: '금' },
  //     { field: '은' },
  //     { field: '청동' },
  //     { field: '총' },
  //   ]);
  const columnDefs = [
    { field: 'athlete', headerName: `${t('agent-management.table.athlete')}` },
    { field: 'age', headerName: `${t('agent-management.table.age')}` },
    { field: 'country', headerName: `${t('agent-management.table.country')}` },
    { field: 'year', headerName: `${t('agent-management.table.year')}` },
    { field: 'date', headerName: `${t('agent-management.table.date')}` },
    { field: 'sports', headerName: `${t('agent-management.table.sports')}` },
    { field: 'gold', headerName: `${t('agent-management.table.gold')}` },
    { field: 'silver', headerName: `${t('agent-management.table.silver')}` },
    { field: 'bronze', headerName: `${t('agent-management.table.bronze')}` },
    { field: 'gun', headerName: `${t('agent-management.table.gun')}` },
  ];

  const defaultColDef = useMemo(() => {
    return {
      editable: false,
      sortable: false,
      suppressAutoSize: false,
      suppressRowClickSelection: false,
      suppressColumnFilter: false,
      suppressColumnSelectAll: false,
      suppressColumnExpandAll: false,
    };
  }, []);

  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        const newData = data?.map((data: any) => {
          return {
            athlete: data.athlete,
            age: data.age,
            country: data.country,
            year: data.year,
            date: data.date,
            sports: data.sport,
            gold: data.gold,
            silver: data.silver,
            bronze: data.bronze,
            gun: data.total,
          };
        });
        setRowData(newData);
      });
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
