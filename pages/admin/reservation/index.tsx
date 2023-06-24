import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';

// 추후에 할 기능
const reservation = () => {
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <h1>예약발행</h1>
                {/* <AdminContent /> */}
            </section>
        </main>
    );
};
export default reservation;
