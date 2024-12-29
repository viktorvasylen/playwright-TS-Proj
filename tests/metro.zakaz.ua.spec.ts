import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://metro.zakaz.ua/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(/metro.zakaz.ua/);
});