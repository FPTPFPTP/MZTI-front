import { Button, Header } from '@components/Commons';
import { SecessionStyled } from '../styled';
const secession = () => {
    return (
        <main css={SecessionStyled}>
            <Header title="서비스 탈퇴" />

            <h3>
                님
                <br />
                정말 MZTI를 탈퇴하시겠어요?
            </h3>

            <ul>
                <li>지금 탈퇴하면 ---</li>
                <li>지금 탈퇴하면 어쩌고</li>
                <li>지금 탈퇴하면 저쩌고</li>
            </ul>

            <Button buttonStyle="black">건의사항 보내기</Button>
        </main>
    );
};
export default secession;
