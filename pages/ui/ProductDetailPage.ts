import { Page } from "@playwright/test";

export class ProductsDetailPage {
    constructor(private page: Page) {}

    public get productNameText() {
        return this.page.getByRole("heading", { name: "Blue Top" });
    }
    public get categoryText() {
        return this.page.getByText("Category: Women > Tops");
    }
    public get priceText() {
        return this.page.getByText("Rs. 500");
    }
    public get availabilityText() {
        return this.page.getByText("In Stock");
    }
    public get conditionText() {
        return this.page.locator("p").filter({
            hasText: "Condition:",
        });
    }
    public get brandText() {
        return this.page.locator("p").filter({
            hasText: "Brand:",
        });
    }
}
