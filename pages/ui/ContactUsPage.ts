import { Page } from "@playwright/test";

export class ContactUsPage {
    private nameInputContactUs;
    private emailInputContactUs;
    private subjectInputContactUs;
    private messageInputContactUs;
    private uploadFileInputContactUs;
    private buttonSubmitContactUs;
    private buttonHome;

    constructor(private page: Page) {
        this.nameInputContactUs = page.locator('[data-qa="name"]');
        this.emailInputContactUs = page.locator('[data-qa="email"]');
        this.subjectInputContactUs = page.locator('[data-qa="subject"]');
        this.messageInputContactUs = page.locator('[data-qa="message"]');
        this.uploadFileInputContactUs = page.locator('input[name="upload_file"]');
        this.buttonSubmitContactUs = page.locator('[data-qa="submit-button"]');
        this.buttonHome = page.locator("#contact-page").getByRole("link", { name: /Home/ });
    }

    public get getInTouchText() {
        return this.page.getByText("Get In Touch");
    }

    public async fillContactUsForm(
        name: string,
        email: string,
        subject: string,
        message: string,
    ): Promise<void> {
        await this.nameInputContactUs.fill(name);
        await this.emailInputContactUs.fill(email);
        await this.subjectInputContactUs.fill(subject);
        await this.messageInputContactUs.fill(message);
    }

    public async uploadFile(filePath: string): Promise<void> {
        await this.uploadFileInputContactUs.setInputFiles(filePath);
    }

    public async clickSubmit(): Promise<void> {
        await this.buttonSubmitContactUs.click();
    }

    public get successMessageText() {
        return this.page
            .locator("#contact-page")
            .getByText("Success! Your details have been submitted successfully.");
    }

    public async clickHome(): Promise<void> {
        await this.buttonHome.click();
    }
}
