import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/e2e-example')
  const input1 = page.locator('input[name="example"]')
  await input1.click()
  await input1.fill('入力1')
  const input2 = page.locator('input[name="exampleRequired"]')
  await input2.click()
  await input2.fill('入力2')
  await page.getByRole('button', { name: '送信' }).click()

  await expect(page.getByText('result1')).toHaveText('result1:入力1')
  await expect(page.getByText('result2')).toHaveText('result2:入力2')
})
