"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session }: any = useSession();
    return (
        <div className="flex justify-between items-center w-full px-4 py-2">
            {/* Garage image on the top left side */}
			<Link href="/dashboard"> 
                <img src="./Images/garage.png" alt="garage" className="h-10 cursor-pointer" />
			</Link>

            {/* Email and Logout button on the top right side */}
            <div className="flex items-center space-x-4">
                {session ? (
                    <>
                        <div>{session.user?.email}</div>
                        <button
                            onClick={() => {
                                signOut();
                            }}
                            className="p-2 px-5 bg-blue-300 rounded-lg"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <div className="flex bg-blue-500 rounded-lg">
                            <Link href="/login">
                                <p className="p-2">Login</p>
                            </Link>
                        </div>
                        <div className="flex bg-blue-500 rounded-lg">
                            <Link href="/register">
                                <p className="p-2">Register</p>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
