# 📚 BookStore-MERN

A full-stack **MERN (MongoDB, Express, React, Node.js)** application for managing books.  
Users can view books in table or card layout, add new books, edit details, delete books, and preview book information using a modal.

---

## 🚀 Features

- 📖 View books in **Table View**
- 🗂️ View books in **Card View**
- ➕ Add new books
- ✏️ Edit existing books
- 🗑️ Delete books with confirmation
- 👁️ Quick preview modal for books
- 🎨 Modern UI using **Tailwind CSS**
- 🌐 REST API with Node.js & Express
- 🗄️ MongoDB database with Mongoose

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

BookStore-MERN/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rushi0612/BookStore-MERN.git
cd BookStore-MERN

2️⃣ Backend Setup
cd backend
npm install
Create a .env file:

PORT=5000
MONGODB_URI=your_mongodb_connection_string


Start backend server:

npm run dev


Backend runs on:
👉 http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:
👉 http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get single book
POST	/books	Add new book
PUT	/books/:id	Update book
DELETE	/books/:id	Delete book
🧪 Usage

Switch between Table View and Card View

Click ➕ to add a new book

Use ✏️ to edit book details

Use 🗑️ to delete a book

Click 👁️ to open book preview modal

📝 Git Commit Convention

This project follows Conventional Commits:

Prefix	Meaning
feat	New feature
fix	Bug fix
refactor	Code improvement
style	UI / CSS changes
docs	Documentation

Example:

feat(ui): add book quick-view modal

🚀 Future Improvements

🔍 Search & filter books

📄 Pagination

🔐 Authentication (JWT)

🌙 Dark mode

⭐ Favorites

📜 License
👨‍💻 Author

Rushikesh Patil
GitHub: https://github.com/rushi0612
