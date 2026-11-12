import { test } from "@playwright/test";
import { HomePage } from "../../pages/ui/HomePage";

test("should open Automation Exercise homepage", async ({ page }) => {
    await new HomePage(page).openHomePage();
});
