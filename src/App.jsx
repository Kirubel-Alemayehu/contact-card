import React, { useState } from "react";

import "./App.css";

import Contact from "./Components/Contact";
import Login from "./Components/Login";


export default function App() {

    const contacts = [
        {
            name: "abebe kebedee",
            email: "abebe@gmail.com",
            phone: "+251-966-111-111",
            profile_picture: "/assets/vite.svg"
        },
        {
            name: "kirubel shimeles",
            email: "kirubel@gmail.com",
            phone: "+251-933-222-222",
            profile_picture: "/assets/vite.svg"
        },
        {
            name: "seifu fantaye",
            email: "seifu@gmail.com",
            phone: "+251-944-333-333",
            profile_picture: "/assets/vite.svg"
        }
    ];


    const [activeTab, setActiveTab] = useState("login");


    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* NAVIGATION */}

            <header className="bg-slate-900 border-b border-slate-800 p-5">

                <div className="flex justify-between items-center">

                    <h1 className="text-xl font-bold">
                        Web II Lab
                    </h1>


                    <div className="space-x-2">

                        <button
                            onClick={() => setActiveTab("login")}
                            className="bg-indigo-600 px-4 py-2 rounded-lg"
                        >
                            User Management
                        </button>


                        <button
                            onClick={() => setActiveTab("contacts")}
                            className="bg-indigo-600 px-4 py-2 rounded-lg"
                        >
                            Contacts
                        </button>

                    </div>

                </div>

            </header>


            {/* CONTENT */}

            <main>

                {activeTab === "login" ? (

                    <Login />

                ) : (

                    <div className="p-8">

                        <h2 className="text-3xl font-bold text-center mb-8">
                            Contact Information
                        </h2>


                        <div className="flex flex-wrap justify-center">

                            {contacts.map((contact, index) => (

                                <Contact
                                    key={index}
                                    name={contact.name}
                                    email={contact.email}
                                    phone={contact.phone}
                                    profile_picture={contact.profile_picture}
                                />

                            ))}

                        </div>

                    </div>

                )}

            </main>

        </div>
    );
}