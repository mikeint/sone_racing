import React from "react";
import Navbar from "@/components/Navbar";
import UsersGarage from "@/components/UsersGarage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession();
    console.log("dashboard (Serverside) Sesh:", session)
    if (!session) {
        redirect("/login");
    }
	
    return (
        <>
            <Navbar />
            <UsersGarage />
        </>
    );
};

export default Dashboard;