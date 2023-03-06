import dayjs from 'dayjs';
import { faker } from '@faker-js/faker';
import { IMypageWriteModel } from '@/types/mypageWrite';

export const WriteListMockData = Array.from(Array(100).keys()).map(
    (id): IMypageWriteModel => ({
        id,
        title: `게시글 ${faker.word.adjective()}`,
        date: dayjs(faker.date.past()).format('YYYY-MM-DD'),
        thumbnail: faker.image.animals(),
    }),
);
