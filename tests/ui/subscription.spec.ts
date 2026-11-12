import { test } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";
import dataUsers from "../../test-data/users.json";

test("TC010 - Verify Subscription in Home Page", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    const homePage = new HomePage(page);

    await homePage.openHomePage();

    await homePage.scrollToFooter();

    await homePage.subscriptionHeadingText.isVisible();

    await homePage.fillSubscriptionEmail(dataUsers.subscription.email);

    await homePage.clickSubscriptionButton();

    await homePage.subscriptionSuccessMessage.isVisible();
});
