# Shopping List App

The app organizes your shopping with custom categories, real-time syncing, and a clean interface designed for quick item management. 

---

## Additional Features

### 1. Error Handling & Edge Cases

Comprehensive error handling implemented across the application,
edge case scenarios properly managed to ensure stable user experience. 
For example: design for empty shopping list, missing categories, etc. 


### 2. Product Deletion

Users can now remove products from their lists.

### 3. Enhanced Category View

Category cards can now be expand and collapse when they contain more than 3 items.

### 4. Notification System

Notification system alerts users of database save errors, general application errors and success in saving the data.

---

## Tech Stack
- **Frontend**: React + TypeScript + Material UI
- **State Management**: Redux Toolkit
- **Backend**: Node.js + TypeScript + Express + prisma (ORM)
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Client), Render (Server)

---

## Live Demo

- **Client**: [https://shopping-list-tau-eight.vercel.app/](https://shopping-list-tau-eight.vercel.app/)
- **Server**: hosted on [https://shoppinglist-server-p943.onrender.com](https://shoppinglist-server-p943.onrender.com) (To see the categories run https://shoppinglist-server-p943.onrender.com/api/categories)

---

## How to Run Locally

### 1. Install the following on your computer::
- Git
- Node (latest version)

### 2. Clone the repository
```bash
git clone https://github.com/moriagr/ShoppingList.git
cd ShoppingList
```

### 3. Setup Server

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

