import { useForm } from 'react-hook-form';
import { Input } from '@components/Commons';
import { FactStyle } from './styled';
import MbtiJson from '@/constants/mbti.json';
import { getMbtiColor } from '@/utils/postItem';

const Fact = () => {
    const { register, reset } = useForm();
    const mbtis = MbtiJson;

    return (
        <>
            {mbtis.map((mbti) => {
                return (
                    <div css={FactStyle} key={mbti.title}>
                        <h3 style={{ background: getMbtiColor(mbti.title) }}>{mbti.title}</h3>
                        <Input
                            inputStyle={'borderLess'}
                            placeholder={`내가 본 ${mbti.title}는 이렇더라~`}
                            handleReset={() => reset()}
                            maxLength={30}
                            {...register('title')}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default Fact;
