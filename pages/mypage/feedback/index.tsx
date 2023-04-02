import { useState } from 'react';
import { Header } from '@components/Commons';
import { feedbackStyled, feedbackWrapStyled } from '@styles/pages/mypageFeedbackStyled';
import { BlackButton } from '@/components/Commons/Button';
import { postSupport, useGetSupportCategory } from '@/apis/support';
import { Select, message } from 'antd';

const feedback = () => {
    const [selected, setSelected] = useState<number>(1);
    const [contactText, setContactText] = useState<string>('');
    const categorys = useGetSupportCategory();

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
                const data = await postSupport({
                    type: selected,
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
            <Header title="서포트 센터" />
            <form css={feedbackStyled}>
                <div className="type">
                    <h3>문의 유형</h3>
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
                    <h3>문의 내용</h3>
                    <textarea placeholder="건의 사항을 작성해주세요" onChange={handleContact} name="contact_content" value={contactText} />
                </div>

                <span>오류 제보, 홍보 의심 유저 제보 등 운영진에게 전달하고싶은 내용을 자유롭게 작성해주세요</span>
            </form>

            <div className="buttonWrap">
                <BlackButton onClick={handleSubmit} type="submit">
                    건의사항 보내기
                </BlackButton>
            </div>
        </main>
    );
};

export default feedback;
