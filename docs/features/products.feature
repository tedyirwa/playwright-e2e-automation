Feature: Products

  Scenario: TC008 - Verify All Products and Product Detail Page
    Given the user is on the homepage
    Then the homepage should be visible

    When the user clicks the Products link
    Then the All Products page should be visible
    And the products list should be visible

    When the user clicks View Product on the first product
    Then the product detail page should be visible
    And the product name, category, price, availability, condition, and brand should be visible

  Scenario: TC009 - Search Product
    Given the user is on the homepage
    When the user clicks the Products button
    Then the user should be navigated to the All Products page
    When the user searches for a product
    Then the SEARCHED PRODUCTS section should be visible
    And the related products should be displayed

  Scenario: TC012 - Add Products in Cart
    Given the user is on the homepage
    When the user clicks the Products button
    And the user adds the first product to the cart
    And the user continues shopping
    And the user adds the second product to the cart
    And the user views the cart
    Then both products should be displayed in the cart
    And the product prices should be correct
    And the product quantities should be correct
    And the total prices should be correct