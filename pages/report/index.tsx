import { useState } from 'react';
import { Header } from '@components/Commons';
import { feedbackStyled, feedbackWrapStyled } from '@styles/pages/mypageFeedbackStyled';
import { BlackButton } from '@/components/Commons/Button';
import { Select, message } from 'antd';
import { postReport, useGetReportCategory } from '@/apis/report';

const report = () => {
    const [selected, setSelected] = useState<number>(1);
    const [contactText, setContactText] = useState<string>('');
    const categorys = useGetReportCategory();

    const handleSelect = (value: string) => {
        setSelected(Number(value));
    };

    const handleContact = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContactText(e.target.value);
    };

    // 건의사항 보내기
    const handleSubmit = async () => {
        console.log('ddd');
        if (!contactText.length) {
            message.error('문의 내용을 작성해주세요');
            return;
        } else {
            try {
                const data = await postReport({
                    /**
                     * [TODO] target 부분 해당 게시글이나 댓글 번호 가져오기
                     */
                    target: selected,
                    reason: selected,
                    content: contactText,
                });

                if (data && data.code === 'SUCCESS') {
                    message.success('접수 완료 되었습니다.');
                    setContactText('');
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
