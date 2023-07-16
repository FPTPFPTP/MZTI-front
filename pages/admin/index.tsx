import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { useEffect, useState } from 'react';
import { Modal } from '@components/Commons';
import { useRouter } from 'next/router';
import { ModalStyle } from '@/components/Commons/Modal/styled';

const admin = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const myInfo = useRecoilValue(myPageInfo);
    const router = useRouter();

    useEffect(() => {
        if (myInfo?.role === 'SUPER_ADMIN_ROLE') {
            setIsModal(false);
        } else if (myInfo?.role === 'ADMIN_ROLE') {
            setIsModal(false);
        } else {
            setIsModal(true);
        }
    }, [myInfo]);

    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="adminMainWrap">
                <h3>
                    안녕하세요 🙂 <br />
                    관리자 <strong>{myInfo?.nickname}</strong>님! <br />
                    오늘도 열심히 관리해주세요.
                </h3>
            </section>

            {isModal && (
                <Modal title="🚫 접근 금지 🚫" open={isModal} onCancel={() => setIsModal(false)} footer={null} isModalVisible={false} centered={true}>
                    <div css={ModalStyle}>
                        <p>관리자 외에는 접근할 수 없습니다.</p>
                        <button onClick={() => router.push(`/home`)} className="button">
                            확인
                        </button>
                    </div>
                </Modal>
            )}
        </main>
    );
};
export default admin;
