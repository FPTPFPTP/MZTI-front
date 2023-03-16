import { useState } from 'react';
import { Header } from '@components/Commons';
import { feedbackStyled } from './styled';

const feedback = () => {
    const [selected, setSelected] = useState<string>('contact');
    const [contactText, setContactText] = useState<string>('');

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };
    const handleContact = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContactText(e.target.value);
    };
    const handleSubmit = () => {
        console.log('백엔드완성되면 작업할 예정');
    };
    return (
        <>
            <Header title="피드백 페이지" />
            <form css={feedbackStyled}>
                <div className="type">
                    <h3>문의 유형</h3>
                    <select name="feedbackName" onChange={handleSelect} value={selected}>
                        <option value="contact">1:1 문의</option>
                        <option value="Suggest">건의 사항</option>
                        <option value="etc">기타</option>
                    </select>
                </div>

                <div className="content">
                    <h3>문의 내용</h3>
                    <textarea placeholder="건의 사항을 작성해주세요" onChange={handleContact} name="contact_content" value={contactText} />
                </div>

                <span>오류 제보, 홍보 의심 유저 제보 등 운영진에게 전달하고싶은 내용을 자유롭게 작성해주세요</span>

                <div className="buttonWrap">
                    <button type="submit" onSubmit={handleSubmit}>
                        건의사항 보내기
                    </button>
                </div>
            </form>
        </>
    );
};

export default feedback;
