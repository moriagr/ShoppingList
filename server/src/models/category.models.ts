import mongoose, { Schema, Document } from "mongoose";

export interface CategoryInterface extends Document {
    name: string;
}

const CategorySchema: Schema = new Schema({
    name: { type: String, require: true, unique: true }
});

export default mongoose.model<CategoryInterface>('Category', CategorySchema);