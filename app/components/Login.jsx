"use client";

import { loginUser } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState("");
    const { setAuth } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const user = await loginUser(formData);
            if (user) {
                setAuth(user);
                router.push("/");
            } else {
                setError("Invalid credentials");
            }
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            {error && <p className="my-3 font-bold text-red-500">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button
                    type="submit"
                    className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default Login;
