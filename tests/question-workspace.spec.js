const { test, expect } = require('@playwright/test');

test.describe('Question Workspace Page', () => {
  test('should load workspace for a question', async ({ page }) => {
    await page.goto('https://www.greatfrontend.com/questions/javascript/arrays/flatten');
    await expect(page.locator('text=Run Tests')).toBeVisible();
    await expect(page.locator('textarea')).toBeVisible(); // Code editor
  });

  test('should run tests and show results', async ({ page }) => {
    await page.goto('https://www.greatfrontend.com/questions/javascript/arrays/flatten');
    await page.locator('button:has-text("Run Tests")').click();
    await expect(page.locator('.test-result')).toBeVisible();
  });
});
