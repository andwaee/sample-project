Feature: Checkout Functionality

    Scenario Outline: As a user, I can log into Saucedemo site

        Given I am already logged in page
        When I checkout Sauce Labs Backpack product
        Then I should successfully checkout Sauce Labs Backpack