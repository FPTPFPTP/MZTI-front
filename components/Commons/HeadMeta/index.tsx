import Head from 'next/head';

interface IHeadMeta {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
}

const HeadMeta = ({ title, description, url, image }: IHeadMeta) => {
    const TITLE = title ? `MZTI | ${title}` : 'MZTI | MZ세대들의 MBTI 과몰입 커뮤니티';
    const DESCRIPTION = description || 'MBTI 뇌절 콘텐츠, MBTI 궁합, MBTI 짤 등';
    const URL = 'https://www.mzti.kr' + url;
    const IMAGE =
        image ||
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zgy8Hf2fMDb5iv06G5u8MCAU3xf0R6t5G8P3lmBa2DgcROz5e_QFMu6J6h4V0Ln8jjgG37La0_ELJWUIVfXWsgTjL-qw=w3360-h1702';

    return (
        <Head>
            <title>{TITLE}</title>
            <meta name="description" content={DESCRIPTION} />
            <meta name="viewport" content="initial-scale=1, width=device-width" />

            <meta property="og:title" content={TITLE} />
            <meta property="og:url" content={URL} />
            <meta property="og:image" content={IMAGE} />
            <meta property="og:article:author" content="MZTI" />

            {/* for twitter */}
            <meta name="twitter:title" content={TITLE} />
            <meta name="twitter:description" content={DESCRIPTION} />
            <meta name="twitter:image" content={IMAGE} />
        </Head>
    );
};

export default HeadMeta;
