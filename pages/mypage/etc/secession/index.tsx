import { myPageInfo } from '@/recoil/atom/user';
import { Button, Header, Modal } from '@components/Commons';
import { SecessionStyled } from '@styles/pages/mypageEtcStyled';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useMutation } from '@tanstack/react-query';
import { removeTokenAll } from '@utils/auth';
import { openToast } from '@/utils/toast';
import { useState } from 'react';
import Link from 'next/link';
import { secessionUser } from '@/apis/user';
import { useRouter } from 'next/router';

const secession = () => {
    const myNickName = useRecoilValue(myPageInfo);
    const [checked, setChecked] = useState<boolean>(false);
    const [isSecessionModal, setIsSecessionModal] = useState<boolean>(false);

    const onChange = (e: CheckboxChangeEvent) => {
        setChecked(e.target.checked);
    };

    const router = useRouter();

    const { mutate } = useMutation(() => secessionUser());
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);

    const handleSecession = () => {
        mutate();
        removeTokenAll();
        setMyInfo(undefined);
        router.replace('/home');
        openToast({ message: '탈퇴 신청이 완료되었습니다.', duration: 3000 });
    };

    return (
        <main css={SecessionStyled}>
            <Header title="서비스 탈퇴" isBgWhite={true} isBorderLine={true} />

            <div className="wrap">
                <h3>
                    {myNickName?.nickname}님
                    <br />
                    정말 MZTI를 탈퇴하시겠어요?
                </h3>

                <ul>
                    <li>
                        탈퇴 후에는 작성한 모든 게시글이 삭제됩니다. 다만 다른 사용자의 게시글에 남긴 댓글은 유지되며, 댓글들은 탈퇴 후 편집하거나 삭제할 수
                        없습니다.
                    </li>
                    <li>
                        탈퇴 신청 후 영업일 기준 일주일 이내에 수집했던 개인정보들은 모두 파기됩니다. 파기된 회원정보는 복구가 불가능하며 MZTI 서비스를 다시
                        이용하길 원할 경우 회원가입을 새로 진행해야합니다.
                    </li>
                    <li>
                        이용과정에서 불편한 점이 있었다면, <Link href="/mypage/feedback">[마이페이지-서포트 센터]</Link>를 통해 내용을 남겨주시길 바랍니다.
                    </li>
                </ul>

                <label className="secessionAgree">
                    <Checkbox onChange={onChange}>유의사항을 모두 확인하였으며 이에 동의합니다.</Checkbox>
                </label>

                <div className="buttonWrap">
                    <Button buttonStyle="black" disabled={!checked} onClick={() => setIsSecessionModal(true)}>
                        탈퇴하기
                    </Button>
                </div>
            </div>
            <Modal
                title={'회원탈퇴'}
                isModalVisible={isSecessionModal}
                closable={false}
                footer={
                    <>
                        <button onClick={() => setIsSecessionModal(false)}>취소</button>
                        <button onClick={handleSecession}>탈퇴</button>
                    </>
                }
            >
                <p>탈퇴하시겠습니까?</p>
            </Modal>
        </main>
    );
};
export default secession;
