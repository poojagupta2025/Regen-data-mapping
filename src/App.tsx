




import React from 'react';
import AgGridTable from './AgGridTable';
const columnDefs = [
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
    cellRenderer: (params: any) => (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button
          style={{ padding: '4px 12px', background: '#4caf50', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
          onClick={() => alert(`Approve: ${params.data.study}`)}
        >
          Approve
        </button>
        <button
          style={{ padding: '4px 12px', background: '#f44336', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
          onClick={() => alert(`Reject: ${params.data.study}`)}
        >
          Reject
        </button>
      </div>
    ),
  },
];

const rowData = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];


const App: React.FC = () => (
  <div style={{ padding: 24 }}>
    <h2>AG Grid Table</h2>
    <AgGridTable rowData={rowData} columnDefs={columnDefs} />
  </div>
);

export default App;
