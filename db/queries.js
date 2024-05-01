// import mongoose from "mongoose";
import { itemModel } from "@/models/item-model";
// import { userModel } from "@/models/user-model";
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

export { getAllItems, getCategories, getItemById, getItemsByCategory };
