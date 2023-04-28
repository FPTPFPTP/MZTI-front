import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ContainerStyle } from './styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IAvatar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src: string;
    alt: string;
    size?: number;
    mbti?: string;
}

/**
 *  @params src {string} 아바타 이미지 주소
 *  @params alt {string}
 *  @params size {number} 크기
 * */

const Avatar = (props: IAvatar) => {
    const { src, alt, size, mbti, ...rest } = props;

    // 이미지의 링크가 존재하지 않을 때 기본 이미지
    const handleImgError = (e: any) => {
        switch (mbti) {
            case 'ENFJ':
                return (e.target.src = '/mbtiProfile/ENFJ.png');
            case 'ENFP':
                return (e.target.src = '/mbtiProfile/ENFP.png');
            case 'ENTJ':
                return (e.target.src = '/mbtiProfile/ENTJ.png');
            case 'ENTP':
                return (e.target.src = '/mbtiProfile/ENTP.png');
            case 'ESFJ':
                return (e.target.src = '/mbtiProfile/ESFJ.png');
            case 'ESFP':
                return (e.target.src = '/mbtiProfile/ESFP.png');
            case 'ESTJ':
                return (e.target.src = '/mbtiProfile/ESTJ.png');
            case 'ESTP':
                return (e.target.src = '/mbtiProfile/ESTP.png');
            case 'INFJ':
                return (e.target.src = '/mbtiProfile/INFJ.png');
            case 'INFP':
                return (e.target.src = '/mbtiProfile/INFP.png');
            case 'INTJ':
                return (e.target.src = '/mbtiProfile/INTJ.png');
            case 'INTP':
                return (e.target.src = '/mbtiProfile/INTP.png');
            case 'ISFJ':
                return (e.target.src = '/mbtiProfile/ISFJ.png');
            case 'ISFP':
                return (e.target.src = '/mbtiProfile/ISFP.png');
            case 'ISTJ':
                return (e.target.src = '/mbtiProfile/ISTJ.png');
            case 'ISTP':
                return (e.target.src = '/mbtiProfile/ISTP.png');
            default:
                return;
        }
    };

    return (
        <div css={ContainerStyle({ size })} {...rest}>
            <LazyLoadImage src={src} alt={alt} onError={handleImgError} />
        </div>
    );
};

export default Avatar;
