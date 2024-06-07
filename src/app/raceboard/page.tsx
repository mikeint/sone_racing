'use client'
import React, { useState } from "react"
import Peddle from '../../components/Peddle/Peddle'
import GameBoardNavBar from '../../components/GameBoardNavBar'
import { useRouter } from "next/navigation"
import './RaceBoard.css'


const raceTypes = [
    'Practice', 
    '1/4 mile', 
    '1/2 mile'
];

const RaceBoard = () => {
	const router = useRouter();
    const [activeRace, setActiveRace] = useState(0);

    const handleItemClick = (index:number) => {
        setActiveRace(index);
    };

    const redirectToGameBoard = (activeRace:number) => {
		router.replace("/gameboard?raceType="+activeRace);
	};

    return (
        <>
        <GameBoardNavBar />
            <>
                <div className="raceTitle">Races</div>
                {raceTypes.map((race, index) => (
                    <div
                        key={index}
                        className={`raceItem ${index === activeRace ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                    {race}
                    </div>
                ))}

                <Peddle diceThrow={() => redirectToGameBoard(activeRace)} /> 
            </>
        </>
    );
};

export default RaceBoard;
