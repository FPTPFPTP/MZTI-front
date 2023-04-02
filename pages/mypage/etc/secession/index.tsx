import { myPageInfo } from '@/recoil/atom/user';
import { Button, Header } from '@components/Commons';
import { SecessionStyled } from '@styles/pages/mypageEtcStyled';
import { useRecoilValue } from 'recoil';
const secession = () => {
    const myNickName = useRecoilValue(myPageInfo);

    return (
        <main css={SecessionStyled}>
            <Header title="서비스 탈퇴" />

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
                    <li>이용과정에서 불편한 점이 있었다면, [마이페이지-서포스 센터]를 통해 내용을 남겨주시길 바랍니다.</li>
                </ul>

                <label className="secessionAgree">
                    <input type="checkbox" value="agree" name="agree" />
                    <p>유의사항을 모두 확인하였으며 이에 동의합니다.</p>
                </label>

                <div className="buttonWrap">
                    <Button buttonStyle="black">탈퇴하기</Button>
                </div>
            </div>
        </main>
    );
};
export default secession;
