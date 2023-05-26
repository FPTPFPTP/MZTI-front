import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { TextAreaStyle, TextAreaWrapStyle } from './styled';

interface ITextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const TextArea = (props: ITextAreaProps, ref: any) => {
    return (
        <div css={TextAreaWrapStyle}>
            <textarea css={TextAreaStyle} ref={ref} {...props} />
        </div>
    );
};

export default React.forwardRef(TextArea);
