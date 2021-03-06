$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("iLab.feature");
formatter.feature({
  "line": 2,
  "name": "iLaB Job",
  "description": "",
  "id": "ilab-job",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@iLaBProject"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "apply job online from ILaB website",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to navigate to iLab website on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Career and job link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter name as  \"\u003cname\u003e\" and email as \"\u003cemail\u003e\" and phone number then click Send Application button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify upload error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website;",
  "rows": [
    {
      "cells": [
        "browser",
        "name",
        "email"
      ],
      "line": 12,
      "id": "ilab-job;apply-job-online-from-ilab-website;;1"
    },
    {
      "cells": [
        "CHROME",
        "Buti",
        "automationAssessment@iLABQuality.com"
      ],
      "line": 13,
      "id": "ilab-job;apply-job-online-from-ilab-website;;2"
    },
    {
      "cells": [
        "IE",
        "Buti",
        "automationAssessment@iLABQuality.com"
      ],
      "line": 14,
      "id": "ilab-job;apply-job-online-from-ilab-website;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "apply job online from ILaB website",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@iLaBProject"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to navigate to iLab website on \"CHROME\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Career and job link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter name as  \"Buti\" and email as \"automationAssessment@iLABQuality.com\" and phone number then click Send Application button",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify upload error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 39
    }
  ],
  "location": "Tests.iWantToNavigateToILabWebsiteOn(String)"
});
formatter.result({
  "duration": 139396385542,
  "status": "passed"
});
formatter.match({
  "location": "Tests.iClickOnCareerAndJobLink()"
});
formatter.result({
  "duration": 38623425998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buti",
      "offset": 18
    },
    {
      "val": "automationAssessment@iLABQuality.com",
      "offset": 38
    }
  ],
  "location": "Tests.iEnterNameAsAndEmailAsAndPhoneNumberThenClickSendApplicationButton(String,String)"
});
formatter.result({
  "duration": 11461727151,
  "status": "passed"
});
formatter.match({
  "location": "Tests.verifyUploadErrorMessage()"
});
formatter.result({
  "duration": 1050111496,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "apply job online from ILaB website",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@iLaBProject"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to navigate to iLab website on \"IE\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Career and job link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter name as  \"Buti\" and email as \"automationAssessment@iLABQuality.com\" and phone number then click Send Application button",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify upload error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "IE",
      "offset": 39
    }
  ],
  "location": "Tests.iWantToNavigateToILabWebsiteOn(String)"
});
formatter.result({
  "duration": 53598193403,
  "status": "passed"
});
formatter.match({
  "location": "Tests.iClickOnCareerAndJobLink()"
});
formatter.result({
  "duration": 22784989447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buti",
      "offset": 18
    },
    {
      "val": "automationAssessment@iLABQuality.com",
      "offset": 38
    }
  ],
  "location": "Tests.iEnterNameAsAndEmailAsAndPhoneNumberThenClickSendApplicationButton(String,String)"
});
formatter.result({
  "duration": 11873132799,
  "status": "passed"
});
formatter.match({
  "location": "Tests.verifyUploadErrorMessage()"
});
formatter.result({
  "duration": 1158759170,
  "status": "passed"
});
});