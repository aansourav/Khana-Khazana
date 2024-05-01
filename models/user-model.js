import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    favourites: {
        required: true,
        type: Array,
    },
});

export const userModel =
    mongoose.models.users ?? mongoose.model("users", schema);
