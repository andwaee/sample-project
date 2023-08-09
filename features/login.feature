Feature: Login Functionality

  @Web
  Scenario Outline: As a user, I can log into the Saucedemo site

    Given I am on the login page
    When I login with username and password
    Then I should see a Home page

