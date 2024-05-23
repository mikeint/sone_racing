import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GameBoard from "@/components/GameBoard/GameBoard";

const Board = async () => {
    const session = await getServerSession();
    console.log("dashboard (Serverside) Sesh:", session)
    if (!session) {
        redirect("/login");
    }

    return (
        <GameBoard />
    );
};

export default Board;