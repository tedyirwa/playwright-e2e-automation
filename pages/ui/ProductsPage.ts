import { Page } from "@playwright/test";

export interface ProductData {
    name: string;
    price: string;
}

export class ProductsPage {
    private searchProductInput;
    private searchProductButton;
    private continueShoppingButton;
    private viewCartLink;

    constructor(private page: Page) {
        this.searchProductInput = page.locator("#search_product");
        this.searchProductButton = page.locator("#submit_search");

        this.continueShoppingButton = page.getByRole("button", {
            name: "Continue Shopping",
            exact: true,
        });

        this.viewCartLink = page.getByRole("link", {
            name: "View Cart",
            exact: true,
        });
    }

    private getProductByIndex(index: number) {
        return this.page.locator(".features_items .product-image-wrapper").nth(index);
    }

    public get allProductsHeadingText() {
        return this.page.getByRole("heading", {
            name: "All Products",
            exact: true,
        });
    }

    public get allProductsList() {
        return this.page.locator(".features_items");
    }

    public get searchedProductsHeadingText() {
        return this.page.getByRole("heading", {
            name: "Searched Products",
            exact: true,
        });
    }

    public get searchedProductCards() {
        return this.page.locator(".features_items .product-image-wrapper");
    }

    public get searchedProductNames() {
        return this.searchedProductCards.locator(".productinfo p");
    }

    public async clickFirstProduct(): Promise<void> {
        await this.getProductByIndex(0).getByRole("link", { name: "View Product" }).click();
    }

    public async fillSearchProductInput(productName: string): Promise<void> {
        await this.searchProductInput.fill(productName);
    }

    public async clickSearchProductButton(): Promise<void> {
        await this.searchProductButton.click();
    }

    public async hoverProduct(index: number): Promise<void> {
        await this.getProductByIndex(index).hover();
    }

    public async clickProductAddToCart(index: number): Promise<void> {
        await this.getProductByIndex(index).locator(".add-to-cart").first().click();
    }

    public async clickContinueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }

    public async clickViewCart(): Promise<void> {
        await this.viewCartLink.click();
    }

    public async getProductData(index: number): Promise<ProductData> {
        const productInfo = this.getProductByIndex(index).locator(".overlay-content");

        return {
            name: (await productInfo.locator("p").innerText()).trim(),
            price: (await productInfo.locator("h2").innerText()).trim(),
        };
    }
}
