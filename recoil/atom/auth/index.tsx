import { atom } from 'recoil';
import { v1 } from 'uuid';

export const accessTokenState = atom({
    key: `accessToken/${v1()}`,
    default: '',
});
