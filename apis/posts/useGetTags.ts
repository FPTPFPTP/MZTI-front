import { useQuery } from '@tanstack/react-query';
import { getTags } from './tag';

export const useGetTags = (tag: string) => {
    const { data } = useQuery(['getTags', tag], async () => {
        const data = await getTags({ tag });

        return data;
    });

    return data;
};
