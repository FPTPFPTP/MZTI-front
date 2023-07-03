import Link from 'next/link';
import Image from 'next/image';
import { BannerStyle } from '../styled';

interface IBannerProps {
    isMobile: boolean;
    link: string;
    imageSrc: string;
    bigImageSrc: string;
    imageAlt: string;
}

const Banner = ({ isMobile, link, imageSrc, bigImageSrc, imageAlt }: IBannerProps) => {
    return (
        <Link css={BannerStyle(isMobile)} href={link} target="_blank" rel="noopener noreferrer">
            <Image src={isMobile ? imageSrc : bigImageSrc} alt={imageAlt} fill={true} priority={true} />
        </Link>
    );
};

export default Banner;
