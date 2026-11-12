import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { AuthPage } from "../../pages/ui/AuthPage";
import { AccountDeletedPage } from "../../pages/ui/AccountDeletedPage";
import dataUsers from "../../test-data/users.json";

test("TC002 - Login user with correct email and password", async ({ page }) => {
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);

    const accountDeletedPage = new AccountDeletedPage(page);

    await homePage.openHomePage();

    await homePage.clickSignupLogin();

    await expect(authPage.newUserSignupText).toBeVisible();

    await authPage.fillLoginForm(dataUsers.validUsers[1].email, dataUsers.password);

    await authPage.clickLogin();

    await expect(await homePage.loggedInAsText(dataUsers.validUsers[1].name)).toBeVisible();

    await homePage.clickDeleteAccount();

    await expect(accountDeletedPage.accountDeletedText).toBeVisible();

    await accountDeletedPage.clickContinue();
});
