import { Page } from "@playwright/test";

export class HomePage {
    private signupLoginLink;
    private productLink;
    private logoutLink;
    private deleteAccountLink;

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
    }

    public async openHomePage(): Promise<void> {
        await this.page.goto("/");
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
}
