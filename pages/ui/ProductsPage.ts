import { Page } from "@playwright/test";

export class ProductsPage {
    private firstProduct;
    private viewFirstProduct;
    private searchProductInput;
    private searchProductButton;

    constructor(private page: Page) {
        this.firstProduct = this.page.locator(".features_items .product-image-wrapper").first();

        this.viewFirstProduct = this.firstProduct.getByRole("link", {
            name: "View Product",
        });

        this.searchProductInput = this.page.locator("#search_product");
        this.searchProductButton = this.page.locator("#submit_search");
    }

    public get allProductsHeadingText() {
        return this.page.getByRole("heading", { name: "All Products" });
    }

    public get allProductsList() {
        return this.page.locator(".features_items");
    }

    public async clickFirstProduct(): Promise<void> {
        await this.viewFirstProduct.click();
    }

    public async fillSearchProductInput(productName: string): Promise<void> {
        await this.searchProductInput.fill(productName);
    }

    public async clickSearchProductButton(): Promise<void> {
        await this.searchProductButton.click();
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
}
