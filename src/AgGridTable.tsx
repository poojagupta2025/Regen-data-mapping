
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register all community modules for AG Grid v34
ModuleRegistry.registerModules([AllCommunityModule]);


interface AgGridTableProps {
  rowData: any[];
  columnDefs: any[];
  pageSize?: number;
  editable?: boolean;
  getContextMenuItems?: (params: any) => any;
  context?: any;
  getRowId?: (params: any) => string;
}

const AgGridTable: React.FC<AgGridTableProps> = ({ rowData, columnDefs, pageSize = 10, editable = true, getContextMenuItems, context, getRowId }) => {


  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100vw', maxWidth: '100vw', overflowX: 'auto' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={pageSize}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
          editable: editable,
        }}
        getContextMenuItems={getContextMenuItems}
        context={context}
        getRowId={getRowId}
      />
    </div>
  );
};

export default AgGridTable;
