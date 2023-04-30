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
