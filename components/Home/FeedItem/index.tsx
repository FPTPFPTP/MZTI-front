import ItemContent from './ItemContent';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { FeedItemStyle } from './styled';

const FeedItem = () => {
    return (
        <div css={FeedItemStyle}>
            <div className="feedLayout">
                <ItemHeader />
                <ItemContent />
            </div>

            <ItemFooter />
        </div>
    );
};

export default FeedItem;
