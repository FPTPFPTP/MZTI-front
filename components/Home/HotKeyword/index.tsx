import { useGetKeyword } from '@/apis/keyword';
import Link from 'next/link';
import { HotKeywordStyle } from '../styled';
import classNames from 'classnames';
import ArrowRightIcon from '@assets/icons/arrow_right.svg';

interface IHotKeywordProps {
    title: string;
    more: boolean;
    content?: string;
}

const HotKeyword = ({ title, more, content }: IHotKeywordProps) => {
    const keyword = useGetKeyword(0);

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
                {keyword &&
                    keyword.map((item: string, index: number) => {
                        return (
                            <li key={index} className={classNames(content === item && 'active')}>
                                <Link href={`hot-keyword/${item}`}>{item}</Link>
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
};

export default HotKeyword;
