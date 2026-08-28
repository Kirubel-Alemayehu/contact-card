// this is the register 
 import React, { useState } from "react";

export default function Register({ onRegister, onSwitchToLogin }) {

    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("USER");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");


        if (!username.trim()) {
            setError("Please enter a username.");
            return;
        }

        if (!email.trim() || !email.includes("@")) {
            setError("Please enter a valid email.");
            return;
        }

        if (!password) {
            setError("Please enter a password.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }


        const newUser = {
            username: username,
            fullName: fullName,
            email: email,
            password: password,
            role: role
        };


        const result = onRegister(newUser);


        if (!result.success) {
            setError(result.message);
            return;
        }


        setSuccess("Registration successful!");

        setUsername("");
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("USER");


        setTimeout(() => {
            onSwitchToLogin();
        }, 1000);
    };


    return (
        <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold text-white text-center mb-6">
                Create Account
            </h2>


            {error && (
                <div className="bg-red-500/20 text-red-400 p-3 rounded-xl mb-4">
                    {error}
                </div>
            )}


            {success && (
                <div className="bg-green-500/20 text-green-400 p-3 rounded-xl mb-4">
                    {success}
                </div>
            )}


            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                />


                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                />


                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                />


                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="MANAGER">MANAGER</option>
                </select>


                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                />


                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                />


                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl"
                >
                    Register
                </button>

            </form>


            <p className="text-center text-slate-400 mt-5">
                Already have an account?{" "}

                <button
                    onClick={onSwitchToLogin}
                    className="text-indigo-400 font-semibold"
                >
                    Login
                </button>
            </p>

        </div>
    );
}