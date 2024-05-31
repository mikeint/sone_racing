"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full">
			<Link href="/dashboard"> 
                <img src="./Images/garage.png" alt="garage" className="lg:h-60 h-40 cursor-pointer" />
			</Link>
        </div>
    );
};

export default Navbar;
