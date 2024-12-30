# User Registration Endpoint Documentation

## Endpoint: `/user/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (minimum 3 characters).
  - `lastname`: A string representing the user's last name (minimum 3 characters, optional).
- `email`: A string representing the user's email (must be a valid email address).
- `password`: A string representing the user's password (minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses: 

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Missing Fields:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Notes:
- The `password` field is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.

## Endpoint: `/user/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body:
The request body should be a JSON object containing the following fields:
- `email`: A string representing the user's email (must be a valid email address).
- `password`: A string representing the user's password (minimum 6 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses: 

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes:
- The `password` field is compared with the hashed password stored in the database.
- A JWT token is generated and returned upon successful login.

## Endpoint: `/user/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the authenticated user.

### Request Headers:
- `Authorization`: A string containing the JWT token in the format `Bearer <token>`.

### Responses: 

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Unauthorized:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes:
- The user must be authenticated to access this endpoint.

## Endpoint: `/user/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user.

### Request Headers:
- `Authorization`: A string containing the JWT token in the format `Bearer <token>`.

### Responses: 

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes:
- The user must be authenticated to access this endpoint.
- The token is added to the blacklist upon successful logout.

# Captain Registration Endpoint Documentation

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body:
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string representing the captain's first name (minimum 3 characters).
  - `lastname`: A string representing the captain's last name (optional).
- `email`: A string representing the captain's email (must be a valid email address).
- `password`: A string representing the captain's password (minimum 6 characters).
- `vehicle`: An object containing:
  - `color`: A string representing the vehicle's color (minimum 3 characters).
  - `plate`: A string representing the vehicle's plate (minimum 3 characters).
  - `capacity`: An integer representing the vehicle's capacity (minimum 1).
  - `type`: A string representing the vehicle's type (must be one of `['car', 'auto', 'motorcycle']`).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "type": "car"
  }
}
```

### Responses: 

#### Success:
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "type": "car"
      }
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Captain Already Registered:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "message": "Captain already registered"
  }
  ```

### Notes:
- The `password` field is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.

## Endpoint: `/captains/login`

### Method: POST

### Description:
This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body:
The request body should be a JSON object containing the following fields:
- `email`: A string representing the captain's email (must be a valid email address).
- `password`: A string representing the captain's password (minimum 6 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses: 

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "type": "car"
      }
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes:
- The `password` field is compared with the hashed password stored in the database.
- A JWT token is generated and returned upon successful login.

## Endpoint: `/captains/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the authenticated captain.

### Request Headers:
- `Authorization`: A string containing the JWT token in the format `Bearer <token>`.

### Responses: 

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "type": "car"
      }
    }
  }
  ```

#### Unauthorized:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes:
- The captain must be authenticated to access this endpoint.

## Endpoint: `/captains/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated captain.

### Request Headers:
- `Authorization`: A string containing the JWT token in the format `Bearer <token>`.

### Responses: 

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes:
- The captain must be authenticated to access this endpoint.
- The token is added to the blacklist upon successful logout.