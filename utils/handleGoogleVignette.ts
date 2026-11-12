import { Page } from "@playwright/test";

export async function setupGoogleVignetteHandler(page: Page): Promise<void> {
    await page.addLocatorHandler(
        page.getByRole("button", { name: "Close ad" }),
        async (closeButton) => {
            await closeButton.click();
        },
    );
}
