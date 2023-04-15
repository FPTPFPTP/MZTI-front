import { timeForToday } from '@/utils/time';
import { SearchHistoryItemStyle } from '../styled';
import SearchCloseIcon from '@assets/icons/search/searchClose.svg';

interface ISearchHistoryItemProps {
    searchText: string;
    date: string;
    onClick: () => void;
    onDelete: (e: React.MouseEvent) => void;
}

const SearchHistoryItem = (props: ISearchHistoryItemProps) => {
    const { searchText, date, onClick, onDelete } = props;

    return (
        <div css={SearchHistoryItemStyle} onClick={onClick}>
            <span>{searchText}</span>
            <div>
                <span>{timeForToday(date)}</span>
                <button onClick={onDelete}>
                    <SearchCloseIcon />
                </button>
            </div>
        </div>
    );
};

export default SearchHistoryItem;
