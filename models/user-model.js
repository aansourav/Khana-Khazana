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
        unique: true,
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

// schema.pre("save", async function (next) {
//     const existingUser = await this.constructor.findOne({ email: this.email });
//     if (existingUser) {
//         const error = new Error("A user with this email already exists");
//         next(error);
//     } else {
//         next();
//     }
// });

export const userModel =
    mongoose.models?.users ?? mongoose.model("users", schema);
