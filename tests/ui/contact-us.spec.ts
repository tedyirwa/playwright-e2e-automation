import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { ContactUsPage } from "../../pages/ui/ContactUsPage";
import dataUsers from "../../test-data/users.json";

test("TC006 - Contact Us Form", async ({ page }) => {
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);

    await homePage.openHomePage();

    await homePage.clickContactUs();

    await expect(contactUsPage.getInTouchText).toBeVisible();

    await contactUsPage.fillContactUsForm(
        dataUsers.contactUs.name,
        dataUsers.contactUs.email,
        dataUsers.contactUs.subject,
        dataUsers.contactUs.message,
    );

    await contactUsPage.uploadFile(dataUsers.contactUsFile.filePath);

    page.once("dialog", async (dialog) => {
        await dialog.accept();
    });

    await contactUsPage.clickSubmit();

    await expect(contactUsPage.successMessageText).toBeVisible();

    await contactUsPage.clickHome();

    await expect(page).toHaveTitle(/Automation Exercise/);
});
