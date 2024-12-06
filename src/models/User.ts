import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: string,
        required: true,
        trim: true
    },
    email: {
        type: string,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: string,
        required: true,
        trim: true
    },
})

const User = mongoose.model("User", userSchema)
export default User


