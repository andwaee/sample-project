Feature: Mobile Functionality

    @Mobile
    Scenario: As a user, I can navigate to Alert Dialog

        Given App is already installed
        When I navigate to Alert Dialog
        Then I should see the Alert Dialog

    @Mobile
    Scenario: As a user, I can custom title

        Given App is already installed
        When I navigate to Custom Title screen
        And I changed title fields
        Then I should see the Custom Title is changed

