import dayjs from 'dayjs';
import { faker } from '@faker-js/faker';
import { IMypageWriteModel } from '@/types/mypageWrite';

export const WriteCommentsMockData = Array.from(Array(100).keys()).map(
    (id): IMypageWriteModel => ({
        id,
        title: `댓글 ${faker.word.adjective()}`,
        date: dayjs(faker.date.past()).format('YYYY-MM-DD'),
        thumbnail: faker.image.animals(),
    }),
);
