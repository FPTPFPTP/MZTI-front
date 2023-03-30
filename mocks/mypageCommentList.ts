import dayjs from 'dayjs';
import { faker } from '@faker-js/faker';
import { IMypageWriteModel } from '@/types/mypageWrite';

export const WriteCommentsMockData = Array.from(Array(100).keys()).map((): any => ({
    id: faker.datatype.uuid(),
    date: dayjs(faker.date.past()).format('YYYY-MM-DD'),
    thumbnail: faker.image.animals(),
}));
