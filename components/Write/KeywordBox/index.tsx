import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Tag } from '@components/Commons';
import { openToast } from '@/utils/toast';

import { KeywordWrapStyle } from '../styled';
import { ITagModel } from '@/types/post';

interface IKeywordBox {
    keywords: ITagModel[];
    onKeywordSubmit: (value: string) => void;
    onKeywordDelete: (id: number) => void;
}

const KeywordBox = ({ keywords, onKeywordSubmit, onKeywordDelete }: IKeywordBox) => {
    const [isKeywordInput, setIsKeywordInput] = useState<boolean>(false);
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = ({ keywordValue }: { keywordValue?: string }) => {
        if (keywordValue) {
            if (!keywordValue.length) {
                openToast({ message: '키워드는 최소 1글자 이상 입력해주세요' });
            } else if (keywordValue.length > 10) {
                openToast({ message: '키워드는 최대 10자까지 입력할 수 있어요' });
            } else {
                onKeywordSubmit(keywordValue);
                setValue('keywordValue', '');
                setIsKeywordInput(false);
            }
        }
    };

    return (
        <div css={KeywordWrapStyle}>
            <p># 키워드</p>
            <ul>
                {keywords.map((keyword) => (
                    <Tag
                        key={keyword.id}
                        title={keyword.tag}
                        onClick={() => {
                            console.log(`${keyword.tag} 클릭`);
                        }}
                        onDelete={() => onKeywordDelete(keyword.id)}
                    />
                ))}
                {isKeywordInput ? (
                    <li className="keyword_input">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder={'키워드 입력'} autoFocus maxLength={10} {...register('keywordValue')} />
                            <button type="submit" />
                        </form>
                    </li>
                ) : (
                    <li className="keyword_add_btn">
                        <button onClick={() => setIsKeywordInput(true)}>+ 추가하기</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default KeywordBox;
