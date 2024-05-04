"use client";

import { toggleFavourite } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { toast, Zoom } from "react-toastify";

const FavouriteButton = ({ itemId }) => {
    const { auth, setAuth } = useAuth();
    const [isFavourite, setIsFavourite] = useState(null);

    useEffect(() => {
        const isFav = auth?.favourites.includes(itemId);
        if (isFav) {
            setIsFavourite(true);
        }
    }, [auth?.favourites, itemId]);

    async function handleToggleFavourite() {
        if (auth) {
            setIsFavourite(!isFavourite);
            const res = await toggleFavourite(itemId, auth.id);
            setAuth({ ...auth, favourites: res });
        } else {
            toast.error("Please login to favourite this recipe", {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
        }
    }
    return (
        <div
            className={`flex gap-2 ${
                isFavourite ? "text-[#eb4a36]" : "text-gray-600"
            } cursor-pointer hover:text-[#eb4a36]`}
            onClick={handleToggleFavourite}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={`${isFavourite ? "#eb4a36" : "none"}`}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                alt="Favourite button icon"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
            <span>Favourite</span>
        </div>
    );
};

export default FavouriteButton;
