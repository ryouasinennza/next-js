import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  apiKey: process.env.API_KEY || '',
  serviceDomain: process.env.SERVICE_DOMAIN || '',
})
