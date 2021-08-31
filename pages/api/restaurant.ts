import type { NextApiRequest, NextApiResponse } from 'next'
import { dummyData } from './dummyData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BurgerPlace | undefined>
) {
  res.status(200).json(dummyData.find((bp) => bp.slug == req.query.slug))
}
