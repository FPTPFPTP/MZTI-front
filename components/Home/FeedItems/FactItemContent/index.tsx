import { ItemContentStyle } from '../../styled';
import { getMbtiColor } from '@/utils/postItem';

interface IFactItemContentProps {
    id: number;
    mbti: string;
    title: string;
}

const FactItemContent = ({ id, mbti, title }: IFactItemContentProps) => {
    return (
        <section css={ItemContentStyle} key={id}>
            <p className="factCon">
                <i style={{ background: getMbtiColor(mbti) }} className="mbti">
                    {mbti}
                </i>
                가 느낀 16가지 MBTI 성격유형별 특징
            </p>
            <h5 className="factTitle">{title}</h5>
        </section>
    );
};

export default FactItemContent;
