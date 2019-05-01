Feature: Jbk Login Test Feature

Without examples keyword
#Scenario: Jbk Login Test Scenario
#
#Given User is already on login page
#When title of login page is Admin LTE
#Then User inputs "kiran@gmail.com" and "123456"
#And User clicks login button
#And User is on Home page

#With example keyword
Scenario Outline: Jbk Login Test Scenario

Given User is already on login page
When title of login page is Admin LTE
Then User inputs "<username>" and "<password>"
And User clicks login button
And User is on Home page

Examples: 
          | username          | password |
          | kiran@gmail.com   | 123456   |
          | user              | 456      |
				
      