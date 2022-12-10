import type { NextApiRequest, NextApiResponse } from 'next'

const getName = (req: NextApiRequest, res: NextApiResponse): void => {
  setTimeout(() => {
    res.status(200).json({ name: 'John Doe' })
  }, 2000)
}

export default getName
