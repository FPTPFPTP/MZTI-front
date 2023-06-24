import { Header } from '@components/Commons';
import { timeForToday } from '@/utils/time';
import { NoticeViewStyle, NoticeShare } from '@styles/pages/mypageStyled';
import ShareIcon from '@assets/icons/comment/share.svg';
import { useEffect, useState } from 'react';
import { getDetailNotice } from '@/apis/notice';
import { useRouter } from 'next/router';
import { LinkCopy } from '@/utils/copy';

interface noticeDetailProps {
    id: number;
    title: string;
    createAt: string;
    content: string;
}

const noticeDetail = () => {
    const [contents, setContents] = useState<noticeDetailProps>();
    const router = useRouter();
    const noticeId = router.asPath.split('notice/')[1];

    useEffect(() => {
        getDetailNotice(Number(noticeId)).then((res) => {
            setContents(res);
        });
    }, []);

    return (
        <>
            <Header title={'공지사항'} isBgWhite={true} />
            <div css={NoticeViewStyle}>
                <div className="header">
                    <h3>{contents?.title}</h3>
                    <p>{contents && timeForToday(contents.createAt)}</p>
                </div>
                <article>{contents?.content}</article>
            </div>
        </>
    );
};

export default noticeDetail;
