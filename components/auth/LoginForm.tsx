"use client";

import { login } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === "manan@testmail.com" && password === "1234") {
        dispatch(login({ email }));
        router.push("/");
        } else {
        setError("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center">
            <form
            onSubmit={handleLogin}
            className="w-full max-w-md bg-white p-6 rounded-lg shadow"
            >
            <h1 className="text-2xl font-semibold mb-6 text-center">
                Login
            </h1>

            {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
            )}

            <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 mb-4 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-4 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-black text-white py-2 rounded">
                Login
            </button>
            </form>
        </div> 
    );
}