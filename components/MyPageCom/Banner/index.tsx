import { BannerStyle } from '../styled';
import BannerImg from '@assets/icons/mypage/banner.svg';

const Banner = () => {
    return (
        <section css={BannerStyle}>
            <BannerImg />
        </section>
    );
};

export default Banner;
