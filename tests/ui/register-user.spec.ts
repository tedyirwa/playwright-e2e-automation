import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { AuthPage } from "../../pages/ui/AuthPage";
import { AccountInformationPage } from "../../pages/ui/AccountInformationPage";
import { AccountCreatedPage } from "../../pages/ui/AccountCreatedPage";
import { AccountDeletedPage } from "../../pages/ui/AccountDeletedPage";
import dataUsers from "../../test-data/users.json";
import { randomUUID } from "node:crypto";

test("TC001: Register a new user", async ({ page }) => {
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);
    const accountInformationPage = new AccountInformationPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const accountDeletedPage = new AccountDeletedPage(page);

    await homePage.openHomePage();

    await homePage.clickSignupLogin();

    await expect(authPage.newUserSignupText).toBeVisible();

    await authPage.fillSignupForm(dataUsers.validUsers[0].name, `teds-${randomUUID()}@irwa.com`);

    await authPage.clickSignup();

    await expect(accountInformationPage.enterAccountInformationText).toBeVisible();

    await accountInformationPage.fillAccountInformationForm(
        dataUsers.gender[0],
        dataUsers.validUsers[0].name,
        dataUsers.password,
        dataUsers.dateOfBirth.day,
        dataUsers.dateOfBirth.month,
        dataUsers.dateOfBirth.year,
        dataUsers.newsletter,
        dataUsers.specialOffers,
    );

    await accountInformationPage.fillAddressInformationForm(
        dataUsers.addressInformation.firstName,
        dataUsers.addressInformation.lastName,
        dataUsers.addressInformation.company,
        dataUsers.addressInformation.address,
        dataUsers.addressInformation.address2,
        dataUsers.addressInformation.country,
        dataUsers.addressInformation.state,
        dataUsers.addressInformation.city,
        dataUsers.addressInformation.zipcode,
        dataUsers.addressInformation.mobileNumber,
    );

    await accountInformationPage.clickCreateAccount();

    await expect(accountCreatedPage.accountCreatedText).toBeVisible();

    await accountCreatedPage.clickContinue();

    await expect(await homePage.loggedInAsText(dataUsers.validUsers[0].name)).toBeVisible();

    await homePage.clickDeleteAccount();

    await expect(accountDeletedPage.accountDeletedText).toBeVisible();

    await accountDeletedPage.clickContinue();
});
