const { test, expect } = require('@playwright/test');

test.describe('Guides Section', () => {
  test('should load the Front End Interview Playbook', async ({ page }) => {
    await page.goto('https://www.greatfrontend.com/front-end-interview-playbook');
    await expect(page.locator('h1')).toContainText('Front End Interview Playbook');
  });

  test('should allow navigation within the guide', async ({ page }) => {
    await page.goto('https://www.greatfrontend.com/front-end-interview-playbook');
    await page.locator('nav a').first().click();
    await expect(page.locator('article')).toBeVisible();
  });
});
