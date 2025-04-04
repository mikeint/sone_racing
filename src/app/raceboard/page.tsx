'use client'
import React, { useEffect, useState } from "react"
import Peddle from '../../components/Peddle/Peddle'
import NavBar from '../../components/NavBar/NavBar'
import { useRouter } from "next/navigation"
import './RaceBoard.css'
import Image from 'next/image';


const raceTypes = [
    ['Practice', '50-250'],
    ['1/2 mile', '100-500'],
    ['1/4 mile', '200-1000']
];

const RaceBoard = () => {
	const router = useRouter();
    const [activeRace, setActiveRace] = useState<number>(0);

    useEffect(() => {
        const storedRace = Number(localStorage.getItem('selectedRace'));
        if (!isNaN(storedRace)) setActiveRace(storedRace);
    }, []);


    const handleItemClick = (index:number) => {
        setActiveRace(index);
        localStorage.setItem("selectedRace", JSON.stringify(index));

    };

    const redirectToGameBoard = (activeRace:number) => {
		router.replace("/gameboard?raceType="+activeRace);
	};

    return (
        <>
        <NavBar />
            <>
                <div className="lg:text-2xl text-sm lg:m-5 ml-1 font-bold text-gray-900 ">Races</div>
                {raceTypes.map((race, index) => (
                    <div
                        key={index}
                        className={`raceItem ${index === activeRace ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <div className="racetype">{race[0]}</div>
                        <div className="award"><Image width={500} height={500} src={"/Images/coin.png"} alt={"coin"}/>{race[1]}</div>
                    </div>
                ))}

                <Peddle diceThrow={() => redirectToGameBoard(activeRace)} /> 
            </>
        </>
    );
};

export default RaceBoard;
