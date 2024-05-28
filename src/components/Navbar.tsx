"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const [data, setData] = useState({ email: '', money: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getMoney', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result = await response.json();
                localStorage.setItem('money', JSON.stringify(result.money));
                setData({ email: result.email, money: result.money });
            } catch (error:any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);
    

    return (
        <div className="flex justify-between items-center w-full px-4 py-2">
            {/* Garage image on the top left side */}
			<Link href="/dashboard"> 
                <img src="images/garage.png" alt="garage" className="lg:h-60 h-40 cursor-pointer" />
			</Link>
 
            <div className="font-bold text-lg">Cash:{data.money}</div>
            
            {/* Email and Logout button on the top right side */}
            <div className="flex items-center space-x-4">
                {data ? (
                    <>
                        <div>{data.email}</div>
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
