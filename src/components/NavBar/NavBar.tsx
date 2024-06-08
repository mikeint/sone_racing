"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useMoney } from '../../contexts/MoneyContext';
import './NavBar.css'

const Navbar = () => {
    const [data, setData] = useState({ email: '', money: null }); 
    const { money } = useMoney();
    

    return (
        <div className="navBarContainer">
            {/* Garage image on the top left side */}
			<Link href="/dashboard"> 
                <img src="images/garage.png" alt="garage" className="lg:h-60 h-40 cursor-pointer" />
			</Link>
 
            <div className="cashContainer">
                <img src={"./images/coin.png"} alt={"coin"}/>
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
