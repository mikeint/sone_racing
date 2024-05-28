'use client'
import React, { useEffect, useRef } from "react"
import Peddle from '../../components/Peddle/Peddle'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import GameBoardNavBar from '../../components/GameBoardNavBar'
import './GameBoard.css'

const GameBoard: React.FC = () => {

    const diceData = [
        [1, 2, 3, 4],       // Dice 1 with 6 sides
        [1, 2, 3, 4],       // Dice 2 with 4 sides
        [1, 2, 3],          // Dice 3 with 3 sides
        [1, 2, 3, 4, 5],    // Dice 4 with 5 sides
        [1, 2, 3, 4, 5, 6], // Dice 5 with 5 sides
        [1, 2, 3, 4, 5]     // Dice 6 with 5 sides
    ];

	const { data: session, status: sessionStatus } = useSession();
	const router = useRouter();
    const wrapperRefs = useRef<HTMLDivElement[]>([]);
    const diceRefs = useRef<HTMLParagraphElement[]>([]);

    useEffect(() => {
		if (sessionStatus !== "authenticated") {
			router.replace("/login");
		}
	}, [sessionStatus, router]);
    

    useEffect(() => {
        // Initialize wrapperRefs and diceRefs arrays
        wrapperRefs.current = Array.from(
            document.querySelectorAll<HTMLDivElement>(".dice-container")
        );
        diceRefs.current = Array.from(
            document.querySelectorAll<HTMLParagraphElement>(".dice")
        );

        // Display all dice on first load
        wrapperRefs.current.forEach((wrapper, index) => {
            diceRefs.current[index].innerText = diceData[index][0].toString();
        });
    }, []);
    
    const diceThrow = () => {
        for (let i = 0; i < wrapperRefs.current.length; i++) {
            wrapperRefs.current[i].style.animationPlayState = "running";
        }
    
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                wrapperRefs.current[i].style.removeProperty("animation-play-state");
            }, Math.floor(Math.random() * 600));
        }
    
        // Generate random index for each dice
        const scores: number[] = diceData.map(dice => {
            return Math.floor(Math.random() * dice.length);
        });
        // Display the rolled dice
        scores.forEach((score, index) => {
            diceRefs.current[index].innerText = diceData[index][score].toString();
        });
        
        console.log(scores.map(score => score + 1));
    }
    

    return (
        <>
        <GameBoardNavBar />
            <div className="flex">
                <div className="wrapper">
                    {diceData.map((dice, index) => (
                        <div className="dice-wrapper" key={index}>
                            <div className="dice-container">
                                <p className="dice" ref={(el) => (diceRefs.current[index] = el || document.createElement("p"))}></p>
                            </div>
                        </div>
                    ))}
                </div>
                <Peddle diceThrow={() => diceThrow()} /> 
            </div>
        </>
    );
};

export default GameBoard;
