import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { BaseButtonStyle } from './styled';

const ButtonStyleUnionList = ['base'] as const;

type TButtonStyleUnion = (typeof ButtonStyleUnionList)[number];

type IButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = (buttonProps: IButtonProps & { buttonStyle?: TButtonStyleUnion }) => {
    const { buttonStyle = 'base', ...rest } = buttonProps;

    if (buttonStyle === 'base') {
        return <BaseButton {...rest} />;
    } else {
        console.error(`Unknown button style: ${buttonStyle}`);
        return null;
    }
};

export default Button;

export const BaseButton = (buttonProps: IButtonProps) => {
    const { children, className, ...rest } = buttonProps;

    return (
        <button {...rest} css={BaseButtonStyle}>
            {children}
        </button>
    );
};
