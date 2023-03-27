import { useQuery } from '@tanstack/react-query';
import { getBoards } from './boards';

export const useGetBoards = () => {
    const { data } = useQuery(['getBoards'], async () => {
        const data = await getBoards();

        return data;
    });

    return data;
};
