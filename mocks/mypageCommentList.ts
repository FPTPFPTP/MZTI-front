import dayjs from 'dayjs';

import { IMypageWriteModel } from '@/types/mypageWrite';

export const WriteCommentsMockData = Array.from(Array(100).keys()).map(
    (id): IMypageWriteModel => ({
        id,
        title: `댓글 내용 ${id}`,
        date: dayjs().format('YYYY-MM-DD'),
    }),
);
