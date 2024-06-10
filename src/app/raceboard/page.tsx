'use client'
import React, { useState } from "react"
import Peddle from '../../components/Peddle/Peddle'
import GameBoardNavBar from '../../components/GameBoardNavBar'
import { useRouter } from "next/navigation"
import './RaceBoard.css'
import Image from 'next/image';


const raceTypes = [
    ['Practice', 50],
    ['1/4 mile', 200],
    ['1/2 mile', 100]
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
                        <div className="racetype">{race[0]}</div>
                        <div className="award"><Image width={500} height={500} src={"/images/coin.png"} alt={"coin"}/>{race[1]}</div>
                    </div>
                ))}

                <Peddle diceThrow={() => redirectToGameBoard(activeRace)} /> 
            </>
        </>
    );
};

export default RaceBoard;
