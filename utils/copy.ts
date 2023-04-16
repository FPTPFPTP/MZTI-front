import { openToast } from '@/utils/toast';

// 링크복사하기
export const LinkCopy = (): void => {
    let url = '';
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    openToast({ message: '해당 게시글의 링크가 복사되었어요', duration: 2000 });
};
