"use client";

import { usePathname } from "next/navigation";

const HomeMenuText = () => {
    const path = usePathname();
    return <span className={`${path === "/" && "active"}`}>Home</span>;
};

export default HomeMenuText;
