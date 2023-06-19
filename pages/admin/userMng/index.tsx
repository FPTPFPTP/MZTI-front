import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';
import { useGetAdminSupport } from '@/apis/admin';

const userMng = () => {
    const getAdminList = useGetAdminSupport();

    console.log('dd', getAdminList);
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <h1>유저관리</h1>
                <AdminContent />
            </section>
        </main>
    );
};
export default userMng;
