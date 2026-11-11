Feature: User Authentication

  Scenario: TC001 - Register a new user and delete the account

    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Signup / Login link
    Then the New User Signup section should be visible

    When the user enters a name and email address
    And clicks the Signup button
    Then the Enter Account Information section should be visible

    When the user fills in the account details including Title, Name, Email, Password, and Date of Birth
    And selects the newsletter subscription checkbox
    And selects the special offers subscription checkbox
    And fills in the address information including First Name, Last Name, Company, Address, Address 2, Country, State, City, Zipcode, and Mobile Number
    And clicks the Create Account button
    Then the Account Created confirmation should be visible

    When the user clicks the Continue link
    Then the user should be logged in
    And the Logged in as username text should be visible

    When the user clicks the Delete Account link
    Then the Account Deleted confirmation should be visible
    And the user clicks the Continue link

 
  Scenario: TC002 - Login user with correct email and password

    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Signup / Login link
    Then the Login to your account section should be visible

    When the user enters a correct email address and password
    And clicks the Login button
    Then the user should be logged in
    And the Logged in as username text should be visible

    When the user clicks the Delete Account link
    Then the Account Deleted confirmation should be visible


  Scenario: TC003 - Login user with incorrect email and password

    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Signup / Login link
    Then the Login to your account section should be visible

    When the user enters an incorrect email address and password
    And clicks the Login button
    Then the error message "Your email or password is incorrect!" should be visible


  Scenario: TC004 - Logout user

    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Signup / Login link
    Then the Login to your account section should be visible

    When the user enters a correct email address and password
    And clicks the Login button
    Then the user should be logged in
    And the Logged in as username text should be visible

    When the user clicks the Logout link
    Then the user should be navigated to the login page
    And the Login to your account section should be visible


  Scenario: TC005 - Register user with existing email

    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Signup / Login link
    Then the New User Signup section should be visible

    When the user enters a name and an already registered email address
    And clicks the Signup button
    Then the error message "Email Address already exist!" should be visible
