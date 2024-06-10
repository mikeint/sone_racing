"use client";
import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full">
			<Link href="/dashboard"> 
                <Image width={500} height={500} src="/Images/garage.png" alt="garage" className="lg:h-60 h-40 w-69 cursor-pointer" />
			</Link>
        </div>
    );
};

export default Navbar;
