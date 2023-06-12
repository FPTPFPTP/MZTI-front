import { useState } from 'react';
import Image from 'next/image';

import { CustomImageWrapStyle } from './styled';

interface ICustomImage {
    src: string;
    alt: string;
}

const CustomImage = ({ src, alt }: ICustomImage) => {
    const [imgSize, setImgSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });
    return (
        <div css={CustomImageWrapStyle}>
            <div className={'image'} style={{ width: imgSize.width, height: imgSize.height }}>
                <Image src={src} alt={alt} fill onLoadingComplete={(img) => setImgSize({ width: img.naturalWidth, height: img.naturalHeight })} />
            </div>
        </div>
    );
};

export default CustomImage;
