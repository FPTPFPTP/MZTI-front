import dayjs from 'dayjs';

import { IMypageWriteModel } from '@/types/mypageWrite';

export const WriteListMockData = Array.from(Array(100).keys()).map(
    (id): IMypageWriteModel => ({
        id,
        title: `게시글 ${id}`,
        date: dayjs().format('YYYY-MM-DD'),
    }),
);
