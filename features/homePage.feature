Feature: Checkout Functionality

    Scenario: As a user, I can checkout product/s

        Given I am already logged-in on Saucedemo site
        When I checkout Sauce Labs Bolt T-Shirt product
        Then I should successfully checkout the product

    Scenario Outline: As a user, I can checkout multiple products

        Given I am already logged-in on Saucedemo site
        When I checkout 
        |Sauce Labs Bolt T-Shirt|
        |Sauce Labs Bike Light|
        |Sauce Labs Fleece Jacket|
        Then I should successfully checkout the products

