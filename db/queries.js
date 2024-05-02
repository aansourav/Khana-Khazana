import { itemModel } from "@/models/item-model";
import { userModel } from "@/models/user-model";
import { revalidatePath } from "next/cache";

import {
    replaceMongoIdInArray,
    replaceMongoIdInObject,
} from "@/utils/data-util";

async function getAllItems() {
    const allItems = await itemModel.find().lean();
    return replaceMongoIdInArray(allItems);
}

async function getItemById(id) {
    const item = await itemModel.findById(id).lean();
    return replaceMongoIdInObject(item);
}

async function getCategories() {
    const allItems = await itemModel.find().lean();
    const uniqueCategories = new Set();
    allItems.forEach((recipe) => {
        uniqueCategories.add(recipe.category);
    });
    const uniqueCategoriesArray = Array.from(uniqueCategories);
    return uniqueCategoriesArray;
}

async function getItemsByCategory(category) {
    const items = await itemModel.find({ category }).lean();
    return replaceMongoIdInArray(items);
}

async function createUser(user) {
    return await userModel.create(user);
}

async function findUser(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

async function getUserById(authId) {
    const user = await userModel.findById(authId).lean();
    return replaceMongoIdInObject(user);
}

async function updateFavourite(itemId, authId) {
    const user = await userModel.findById(authId);

    if (user) {
        const isFavourite = user.favourites.find(
            (id) => id.toString() === itemId
        );

        if (isFavourite) {
            user.favourites.pull(itemId);
            await user.save();
            revalidatePath(`/details/${itemId}`);
            return user.favourites;
        } else {
            user.favourites.push(itemId);
            await user.save();
            revalidatePath(`/details/${itemId}`);
            return user.favourites;
        }
    } else {
        return { message: "Please login first!" };
    }
}

export {
    createUser,
    findUser,
    getAllItems,
    getCategories,
    getItemById,
    getItemsByCategory,
    getUserById,
    updateFavourite,
};
