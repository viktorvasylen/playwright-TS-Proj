import { test, expect } from '@playwright/test';
import { isContext } from 'vm';

test('has URL', async ({ page }) => {
  await page.goto('https://metro.zakaz.ua/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(/metro.zakaz.ua/);
});