import { Page } from "@playwright/test";

export async function handleGoogleVignette(page: Page): Promise<void> {
    const closeButton = page.locator(".continue-prompt-text");

    try {
        await closeButton.waitFor({
            state: "visible",
            timeout: 2000,
        });

        await closeButton.click();
    } catch {
        // Vignette tidak muncul.
    }
}
