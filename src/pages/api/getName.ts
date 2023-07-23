import { setTimeout } from 'node:timers/promises'
import type { NextApiRequest, NextApiResponse } from 'next'

const getName = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await setTimeout(3000)
  await res.status(200).json({ name: '/api/getNamejj' })
  res.end()
}

export default getName
