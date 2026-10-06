# 📚 Book API

A RESTful **Book Management API** built using **Node.js, Express.js, MongoDB, and Mongoose**.

This project provides APIs to manage book data with CRUD operations and supports **book image uploads** using Multer.

## 🚀 Features

* 📖 Add a new book
* 📚 Get all books
* 🔍 Get a single book by ID
* ✏️ Update book details
* 🗑️ Delete a book
* 🖼️ Upload book images
* 🍃 MongoDB database integration
* ⚡ Express.js REST API
* 🧩 Controller, Model, Route and Middleware structure
* ❌ Error handling middleware

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Multer**
* **dotenv**
* **Postman**
* **JavaScript / ES Modules**

## 📁 Project Structure

```text
Book_Api/
│
├── config/
│   └── db.js
│
├── controller/
│   └── book.controller.js
│
├── middleware/
│   ├── HttpError.js
│   └── uploade.js
│
├── model/
│   └── book.model.js
│
├── routes/
│   └── book.routes.js
│
├── uploads/
│   └── bookImage/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tirthsalot/Book_Api.git
```

### 2. Go to Project Directory

```bash
cd Book_Api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env` File

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

### 5. Start the Server

For development:

```bash
npm run dev
```

Or:

```bash
node server.js
```

The API will run on:

```text
http://localhost:5000
```

## 🔗 API Endpoints

| Method   | Endpoint          | Description    |
| -------- | ----------------- | -------------- |
| `POST`   | `/addBook`        | Add a new book |
| `GET`    | `/showAllBook`    | Get all books  |
| `GET`    | `/showBook/:id`   | Get book by ID |
| `PUT`    | `/updateBook/:id` | Update book    |
| `DELETE` | `/deleteBook/:id` | Delete book    |

> **Note:** Use the exact route prefix configured in `server.js` when calling these endpoints.

## 📖 Add Book

### Request

```http
POST /addBook
```

Use **form-data** in Postman.

Example:

```text
bookName       → The Alchemist
bookAuthor     → Paulo Coelho
bookPrice      → 499
bookCategory   → Fiction
bookImage      → [Select Image]
```

The `bookImage` field is handled using Multer.

## 📚 Get All Books

```http
GET /showAllBook
```

Returns all books stored in MongoDB.

## 🔍 Get Book By ID

```http
GET /showBook/:id
```

Example:

```http
GET /showBook/68abc123...
```

## ✏️ Update Book

```http
PUT /updateBook/:id
```

Use the book ID to update the required book information.

## 🗑️ Delete Book

```http
DELETE /deleteBook/:id
```

Example:

```http
DELETE /deleteBook/68abc123...
```

## 🖼️ Image Upload

This project uses **Multer** for handling book image uploads.

Uploaded images are stored inside:

```text
uploads/
└── bookImage/
```

The upload middleware processes the `bookImage` field before the request reaches the controller.

## 🗄️ Database

This project uses **MongoDB** as the database and **Mongoose** for creating schemas and interacting with MongoDB.

Database connection is handled inside:

```text
config/db.js
```

## 🧩 Project Architecture

The project follows a simple backend structure:

```text
Client / Postman
       ↓
     Routes
       ↓
   Middleware
       ↓
   Controller
       ↓
     Model
       ↓
    MongoDB
```

### Routes

Responsible for defining API endpoints and connecting them with controllers.

### Middleware

Handles common request processing such as file uploads and error handling.

### Controller

Contains the main business logic for adding, reading, updating and deleting books.

### Model

Defines the MongoDB book schema using Mongoose.

### Config

Contains the MongoDB database connection.

## 🧪 Testing

You can test all API endpoints using **Postman**.

Recommended testing flow:

```text
1. Add Book
      ↓
2. Get All Books
      ↓
3. Get Book By ID
      ↓
4. Update Book
      ↓
5. Delete Book
```

## 🎯 Learning Objectives

This project was created to practice:

* Node.js fundamentals
* Express.js
* REST API development
* MongoDB
* Mongoose
* CRUD operations
* MVC-style project structure
* Middleware
* File uploads with Multer
* Environment variables
* API testing with Postman
* HTTP methods and status codes

## 🔮 Future Improvements

Some possible improvements:

* 🔐 JWT authentication
* 👤 User registration and login
* 🔎 Book search
* 📄 Pagination
* ✅ Request validation
* ⭐ Book ratings and reviews
* ☁️ Cloud image storage
* 📊 API documentation with Swagger

* 🎥 Project Explanation Video

▶️ Watch Project Explanation Video

## 👨‍💻 Author

**Tirth Salot**

Full Stack Developer | Node.js Developer

GitHub: **tirthsalot**

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

