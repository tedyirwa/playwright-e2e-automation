import { Page } from "@playwright/test";

export class ProductsPage {
    private firstProduct;
    private viewFirstProduct;

    constructor(private page: Page) {
        this.firstProduct = this.page.locator(".features_items .product-image-wrapper").first();

        this.viewFirstProduct = this.firstProduct.getByRole("link", {
            name: "View Product",
        });
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
}
