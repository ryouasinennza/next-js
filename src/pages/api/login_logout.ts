import type { NextApiRequest, NextApiResponse } from 'next'

const login_logout = (req: NextApiRequest, res: NextApiResponse): void => {
  setTimeout(() => {
    res.status(200).json({ login: true })
  }, 2000)
}

export default login_logout
