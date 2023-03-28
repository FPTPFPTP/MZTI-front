import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Link from 'next/link';
import { BaseButtonStyle, TextButtonStyle, LinkButtonStyle, BottomButtonStyle } from './styled';

const ButtonStyleUnionList = ['base', 'text', 'link', 'black'] as const;

type TButtonStyleUnion = (typeof ButtonStyleUnionList)[number];

type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = (buttonProps: TButtonProps & { buttonStyle?: TButtonStyleUnion; href?: string }) => {
    const { buttonStyle = 'base', ...rest } = buttonProps;

    switch (buttonStyle) {
        case 'base':
            return <BaseButton {...rest} />;
        case 'text':
            return <TextButton {...rest} />;
        case 'link':
            return <LinkButton {...rest} />;
        case 'black':
            return <BlackButton {...rest} />;
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

export const LinkButton = (buttonprops: TButtonProps & { href?: string }) => {
    const { children, href, ...rest } = buttonprops;

    if (href === undefined) {
        return (
            <button {...rest} css={BaseButtonStyle}>
                {children}
            </button>
        );
    }

    return (
        <button {...rest} css={LinkButtonStyle}>
            <Link href={href} passHref>
                {children}
            </Link>
        </button>
    );
};

export const BlackButton = (buttonprops: TButtonProps & { href?: string }) => {
    const { children, href, ...rest } = buttonprops;

    return (
        <button {...rest} css={LinkButtonStyle}>
            {children}
        </button>
    );
};
