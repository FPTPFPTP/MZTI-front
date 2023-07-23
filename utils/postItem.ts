import colors from '@/styles/color';
import regExp, { HTTP_LINK_URL_REG } from '@/utils/regExp';
/**
 * 게시글 썸네일 가져오기
 * @param content {string}
 * @returns
 */
export const getThumbnail = (content: string) => {
    let thumbnail;
    const youtubeUrl = content.match(/<iframe.*<\/iframe>/g);
    // 유튜브와 이미지가 같이있을때는 유튜브 썸네일만 가져온다
    if (youtubeUrl && youtubeUrl.length) {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = content;
        const iframe = tempElement.getElementsByTagName('iframe').item(0);

        const src = (iframe as HTMLIFrameElement).getAttribute('src');

        const regex = /(?:\/|%3D|v=)([0-9A-Za-z_-]{11}).*/;
        const videoIdMatch = src?.match(regex);

        tempElement.remove();
        if (videoIdMatch && videoIdMatch.length) {
            thumbnail = `https://i1.ytimg.com/vi/${videoIdMatch[1]}/mqdefault.jpg`;
        }
    } else {
        // 이미지 있을 때 첫번째 이미지만 가져오기
        const list = content.match(/(<(img[^>]+)>)/g);
        if (list && list.length) {
            const myRegex = /<img[^>]+src="(https:\/\/[^">]+)"/g;

            const result = myRegex.exec(list[0]);
            if (result !== null) {
                thumbnail = result[1];
            }
        }
    }
    return thumbnail;
};

export const getStripIframeTags = (content: string) => {
    const regex = /<iframe.*<\/iframe>/g;
    content = content.replace(regex, '');

    return content;
};

export const setConvertToHTML = (contents: string, imgSrcs?: string[], youtubeUrl?: string[]) => {
    let html = '';

    html += '<div>';

    const paragraphs = contents.split('\n');
    for (const paragraph of paragraphs) {
        if (regExp(HTTP_LINK_URL_REG, paragraph)) {
            html += `<a href=${paragraph} target="_blank" rel="noreferrer">` + paragraph + '</a>';
        } else {
            html += '<p>' + paragraph + '</p>';
        }
    }

    if (imgSrcs) {
        for (const src of imgSrcs) {
            html += '<img src="' + src + '">';
        }
    }

    if (youtubeUrl) {
        for (const url of youtubeUrl) {
            const videoId = getYouTubeVideoId(url);
            html += `<div><iframe width="300" height="300" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
        }
    }

    html += '</div>';

    return html;
};

export const setConvertToPost = (html: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const paragraphs = tempDiv.querySelectorAll('p');
    let content = '';
    for (const paragraph of Array.from(paragraphs)) {
        content += paragraph.textContent + '\n';
    }

    const images = tempDiv.querySelectorAll('img');
    const imgSrcs: string[] = [];
    for (const image of Array.from(images)) {
        imgSrcs.push(image.getAttribute('src') || '');
    }

    return {
        content: content.trim(),
        imgSrcs: imgSrcs,
    };
};

/**
 * 레벨 옆에 따라다니는 용
 * @param mbti
 * @returns
 */
export const getMbtiColor = (mbti: string) => {
    switch (mbti) {
        case 'INTJ':
        case 'INTP':
        case 'ENTJ':
        case 'ENTP': {
            return colors.MBTI_COLOR_04;
        }
        case 'INFJ':
        case 'INFP':
        case 'ENFJ':
        case 'ENFP': {
            return colors.O_MBTI_COLOR_02;
        }
        case 'ISTJ':
        case 'ISFJ':
        case 'ESTJ':
        case 'ESFJ': {
            return colors.O_MBTI_COLOR_03;
        }
        case 'ISTP':
        case 'ISFP':
        case 'ESTP':
        case 'ESFP': {
            return colors.O_MBTI_COLOR_01;
        }
        default: {
            return colors.GRAY_STRONG;
        }
    }
};

const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|shorts\/)?([^#\&\?]*).*/i);
    return match && match[1];
};
