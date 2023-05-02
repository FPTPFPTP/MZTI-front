import { atom } from 'recoil';
import { EActionEditType } from '@/types/post';

export const postEditState = atom<{ id: number; editActionType: EActionEditType }>({
    key: `hotKeywords`,
    default: {
        id: 0,
        editActionType: EActionEditType.COMMENT,
    },
});
