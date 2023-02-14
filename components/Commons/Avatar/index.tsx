import Image from 'next/image';
import { Container } from './styled';
const USER_PROFILE_IMAGE_SRC = '/default_profile.png';

const Avatar = ({ src, alt, size }: { src?: string; alt: string; size: number }) => {
    return (
        <div css={Container({ size })}>
            <Image src={src || USER_PROFILE_IMAGE_SRC} alt={alt} width={size} height={size} />
        </div>
    );
};

export default Avatar;
