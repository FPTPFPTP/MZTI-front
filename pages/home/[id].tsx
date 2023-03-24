import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Header } from '@components/Commons';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { PostStyle, PostContent } from './styled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import { useRouter } from 'next/router';
import Axios from '@utils/axios';

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await Axios.get(`/post/${id}`);
//     const posts = res.data.data.list;
//     const paths = posts.map((post: any) => ({
//         params: { id: post.id },
//     }));
//     return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//     const postId = context.params?.id || '';
//     // Get post detail via API, file, etc.
//     const post = { id: postId, content: `I'm the post with id ${postId}!` }; // Example
//     return { props: { post } };
// };

const post = ({ props }: any) => {
    const router = useRouter();
    const { id } = router.query;

    const [isBookMark, setIsBookMark] = useState<boolean>(false);

    const handleBookMark = () => [setIsBookMark((isBookMark) => !isBookMark)];

    useEffect(() => {
        console.log('props===>', props);
    }, []);
    return (
        <main>
            {id}

            {/* 헤더 */}
            <Header
                isPrevBtn={true}
                title="자유게시판"
                rightElement={
                    <div className="right">
                        <button onClick={handleBookMark}>{isBookMark ? <FillBookMarkIcon /> : <BookMarkIcon />}</button>
                    </div>
                }
            />

            <div css={PostStyle}>
                <div className="postHeaderWrap">
                    <h3 className="postTitle">지극히 개인적으로 느낀 비슷한 MBTI들 </h3>
                    <ItemHeader nickname="잼민이조종사" mbti="ENTP" level={2} profileImage={''} moreBtn={false} createAt={'2023-03-23'} />
                </div>
            </div>

            <article css={PostContent}>
                +지극히 개인적인 느낌임 일반화 ㄴㄴ 본인 MBTI는 IXXJ임 ㅋ INFP & ISFP 공통점: 순둥+무해+귀여움 조합, 평화 주의자 차이점: 인프피는 눈물이 진짜
                많고 내면에 상처도 많음 근데 잇프피는 인프피보다 더 자아가 단단해서 말 한마디 정도에 자존심에 스크래치 1도 안남 2. ENTP & ESTP 공통점:
                노빠꾸킵고잉, 규칙은 개나 줘버림, 도전정신 차이점: 엔팁과 엣팁의 가장 큰 차이점은 다상량(생각이 얼마나 많으냐의 차이). 둘 다 노빠꾸지만 엣팁은
                엔팁에 비해 깊게 연연해하지않음. 하면 하는거고 말면 마는거고 ㅋㅋ 반박시 니말이 다 맞음 불펌하면 고소함
            </article>

            <ItemFooter className="postFooter" isFeed={false} />

            <FeedComents />
        </main>
    );
};

export default post;
