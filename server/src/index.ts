import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/category.routes';
import shoppingListRoutes from './routes/shoppingList.routes';
import { connectDB } from './db';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/categories', categoryRoutes);
app.use('/api/shopping-list', shoppingListRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
