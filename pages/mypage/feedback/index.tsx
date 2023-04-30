import { useState } from 'react';
import { Header, Button } from '@components/Commons';
import { feedbackStyled, feedbackWrapStyled } from '@styles/pages/mypageFeedbackStyled';
import { postSupport, useGetSupportCategory } from '@/apis/support';
import { Select, message } from 'antd';
import { openToast } from '@/utils/toast';
import BottomArrow from '@assets/icons/common/bottom_arr.svg';
import DrawerMenu from '@/components/Commons/Drawer';

const feedback = () => {
    const [selected, setSelected] = useState<number>(0);
    const [typeTitle, setTypeTitle] = useState<string>('문의 유형 선택');
    const [style, setStyle] = useState<string>('');
    const [contactText, setContactText] = useState<string>('');
    const categorys = useGetSupportCategory();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleMoreOpen = () => {
        setIsVisible(true);
    };

    const handleMoreOpenClose = () => {
        setIsVisible(false);
        console.log('false');
    };

    const handleSelect = (id: number, name: string) => {
        setSelected(Number(id));
        setTypeTitle(name);

        if (name !== '문의 유형 선택') {
            setStyle('active');
        }
    };

    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    openToast({ message: '문의사항이 정상적으로 전달되었어요', duration: 2000 });
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

                    <button type="button" className="typeSelect" onClick={handleMoreOpen}>
                        <p className={style}>{typeTitle}</p>
                        <span>
                            <BottomArrow />
                        </span>
                    </button>

                    {isVisible && (
                        <DrawerMenu
                            close={true}
                            onClose={() => setIsVisible(false)}
                            onClick={handleMoreOpenClose}
                            isVisible={isVisible}
                            title="문의 유형 선택"
                            Children={
                                <>
                                    {categorys && categorys.length > 0 && (
                                        <ul>
                                            {categorys.map((category) => {
                                                return (
                                                    <li key={category.id} className="optionList">
                                                        <button onClick={() => handleSelect(category.id, category.name)} type="button">
                                                            {category.name}
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </>
                            }
                        />
                    )}
                </div>

                <div className="content">
                    <h3>문의 내용</h3>
                    <input type="text" placeholder="문의 내용 직접 입력" onChange={handleContact} value={contactText} />
                </div>
            </form>

            <div className="buttonWrap">
                <div className="buttonWrap-center">
                    <p>서비스의 오류 제보, 홍보 의심 사용자 등 운영진에게 전달하고 싶은 내용을 자유롭게 작성해주세요. </p>
                    <Button buttonStyle={'base'} type="submit" disabled={!contactText || selected === 0} onClick={handleSubmit}>
                        문의사항 보내기
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default feedback;
