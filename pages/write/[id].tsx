import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';
import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { IPostModel } from '@/types/post';

const EditorBox = dynamic(() => import('@components/Write/EditorBox'), {
    ssr: false,
});

interface IWriteProps {
    data?: IPostModel;
}

// 수정용
const Write = ({ data }: IWriteProps) => {
    return <>{data && <EditorBox postItem={data} />}</>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let data;
    try {
        const accessToken = req.cookies['accessToken'];
        Axios.defaults.baseURL = 'http://localhost:3000/mzti';
        Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        const res = await Axios.get<IResponseBase<IPostModel>>(`/post/${params.id}`);

        if (res) {
            data = res.data.data;
        }
    } catch (err) {
        console.log('error', err);
    }

    return {
        props: {
            data,
        },
    };
};
export default Write;
