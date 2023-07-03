import { NotionRenderer } from 'react-notion';

import 'react-notion/src/styles.css';

import { Header } from '@components/Commons';
import { PrivacyStyled } from '@styles/pages/mypagePrivacy';

interface IPrivacyProps {
    content?: any;
}

const Privacy = ({ content }: IPrivacyProps) => {
    return (
        <>
            <Header title={'MZTI 개인정보처리방침'} isBgWhite={true} isBorderLine={true} />
            <div css={PrivacyStyled}>{Object.keys(content).length ? <NotionRenderer blockMap={content} fullPage={true} hideHeader={true} /> : null}</div>
        </>
    );
};

export default Privacy;

export async function getServerSideProps() {
    try {
        const notionBlockMap = await (await fetch('https://notion-api.splitbee.io/v1/page/c7ad5fef148c4f94878921c70cf21263')).json();
        return {
            props: {
                content: notionBlockMap,
            },
        };
    } catch (error) {
        return {
            props: {},
        };
    }
}
