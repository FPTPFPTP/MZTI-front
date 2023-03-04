// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { WriteListMockData } from '@/mocks/mypageList';
import { IPaginationResponse } from '@/types/global';
import { IMypageWriteModel } from '@/types/mypageWrite';

export default function handler(req: NextApiRequest, res: NextApiResponse<IPaginationResponse<IMypageWriteModel>>) {
    const query = req.query;
    const { search } = query;

    if (search && search.length) {
        res.status(200).json({
            contents: [],
            pageNumber: 0,
            pageSize: 10,
            totalPages: 0,
            totalCount: 0,
            isLastPage: true,
            isFirstPage: true,
        });
        return;
    }

    const page = Number(query.pageParam);
    const totalCount = WriteListMockData.length;
    const totalPages = Math.round(totalCount / 10);

    res.status(200).json({
        contents: WriteListMockData.slice(page * 10, (page + 1) * 10),
        pageNumber: page,
        pageSize: 10,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 0,
    });
    return;
}