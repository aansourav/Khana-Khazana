"use client";

import { usePathname } from "next/navigation";

const RecipeMenuText = () => {
    const path = usePathname();
    return (
        <span
            className={`${
                (path.includes("/category/") || path.includes("/details/")) &&
                "active"
            }`}
        >
            {path.includes("/category/") ? "Category" : "Recipe"}
        </span>
    );
};

export default RecipeMenuText;
