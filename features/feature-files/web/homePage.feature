Feature: Checkout Functionality

    @Web
    Scenario: Successfully checkout one product

        Given user is in the product Home Page
        When user checkouts Sauce Labs Bolt T-Shirt product
        Then user should successfully checkout the products

    @Web
    Scenario Outline: Successfully checkout multiple products

        Given user is in the product Home Page
        When user checkout products 
        |Sauce Labs Bolt T-Shirt|
        |Sauce Labs Bike Light|
        |Sauce Labs Fleece Jacket|
        Then user should successfully checkout the products

