Feature: Contact Us

  Scenario: TC006 - Submit contact us form successfully

    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Contact Us link
    Then the Get In Touch section should be visible

    When the user enters name, email, subject, and message
    And uploads a file
    And clicks the Submit button
    And confirms the submission
    Then the success message "Success! Your details have been submitted successfully." should be visible

    When the user clicks the Home button
    Then the user should be navigated to the homepage
    And the homepage should be visible
