import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import CircleCloseSvg from '@assets/icons/circle_close.svg';
import SearchSvg from '@assets/icons/search.svg';
import { InputWrapCss, InputCss, BorderlessWrapCss, SeachWrapCss } from './styled';

const InputStyleUnionList = ['base', 'borderLess', 'search'] as const;

type TInputStyleUnion = (typeof InputStyleUnionList)[number];

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = (inputProps: TInputProps & { inputStyle?: TInputStyleUnion; isResetBtn?: boolean; handleReset?: () => void }, ref: any) => {
    const { inputStyle = 'base', ...rest } = inputProps;
    BaseInput.displayName = 'BaseInput';
    BorderLessInput.displayName = 'BorderLessInput';
    SearchInput.displayName = 'BorderLessInput';

    switch (inputStyle) {
        case 'base':
            return <BaseInput {...rest} ref={ref} />;
        case 'borderLess':
            return <BorderLessInput {...rest} ref={ref} />;
        case 'search':
            return <SearchInput {...rest} ref={ref} />;
        default:
            return <BaseInput {...rest} ref={ref} />;
    }
};

export default React.forwardRef(Input);

const BaseInput = React.forwardRef((inputProps: TInputProps & { inputStyle?: TInputStyleUnion }, ref: any) => {
    const { ...rest } = inputProps;

    return (
        <div css={InputWrapCss}>
            <input css={InputCss} ref={ref} {...rest} />
        </div>
    );
});

const BorderLessInput = React.forwardRef(
    (inputProps: TInputProps & { inputStyle?: TInputStyleUnion; isResetBtn?: boolean; handleReset?: () => void }, ref: any) => {
        const { isResetBtn, handleReset, ...rest } = inputProps;

        return (
            <div css={BorderlessWrapCss}>
                <input css={InputCss} ref={ref} {...rest} />

                {isResetBtn && <CircleCloseSvg onClick={handleReset} />}
            </div>
        );
    },
);

const SearchInput = React.forwardRef(
    (inputProps: TInputProps & { inputStyle?: TInputStyleUnion; isResetBtn?: boolean; handleReset?: () => void }, ref: any) => {
        const { isResetBtn, handleReset, ...rest } = inputProps;

        return (
            <div css={SeachWrapCss}>
                <SearchSvg style={{ width: 25 }} />

                <input css={InputCss} ref={ref} {...rest} />

                {isResetBtn && <CircleCloseSvg onClick={handleReset} style={{ width: 20 }} />}
            </div>
        );
    },
);
