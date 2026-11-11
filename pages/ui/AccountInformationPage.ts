import { Page } from "@playwright/test";

export class AccountInformationPage {
    private titleRadioButton;
    private nameInput;
    private passwordInput;
    private daySelect;
    private monthSelect;
    private yearSelect;
    private newsletterCheckbox;
    private specialOffersCheckbox;
    private firstNameInput;
    private lastNameInput;
    private companyInput;
    private addressInput;
    private address2Input;
    private countrySelect;
    private stateInput;
    private cityInput;
    private zipcodeInput;
    private mobileNumberInput;
    private buttonCreateAccount;

    constructor(private page: Page) {
        this.titleRadioButton = (gender: string) => page.getByRole("radio", { name: gender });
        this.nameInput = page.locator("#name");
        this.passwordInput = page.locator('[data-qa="password"]');
        this.daySelect = page.locator('[data-qa="days"]');
        this.monthSelect = page.locator('[data-qa="months"]');
        this.yearSelect = page.locator('[data-qa="years"]');
        this.newsletterCheckbox = page.locator("#newsletter");
        this.specialOffersCheckbox = page.locator("#optin");

        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.companyInput = page.locator('[data-qa="company"]');
        this.addressInput = page.locator('[data-qa="address"]');
        this.address2Input = page.locator('[data-qa="address2"]');
        this.countrySelect = page.locator('[data-qa="country"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipcodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');

        this.buttonCreateAccount = page.getByRole("button", { name: "Create Account" });
    }

    public get enterAccountInformationText() {
        return this.page.getByText("Enter Account Information");
    }

    public async selectGender(gender: string): Promise<void> {
        await this.titleRadioButton(gender).check();
    }

    public async fillAccountInformationForm(
        gender: string,
        name: string,
        password: string,
        day: string,
        month: string,
        year: string,
        newsletter: boolean,
        specialOffers: boolean,
    ): Promise<void> {
        await this.selectGender(gender);
        await this.nameInput.fill(name);
        await this.passwordInput.fill(password);
        await this.daySelect.selectOption(day);
        await this.monthSelect.selectOption(month);
        await this.yearSelect.selectOption(year);
        await this.newsletterCheckbox.setChecked(newsletter);
        await this.specialOffersCheckbox.setChecked(specialOffers);
    }

    public async fillAddressInformationForm(
        firstName: string,
        lastName: string,
        company: string,
        address: string,
        address2: string,
        country: string,
        state: string,
        city: string,
        zipcode: string,
        mobileNumber: string,
    ): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyInput.fill(company);
        await this.addressInput.fill(address);
        await this.address2Input.fill(address2);
        await this.countrySelect.selectOption(country);
        await this.stateInput.fill(state);
        await this.cityInput.fill(city);
        await this.zipcodeInput.fill(zipcode);
        await this.mobileNumberInput.fill(mobileNumber);
    }

    public async clickCreateAccount(): Promise<void> {
        await this.buttonCreateAccount.click();
    }
}
