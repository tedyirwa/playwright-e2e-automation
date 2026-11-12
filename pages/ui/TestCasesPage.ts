import { Page } from "@playwright/test";

export class TestCasesPage {
    constructor(private page: Page) {}

    public get testCasesHeadingText() {
        return this.page.getByRole("heading", {
            name: "Test Cases",
            exact: true,
        });
    }
}
