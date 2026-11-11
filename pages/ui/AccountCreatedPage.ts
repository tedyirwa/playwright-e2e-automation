import { Page } from "@playwright/test";

export class AccountCreatedPage {
    private buttonContinue;

    constructor(private page: Page) {
        this.buttonContinue = page.getByRole("link", {
            name: "Continue",
        });
    }

    public get accountCreatedText() {
        return this.page.getByText("Account Created!");
    }

    public async clickContinue(): Promise<void> {
        await this.buttonContinue.click();
    }
}
