import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { AuthPage } from "../../pages/ui/AuthPage";
import dataUsers from "../../test-data/users.json";

test("TC005 - Register user with existing email", async ({ page }) => {
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);

    await homePage.openHomePage();

    await expect(page).toHaveTitle(/Automation Exercise/);

    await homePage.clickSignupLogin();

    await expect(authPage.newUserSignupText).toBeVisible();

    await authPage.fillSignupForm(dataUsers.validUsers.name, dataUsers.validUsers.email);

    await authPage.clickSignup();

    await expect(authPage.signupErrorMessage).toBeVisible();
});
