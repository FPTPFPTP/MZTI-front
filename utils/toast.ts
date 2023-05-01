import toast from 'react-hot-toast';
import colors from '@styles/color';

interface IOpenToastProps {
    message: string;
    duration?: 1000 | 2000 | 3000 | 4000 | 5000;
}

export function openToast({ message = '', duration = 2000 }: IOpenToastProps) {
    toast(message, {
        duration,
        position: 'bottom-center',
        style: {
            width: '100%',
            borderRadius: '10px',
            background: '#545456',
            color: colors.WHITE,
            textAlign: 'center',
            boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)',
            marginBottom: '20px',
        },
    });
}
