import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { ProductsPage } from "../../pages/ui/ProductsPage";
import { ProductsDetailPage } from "../../pages/ui/ProductDetailPage";

test("TC008 - Verify All Products and Product Detail Page", async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductsDetailPage(page);

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
