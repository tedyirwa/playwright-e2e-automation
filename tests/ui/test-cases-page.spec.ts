import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { TestCasesPage } from "../../pages/ui/TestCasesPage";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";

test("TC007 - Verify Test Cases Page", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    const homePage = new HomePage(page);
    const testCasesPage = new TestCasesPage(page);

    await homePage.openHomePage();

    await homePage.clickTestCase();

    await expect(testCasesPage.testCasesHeadingText).toBeVisible();
});
