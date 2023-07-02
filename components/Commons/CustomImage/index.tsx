import { useState } from 'react';
import Image from 'next/image';

import SearchCloseIcon from '@assets/icons/search/searchClose.svg';

import { CustomImageWrapStyle } from './styled';

interface ICustomImage {
    src: string;
    alt: string;
    isSelect?: boolean;
    onClick?: () => void;
    onDelete?: () => void;
}

const CustomImage = ({ src, alt, isSelect, onClick, onDelete }: ICustomImage) => {
    const [imgSize, setImgSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    return (
        <div css={CustomImageWrapStyle(isSelect)} onClick={onClick} style={{ height: imgSize.height }}>
            {onDelete && (
                <button className={'image_delete'}>
                    <SearchCloseIcon onClick={onDelete} style={{ width: 20 }} />
                </button>
            )}
            <div className={'image'}>
                <Image src={src} alt={alt} fill onLoadingComplete={(img) => setImgSize({ width: img.naturalWidth, height: img.naturalHeight })} />
            </div>
        </div>
    );
};

export default CustomImage;
