import React from 'react';
import xss from 'xss';
import { Header } from '@components/Commons';
import { Client } from '@notionhq/client/build/src';

interface IAgreementProps {
    content?: string;
}

const Agreement = ({ content }: IAgreementProps) => {
    return (
        <>
            <Header title={'MZTI 서비스 이용약관'} isBgWhite={true} />
            {content && (
                <div
                    className="itemContent__content"
                    dangerouslySetInnerHTML={{
                        __html: xss(content),
                    }}
                />
            )}
        </>
    );
};

export default Agreement;

export async function getStaticProps() {
    try {
        const notion = new Client({
            auth: process.env.NOTION_API_KEY,
        });
        const getDatabase = async (databaseId: string) => {
            const response = await notion.databases.query({
                database_id: databaseId,
            });

            return response;
        };
        const databaseId = 'b3a1487c30d84363964956e944a23c79';

        const notionDatabase = await getDatabase(databaseId);

        const agreementContent = notionDatabase.results.reduce((result, cur: any) => {
            return (
                '\n' +
                cur.properties.title.title.map((title: any) => title.plain_text).join('') +
                '\n' +
                cur.properties.content.rich_text.map((content: any) => content.plain_text).join('') +
                result
            );
        }, '');
        return {
            props: {
                content: agreementContent,
            },
        };
    } catch (error) {
        return {
            props: {},
        };
    }
}
