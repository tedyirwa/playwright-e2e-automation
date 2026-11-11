import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { AuthPage } from "../../pages/ui/AuthPage";
import { AccountDeletedPage } from "../../pages/ui/AccountDeletedPage";
import dataUsers from "../../test-data/users.json";

test("TC002 - Login User with incorrect email and password", async ({ page }) => {
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);

    await homePage.openHomePage();

    await expect(page).toHaveTitle(/Automation Exercise/);

    await homePage.clickSignupLogin();

    await expect(authPage.newUserSignupText).toBeVisible();

    await authPage.fillLoginForm(dataUsers.invalidUsers.email, dataUsers.password);

    await authPage.clickLogin();

    await expect(authPage.loginErrorMessage).toBeVisible();
});
