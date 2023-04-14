import toast from 'react-hot-toast';
import colors from '@styles/color';

interface IOpenToastProps {
    message: string;
    duration?: 1000 | 2000 | 3000 | 4000;
}

export function openToast({ message = '', duration = 2000 }: IOpenToastProps) {
    toast(message, {
        duration,
        position: 'top-center',
        style: {
            width: '100%',
            borderRadius: '4px',
            background: colors.BLACK,
            color: colors.WHITE,
        },
    });
}
