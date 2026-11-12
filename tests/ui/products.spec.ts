import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { ProductsPage } from "../../pages/ui/ProductsPage";
import { ProductDetailPage } from "../../pages/ui/ProductDetailPage";
import dataUsers from "../../test-data/users.json";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";

test("TC008 - Verify All Products and Product Detail Page", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);

    await homePage.openHomePage();

    await homePage.clickProduct();

    await expect(productsPage.allProductsHeadingText).toBeVisible();

    await expect(productsPage.allProductsList).toBeVisible();

    await productsPage.clickFirstProduct();

    await expect(productDetailPage.productNameText).toBeVisible();
    await expect(productDetailPage.categoryText).toBeVisible();
    await expect(productDetailPage.priceText).toBeVisible();
    await expect(productDetailPage.availabilityText).toBeVisible();
    await expect(productDetailPage.conditionText).toBeVisible();
    await expect(productDetailPage.brandText).toBeVisible();
});

test("TC009 - Search Product", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await homePage.openHomePage();

    await homePage.clickProduct();

    await expect(productsPage.allProductsHeadingText).toBeVisible();

    await productsPage.fillSearchProductInput(dataUsers.search.productName);

    await productsPage.clickSearchProductButton();

    await expect(productsPage.searchedProductsHeadingText).toBeVisible();

    await expect(productsPage.searchedProductCards).not.toHaveCount(0);

    const productNames = await productsPage.searchedProductNames.allTextContents();

    expect(productNames.length).toBeGreaterThan(0);

    const normalize = (text: string) => text.replace(/[^a-z0-9]/gi, "").toLowerCase();

    const keyword = normalize(dataUsers.search.productName);

    for (const productName of productNames) {
        expect(normalize(productName)).toContain(keyword);
    }
});
