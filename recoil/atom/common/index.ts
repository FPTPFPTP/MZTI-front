import { atom } from 'recoil';
import { v1 } from 'uuid';

export const menuActive = atom<number>({
    key: `menuActive/${v1()}`,
    default: 0,
});
