// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { WriteCommentsMockData } from '@/mocks/mypageCommentList';
import { IPaginationResponse } from '@/types/global';
import { IMypageWriteModel } from '@/types/mypageWrite';

export default function handler(req: NextApiRequest, res: NextApiResponse<IPaginationResponse<IMypageWriteModel>>) {
    const query = req.query;
    const page = Number(query.pageParam);
    const totalCount = WriteCommentsMockData.length;
    const totalPages = Math.round(totalCount / 10);

    res.status(200).json({
        contents: WriteCommentsMockData.slice(page * 10, (page + 1) * 10),
        pageNumber: page,
        pageSize: 10,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 0,
    });
    return;
}
