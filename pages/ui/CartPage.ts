import { Page } from "@playwright/test";

export class CartPage {
    private footer;
    private subscriptionEmailCartInput;
    private subscriptionEmailCartButton;

    constructor(private page: Page) {
        this.footer = this.page.locator("footer");

        this.subscriptionEmailCartInput = this.page.locator("#susbscribe_email");

        this.subscriptionEmailCartButton = this.page.locator("#subscribe");
    }

    public async scrollToFooter(): Promise<void> {
        await this.footer.scrollIntoViewIfNeeded();
    }

    public get subscriptionHeadingText() {
        return this.page.getByRole("heading", {
            name: "Subscription",
            exact: true,
        });
    }

    public async fillSubscriptionEmailCart(email: string): Promise<void> {
        await this.subscriptionEmailCartInput.fill(email);
    }

    public async clickSubscriptionCartButton(): Promise<void> {
        await this.subscriptionEmailCartButton.click();
    }

    public get subscriptionSuccessMessage() {
        return this.page.locator("#success-subscribe .alert-success");
    }
}
