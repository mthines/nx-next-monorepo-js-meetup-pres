import { test } from '@playwright/test';

test.describe('Example', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');

    await page.getByText('Hello there').click();

    await page
      .getByRole('link', { name: 'Server Component - No hydration' })
      .click();

    await page
      .locator('div')
      .filter({
        hasText:
          'iPhone 9Apple - smartphonesIn stock4.69 in rating549 - 12.96% offAn apple mobile',
      })
      .first()
      .click();

    await page
      .getByRole('heading', { name: 'Server Component - No hydration' })
      .click();
  });
});
