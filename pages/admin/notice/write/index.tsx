import { useState } from 'react';
import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import { postAdminNotice } from '@/apis/admin';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

const notice_write = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const router = useRouter();
    const { mutate } = useMutation(() => postAdminNotice({ title, content }));

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        console.log('ddd');
        mutate();
        setTitle('');
        setContent('');
    };

    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <div className="contentHeaderWrap">
                    <h1>공지사항 작성</h1>

                    <div className="ButtonWrap">
                        <Button className="firstButton" onClick={() => router.back()}>
                            취소
                        </Button>
                        <Button onClick={(e: any) => handleSubmit(e)} type="primary">
                            반영하기
                        </Button>
                    </div>
                </div>

                <form className="noticeForm">
                    <input type="text" placeholder="제목을 적어주세요" value={title} onChange={handleTitleChange} required />
                    <textarea placeholder="내용물을 적어주세요" value={content} onChange={handleContentChange} required />
                </form>
            </section>
        </main>
    );
};
export default notice_write;
