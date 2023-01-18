import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'total',
    headerName: 'Total',

    width: 150,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'details',
    headerName: 'Order Details',
    width: 150,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    total: '$ 169',
    name: 'Uceiif ali',
    details: 'Professional Package',
    time: '12:00 pm',
  },
  {
    id: 2,
    total: '$ 20',
    name: 'Salah essam',
    details: 'Basic Package',
    time: '1:00 pm',
  },
  {
    id: 3,
    total: '$ 200',
    name: 'Adham Shaban',
    details: 'Advanced Package',
    time: 'yesterday 1:00 pm',
  },
  {
    id: 4,
    total: '$ 169',
    name: 'Ahmed anawr',
    details: 'Professional Package',
    time: 'yesterday 12:00 pm',
  },
];

export default function DataGridDemo() {
  return (
    <div className="w-full h-96 mt-12">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[1]}
      />
    </div>
  );
}
