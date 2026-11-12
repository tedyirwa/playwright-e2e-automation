import { Page, expect } from "@playwright/test";

export class HomePage {
    private signupLoginLink;
    private productLink;
    private logoutLink;
    private deleteAccountLink;
    private contactUsLink;

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
    }

    public async openHomePage(): Promise<void> {
        await this.page.goto("/");
        await expect(this.page).toHaveTitle(/Automation Exercise/);
    }

    public async clickSignupLogin(): Promise<void> {
        await this.signupLoginLink.click();
    }

    public async loggedInAsText(name: string) {
        return this.page.getByText(`Logged in as ${name}`);
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
}
