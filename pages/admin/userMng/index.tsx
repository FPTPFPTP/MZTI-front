import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';
import { GridColDef } from '@mui/x-data-grid';
import { useGetAdminUser } from '@/apis/admin';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'email', headerName: '이메일', width: 200 },
    { field: 'level', headerName: '레벨', width: 50 },
    { field: 'mbti', headerName: 'MBTI', width: 100 },
    { field: 'nickname', headerName: '닉네임', width: 150 },
    { field: 'platform', headerName: '가입플랫폼', width: 100 },
    { field: 'platformId', headerName: '플랫폼 ID', width: 100 },
    { field: 'role', headerName: '회원 권한', width: 150 },
    { field: 'deleted', headerName: '탈퇴회원', width: 150 },
];

const userMng = () => {
    const { isLoading, data } = useGetAdminUser(0);

    if (isLoading && data === undefined) {
        return <h1>로딩중</h1>;
    }

    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <h1>유저관리</h1>
                {data?.list && <AdminContent columns={columns} rows={data?.list} />}
            </section>
        </main>
    );
};
export default userMng;
