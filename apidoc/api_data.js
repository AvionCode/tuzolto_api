define({ "api": [
  {
    "type": "post",
    "url": "/auth/forgotpassword",
    "title": "Forgot password",
    "name": "Forgot_password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>data array</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/AuthController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>data array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>JWT token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.userdata",
            "description": "<p>user data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/AuthController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>data array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/AuthController.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/events/{id}/members",
    "title": "Event participants",
    "name": "Event_participants",
    "group": "events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>data</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.participants",
            "description": "<p>participants</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.id",
            "description": "<p>participants id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.username",
            "description": "<p>participant name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.commander",
            "description": "<p>0=önkéntes 1=parancsnok</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/EventsController.php",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/events/{id}/participate",
    "title": "Event participate",
    "name": "Event_participate",
    "group": "events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "incident_id",
            "description": "<p>incident id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/EventsController.php",
    "groupTitle": "events"
  },
  {
    "type": "get",
    "url": "/incidents/active",
    "title": "Get active incidents",
    "name": "Get_active_incidents",
    "group": "incidents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>data array</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.incidents",
            "description": "<p>incidents</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.events",
            "description": "<p>events</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/IncidentsController.php",
    "groupTitle": "incidents"
  },
  {
    "type": "get",
    "url": "/incidents/{id}/get",
    "title": "Get incident",
    "name": "Get_incident",
    "group": "incidents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/IncidentsController.php",
    "groupTitle": "incidents"
  },
  {
    "type": "post",
    "url": "/incidents/updateLocation",
    "title": "Update incident location",
    "name": "Update_incident_location",
    "group": "incidents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "incident_id",
            "description": "<p>incident id</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "lng",
            "description": "<p>lng</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/IncidentsController.php",
    "groupTitle": "incidents"
  },
  {
    "type": "post",
    "url": "/incidents/end",
    "title": "end incident (only commander)",
    "name": "end_incident__only_commander_",
    "group": "incidents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "incident_id",
            "description": "<p>incident id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/IncidentsController.php",
    "groupTitle": "incidents"
  },
  {
    "type": "get",
    "url": "/incidents/{id}/crewstatus",
    "title": "Get incident crew status",
    "name": "incident_crew_status",
    "group": "incidents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/IncidentsController.php",
    "groupTitle": "incidents"
  },
  {
    "type": "post",
    "url": "/incidents/mystatus",
    "title": "Set user status in incident",
    "name": "set_status_in_incident",
    "group": "incidents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "incident_id",
            "description": "<p>incident id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>user's incident status (onroadhq, onhq, onroadfield, onfield)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/IncidentsController.php",
    "groupTitle": "incidents"
  },
  {
    "type": "get",
    "url": "/organizations/{id}/members",
    "title": "Organization members",
    "name": "list_organization_members",
    "group": "organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>data array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.members",
            "description": "<p>members list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.members.id",
            "description": "<p>members id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.members.username",
            "description": "<p>members username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.members.schedule",
            "description": "<p>members schedule</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/OrganizationsController.php",
    "groupTitle": "organizations"
  },
  {
    "type": "get",
    "url": "/organizations/list",
    "title": "All organizations",
    "name": "list_organizations",
    "group": "organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>data array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.organizations",
            "description": "<p>organizations</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/OrganizationsController.php",
    "groupTitle": "organizations"
  },
  {
    "type": "post",
    "url": "/organizations/memberRequest",
    "title": "Member request",
    "name": "member_request",
    "group": "organizations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org_id",
            "description": "<p>Organization id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ORG_NOT_FOUND",
            "description": "<p>no organization with this id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ALREADY_MEMBER",
            "description": "<p>user is already member</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/OrganizationsController.php",
    "groupTitle": "organizations"
  },
  {
    "type": "get",
    "url": "/profile/getSchedule",
    "title": "Get schedule",
    "name": "Get_schedule",
    "group": "profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Response  data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.standby",
            "description": "<p>Standby hours</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.silent",
            "description": "<p>Silent hours</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/ProfileController.php",
    "groupTitle": "profile"
  },
  {
    "type": "post",
    "url": "/profile/updateSchedule",
    "title": "Update schedule",
    "name": "Update_schedule",
    "group": "profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Response user data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/ProfileController.php",
    "groupTitle": "profile"
  },
  {
    "type": "get",
    "url": "/profile/get",
    "title": "Get profile",
    "name": "get_profile",
    "group": "profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Response user data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/ProfileController.php",
    "groupTitle": "profile"
  },
  {
    "type": "post",
    "url": "/profile/update",
    "title": "Update profile",
    "name": "update_profile",
    "group": "profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "push_notification",
            "description": "<p>push notifications enabled (0 or 1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Response code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Response user data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "tuzolto_api/controllers/ProfileController.php",
    "groupTitle": "profile"
  }
] });
