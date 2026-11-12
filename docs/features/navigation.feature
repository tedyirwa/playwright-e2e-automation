Feature: Page Navigation

  Scenario: TC007 - Verify Test Cases Page
    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Test Cases link
    Then the user should be navigated to the Test Cases page