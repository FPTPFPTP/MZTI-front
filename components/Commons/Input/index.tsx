import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { InputWrap, InputStyle, BorderlessWrap } from './styled';

const InputStyleUnionList = ['base', 'borderLess'] as const;

type TInputStyleUnion = (typeof InputStyleUnionList)[number];

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = (inputProps: TInputProps & { inputStyle?: TInputStyleUnion }, ref: any) => {
    const { inputStyle = 'base', ...rest } = inputProps;

    BaseInput.displayName = 'BaseInput';
    BorderLessInput.displayName = 'BorderLessInput';

    switch (inputStyle) {
        case 'base':
            return <BaseInput {...rest} ref={ref} />;
        case 'borderLess':
            return <BorderLessInput {...rest} ref={ref} />;
        default:
            return <BaseInput {...rest} ref={ref} />;
    }
};

export default React.forwardRef(Input);

const BaseInput = React.forwardRef((inputProps: TInputProps & { inputStyle?: TInputStyleUnion }, ref: any) => {
    const { ...props } = inputProps;

    return (
        <div css={InputWrap}>
            <input css={InputStyle} ref={ref} {...props} />
            <CloseCircleOutlined />
        </div>
    );
});

const BorderLessInput = React.forwardRef((inputProps: TInputProps & { inputStyle?: TInputStyleUnion }, ref: any) => {
    const { ...props } = inputProps;

    return (
        <div css={BorderlessWrap}>
            <input css={InputStyle} ref={ref} {...props} />
            <CloseCircleOutlined />
        </div>
    );
});