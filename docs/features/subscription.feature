Feature: Subscription

  Scenario: TC010 - Verify Subscription in Home Page
    Given the user is on the homepage
    When the user scrolls down to the footer
    Then the SUBSCRIPTION section should be visible
    When the user enters an email address and clicks the subscribe button
    Then the subscription success message should be visible
