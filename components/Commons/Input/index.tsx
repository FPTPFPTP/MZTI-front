import React, { DetailedHTMLProps, InputHTMLAttributes, useEffect } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { InputWrap, InputStyle } from './styled';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (inputProps: InputProps, ref: any) => {
    const { ...props } = inputProps;

    return (
        <div css={InputWrap}>
            <input css={InputStyle} ref={ref} {...props} />
            <CloseCircleOutlined />
        </div>
    );
};

export default React.forwardRef(Input);
