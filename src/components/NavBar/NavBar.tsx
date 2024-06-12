"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useMoney } from '../../contexts/MoneyContext';
import { useSession } from "next-auth/react";
import './NavBar.css'
import Image from 'next/image';

const Navbar = () => {
    const { money } = useMoney();
    const { data: session, status } = useSession();
    const loading = status === "loading";

    const userExists = session && session.user;

    return (
        <div className="navBarContainer">
            {/* Garage image on the top left side */}
            <Link href="/dashboard"> 
                <Image width={500} height={500} src="/Images/garage.png" alt="garage" className="navBarImage" />
            </Link>
 
            {userExists ? (
                <div className="cashContainer">
                    <Image width={500} height={500} src={"/Images/coin.png"} alt={"coin"}/>
                    {money}
                </div>
            ) : null}
            
            {/* Email and Logout button on the top right side */}
            <div className="flex items-center space-x-4">
                {loading ? (
                    <p>Loading...</p>
                ) : userExists ? (
                    <>
                        <button
                            onClick={() => { signOut(); }}
                            className="p-2 px-5 bg-blue-300"
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
