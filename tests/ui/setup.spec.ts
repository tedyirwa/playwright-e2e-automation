import { test, expect } from "@playwright/test";

test("should open Automation Exercise homepage", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Automation Exercise/);
});
