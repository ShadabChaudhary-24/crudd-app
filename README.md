# CRUD App

This is a simple backend service built with **Node.js** and **Fastify** that demonstrates CRUD operations for `User` and `KYC` entities.

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Fastify
* **Databases:** PostgreSQL & MongoDB

---

## Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ShadabChaudhary-24/crudd-app.git
    cd crud-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Create a `.env` file**
    Configure environment variables (Database URIs, Port, etc.) in a root `.env` file.

4.  **Start the server**
    ```bash
    npm run start
    ```  

---

## 📂 Project Structure

```text
crud-app/
├── src/
│   ├── app.js           # App entry point & plugin registration
│   ├── server.js        # Server listener
│   ├── routes/          # API Route definitions
│   │   ├── userRoutes.js
│   │   └── kycRoutes.js
│   ├── controllers/     # Request logic handlers
│   ├── services/        # Database interaction logic
│   └── schemas/         # JSON validation schemas
├── .env                 # Environment configuration
├── package.json         # Project metadata & dependencies
└── README.md            # Documentation
```

## API Contracts

### User APIs

- **POST /users**  
  Request: {name, email, password},
  Response: {id, message}

- **GET /users/:id**  
  Response: {id, name, email}

- **PUT /users/:id**  
  Request: {name, email},
  Response: {id, message}

- **DELETE /users/:id**  
  Response: {message}

### KYC APIs

- **POST /users/:id/kyc**  
  Request: {aadhar, pan},
  Response: {message}

- **GET /users/:id/kyc**  
  Response: {userId, aadhar, pan}

- **PUT /users/:id/kyc**  
  Request: {aadhar, pan},
  Response: {message}

- **DELETE /users/:id/kyc**  
  Response: {message}


## Validations
* All API request bodies are validated using Fastify JSON schemas.

* Required fields are strictly enforced (e.g., name, email, password for users; aadhar, pan for KYC).

* Schema validation occurs at the routing level before reaching the controller, ensuring clean data flow.

## Error Handling
* 400 Bad Request: Triggered by validation errors or missing required fields.

* 404 Not Found: Triggered when a requested User or KYC record does not exist.

* 500 Internal Server Error: A fallback for unexpected server-side issues.


## Testing the APIs

1.   **Run test**
    ```bash
    npm test
    ```  


## Test Coverage

### User Tests

- **Create User (POST /users)**

### KYC Tests

- **Create KYC (POST /users/:id/kyc)**
