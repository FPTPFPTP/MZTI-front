import { NotionRenderer } from 'react-notion';

import 'react-notion/src/styles.css';

import { Header } from '@components/Commons';
import { PrivacyStyled } from '@styles/pages/mypagePrivacy';

interface IAgreementProps {
    content?: any;
}

const Agreement = ({ content }: IAgreementProps) => {
    return (
        <>
            <Header title={'MZTI 서비스 이용약관'} isBgWhite={true} isBorderLine={true} />
            <div css={PrivacyStyled}>{Object.keys(content).length ? <NotionRenderer blockMap={content} fullPage={true} hideHeader={true} /> : null}</div>
        </>
    );
};

export default Agreement;

export async function getServerSideProps() {
    try {
        const notionBlockMap = await (await fetch('https://notion-api.splitbee.io/v1/page/cff7f02aed7d4513a533967f3fa3e64f')).json();
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
