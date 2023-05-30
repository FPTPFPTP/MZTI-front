import { useEffect, useState } from 'react';
import { Header, Button } from '@components/Commons';
import { feedbackStyled, feedbackWrapStyled } from '@styles/pages/mypageFeedbackStyled';
import { message } from 'antd';
import DrawerMenu from '@/components/Commons/Drawer';
import BottomArrow from '@assets/icons/common/bottom_arr.svg';
import { postReport, useGetReportCategory, commentReport } from '@/apis/report';
import { useRecoilState } from 'recoil';
import { reportUserComment, reportUserWrite } from '@/recoil/atom/user';
import { useRouter } from 'next/router';

const report = () => {
    const [selected, setSelected] = useState<number>(1);
    const [contactText, setContactText] = useState<string>('');
    const categorys = useGetReportCategory();

    const [typeTitle, setTypeTitle] = useState<string>('욕설, 비방, 차별, 혐오');
    const router = useRouter();
    const [style, setStyle] = useState<string>('');
    const [reportComment, setReportCommet] = useRecoilState(reportUserComment);
    const [reportWrite, setReportWrite] = useRecoilState(reportUserWrite);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleSelect = (value: number, name: string) => {
        setSelected(Number(value));
        setTypeTitle(name);
        setIsVisible(false);

        if (name !== '욕설, 비방, 차별, 혐오') {
            setStyle('active');
        }
    };

    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            message.error('신고 내용을 작성해주세요');
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
                        message.success('신고가 정상적으로 접수되었어요.');
                        setContactText('');
                    }
                } else if (router.asPath.includes('write')) {
                    const data = await postReport({
                        target: reportWrite,
                        reason: selected,
                        content: contactText,
                    });
                    if (data && data.code === 'SUCCESS') {
                        message.success('신고가 정상적으로 접수되었어요.');
                        setContactText('');
                    }
                }
            } catch (error) {
                console.log(error);
                return;
            }
        }
    };

    const handleMoreOpen = () => {
        setIsVisible(true);
    };

    const handleMoreOpenClose = () => {
        setIsVisible(false);
        console.log('false');
    };

    return (
        <main css={feedbackWrapStyled}>
            <Header title="신고하기" isBgWhite={true} isBorderLine={true} />

            <form css={feedbackStyled}>
                <div className="type">
                    <h3>신고사유 선택</h3>

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
                            title="신고 사유 선택"
                            Children={
                                <>
                                    {categorys && categorys.length > 0 && (
                                        <ul>
                                            {categorys.map((category) => {
                                                console.log('dd', category.name);
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
                    <h3>상세 설명</h3>
                    <input type="text" placeholder="신고 사유를 작성해주세요" onChange={handleContact} value={contactText} />
                </div>
            </form>

            <div className="buttonWrap">
                <div className="buttonWrap-center">
                    <p>
                        - 특정 유저에 대한 신고가 여러 차례 누적될 경우, 해당 계정의 활동은 정지될 수 있습니다.
                        <br />- 허위 신고의 경우, 신고자의 활동이 제한될 수 있습니다.
                    </p>
                    <Button onClick={handleSubmit} type="submit" disabled={!contactText || !selected} buttonStyle={'base'}>
                        확인
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default report;
