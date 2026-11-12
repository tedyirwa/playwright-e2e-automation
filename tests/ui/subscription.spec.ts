import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";
import dataUsers from "../../test-data/users.json";
import { CartPage } from "../../pages/ui/CartPage";

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

test("TC011 - Verify Subscription in Cart Page", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await homePage.openHomePage();

    await homePage.clickCart();

    await expect(page).toHaveURL(/view_cart/);

    await cartPage.scrollToFooter();

    await cartPage.subscriptionHeadingText.isVisible();

    await cartPage.fillSubscriptionEmailCart(dataUsers.subscription.email);

    await cartPage.clickSubscriptionCartButton();

    await cartPage.subscriptionSuccessMessage.isVisible();
});
