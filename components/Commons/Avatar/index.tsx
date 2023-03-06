import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ContainerStyle } from './styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const USER_PROFILE_IMAGE_SRC = '/default_profile.png';

interface IAvatar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src: string;
    alt: string;
    size: number;
}

/**
 *  @params src {string} 아바타 이미지 주소
 *  @params alt {string}
 *  @params size {number} 크기
 * */

const Avatar = (props: IAvatar) => {
    const { src, alt, size, ...rest } = props;

    // 이미지의 링크가 존재하지 않을 때 기본 이미지
    const handleImgError = (e: any) => {
        e.target.src = USER_PROFILE_IMAGE_SRC;
    };

    return (
        <div css={ContainerStyle({ size })} {...rest}>
            <LazyLoadImage src={src} alt={alt} width={size} height={size} onError={handleImgError} />
        </div>
    );
};

export default Avatar;
