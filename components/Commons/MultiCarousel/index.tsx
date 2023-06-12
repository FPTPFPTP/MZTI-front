import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MultiCarouselStyle } from './styled';

interface IMultiCarouselProps {
    children: React.ReactNode;
}

const MultiCarousel = (props: IMultiCarouselProps) => {
    const { children } = props;

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024,
            },
            items: 1,
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0,
            },
            items: 1,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464,
            },
            items: 1,
        },
    };

    return (
        <Carousel
            css={MultiCarouselStyle}
            responsive={responsive}
            additionalTransfrom={0}
            autoPlaySpeed={5000}
            arrows={false}
            autoPlay={true}
            centerMode={false}
            infinite={true}
            showDots={true}
        >
            {children}
        </Carousel>
    );
};

export default MultiCarousel;
