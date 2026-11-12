import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { ProductsPage } from "../../pages/ui/ProductsPage";
import { ProductDetailPage } from "../../pages/ui/ProductDetailPage";
import dataUsers from "../../test-data/users.json";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";
import { CartPage } from "../../pages/ui/CartPage";

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

test("TC012 - Add Products in Cart", async ({ page }) => {
    await setupGoogleVignetteHandler(page);

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await homePage.openHomePage();
    await homePage.clickProduct();

    await expect(productsPage.allProductsHeadingText).toBeVisible();

    await productsPage.hoverProduct(0);
    const firstProduct = await productsPage.getProductData(0);

    await productsPage.clickProductAddToCart(0);
    await productsPage.clickContinueShopping();

    await productsPage.hoverProduct(1);
    const secondProduct = await productsPage.getProductData(1);

    await productsPage.clickProductAddToCart(1);
    await productsPage.clickViewCart();

    await expect(cartPage.cartProductNames).toHaveText([firstProduct.name, secondProduct.name]);

    const firstCartProduct = await cartPage.getCartProductData(0);
    const secondCartProduct = await cartPage.getCartProductData(1);

    expect(firstCartProduct.price).toBe(firstProduct.price);
    expect(firstCartProduct.quantity).toBe(1);

    expect(secondCartProduct.price).toBe(secondProduct.price);
    expect(secondCartProduct.quantity).toBe(1);

    const getNumericPrice = (price: string): number => Number(price.replace(/[^0-9.]/g, ""));

    expect(getNumericPrice(firstCartProduct.total)).toBe(
        getNumericPrice(firstProduct.price) * firstCartProduct.quantity,
    );

    expect(getNumericPrice(secondCartProduct.total)).toBe(
        getNumericPrice(secondProduct.price) * secondCartProduct.quantity,
    );
});
