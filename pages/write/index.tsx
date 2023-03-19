import React from 'react';

import dynamic from 'next/dynamic';

const EditorBox = dynamic(() => import('@components/Write/EditorBox'), {
    ssr: false,
});

const Write = () => {
    return <EditorBox contents={`'<h3> html 헤더 <span style="color:blue;">파란색</span></h3>`} />;
};

export default Write;
