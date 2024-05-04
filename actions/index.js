"use server";

import { createUser, findUser, updateFavourite } from "@/db/queries";

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const response = await createUser(user);
    if (response?.message) {
        return response;
    }
}

async function loginUser(formData) {
    try {
        const credentials = {};
        credentials.email = formData.get("email");
        credentials.password = formData.get("password");
        const user = await findUser(credentials);
        return user;
    } catch (error) {
        throw new Error("Invalid credentials");
    }
}

async function toggleFavourite(itemId, authId) {
    try {
        const res = await updateFavourite(itemId, authId);
        return res;
    } catch (error) {
        throw error;
    }
}

export { loginUser, registerUser, toggleFavourite };
