import FaceBookIcon from '@assets/icons/simpleTest/svg_facebook.svg';
import KakaoIcon from '@assets/icons/simpleTest/svg_kakao.svg';
import LinkIcon from '@assets/icons/simpleTest/svg_link.svg';
import TwitterIcon from '@assets/icons/simpleTest/svg_twitter.svg';

import { LinkCopy } from '@/utils/copy';
import { openToast } from '@/utils/toast';

import { Container } from './styled';

interface ShareListProps {
    title: string;
    kakaotalk?: boolean;
    facebook?: boolean;
    twitter?: boolean;
    link?: boolean;
}

const Share = ({ title, kakaotalk = true, facebook = true, twitter = true, link = true }: ShareListProps) => {
    const url = document.URL;

    const shareFail = () => {
        openToast({ message: '공유실패', duration: 2000 });
    };
    const shareToSns = (sns: string) => {
        if (typeof window !== 'undefined') {
            if (sns === 'kakaotalk') {
                const { Kakao } = window;
                if (Kakao) {
                    if (!Kakao.isInitialized()) {
                        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_API);
                    }
                }

                Kakao.Link.sendDefault({
                    objectType: 'feed',
                    content: {
                        title,
                        imageUrl:
                            'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zgy8Hf2fMDb5iv06G5u8MCAU3xf0R6t5G8P3lmBa2DgcROz5e_QFMu6J6h4V0Ln8jjgG37La0_ELJWUIVfXWsgTjL-qw=w3360-h1702',
                        link: {
                            mobileWebUrl: url,
                            webUrl: url,
                        },
                    },
                    buttons: [
                        {
                            title: '자세히 보기',
                            link: {
                                mobileWebUrl: url,
                                webUrl: url,
                            },
                        },
                    ],
                    installTalk: true,
                    fail: shareFail,
                });
            } else if (sns === 'facebook') {
                const shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                window.open(shareUrl, '', 'width=486, height=286');
            } else if (sns === 'twitter') {
                const shareUrl = `http://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                window.open(shareUrl, 'tweetPop', 'width=486, height=286,scrollbars=yes');
            }
        }

        return false;
    };
    return (
        <ul css={Container}>
            {kakaotalk && (
                <li>
                    <a
                        id={'kakaotalk-sharing-btn'}
                        href="#none"
                        onClick={(e) => {
                            e.preventDefault();
                            shareToSns('kakaotalk');
                        }}
                    >
                        <KakaoIcon />
                    </a>
                </li>
            )}
            {facebook && (
                <li>
                    <a
                        href="#none"
                        onClick={(e) => {
                            e.preventDefault();
                            shareToSns('facebook');
                        }}
                    >
                        <FaceBookIcon />
                    </a>
                </li>
            )}
            {twitter && (
                <li>
                    <a
                        href="#none"
                        onClick={(e) => {
                            e.preventDefault();
                            shareToSns('twitter');
                        }}
                    >
                        <TwitterIcon />
                    </a>
                </li>
            )}
            {link && (
                <li>
                    <a
                        href="#none"
                        onClick={(e) => {
                            e.preventDefault();
                            LinkCopy();
                        }}
                    >
                        <LinkIcon />
                    </a>
                </li>
            )}
        </ul>
    );
};

export default Share;
