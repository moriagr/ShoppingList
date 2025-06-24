import mongoose, { Schema, Document } from "mongoose";

export interface Item {
    name: string;
    category: number;
    quantity: number;
}

export interface ShoppingListInterface extends Document {
    items: Item[];
    createdAt: Date;
}

const ItemSchema: Schema = new Schema({
    name: { type: String, require: true, unique: true },
    category: { type: Number, require: true },
    quantity: { type: String, default: 1 }
});

const ShoppingListSchema: Schema = new Schema({
    items: [ItemSchema],
    createAt: { type: Date, default: Date.now }
});

export default mongoose.model<ShoppingListInterface>('ShoppingList', ShoppingListSchema);