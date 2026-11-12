import { Page, expect } from "@playwright/test";

export class HomePage {
    private signupLoginLink;
    private productLink;
    private logoutLink;
    private deleteAccountLink;
    private contactUsLink;
    private testCasesLink;
    private cartLink;
    private footer;
    private subscriptionEmailInput;
    private subscriptionButton;

    constructor(private page: Page) {
        this.signupLoginLink = page.getByRole("link", {
            name: "Signup / Login",
        });

        this.productLink = page.getByRole("link", {
            name: "Products",
        });

        this.logoutLink = page.getByRole("link", {
            name: "Logout",
        });

        this.deleteAccountLink = page.getByRole("link", {
            name: "Delete Account",
        });

        this.contactUsLink = page.getByRole("link", {
            name: "Contact us",
        });

        this.cartLink = page.getByRole("link", {
            name: "Cart",
        });

        this.testCasesLink = page
            .getByRole("link", {
                name: "Test Cases",
                exact: true,
            })
            .first();

        this.footer = this.page.locator("footer");

        this.subscriptionEmailInput = this.page.locator("#susbscribe_email");

        this.subscriptionButton = this.page.locator("#subscribe");
    }

    public async openHomePage(): Promise<void> {
        await this.page.goto("/");
        await expect(this.page).toHaveTitle(/Automation Exercise/);
    }

    public async clickSignupLogin(): Promise<void> {
        await this.signupLoginLink.click();
    }

    public async clickProduct(): Promise<void> {
        await this.productLink.click();
    }

    public async clickDeleteAccount(): Promise<void> {
        await this.deleteAccountLink.click();
    }

    public async clickLogout(): Promise<void> {
        await this.logoutLink.click();
    }

    public async clickContactUs(): Promise<void> {
        await this.contactUsLink.click();
    }

    public async clickTestCase(): Promise<void> {
        await this.testCasesLink.click();
    }

    public async clickCart(): Promise<void> {
        await this.cartLink.click();
    }

    public async loggedInAsText(name: string) {
        return this.page.getByText(`Logged in as ${name}`);
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

    public async fillSubscriptionEmail(email: string): Promise<void> {
        await this.subscriptionEmailInput.fill(email);
    }

    public async clickSubscriptionButton(): Promise<void> {
        await this.subscriptionButton.click();
    }

    public get subscriptionSuccessMessage() {
        return this.page.locator("#success-subscribe .alert-success");
    }
}
