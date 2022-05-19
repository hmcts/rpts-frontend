Feature: postcode search

  Background:
    When I go to RPTS postcode search page
    Then I should see the text 'RPTS - Postcode Search'

  Scenario: retrieve address and local authority district code with valid postcode
    Then I entered post code 'bd9 6sg'
    Then I click search button
    Then I should see the text 'Results:'
    Then I should see the 4 char code '00CX'
    Then I should see the 9 char code 'E08000032'
    Then I should see the address '1, PLANTATION DRIVE, BRADFORD, BD9 6SG'

  Scenario: retrieve address and local authority district code with empty postcode
    Then I entered post code ''
    Then I click search button
    Then I should see the error message containing 'A postcode value is required. For example: TQ1 1BS'

  Scenario: retrieve address and local authority district code with invalid postcode
    Then I entered post code 'aa1 2aa'
    Then I click search button
    Then I should see the error message containing 'No details found for provided postcode: aa1 2aa'
    
