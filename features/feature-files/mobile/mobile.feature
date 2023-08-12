Feature: Mobile Functionality

    @Mobile
    Scenario: As a user, navigate to Alert Dialog

        Given App is already installed
        When I navigate to Alert Dialog
        Then I should see the Alert Dialog

