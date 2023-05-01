import Link from 'next/link';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { hotKeywordsState } from '@/recoil/atom/hotKeyword';
import { useGetKeyword } from '@/apis/keyword';
import { HotKeywordStyle } from '../styled';
import ArrowRightIcon from '@assets/icons/arrow_right.svg';

interface IHotKeywordProps {
    title: string;
    more: boolean;
}

const HotKeyword = ({ title, more }: IHotKeywordProps) => {
    const [hotKeyword, setHotKeyword] = useRecoilState(hotKeywordsState);
    const keywords = useGetKeyword(0);

    const onClickKeyword = (keyword: string) => {
        setHotKeyword(hotKeyword === keyword ? '' : keyword);
    };

    return (
        <section css={HotKeywordStyle}>
            <div className="title">
                <h3>{title}</h3>
                {more && (
                    <Link href="/hot-keyword">
                        <ArrowRightIcon />
                    </Link>
                )}
            </div>

            <ul className="keyword">
                {keywords &&
                    keywords.map((item: string, index: number) => {
                        return (
                            <li key={index} className={classNames(hotKeyword === item && 'active')}>
                                <Link href={`/hot-keyword`} onClick={() => onClickKeyword(item)}>
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
};

export default HotKeyword;
