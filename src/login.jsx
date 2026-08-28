import React, { useState } from "react";

import {
    initialUsers,
    login,
    logout,
    register,
    update,
    deleteUser
} from "./usermanagement";

import Register from "./Register";


export default function Login() {

    const [users, setUsers] = useState(initialUsers);

    const [currentUser, setCurrentUser] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [mode, setMode] = useState("login");


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");


    // LOGIN
    const handleLogin = (e) => {

        e.preventDefault();

        setError("");

        const result = login(users, username, password);

        if (!result.success) {
            setError(result.message);
            return;
        }

        setCurrentUser(result.user);

        setIsLoggedIn(true);
    };


    // LOGOUT
    const handleLogout = () => {

        const result = logout();

        setCurrentUser(result.currentUser);

        setIsLoggedIn(result.isLoggedIn);

        setUsername("");
        setPassword("");
    };


    // REGISTER
    const handleRegister = (newUser) => {

        const result = register(users, newUser);

        if (result.success) {
            setUsers(result.updatedUsers);
        }

        return result;
    };


    // UPDATE
    const handleUpdate = (username) => {

        const result = update(
            users,
            username,
            {
                fullName: "Updated Name"
            }
        );

        if (result.success) {
            setUsers(result.updatedUsers);
        }
    };


    // DELETE
    const handleDelete = (username) => {

        const result = deleteUser(users, username);

        setUsers(result.updatedUsers);
    };


    // REGISTER PAGE
    if (mode === "register") {

        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

                <Register
                    onRegister={handleRegister}
                    onSwitchToLogin={() => setMode("login")}
                />

            </div>
        );
    }


    // DASHBOARD
    if (isLoggedIn) {

        return (
            <div className="min-h-screen bg-slate-950 text-white p-8">

                <div className="max-w-5xl mx-auto">

                    <div className="flex justify-between items-center mb-8">

                        <div>
                            <h1 className="text-3xl font-bold">
                                Welcome, {currentUser.fullName}
                            </h1>

                            <p className="text-slate-400">
                                @{currentUser.username}
                            </p>
                        </div>


                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-5 py-2 rounded-xl"
                        >
                            Logout
                        </button>

                    </div>


                    <div className="bg-slate-800 rounded-2xl p-6">

                        <h2 className="text-2xl font-bold mb-5">
                            User Management
                        </h2>


                        <table className="w-full">

                            <thead>
                                <tr className="text-left border-b border-slate-700">

                                    <th className="p-3">
                                        Name
                                    </th>

                                    <th className="p-3">
                                        Username
                                    </th>

                                    <th className="p-3">
                                        Email
                                    </th>

                                    <th className="p-3">
                                        Role
                                    </th>

                                    <th className="p-3">
                                        Actions
                                    </th>

                                </tr>
                            </thead>


                            <tbody>

                                {users.map((user) => (

                                    <tr
                                        key={user.id}
                                        className="border-b border-slate-700"
                                    >

                                        <td className="p-3">
                                            {user.fullName}
                                        </td>

                                        <td className="p-3">
                                            @{user.username}
                                        </td>

                                        <td className="p-3">
                                            {user.email}
                                        </td>

                                        <td className="p-3">
                                            {user.role}
                                        </td>

                                        <td className="p-3 space-x-2">

                                            <button
                                                onClick={() =>
                                                    handleUpdate(user.username)
                                                }
                                                className="bg-blue-600 px-3 py-1 rounded"
                                            >
                                                Update
                                            </button>


                                            <button
                                                onClick={() =>
                                                    handleDelete(user.username)
                                                }
                                                className="bg-red-600 px-3 py-1 rounded"
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        );
    }


    // LOGIN PAGE
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

            <div className="w-full max-w-md bg-slate-800 rounded-3xl p-8 shadow-2xl">

                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Login
                </h2>


                {error && (
                    <div className="bg-red-500/20 text-red-400 p-3 rounded-xl mb-4">
                        {error}
                    </div>
                )}


                <form onSubmit={handleLogin} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                    />


                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                    />


                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl"
                    >
                        Login
                    </button>

                </form>


                <p className="text-center text-slate-400 mt-5">

                    Don't have an account?{" "}

                    <button
                        onClick={() => setMode("register")}
                        className="text-indigo-400 font-semibold"
                    >
                        Register
                    </button>

                </p>

            </div>

        </div>
    );
}
