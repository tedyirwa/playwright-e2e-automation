import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";

test("TC007 - Verify Test Cases Page", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openHomePage();

    await homePage.clickTestCase();

    await homePage.closeVignetteIfVisible();

    await expect(page).toHaveURL(/\/test_cases/);
});
