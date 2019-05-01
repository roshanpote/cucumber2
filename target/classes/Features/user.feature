Feature: jbk create user contact

Scenario Outline: jbk create user Scenario

Given User is already on login page
When title of login page is Admin LTE
Then User inputs "<username>" and "<password>"
Then User clicks login button
Then User is on Home page
Then User clicks Users
Then User clicks Add User
Then User enters "<Username>"and "<Mobile>"and"<Email>"and"<Gender>"and"<State>"and"<Password>"


Examples:
		| username        | password | Username | Mobile     | Email         | Gender | State       | Password |
		| kiran@gmail.com | 123456   | Roshan   | 8668342657 | abc@gmail.com | male   | maharashtra | abc234   |