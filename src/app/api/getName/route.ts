import { setTimeout } from 'node:timers/promises'
import { NextResponse } from 'next/server'

export const GET = async (): Promise<Response> => {
  await setTimeout(3000)
  return NextResponse.json({ name: '/api/getNamelll' })
}
