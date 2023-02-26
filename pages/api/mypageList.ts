// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mypageListData from '@/mocks/mypageList.json';
import { IMypageWriteModel } from '@/types/mypageWrite';

export default function handler(req: NextApiRequest, res: NextApiResponse<IMypageWriteModel[]>) {
    const query = req.query;
    const { page, search } = query;

    res.status(200).json(mypageListData);
}
