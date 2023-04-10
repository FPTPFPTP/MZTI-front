import { useEffect, useState } from 'react';
import { Header } from '@components/Commons';
import { feedbackStyled, feedbackWrapStyled } from '@styles/pages/mypageFeedbackStyled';
import { BlackButton } from '@/components/Commons/Button';
import { Select, message } from 'antd';
import { postReport, useGetReportCategory, commentReport } from '@/apis/report';
import { useRecoilState } from 'recoil';
import { reportUserComment, reportUserWrite } from '@/recoil/atom/user';
import { useRouter } from 'next/router';

const report = () => {
    const [selected, setSelected] = useState<number>(1);
    const [contactText, setContactText] = useState<string>('');
    const categorys = useGetReportCategory();
    const router = useRouter();
    const [reportComment, setReportCommet] = useRecoilState(reportUserComment);
    const [reportWrite, setReportWrite] = useRecoilState(reportUserWrite);

    const handleSelect = (value: string) => {
        setSelected(Number(value));
    };

    const handleContact = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContactText(e.target.value);
    };

    useEffect(() => {
        const currentCommentId = router.asPath.split('comment-')[1];
        const currentWriteId = router.asPath.split('write-')[1];

        if (window.location.pathname.includes('comment')) {
            setReportCommet(Number(currentCommentId));
        } else if (window.location.pathname.includes('write')) {
            setReportWrite(Number(currentWriteId));
        }
    }, [reportComment, reportWrite]);

    // 건의사항 보내기
    const handleSubmit = async () => {
        if (!contactText.length) {
            message.error('문의 내용을 작성해주세요');
            return;
        } else {
            try {
                if (router.asPath.includes('comment')) {
                    const data = await commentReport({
                        target: reportComment,
                        reason: selected,
                        content: contactText,
                    });
                    if (data && data.code === 'SUCCESS') {
                        message.success('댓글 신고 접수 완료 되었습니다.');
                        setContactText('');
                    }
                } else if (router.asPath.includes('write')) {
                    const data = await postReport({
                        target: reportWrite,
                        reason: selected,
                        content: contactText,
                    });
                    if (data && data.code === 'SUCCESS') {
                        message.success('게시글 신고 접수 완료 되었습니다.');
                        setContactText('');
                    }
                }
            } catch (error) {
                console.log(error);
                return;
            }
        }
    };

    return (
        <main css={feedbackWrapStyled}>
            <Header title="신고하기" />
            <form css={feedbackStyled}>
                <div className="type">
                    <h3>신고사유 선택</h3>
                    {categorys && categorys.length > 0 && (
                        <Select defaultValue={categorys[0].name} style={{ width: 170 }} onChange={handleSelect}>
                            {categorys.map((category) => (
                                <Select.Option key={category.id} value={category.id} label={category.name} className="selectOption">
                                    {category.name}
                                </Select.Option>
                            ))}
                        </Select>
                    )}
                </div>

                <div className="content">
                    <h3>상세 설명</h3>
                    <textarea placeholder="신고 사유를 작성해주세요" onChange={handleContact} name="contact_content" value={contactText} />
                </div>

                <span>허위신고의 경우, 신고자의 활동이 제한될 수 있어요</span>
            </form>

            <div className="buttonWrap">
                <BlackButton onClick={handleSubmit} type="submit" disabled={!contactText}>
                    확인
                </BlackButton>
            </div>
        </main>
    );
};

export default report;
