import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IRelationTestModel } from '@/types/relationTest';
// import { v1 } from 'uuid';
const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'relation_test_state',
    storage: sessionStorage,
});

// 관계테스트
export const relationTestState = atom<IRelationTestModel>({
    key: `relationTest`,
    default: {
        relation: undefined,
        myName: '',
        myMbti: '',
        partnerName: '',
        partnerMbti: '',
    },
    effects_UNSTABLE: [persistAtom],
});
