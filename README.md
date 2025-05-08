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

**Backend**: Node.js, Express.js, **Database**: MongoDB (via Mongoose), **Authentication**: JWT (JSON Web Tokens), **Validation**: express-validator

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
   PORT=5000
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

This project relies on several npm packages to provide essential functionality. For secure password hashing, it uses `bcryptjs`, ensuring that user passwords are stored safely. Cross-Origin Resource Sharing (CORS) is handled by the `cors` package, allowing the API to be accessed from different domains. Environment variables are managed securely using `dotenv`, which helps keep sensitive information like database credentials and JWT secrets out of the codebase.

The backend is built on `express`, a fast and minimalist web framework for Node.js, while `express-validator` is used to validate and sanitize incoming requests, ensuring data integrity. For authentication, the project uses `jsonwebtoken` to implement JWT-based authentication, providing secure access to protected routes. Finally, `mongoose` is used for MongoDB object modeling, making it easier to define schemas and interact with the database.

## Deployment

The project is deployed on [Render](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html). You can access the live API at:

 **Base URL** :  ` https://backend-assignment-wrqp.onrender.com `

#### Testing the Deployed API

Use tools like Postman or cURL to test the API endpoints. Replace ` http://localhost:3000 ` with your Render URL in the API requests.


## Bonus Included

This project includes several additional features to enhance functionality, security, and maintainability:

* **Validation** : The API uses `express-validator` to validate and sanitize incoming requests, ensuring that only valid data is processed.
* **Password Hashing** : User passwords are securely hashed using `bcryptjs` before being stored in the database, protecting sensitive user information.
* **Clean Code and Folder Structure** : The project follows a clean and modular folder structure, separating concerns into [routes](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), [controllers](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), and [models](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for better maintainability and scalability.
* **Hosting** : The API is deployed on [Render](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), a free hosting platform, making it accessible online.
* **Comprehensive Documentation** : A detailed [README.md](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) file is provided, including setup instructions, deployment steps, and API endpoint details.

## License

This project is licensed under the ISC License.

## Author

Developed by [KOUSHIKG04](vscode-file://vscode-app/c:/Users/KOUSHIK%20G/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).
