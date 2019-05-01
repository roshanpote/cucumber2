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
        "Email"
      ],
      "line": 15
    },
    {
      "cells": [
        "Mayur",
        "989295486",
        "roshan4892@gmail.com"
      ],
      "line": 16
    },
    {
      "cells": [
        "Suraj",
        "9834295486",
        "roshan482@gmail.com"
      ],
      "line": 17
    },
    {
      "cells": [
        "mayank",
        "23423295486",
        "roshan92@gmail.com"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TdatamapStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 7324547685,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.title_of_login_page_is_Admin_LTE()"
});
formatter.result({
  "duration": 19378231,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_inputs_username_and_password(DataTable)"
});
formatter.result({
  "duration": 328968600,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_login_button()"
});
formatter.result({
  "duration": 2094443553,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "duration": 9261015,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_Users()"
});
formatter.result({
  "duration": 368656348,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_clicks_Add_User()"
});
formatter.result({
  "duration": 290108421,
  "status": "passed"
});
formatter.match({
  "location": "TdatamapStepDefination.user_enters_detais(DataTable)"
});
formatter.result({
  "duration": 2969566244,
  "status": "passed"
});
});