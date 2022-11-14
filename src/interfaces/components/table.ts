export interface IColumn {
  field: string;
  headerName: string;
}
export interface ITableProps<T> {
  rowData: T[];
  columnDefs: IColumn[];
  onGridReady: () => void;
}

export type TODO = any;