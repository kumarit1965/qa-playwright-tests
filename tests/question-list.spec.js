const { test, expect } = require('@playwright/test');

test.describe('Question List Page', () => {
  test('should load JavaScript question list', async ({ page }) => {
    await page.goto('https://www.greatfrontend.com/questions/javascript');
    await expect(page.locator('text=JavaScript')).toBeVisible();
  });

  test('should navigate to a question detail page when clicked', async ({ page }) => {
    await page.goto('https://www.greatfrontend.com/questions/javascript');
    await page.locator('a:has-text("Flatten")').click();
    await expect(page).toHaveURL(/.*flatten.*/);
  });

  test('should handle empty list gracefully (hypothetical)', async ({ page }) => {
    // Mocking would be required here in real-world
    // Ensure fallback message like "No questions available" appears
    // await expect(page.locator('.empty-state')).toBeVisible();
  });
});
