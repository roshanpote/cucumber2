$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Shri Gajanan/workspace123/Cucumbert/src/main/java/Features/tdatamap.feature");
formatter.feature({
  "line": 1,
  "name": "tdata creation",
  "description": "",
  "id": "tdata-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Jbk Login Test Scenario",
  "description": "",
  "id": "tdata-creation;jbk-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Admin LTE",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User inputs username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Users",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks Add User",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters detais",
  "rows": [
    {
      "cells": [
        "Username",
        "Mobile",
        "Email",
        "password"
      ],
      "line": 15
    },
    {
      "cells": [
        "Mayur",
        "989295486",
        "roshan4892@gmail.com",
        "jevlakkai"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User clicks operator",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks home",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks logout",
  "keyword": "Then "
});
formatter.match({
  "location": "TdatamapStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 16880010912,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.title_of_login_page_is_Admin_LTE()"
});
formatter.result({
  "duration": 41620346,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_inputs_username_and_password(DataTable)"
});
formatter.result({
  "duration": 355002403,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_login_button()"
});
formatter.result({
  "duration": 1952579664,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "duration": 7877550,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_Users()"
});
formatter.result({
  "duration": 616632365,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_Add_User()"
});
formatter.result({
  "duration": 309994544,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_enters_detais(DataTable)"
});
formatter.result({
  "duration": 6455365950,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_operator()"
});
formatter.result({
  "duration": 275904409,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_home()"
});
formatter.result({
  "duration": 108699716,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_logout()"
});
formatter.result({
  "duration": 239664328,
  "status": "passed"
});
});