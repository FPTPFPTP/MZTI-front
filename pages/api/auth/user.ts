// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { IResponseBase } from '@/types/global';
import { IUserModel } from '@/types/user';

type Data = {
    data: IResponseBase<IUserModel>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
            cache: 'force-cache',
            method: 'GET',
            headers: {
                Authorization: req.headers['authorization'] || '',
            },
        });
        const data = await response.json();
        res.status(200).json({ data });
    } catch (error) {
        res.status(400);
    }
}
