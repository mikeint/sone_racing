"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useMoney } from '../../contexts/MoneyContext';
import './NavBar.css'
import Image from 'next/image';

const Navbar = () => {
    const [data, setData] = useState({ email: '', money: null }); 
    const { money } = useMoney();
    

    return (
        <div className="navBarContainer">
            {/* Garage image on the top left side */}
			<Link href="/dashboard"> 
                <Image width={500} height={500} src="/Images/garage.png" alt="garage" className="navBarImage" />
			</Link>
 
            <div className="cashContainer">
                <Image width={500} height={500} src={"/Images/coin.png"} alt={"coin"}/>
                {money}
            </div>
            
            {/* Email and Logout button on the top right side */}
            <div className="flex items-center space-x-4">
                {data ? (
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
