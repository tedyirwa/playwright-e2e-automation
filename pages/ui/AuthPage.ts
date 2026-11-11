import { Page } from "@playwright/test";

export class AuthPage {
    private emailInputLogin;
    private passwordInputLogin;
    private buttonLogin;
    private nameInputSignup;
    private emailInputSignup;
    private buttonSignup;

    constructor(private page: Page) {
        this.emailInputLogin = page.locator('[data-qa="login-email"]');

        this.passwordInputLogin = page.locator('[data-qa="login-password"]');

        this.buttonLogin = page.getByRole("button", { name: "Login" });

        this.nameInputSignup = page.locator('[data-qa="signup-name"]');

        this.emailInputSignup = page.locator('[data-qa="signup-email"]');

        this.buttonSignup = page.getByRole("button", { name: "Signup" });
    }

    public get newUserSignupText() {
        return this.page.getByText("New User Signup!");
    }

    public async clickLogin(): Promise<void> {
        await this.buttonLogin.click();
    }

    public async fillLoginForm(email: string, password: string): Promise<void> {
        await this.emailInputLogin.fill(email);
        await this.passwordInputLogin.fill(password);
    }

    public async fillSignupForm(name: string, email: string): Promise<void> {
        await this.nameInputSignup.fill(name);
        await this.emailInputSignup.fill(email);
    }

    public async clickSignup(): Promise<void> {
        await this.buttonSignup.click();
    }

    public get loginErrorMessage() {
        return this.page.getByText("Your email or password is incorrect!");
    }
}
