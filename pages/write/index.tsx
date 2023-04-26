import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { openToast } from '@/utils/toast';

const EditorBox = dynamic(() => import('@components/Write/EditorBox'), {
    ssr: false,
});

const Write = () => {
    const myInfo = useRecoilValue(myPageInfo);

    const router = useRouter();

    useEffect(() => {
        // 비회원일때
        if (!myInfo) {
            router.back();
            openToast({ message: '글쓰기는 로그인 후 진행해주세요' });
        }
    }, [myInfo]);

    return (
        <>
            <EditorBox />
        </>
    );
};

export default Write;
