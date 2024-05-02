"use client";

import { FacebookShareButton } from "react-share";

const ShareButton = ({ id }) => {
    const url = `/details/${id}`;
    return (
        <span>
            <FacebookShareButton url={url}>Share</FacebookShareButton>
        </span>
    );
};

export default ShareButton;
