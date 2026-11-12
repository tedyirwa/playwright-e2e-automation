import { test } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";
import { setupGoogleVignetteHandler } from "../../utils/handleGoogleVignette";

test("should open Automation Exercise homepage", async ({ page }) => {
    await setupGoogleVignetteHandler(page);
    await new HomePage(page).openHomePage();
});
