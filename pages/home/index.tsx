import BottomMenu from '@/components/Commons/BottomMenu';
import FeedItem from '@/components/Home/FeedItem';
import HotKeyword from '@/components/Home/HotKeyword';
import { Header } from '@components/Commons';

const home = () => {
    return (
        <div>
            <Header home />
            <HotKeyword />
            <FeedItem />

            <BottomMenu />
        </div>
    );
};

export default home;
