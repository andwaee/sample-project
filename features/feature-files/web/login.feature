Feature: Login Functionality

  @Web
  Scenario Outline: Successful Login with Valid Credentials

    Given user is on login Page
    When user enters username and password
    Then user should see Home page

