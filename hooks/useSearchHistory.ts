import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { uniq } from 'lodash';

import { searchHistory } from '@/recoil/atom/search';

const MAX_HISTORY_LENGTH = 10;

const useSearchHistory = () => {
    const [searchHistories, setSearchHistories] = useRecoilState(searchHistory);

    const addSearchHistory = useCallback(
        (searchText: string, date: string) => {
            if (!searchText?.trim()) {
                return;
            }

            const duplIndex = searchHistories.findIndex((history) => history.searchText === searchText);

            let addedSearchHistories = uniq([{ searchText, date }, ...searchHistories]);

            if (duplIndex > -1) {
                addedSearchHistories.splice(duplIndex + 1, 1);
            }

            if (addedSearchHistories.length > MAX_HISTORY_LENGTH) {
                addedSearchHistories = addedSearchHistories.slice(0, MAX_HISTORY_LENGTH);
            }

            setSearchHistories(addedSearchHistories);
        },
        [searchHistories, setSearchHistories],
    );

    const removeSearchHistory = useCallback(
        (text: string) => {
            const removeIndex = searchHistories.findIndex((history) => history.searchText === text);
            if (removeIndex === -1) {
                return;
            }

            const removedSearchHistories = [...searchHistories];
            removedSearchHistories.splice(removeIndex, 1);
            setSearchHistories(removedSearchHistories);
        },
        [searchHistories, setSearchHistories],
    );

    return { searchHistories, addSearchHistory, removeSearchHistory };
};

export default useSearchHistory;
