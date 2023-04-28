import { useGetKeyword } from '@/apis/keyword';
import Link from 'next/link';
import { HotKeywordStyle } from '../styled';
import classNames from 'classnames';

interface IHotKeywordItem {
    id: number;
    title: string;
    url: string;
}

interface IHotKeywordProps {
    title: string;
    more: boolean;
    content?: string;
}

const HotKeyword = ({ title, more, content }: IHotKeywordProps) => {
    const keyword = useGetKeyword();

    return (
        <section css={HotKeywordStyle}>
            <div className="keyowordBox__content">
                <h3>{title}</h3>

                <ul className="keyword">
                    {keyword &&
                        keyword.map((item: string, index: number) => {
                            return (
                                <li key={index} className={classNames(content === item && 'active')}>
                                    <Link href={`hot-keyword/${item}`}>{item}</Link>
                                </li>
                            );
                        })}

                    {/* 키워드 8개 이상이면 더보기 버튼 보이도록 */}
                    {keyword && keyword.length > 8 && (
                        <>
                            {more && (
                                <li className="more">
                                    <Link href="/hot-keyword">→ 더보기</Link>
                                </li>
                            )}
                        </>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default HotKeyword;
