# Tanmya Vishvakarma Voosh Submission

This is a Node.js application that provides user authentication using OAuth with Facebook and Twitter.

## Features
- User registration and login
- OAuth login with Facebook and Twitter
- Profile visibility settings (public/private)
- Admin can view all profiles, including private ones
- Users can edit their profile

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Postman

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-auth-app.git
   cd my-auth-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following variables:
   ```plaintext
   MONGO_URI=your_mongo_connection_string
   SESSION_SECRET=your_session_secret
   JWT_SECRET=your_jwt_secret

   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret

   TWITTER_CONSUMER_KEY=your_twitter_consumer_key
   TWITTER_CONSUMER_SECRET=your_twitter_consumer_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Register
- **URL:** `/auth/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### Login
- **URL:** `/auth/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### Logout
- **URL:** `/auth/logout`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "msg": "Logged out"
  }
  ```

### Facebook OAuth
1. **URL:** `/auth/facebook`
   - **Method:** `GET`
   - **Description:** Redirects to Facebook for authentication.

2. **URL:** `/auth/facebook/callback`
   - **Method:** `GET`
   - **Description:** Facebook will redirect to this endpoint after authentication.
   - **Response:** Redirects to `/dashboard`.

### Twitter OAuth
1. **URL:** `/auth/twitter`
   - **Method:** `GET`
   - **Description:** Redirects to Twitter for authentication.

2. **URL:** `/auth/twitter/callback`
   - **Method:** `GET`
   - **Description:** Twitter will redirect to this endpoint after authentication.
   - **Response:** Redirects to `/dashboard`.

### Get Current User's Profile
- **URL:** `/users/me`
- **Method:** `GET`
- **Headers:**
  ```plaintext
  x-auth-token: your_jwt_token
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "Bio text",
    "phone": "1234567890",
    "profileVisibility": "public",
    "photo": "photo_url",
    "role": "user"
  }
  ```

### Edit User Profile
- **URL:** `/users/me`
- **Method:** `PUT`
- **Headers:**
  ```plaintext
  x-auth-token: your_jwt_token
  ```
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "New bio text",
    "phone": "0987654321",
    "profileVisibility": "private",
    "photo": "new_photo_url"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "New bio text",
    "phone": "0987654321",
    "profileVisibility": "private",
    "photo": "new_photo_url",
    "role": "user"
  }
  ```

### Get Public Profiles
- **URL:** `/users/public`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "bio": "Bio text",
      "phone": "1234567890",
      "profileVisibility": "public",
      "photo": "photo_url",
      "role": "user"
    }
  ]
  ```

### Get All Profiles (Admin Only)
- **URL:** `/users/all`
- **Method:** `GET`
- **Headers:**
  ```plaintext
  x-auth-token: your_jwt_token
  ```
- **Response:**
  ```json
  [
    {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "bio": "Bio text",
      "phone": "1234567890",
      "profileVisibility": "private",
      "photo": "photo_url",
      "role": "user"
    }
  ]
  ```

## Usage with Postman
1. **Register a User:**
   - Open Postman.
   - Create a new `POST` request.
   - Set the URL to `http://localhost:5000/auth/register`.
   - In the `Body` tab, select `raw` and `JSON`.
   - Paste the registration JSON payload.
   - Send the request and get the JWT token from the response.

2. **Login:**
   - Create a new `POST` request.
   - Set the URL to `http://localhost:5000/auth/login`.
   - In the `Body` tab, select `raw` and `JSON`.
   - Paste the login JSON payload.
   - Send the request and get the JWT token from the response.

3. **Get Current User's Profile:**
   - Create a new `GET` request.
   - Set the URL to `http://localhost:5000/users/me`.
   - In the `Headers` tab, add `x-auth-token` with the JWT token.
   - Send the request to get the user's profile.

4. **Edit User Profile:**
   - Create a new `PUT` request.
   - Set the URL to `http://localhost:5000/users/me`.
   - In the `Headers` tab, add `x-auth-token` with the JWT token.
   - In the `Body` tab, select `raw` and `JSON`.
   - Paste the profile update JSON payload.
   - Send the request to update the user's profile.

5. **Get Public Profiles:**
   - Create a new `GET` request.
   - Set the URL to `http://localhost:5000/users/public`.
   - Send the request to get a list of public profiles.

6. **Get All Profiles (Admin Only):**
   - Create a new `GET` request.
   - Set the URL to `http://localhost:5000/users/all`.
   - In the `Headers` tab, add `x-auth-token` with the JWT token.
   - Send the request to get a list of all profiles.

## Notes
- Replace `your_mongo_connection_string`, `your_session_secret`, `your_jwt_secret`, `your_facebook_app_id`, `your_facebook_app_secret`, `your_twitter_consumer_key`, and `your_twitter_consumer_secret` with your actual credentials.
- For OAuth login, you will need to set up your Facebook and Twitter applications to get the required credentials and configure the redirect URLs.
```

This `README.md` file provides a comprehensive guide on setting up the project, using the endpoints with Postman, and configuring OAuth with Facebook and Twitter.