import type { NextApiRequest, NextApiResponse } from 'next'
import { LoremIpsum } from 'lorem-ipsum'
import { dummyData } from './dummyData'

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<BurgerPlace>>) {
  res.status(200).json(dummyData)
}
