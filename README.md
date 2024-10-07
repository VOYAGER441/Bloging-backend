# 📝 Blogify Backend

Welcome to **Blogify Backend** – the powerhouse behind a sleek and efficient blogging platform! 🚀 This backend enables users to create, manage, and read insightful blogs with ease. Built with Node.js and Express.js, we ensure smooth operations while MongoDB handles all the data like a pro. 💾

## 🌟 Features

- **User Authentication**: Secure login/signup system for users 🔐.
- **Blog CRUD Operations**: Create, Read, Update, and Delete your blogs effortlessly ✍️.
- **Comment System**: Interact with blogs by leaving comments 💬.
- **Robust Validation**: All inputs are validated using Joi to ensure data integrity ✅.
- **RESTful APIs**: Clean and well-documented APIs for seamless integration with frontend apps 🌐.
- **MongoDB for Storage**: Blog posts and users are securely stored in a non-relational database powered by MongoDB 🗄️.
  
## 🛠️ Technologies

- **Node.js**: The JavaScript runtime that powers the server-side 💻.
- **Express.js**: Fast and minimalist web framework for building APIs 🏎️.
- **MongoDB**: Non-relational database for flexible data storage 📊.
- **Joi**: Elegant schema validation to ensure correct input formats and data consistency 📏.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher) 🌱
- MongoDB instance (local or cloud) 🌍

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VOYAGER441/blogify-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blogify-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   
   Create a `.env` file and add the following keys:

   ```
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_secret_key
   PORT=your_preferred_port
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

   Your API is now live at `http://localhost:3000`! 🎉

## 🛡️ API Documentation

### Endpoints:

1. **User Authentication**:
   - `POST /api/auth/signup`: Register a new user 👤
   - `POST /api/auth/login`: Log in with user credentials 🔑

2. **Blog Management**:
   - `GET /api/blogs`: Fetch all blogs 📰
   - `POST /api/blogs`: Create a new blog 📝
   - `PUT /api/blogs/:id`: Update a blog post 🛠️
   - `DELETE /api/blogs/:id`: Delete a blog post 🗑️

3. **Comments**:
   - `POST /api/blogs/:id/comments`: Add a comment to a blog post 💬
   - `GET /api/blogs/:id/comments`: Get all comments for a specific blog 📜

## 📂 Project Structure

```
blogify-backend/
│
├── models/           # Mongoose models
├── routes/           # API routes
├── controllers/      # Business logic
├── middlewares/      # Custom middleware for authentication and validation
├── config/           # Database and environment configurations
└── utils/            # Utility functions
```

## 🤝 Contributing

Feel free to submit issues or pull requests to make **Blogify Backend** even better! 🙌

---

**Happy Coding!** ✨
