import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';
import { GridColDef } from '@mui/x-data-grid';
import { useGetAdminSupport } from '@/apis/admin';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'email', headerName: '이메일', width: 200 },
    { field: 'supportType', headerName: '종류', width: 200 },
    { field: 'content', headerName: '내용', width: 200 },
    { field: 'checkAdmin', headerName: '체크여부', width: 100 },
    { field: 'createAt', headerName: '날짜', width: 200 },
];

const support = () => {
    const { isLoading, data } = useGetAdminSupport();

    if (isLoading && data === undefined) {
        return <h1>로딩중</h1>;
    }
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <h1>서포트센터</h1>
                {data && <AdminContent columns={columns} rows={data?.list} />}
            </section>
        </main>
    );
};
export default support;
