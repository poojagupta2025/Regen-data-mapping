




import React from 'react';
import AgGridTable from './AgGridTable';
const getColumnDefs = (setData: React.Dispatch<React.SetStateAction<any[]>>) => [
  { headerName: 'STUDY', field: 'study', editable: false },
  { headerName: 'VENDOR', field: 'vendor' },
  { headerName: 'DATA TYPE', field: 'dataType' },
  { headerName: 'NATIVE PATH ZIP', field: 'nativePathZip' },
  { headerName: 'NATIVE PATH UNZIP', field: 'nativePathUnzip' },
  { headerName: 'LANDING PATH', field: 'landingPath' },
  { headerName: 'FILE NAME FILTER', field: 'fileNameFilter' },
  { headerName: 'FILE FORMAT', field: 'fileFormat' },
  { headerName: 'TARGET PATH', field: 'targetPath' },
  { headerName: 'FREQUENCY', field: 'frequency' },
  { headerName: 'COMMENTS', field: 'comments' },
  {
    headerName: 'ACTIONS',
    field: 'actions',
    minWidth: 160,
    maxWidth: 200,
    editable: false,
    filter: false,
    sortable: false,
    cellRenderer: (params: any) => {
      const { data } = params;
      const isReviewed = data.isReviewed;
      return (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button
            style={{
              padding: '4px 12px',
              background: isReviewed ? '#4caf50' : '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: 500,
            }}
            onClick={() => {
              if (!data.comments || data.comments.trim() === '') {
                alert('Please add the comment before approving.');
                return;
              }
              setData((prev: any[]) => prev.map((row) => row.id === data.id ? { ...row, isReviewed: !row.isReviewed } : row));
            }}
          >
            Approve
          </button>
          <button
            style={{
              padding: '4px 12px',
              background: '#f44336',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: 500,
            }}
            onClick={() => alert(`Reject: ${data.study}`)}
          >
            Reject
          </button>
        </div>
      );
    },
  },
];

const rowData = [
  {
    id: 1,
    study: 'Study A',
    vendor: 'ICON',
    dataType: 'Lab',
    nativePathZip: 'centr',
    nativePathUnzip: 'centr',
    landingPath: '/data/landing',
    fileNameFilter: 'file.zip',
    fileFormat: 'zip',
    targetPath: '/data/standardized/vendorA/studyA/lab/file.zip',
    frequency: 'Daily',
    comments: 'This file contains patient',
    actions: '',
    isReviewed: false,
  },
  {
    id: 2,
    study: 'Study B',
    vendor: 'BLINK',
    dataType: 'IRT',
    nativePathZip: 'N/A',
    nativePathUnzip: 'centr',
    landingPath: '/data/landing',
    fileNameFilter: 'data.json',
    fileFormat: 'json',
    targetPath: '/data/standardized/vendorB/studyB/irt/data.json',
    frequency: 'Weekly',
    comments: 'This file details Interacti',
    actions: '',
    isReviewed: false,
  },
  {
    id: 3,
    study: 'Study C',
    vendor: 'ICON',
    dataType: 'Clir',
    nativePathZip: 'centr',
    nativePathUnzip: 'centr',
    landingPath: '/data/landing',
    fileNameFilter: 'data_',
    fileFormat: 'zip',
    targetPath: '/data/standardized/vendorC/studyC/clinical/data_',
    frequency: 'Monthly',
    comments: 'Clinical trial data for',
    actions: '',
    isReviewed: false,
  },
  {
    id: 4,
    study: 'Study D',
    vendor: 'BLINK',
    dataType: 'PK',
    nativePathZip: 'N/A',
    nativePathUnzip: 'centr',
    landingPath: '/data/landing',
    fileNameFilter: 'pk_de',
    fileFormat: 'tsv',
    targetPath: '/data/standardized/vendorD/studyD/pk/pk_de',
    frequency: 'Bi-weekly',
    comments: 'Pharma cokinetic data for',
    actions: '',
    isReviewed: false,
  },
];



let nextId = 5;
const getEmptyRow = () => ({
  id: nextId++,
  study: '',
  vendor: '',
  dataType: '',
  nativePathZip: '',
  nativePathUnzip: '',
  landingPath: '',
  fileNameFilter: '',
  fileFormat: '',
  targetPath: '',
  frequency: '',
  comments: '',
  actions: '',
  isReviewed: false,
});

const App: React.FC = () => {
  const [data, setData] = React.useState(rowData);

  const handleAddRow = () => {
    setData((prev) => [...prev, getEmptyRow()]);
  };

  // AG Grid needs a stable row id for correct cell refresh
  const getRowId = (params: any) => params.data.id;

  return (
    <div style={{ padding: 24 }}>
      <h2>AG Grid Table</h2>
      <button
        style={{ marginBottom: 16, padding: '8px 20px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 500 }}
        onClick={handleAddRow}
      >
        Add Row
      </button>
      <AgGridTable
        rowData={data}
        columnDefs={getColumnDefs(setData)}
        getRowId={getRowId}
      />
    </div>
  );
};

export default App;
