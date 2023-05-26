import Link from 'next/link';
import Image from 'next/image';
import { BannerStyle } from '../styled';

interface IBannerProps {
    link: string;
    imageSrc: string;
    imageAlt: string;
}

const Banner = (props: IBannerProps) => {
    const { link, imageSrc, imageAlt } = props;

    return (
        <Link css={BannerStyle} href={link} target="_blank" rel="noopener noreferrer">
            <Image src={imageSrc} alt={imageAlt} fill={true} priority={true} />
        </Link>
    );
};

export default Banner;
