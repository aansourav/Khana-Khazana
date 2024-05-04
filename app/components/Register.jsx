"use client";
import { registerUser } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const response = await registerUser(formData);
            if (response?.message) {
                setError(response.message);
                return;
            }
            router.push("/login");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            {error && <p className="my-3 font-bold text-red-500">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" />
                </div>
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
                    Create Account
                </button>
            </form>
        </>
    );
};

export default Register;
