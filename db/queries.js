// import mongoose from "mongoose";
import { itemModel } from "@/models/item-model";
// import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

async function getAllItems() {
    const allItems = await itemModel.find().lean();
    return replaceMongoIdInArray(allItems);
}

export { getAllItems };
