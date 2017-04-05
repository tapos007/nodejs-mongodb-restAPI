
# NodeJS MongoDB & ExpressJS REST API Work
## use postman chrome extension to get and send data in database

## Student Insert API

####[http://gg-logic.dev/api/v1/profiles/{profile_slug}/polls/](http://gg-logic.dev/api/v1/profile/profle_slug/polls/)

####Request type - POST



##### POST Parameters

form data | Data Type | Description | Required
--- | --- | --- | ---
name | String | name of student | YES
email| String | name of student | YES
address | text | address of student | NO


##### Response

```
  {
    "student": {
      "__v": 0,
      "name": "tapos ghosh",
      "email": "tapos.aa@gmail.com",
      "_id": "58e47848b6edbc7fb860b8a6",
      "active": true,
      "address": "dhaka"
    }
  }

```


## Get All Students API

####[http://gg-logic.dev/api/v1/profiles/{profile_slug}/polls/](http://gg-logic.dev/api/v1/profile/profle_slug/polls/)

####Request type - GET



##### POST Parameters

form data | Data Type | Description | Required
--- | --- | --- | ---

##### Response

```
  {
  "students": [
    {
      "_id": "58e405554140ec0ab664f788",
      "name": "monir mama",
      "email": "monirh01@gmail.com",
      "__v": 0,
      "active": true,
      "address": "dhaka"
    },
    {
      "_id": "58e47848b6edbc7fb860b8a6",
      "name": "tapos ghosh",
      "email": "tapos.aa@gmail.com",
      "__v": 0,
      "active": true,
      "address": "dhaka"
    }
  ]
}

```

## Get a Single Student

####[http://gg-logic.dev/api/v1/profiles/{profile_slug}/polls/{poll_id}](http://gg-logic.dev/api/v1/profile/profle_slug/polls/{poll_id})

####Request type - GET

##### Route Parameters
uri|Data Type | Description |Required
--- | --- | --- | ---
studentID | string | unique id of student | Yes

##### Response

```
{
  "students": {
    "_id": "58e47848b6edbc7fb860b8a6",
    "name": "tapos ghosh",
    "email": "tapos.aa@gmail.com",
    "__v": 0,
    "active": true,
    "address": "dhaka"
  }
}
```



## Student Update API

####[http://gg-logic.dev/api/v1/profiles/{profile_slug}/polls/{poll_id}](http://gg-logic.dev/api/v1/profile/profle_slug/polls/{poll_id})

####Request type - PUT

##### Route Parameters
uri|Data Type | Description |Required
--- | --- | --- | ---
studentID | string | unique id of student | Yes



##### POST Parameters
form data | Data Type | Description | Required
--- | --- | --- | ---
name | string| Student Name | NO
email | String | Student email | NO
address |text | address of student  | NO
active | boolean | 0/1 (off/on) | NO


##### Response

```
  {
  "students": {
    "_id": "58e47848b6edbc7fb860b8a6",
    "name": "tapos 007",
    "email": "tapos.aa@gmail.com",
    "__v": 0,
    "active": true,
    "address": "dhaka"
  }
}
```


## Student Delete API

####[http://gg-logic.dev/api/v1/profiles/{profile_slug}/polls/{poll_id}](http://gg-logic.dev/api/v1/profile/profle_slug/polls/{poll_id})

####Request type - DELETE

##### Route Parameters
uri|Data Type | Description |Required
--- | --- | --- | ---
studentID | string | unique id of student | Yes

##### Response

```
  {
  "students": {
    "_id": "58e47848b6edbc7fb860b8a6",
    "name": "tapos 007",
    "email": "tapos.aa@gmail.com",
    "__v": 0,
    "active": true,
    "address": "dhaka"
  }
}
```

