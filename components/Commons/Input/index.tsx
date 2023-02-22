import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { InputWrap, InputStyle, BorderlessWrap } from './styled';

const InputStyleUnionList = ['base', 'borderLess'] as const;

type TInputStyleUnion = (typeof InputStyleUnionList)[number];

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = (inputProps: TInputProps & { inputStyle?: TInputStyleUnion; isResetBtn?: boolean; handleReset?: () => void }, ref: any) => {
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
    const { ...rest } = inputProps;

    return (
        <div css={InputWrap}>
            <input css={InputStyle} ref={ref} {...rest} />
        </div>
    );
});

const BorderLessInput = React.forwardRef(
    (inputProps: TInputProps & { inputStyle?: TInputStyleUnion; isResetBtn?: boolean; handleReset?: () => void }, ref: any) => {
        const { isResetBtn, handleReset, ...rest } = inputProps;

        return (
            <div css={BorderlessWrap}>
                <input css={InputStyle} ref={ref} {...rest} />

                {isResetBtn && <CloseCircleOutlined onClick={handleReset} />}
            </div>
        );
    },
);
