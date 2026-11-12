import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { AuthPage } from "../../pages/ui/AuthPage";
import dataUsers from "../../test-data/users.json";

test("TC004 - Logout user", async ({ page }) => {
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);

    await homePage.openHomePage();

    await homePage.clickSignupLogin();

    await expect(authPage.newUserSignupText).toBeVisible();

    await authPage.fillLoginForm(dataUsers.validUsers.email, dataUsers.password);

    await authPage.clickLogin();

    await expect(await homePage.loggedInAsText(dataUsers.validUsers.name)).toBeVisible();

    await homePage.clickLogout();

    await expect(authPage.newUserSignupText).toBeVisible();
});
