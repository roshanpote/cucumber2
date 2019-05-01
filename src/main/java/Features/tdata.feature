Feature: tdata creation

Scenario: Jbk Login Test Scenario

Given User is already on login page
When title of login page is Admin LTE
Then User inputs username and password
| kiran@gmail.com | 123456 |
And User clicks login button
And User is on Home page
Then User clicks Users
Then User clicks Add User
Then User enters detais
| Mayur | 989295486 | roshan4892@gmail.com |