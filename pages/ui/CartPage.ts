import { Page } from "@playwright/test";

export interface CartProductData {
    name: string;
    price: string;
    quantity: number;
    total: string;
}

export class CartPage {
    private footer;
    private subscriptionEmailInput;
    private subscriptionButton;

    constructor(private page: Page) {
        this.footer = page.locator("footer");
        this.subscriptionEmailInput = page.locator("#susbscribe_email");
        this.subscriptionButton = page.locator("#subscribe");
    }

    public get subscriptionHeadingText() {
        return this.page.getByRole("heading", {
            name: "Subscription",
            exact: true,
        });
    }

    public get subscriptionSuccessMessage() {
        return this.page.locator("#success-subscribe .alert-success");
    }

    public async scrollToFooter(): Promise<void> {
        await this.footer.scrollIntoViewIfNeeded();
    }

    public async fillSubscriptionEmail(email: string): Promise<void> {
        await this.subscriptionEmailInput.fill(email);
    }

    public async clickSubscriptionButton(): Promise<void> {
        await this.subscriptionButton.click();
    }

    private get cartTable() {
        return this.page.locator("#cart_info_table");
    }

    private get cartProductRows() {
        return this.cartTable.locator("tbody tr[id^='product-']");
    }

    public get cartProductNames() {
        return this.cartProductRows.locator(".cart_description h4 a");
    }

    public get cartProductPrices() {
        return this.cartProductRows.locator(".cart_price p");
    }

    public get cartProductQuantities() {
        return this.cartProductRows.locator(".cart_quantity button");
    }

    public get cartProductTotals() {
        return this.cartProductRows.locator(".cart_total_price");
    }

    public async getCartProductData(index: number): Promise<CartProductData> {
        const product = this.cartProductRows.nth(index);

        const [name, price, quantity, total] = await Promise.all([
            product.locator(".cart_description h4 a").innerText(),
            product.locator(".cart_price p").innerText(),
            product.locator(".cart_quantity button").innerText(),
            product.locator(".cart_total_price").innerText(),
        ]);

        return {
            name: name.trim(),
            price: price.trim(),
            quantity: Number(quantity.trim()),
            total: total.trim(),
        };
    }
}
