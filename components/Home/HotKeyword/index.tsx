import Link from 'next/link';
import { HotKeywordStyle } from '../styled';

interface IHotKeywordItem {
    id: number;
    title: string;
    url: string;
}

interface IHotKeywordProps {
    title: string;
    more: boolean;
}

const keyword = [
    {
        id: 1,
        title: '더 글로리',
        url: '',
    },
    {
        id: 2,
        title: '깻잎논쟁',
        url: '',
    },
    {
        id: 3,
        title: '블루투스 논쟁',
        url: '',
    },
    {
        id: 4,
        title: '저스디스',
        url: '',
    },
    {
        id: 5,
        title: '과몰입',
        url: '',
    },
    {
        id: 6,
        title: '극T',
        url: '',
    },
    {
        id: 7,
        title: '권고사직',
        url: '',
    },
    {
        id: 8,
        title: '미세먼지',
        url: '',
    },
    {
        id: 9,
        title: '극T',
        url: '',
    },
];

const HotKeyword = ({ title, more }: IHotKeywordProps) => {
    return (
        <section css={HotKeywordStyle}>
            <div className="keyowordBox__content">
                <h3>{title}</h3>

                <ul className="keyword">
                    {keyword.map((item: IHotKeywordItem) => {
                        return (
                            <li key={item.id} className="hotlist">
                                <Link href={item.url}>{item.title}</Link>
                            </li>
                        );
                    })}
                    {more && (
                        <li className="more">
                            <Link href="/hot-keyword">→ 더보기</Link>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default HotKeyword;
