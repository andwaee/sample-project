Feature: Checkout Functionality

    Scenario: As a user, I can checkout product/s

        Given I am already logged in page
        When I checkout Sauce Labs Bolt T-Shirt product
        Then I should successfully checkout the product

    Scenario Outline: As a user, I can checkout multiple products

        Given I am already logged in page
        When I checkout 
        |Sauce Labs Bolt T-Shirt|
        |Sauce Labs Bike Light|
        |Test.allTheThings() T-Shirt (Red)|
        Then I should successfully checkout the products

