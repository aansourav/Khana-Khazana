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

export { getAllItems, getItemById };
