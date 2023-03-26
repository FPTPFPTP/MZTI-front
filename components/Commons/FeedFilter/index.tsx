import { useState } from 'react';
import { FeedFilterStyle } from './styled';

const FeedFilter = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleFilter = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (
        <div css={FeedFilterStyle}>
            <button onClick={handleFilter} className="feedFilterStyle--button">
                <span className="text">최신순</span>
                <span>
                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5.5 4L10 1" stroke="#A7A7A7" />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <ul className="filterList">
                    <li>
                        <button>최신순</button>
                    </li>
                    <li>
                        <button>오래된 순</button>
                    </li>
                    <li>
                        <button>인기순</button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default FeedFilter;
