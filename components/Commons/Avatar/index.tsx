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
                return (e.target.src = '/mbtiProfile/enfj.png');
            case 'ENFP':
                return (e.target.src = '/mbtiProfile/enfp.png');
            case 'ENTJ':
                return (e.target.src = '/mbtiProfile/entj.png');
            case 'ENTP':
                return (e.target.src = '/mbtiProfile/entp.png');
            case 'ESFJ':
                return (e.target.src = '/mbtiProfile/esfj.png');
            case 'ESFP':
                return (e.target.src = '/mbtiProfile/esfp.png');
            case 'ESTJ':
                return (e.target.src = '/mbtiProfile/estj.png');
            case 'ESTP':
                return (e.target.src = '/mbtiProfile/estp.png');
            case 'INFJ':
                return (e.target.src = '/mbtiProfile/infj.png');
            case 'INFP':
                return (e.target.src = '/mbtiProfile/infp.png');
            case 'INTJ':
                return (e.target.src = '/mbtiProfile/intj.png');
            case 'INTP':
                return (e.target.src = '/mbtiProfile/intp.png');
            case 'ISFJ':
                return (e.target.src = '/mbtiProfile/isfj.png');
            case 'ISFP':
                return (e.target.src = '/mbtiProfile/isfp.png');
            case 'ISTJ':
                return (e.target.src = '/mbtiProfile/istj.png');
            case 'ISTP':
                return (e.target.src = '/mbtiProfile/istp.png');
            default:
                return null;
        }
    };

    return (
        <div css={ContainerStyle({ size })} {...rest}>
            <LazyLoadImage src={src} alt={alt} onError={handleImgError} />
        </div>
    );
};

export default Avatar;
