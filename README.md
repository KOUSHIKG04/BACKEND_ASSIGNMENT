# Activity Booking API

This is a backend API for an activity booking system. It allows users to register, log in, create activities, book activities, and view their bookings.

## Features

- **User Authentication**:

  - Register new users.
  - Login with email and password.
  - JWT-based authentication.
- **Activity Management**:

  - Create new activities.
  - List all available activities.
- **Booking Management**:

  - Book an activity.
  - View all bookings made by the user.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/KOUSHIKG04/BACKEND_ASSIGNMENT.git
   cd BACKEND_ASSIGNMENT
   ```
2. Install dependencies:

   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL=mongodb://localhost:27017/activity-booking
   JWT_SECRET=your_jwt_secret
   PORTNUM=5000
   ```
4. Start the server:

   ```
   node server.js
   ```
5. The API will be running at `http://localhost:5000`.

## API Endpoints

### Authentication

* **POST** `/api/users/register`
  Register a new user.

  ```
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
* **POST** `/api/users/login`
  Login with email and password.

  ```
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```


### Activities

* **POST** `/api/activities/add-activity`
  Create a new activity (requires admin privileges).

  ```
  {
    "title": "Yoga Class",
    "description": "A relaxing yoga session.",
    "location": "Community Center",
    "datetime": "2025-05-10T10:00:00Z"
  }
  ```
* **GET** `/api/activities`
  List all activities.

### Bookings

* **POST** `/api/activities/:id/book`
  Book an activity (requires authentication).
  **Path Parameter** :
  * `id`: Activity ID.
* **GET** `/api/activities/my-bookings`
  View all bookings made by the authenticated user.

## Project Structure

```
backend-assignment/
├── models/             # Mongoose models for User, Activity, and Booking
├── controllers/        # Controller logic for handling requests
├── routes/             # API route definitions
├── middleware/         # Middleware (e.g., authentication)
├── config/             # Database configuration
├── app.js              # Express app setup
├── server.js           # Server entry point
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```


## Dependencies

* `bcryptjs`: For password hashing.
* `cors`: For handling cross-origin requests.
* `dotenv`: For environment variable management.
* `express`: Web framework for Node.js.
* `express-validator`: For request validation.
* `jsonwebtoken`: For JWT-based authentication.
* `mongoose`: For MongoDB object modeling.

## License

This project is licensed under the ISC License.

## Author

Developed by [KOUSHIKG04](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).
