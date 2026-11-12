import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { AuthPage } from "../../pages/ui/AuthPage";
import dataUsers from "../../test-data/users.json";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";

test("TC003 - Login User with incorrect email and password", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);

    await homePage.openHomePage();

    await homePage.clickSignupLogin();

    await expect(authPage.newUserSignupText).toBeVisible();

    await authPage.fillLoginForm(dataUsers.invalidUsers.email, dataUsers.password);

    await authPage.clickLogin();

    await expect(authPage.loginErrorMessage).toBeVisible();
});
