'use client'
import React, { useEffect, useRef, useState } from "react"
import Peddle from '../../components/Peddle/Peddle'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import GameBoardNavBar from '../../components/GameBoardNavBar'
import './GameBoard.css'
import Loader from "@/components/Loader/Loader"
import { CarCard } from "@/types/CarCard"
import Image from 'next/image';

const GameBoard = () => {
	const { data: session, status: sessionStatus } = useSession();
	const router = useRouter();

    useEffect(() => {
		if (sessionStatus !== "authenticated") {
			router.replace("/login");
		}
	}, [sessionStatus, router]);

    const wrapperRefs = useRef<HTMLDivElement[]>([]);
    const diceRefs = useRef<HTMLParagraphElement[]>([]);
    const [diceData, setDiceData] = useState([
        [1, 2, 3, 4],       // Dice 1 with 6 sides
        [1, 2, 3, 4],       // Dice 2 with 4 sides
        [1, 2, 3],          // Dice 3 with 3 sides
        [1, 2, 3, 4, 5],    // Dice 4 with 5 sides
        [1, 2, 3, 4, 5, 6], // Dice 5 with 5 sides
        [1, 2, 3, 4, 5]     // Dice 6 with 5 sides
    ]) //DEFAULT 
    const [selectedCar, setSelectedCar] = useState<CarCard>()
    const [diceRolls, setDiceRolls] = useState<any>()
    const [car1Position, setPosition] = useState(0); // Initial position 

    useEffect(() => {
        const fetchSelectedCar = async () => {
            try {
                const res = await fetch("/api/getSelectedCar", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });
                if (!res.ok) throw new Error("Failed to fetch car data");
                const returnedCar = await res.json();
                setSelectedCar(returnedCar.car)

                const parts = ['engine', 'turbo', 'intake', 'body', 'tires', 'transmission'];
                const faceIds = parts.map(part => 
                    returnedCar.car.parts[part].filter(({ owned }: any) => owned).map(({ id }: any) => id)
                );

                const diceData = faceIds;
                console.log("DICE DATA: ", diceData);

                setDiceData(diceData);

                
            } catch (error) { 
                console.error(error);
            }
        };
        fetchSelectedCar(); 
    }, [])

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
            //diceRefs.current[index].innerText = diceData[index][0].toString();
            diceRefs.current[index].classList.add("dice"+diceData[index][0].toString());
        });
    }, []);
    
    const diceThrow = () => {
        // clear dice refs classes
        document.querySelectorAll('.dice').forEach(element =>element.className = 'dice');
        for (let i = 0; i < wrapperRefs.current.length; i++) {
            wrapperRefs.current[i].style.animationPlayState = "running";
        }
    
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                wrapperRefs.current[i].style.removeProperty("animation-play-state");
            }, Math.floor(Math.random() * 600));
        }
        // 1-6 each dice
        const points: number[] = diceData.map(dice => {
            return Math.floor(Math.random() * dice.length);
        });
        // Display the rolled dice
        let diceRolls: any = [];
        points.forEach((score, index) => {
            //diceRefs.current[index].innerText = diceData[index][score].toString(); //the value
            //TO-DO: CHANGE THIS CLASS TO BE AN IMAGE
            diceRefs.current[index].classList.add("dice"+diceData[index][score].toString());
            diceRolls.push(diceData[index][score])
        });
        setDiceRolls(diceRolls) 

        // TO-DO: CONVERT BASESTATS TO PIXELS 
        // then add diceRolls to basestats
        console.log("DICEROLLS: -----", diceRolls)

        let accumulatedHorsepower = 90;
        let accumulatedAcceleration = 4;
        let accumulatedWeight = 700;
        let accumulatedWheelspin = 10;

        let currentRollStats = {}
        if (selectedCar) {
            currentRollStats = {
                "horsepower": selectedCar.baseStats.horsepower + accumulatedHorsepower,
                "acceleration": selectedCar.baseStats.acceleration + accumulatedAcceleration,
                "weight": selectedCar.baseStats.weight + accumulatedWeight,
                "wheelspin": selectedCar.baseStats.wheelspin + accumulatedWheelspin,
            }
        }

        console.log("DISTANCE::::: ", convertToPixels(currentRollStats)) 
        setPosition(prevPosition => prevPosition + (convertToPixels(currentRollStats)));
    }

    function convertToPixels(stats: any) {
        const mPower=1;
        const normHp = (stats.horsepower - 50) / (500 - 50);
        const normWt = (4000 - (stats.weight*1)) / (4000 - 1000);
        const normSs = (stats.acceleration - 1) / (10 - 1);
        //const normWs = (stats.wheelspin - 1) / (10 - 1); //wheelspin... /
    
        const weightedSum = (0.4 * normHp) + (0.3 * normWt) + (0.2 * normSs) //+ (0.1 * normWs);
        const speedPixelsPerFrame = mPower * weightedSum;
    
        return speedPixelsPerFrame * 50
    }

    return (
        <>
            <GameBoardNavBar />

            <div className="dicesContainer">
                {diceData.map((dice, index) => (
                    <div className="dice-wrapper" key={index}>
                        <div className="dice-container">
                            <div className="dice" ref={(el) => (diceRefs.current[index] = el || document.createElement("div"))}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="treesImage"></div> 
            <div className="distanceTravelled">{Math.round(car1Position)}</div>
            <div className="selectedCarImage" style={{transform: `translateX(${car1Position}px)`,transition: 'transform 0.5s ease-in-out',}}>
                {selectedCar ? <Image width={500} height={500} src={`/Images/cars/${selectedCar?.image}`} alt={selectedCar?.image} /> : <Loader />}
            </div>

            {selectedCar && <Peddle diceThrow={() => diceThrow()} />}
        </>
    );
};

export default GameBoard;
