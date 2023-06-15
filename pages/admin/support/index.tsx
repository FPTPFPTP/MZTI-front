import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';

const support = () => {
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section>
                <h1>서포트센터</h1>
                <AdminContent />
            </section>
        </main>
    );
};
export default support;
