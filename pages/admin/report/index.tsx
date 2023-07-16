import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';
import { GridColDef } from '@mui/x-data-grid';
import { useGetAdminReport } from '@/apis/admin';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'reportItemType', headerName: '신고 종류', width: 100 },
    { field: 'content', headerName: '내용', width: 200 },
    { field: 'reason', headerName: '이유', width: 200 },
    { field: 'targetId', headerName: '타겟 ID', width: 70 },
    { field: 'userId', headerName: '유저 ID', width: 70 },
    { field: 'checkAdmin', headerName: '체크여부', width: 100 },
    { field: 'createAt', headerName: '날짜', width: 200 },
];

const report = () => {
    const { isLoading, data } = useGetAdminReport();

    if (isLoading && data === undefined) {
        return <h1>로딩중</h1>;
    }
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <h1>신고관리</h1>
                {data && <AdminContent columns={columns} rows={data?.list} />}
            </section>
        </main>
    );
};
export default report;
