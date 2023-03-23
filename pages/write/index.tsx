import React from 'react';
import dynamic from 'next/dynamic';

const EditorBox = dynamic(() => import('@components/Write/EditorBox'), {
    ssr: false,
});

const Write = () => {
    return (
        <>
            <EditorBox contents={``} />
        </>
    );
};

export default Write;
