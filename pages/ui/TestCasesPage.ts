import { Page } from "@playwright/test";

export class AccountDeletedPage {
    private buttonContinue;

    constructor(private page: Page) {
        this.buttonContinue = page.getByRole("link", {
            name: "Continue",
        });
    }

    public get accountDeletedText() {
        return this.page.getByText("Account Deleted!");
    }

    public async clickContinue(): Promise<void> {
        await this.buttonContinue.click();
    }
}
