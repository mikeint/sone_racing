"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full px-4 py-2">
			<Link href="/dashboard"> 
                <img src="./Images/garage.png" alt="garage" className="h-10 cursor-pointer" />
			</Link>
        </div>
    );
};

export default Navbar;
