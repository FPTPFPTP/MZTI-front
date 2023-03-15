import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import { Header, Input } from '@components/Commons';
import { Layout } from '@styles/pages/signupStyled';
import EditSvg from '@assets/icons/edit.svg';

import dynamic from 'next/dynamic';

const EditorBox = dynamic(() => import('@components/Write/EditorBox'), {
    ssr: false,
});

const Write = () => {
    return <EditorBox contents={`'<h3> html 헤더 <span style="color:blue;">파란색</span></h3>`} />;
};

export default Write;
