# Shopping List App

Organize your shopping with custom categories, real-time syncing, and a clean interface designed for quick item management. 

Create multiple lists and categorize items.

---

## Tech Stack
- **Frontend**: React + TypeScript + Material UI
- **State Management**: Redux Toolkit
- **Backend**: Node.js + TypeScript + Express + prisma
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Client), Render (Server)

---

## Live Demo

- **Client**: [https://shopping-list-tau-eight.vercel.app/](https://shopping-list-tau-eight.vercel.app/)
- **Server**: [https://shoppinglist-server-p943.onrender.com](https://shoppinglist-server-p943.onrender.com)

---

## How to run the project locally

### Before installing make sure you have those thing installed on your computer:
- Git
- Node (latest version)

### 1. Clone the repository
```bash
git clone https://github.com/moriagr/ShoppingList.git
cd shopping-list
```

### 2. Setup Server

```bash
cd server
npm install
```

#### Environment Variables (`.env`)

Create `.env` file in `/server` directory with: 

```pgsql
PORT= 8080
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/shopping_list?retryWrites=true&w=majority
```

#### Build and Start the Server

```bash
npm run build
npm start
```

Server runs at `http://localhost:8080` by default (Check your code).

---

### 3. Setup Client

```bash
cd ../client
npm install
```

#### Environment Variables (`.env`)

Create `.env` file in `/client` directory with: 

```pgsql
    REACT_APP_API_URL = http://localhost:8080
```

#### Start the Client

```bash
npm start
```

Client runs at `http://localhost:3000` by default (Check your code).

---

## New Features

### 1. Error Handling & Edge Cases

Comprehensive error handling implemented across the application,
Edge case scenarios properly managed to ensure stable user experience.

### 2. Product Management

Product Deletion: Users can now remove products from their lists.

### 3. Enhanced Category View

Expandable Categories Category cards can now be expanded when they contain more than 3 items.

### 4. Notification System

Notification system alerts users of database save errors, general application errors and success in saving the data.
