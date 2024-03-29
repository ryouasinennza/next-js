import path from 'node:path'
import { defineConfig, devices } from '@playwright/test'

const PORT = process.env.PORT || 3000

const baseURL = `http://localhost:${PORT}`

// Reference: https://playwright.dev/docs/test-configuration
export default defineConfig({
  outputDir: 'test-results/',
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 14'],
    },
  ],
  retries: process.env.CI ? 2 : 0,
  testDir: path.join(__dirname, 'e2e'),
  timeout: 10 * 1000,
  use: {
    baseURL,
    trace: process.env.CI ? 'on-first-retry' : 'on',
    video: process.env.CI ? 'on-first-retry' : 'on',
  },
  webServer: {
    command: 'pnpm dev',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    url: baseURL,
  },
})
