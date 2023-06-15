import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';

const userMng = () => {
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section>
                <h1>유저관리</h1>
                <AdminContent />
            </section>
        </main>
    );
};
export default userMng;
