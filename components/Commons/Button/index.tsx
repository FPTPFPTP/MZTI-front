import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { BaseButtonStyle, TextButtonStyle } from './styled';

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
    const { children, className, ...rest } = buttonProps;

    return (
        <button {...rest} css={BaseButtonStyle}>
            {children}
        </button>
    );
};

export const TextButton = (buttonProps: TButtonProps) => {
    const { children, className, ...rest } = buttonProps;

    return (
        <button {...rest} css={TextButtonStyle}>
            {children}
        </button>
    );
};