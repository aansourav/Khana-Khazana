"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Wrong from "../public/images/wrong.gif";

const Error = () => {
    const router = useRouter();

    return (
        <div class="flex flex-col justify-center items-center h-[75vh]">
            <Image src={Wrong} alt="Something went wrong" />
            <p class="text-black text-4xl font-extrabold mb-4">
                Oops! Something went wrong!
            </p>

            <button
                onClick={() => router.back()}
                class="px-4 py-2 border border-[#171923] bg-white text-lg text-gray-800 font-bold rounded shadow-xl hover:bg-[#eb4a36] hover:text-white w-40 mx-auto mt-6"
            >
                Go Back
            </button>
        </div>
    );
};

export default Error;
