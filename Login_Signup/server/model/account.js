import mongoose from "mongoose";
// Define the schema for the user entity
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
// Create and export the Mongoose model for the "users" collection based on the userSchema
export default mongoose.model("users", userSchema);