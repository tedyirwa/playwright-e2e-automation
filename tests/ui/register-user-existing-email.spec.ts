import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { AuthPage } from "../../pages/ui/AuthPage";
import dataUsers from "../../test-data/users.json";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";

test("TC005 - Register user with existing email", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);

    await homePage.openHomePage();

    await homePage.clickSignupLogin();

    await expect(authPage.newUserSignupText).toBeVisible();

    await authPage.fillSignupForm(dataUsers.validUsers[4].name, dataUsers.validUsers[4].email);

    await authPage.clickSignup();

    await expect(authPage.signupErrorMessage).toBeVisible();
});
