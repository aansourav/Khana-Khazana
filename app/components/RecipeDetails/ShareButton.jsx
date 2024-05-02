"use client";

import { FacebookShareButton } from "react-share";

const ShareButton = ({ id }) => {
    const url = `https://khanakhazana-aansourav.vercel.app/details/${id}`;
    return (
        <span>
            <FacebookShareButton url={url}>Share</FacebookShareButton>
        </span>
    );
};

export default ShareButton;
