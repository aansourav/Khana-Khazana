"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logout = () => {
        setAuth(null);
        router.push("/login");
    };

    return (
        <div>
            {auth ? (
                <>
                    <span
                        className="cursor-pointer py-2 bg-[#eb4a36] px-6  rounded-md text-white content-center"
                        onClick={logout}
                    >
                        Logout
                    </span>
                </>
            ) : (
                <Link
                    href="/login"
                    className="py-2 bg-[#eb4a36] px-6  rounded-md text-white content-center"
                >
                    Login
                </Link>
            )}
        </div>
    );
};

export default SignInOut;
