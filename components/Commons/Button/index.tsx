import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { BaseButtonStyle, TextButtonStyle, BottomButtonStyle } from './styled';

const ButtonStyleUnionList = ['base', 'text'] as const;

type TButtonStyleUnion = (typeof ButtonStyleUnionList)[number];

type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = (buttonProps: TButtonProps & { buttonStyle?: TButtonStyleUnion }) => {
    const { buttonStyle = 'base', ...rest } = buttonProps;

    switch (buttonStyle) {
        case 'base':
            return <BaseButton {...rest} />;
        case 'text':
            return <TextButton {...rest} />;
        default:
            return <BaseButton {...rest} />;
    }
};

export default Button;

export const BaseButton = (buttonProps: TButtonProps) => {
    const { children, ...rest } = buttonProps;

    return (
        <button css={BaseButtonStyle} {...rest}>
            {children}
        </button>
    );
};

export const TextButton = (buttonProps: TButtonProps) => {
    const { children, ...rest } = buttonProps;

    return (
        <button {...rest} css={TextButtonStyle}>
            {children}
        </button>
    );
};

export const BottomButton = (buttonProps: TButtonProps) => {
    const { children, ...rest } = buttonProps;

    return (
        <button {...rest} css={BottomButtonStyle}>
            {children}
        </button>
    );
};
