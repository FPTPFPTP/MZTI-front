import { useState } from 'react';
import { Drawer, Empty, message } from 'antd';
import { Button, Tag } from '@components/Commons';
import { useGetTags, postTag } from '@apis/posts';
import { ContainerStyle, TagSearchWrapStyle, TagSearchDropdownStyle, TagSearchDropdownItemStyle } from './styled';
import { ITagModel } from '@/types/post';
import classNames from 'classnames';

interface IKeywordDrawer {
    isDrawer: boolean;
    selectKeyword: ITagModel[];
    handleSetSelectKeyword: React.Dispatch<React.SetStateAction<ITagModel[]>>;
    onClose: () => void;
}

const KeywordDrawer = (props: IKeywordDrawer) => {
    const { isDrawer, selectKeyword, handleSetSelectKeyword, onClose } = props;

    const [isDropdown, setIsDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const tags = useGetTags(searchValue);

    // 테그 생성
    const onTagAdd = async () => {
        try {
            if (!searchValue.length) {
                message.warning('추가할 키워드 이름을 입력해주세요');
                return;
            }
            const data = await postTag(searchValue);
            if (data) {
                message.success(`입력한 키워드가 추가됬어요`);
                setSearchValue('');
                return;
            }
        } catch (error) {
            console.log({ error });
        }
    };

    // 드롭다운 켜고 끄기
    const onDropdown = () => {
        setIsDropdown((isDropdown) => !isDropdown);
    };

    // 태그 선택시 선택한 태그에 추가 결정
    const onTagClick = (tag: ITagModel) => {
        handleSetSelectKeyword(
            selectKeyword.find((selectTag) => selectTag.id === tag.id) ? selectKeyword.filter((selectTag) => selectTag.id !== tag.id) : [...selectKeyword, tag],
        );
    };

    // 선택한 태그에서 태그 제거
    const onTagDelete = (id: number) => {
        handleSetSelectKeyword(selectKeyword.filter((tag) => tag.id !== id));
    };

    // 엔터
    const handleOnKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            onDropdown();
        }
    };

    return (
        <Drawer
            title="키워드"
            placement={'bottom'}
            width={'100%'}
            height={'100%'}
            onClose={onClose}
            open={isDrawer}
            extra={
                <Button buttonStyle="text" onClick={onTagAdd}>
                    추가
                </Button>
            }
        >
            <div css={ContainerStyle}>
                <ul css={TagSearchWrapStyle} onClick={onDropdown}>
                    {selectKeyword.map((tag) => (
                        <Tag
                            key={tag.id}
                            title={tag.tag}
                            onClick={() => {
                                console.log(`${tag.tag} 클릭`);
                            }}
                            onDelete={() => onTagDelete(tag.id)}
                        />
                    ))}

                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyPress={handleOnKeyPress} />
                </ul>
                {isDropdown && (
                    <ul css={TagSearchDropdownStyle}>
                        {tags && tags.length ? (
                            <>
                                {tags.map((tag) => (
                                    <li
                                        className={classNames({ active: selectKeyword.find((keyword) => keyword.id === tag.id) })}
                                        key={tag.id}
                                        css={TagSearchDropdownItemStyle}
                                        onClick={() => onTagClick(tag)}
                                    >
                                        {tag.tag}
                                    </li>
                                ))}
                            </>
                        ) : (
                            <Empty description={<span>검색된 키워드가 없어요</span>} style={{ marginTop: 16 }} />
                        )}
                    </ul>
                )}
            </div>
        </Drawer>
    );
};

export default KeywordDrawer;
