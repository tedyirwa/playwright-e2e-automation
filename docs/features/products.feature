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