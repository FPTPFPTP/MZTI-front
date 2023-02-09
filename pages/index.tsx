import type { NextPage } from 'next';
import { Spin } from 'antd';

const Home: NextPage = () => {
    return (
        <div>
            <Spin size="large" />
        </div>
    );
};

export default Home;
