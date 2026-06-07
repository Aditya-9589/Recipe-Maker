import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (login(email, password)) {
    //         navigate("/home");
    //     } else {
    //         alert("Please enter email and password!");
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if fields are filled first
        if (!email || !password) {
            alert("Please enter email and password!");
            return;
        }

        // Then attempt login
        if (login(email, password)) {
            navigate("/home");
        } else {
            alert("Login failed!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
            <div className="flex w-[900px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Left side (Image) */}
                <div className="w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                        alt="Food"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side (Login form) */}
                <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
                    <h2 className="text-3xl font-extrabold text-indigo-600 mb-6">
                        Welcome Back 👋
                    </h2>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>



                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-gray-600">
                        Don’t have an account?{" "}
                        <span className="text-pink-500 font-medium cursor-pointer hover:underline">
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
