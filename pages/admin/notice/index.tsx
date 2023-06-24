import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';
import { useGetAdminNotice } from '@/apis/admin';
import { GridColDef } from '@mui/x-data-grid';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { Button } from 'antd';
import Link from 'next/link';

const notice = () => {
    const { data, isLoading } = useGetAdminNotice();
    const myInfo = useRecoilValue(myPageInfo);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: '제목', width: 500 },
        { field: 'createAt', headerName: '날짜', width: 100 },
    ];

    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <div className="contentHeaderWrap">
                    <h1>공지사항</h1>

                    {myInfo?.role === 'SUPER_ADMIN_ROLE' && (
                        <div className="ButtonWrap">
                            <Button className="firstButton">삭제</Button>

                            <Link href="/admin/notice/write">
                                <Button type="primary">글쓰기</Button>
                            </Link>
                        </div>
                    )}
                </div>

                {data && <AdminContent columns={columns} rows={data?.list} />}
            </section>
        </main>
    );
};
export default notice;
