import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IAdminList } from '@/types/global';

export default function AdminContent({ rows, columns }: { rows: IAdminList[]; columns: GridColDef[] }) {
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
