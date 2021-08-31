import type { NextApiRequest, NextApiResponse } from 'next'
import { dummyData } from './dummyData'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<BurgerPlace>>) {
  res.status(200).json(dummyData.filter((place) => place.review))
}
