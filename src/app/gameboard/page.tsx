'use client'
import React, { useEffect, useRef, useState } from "react"
import Peddle from '../../components/Peddle/Peddle'
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import NavBar from '../../components/NavBar/NavBar'
import './GameBoard.css'
import Loader from "@/components/Loader/Loader"
import { CarCard } from "@/types/CarCard"
import Image from 'next/image';
import { useMoney } from '../../contexts/MoneyContext';
import CarStats from "@/components/CarStats/CarStats";
import { callConffeti } from '../../utils/helperFunctions'

const GameBoard = ({ searchParams }: { searchParams: any }) => {
    const raceType: number = parseInt(JSON.stringify(searchParams.raceType).replace(/"/g, ''));
	const { data: session, status: sessionStatus } = useSession();
	const router = useRouter();
    const { money, setMoney } = useMoney();

    useEffect(() => {
		if (sessionStatus !== "authenticated") {
			router.replace("/login");
		}
	}, [sessionStatus, router]);

    /*-------------------------------------------------------------*/
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
    const [car1Position, setCar1Position] = useState(0); // Initial position 
    const [car2Position, setCar2Position] = useState(0); // Initial position 
    const [raceValue, setRaceValue] = useState<number>(0); // race type 0,1,2...
    const [gear, setGear] = useState<number>(0); 
    const [currentRollStats, setCurrentRollStats] = useState({});
    const [disablePeddle, setDisablePeddle] = useState('');
    const diceNames = ["Engine", "Turbo", "Intake", "Body", "Tires", "Transmission"]
 
    useEffect(() => {
        if (raceType===0) { setRaceValue(50); } 
        if (raceType===1) { setRaceValue(100); } 
        if (raceType===2) { setRaceValue(200); } 
    })

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
                setCurrentRollStats(returnedCar.car.baseStats)

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
        if (gear!==5) {
            setGear(gear+1);
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
                //console.log("dicedata: ", diceData)
                diceRefs.current[index].classList.add("dice"+diceData[index][score].toString());
                diceRolls.push(diceData[index][score])
            });
            setDiceRolls(diceRolls) 

            // TO-DO: add diceRolls to basestats
            // [2, 1, 1, 1, 1, 5]
            console.log("DICEROLLS: -----", diceRolls)
            let accumulatedHorsepower = 0;
            let accumulatedAcceleration = 0;
            let accumulatedWeight = 0;
            let accumulatedWheelspin = 0;
 
            // console.log(selectedCar?.parts.engine[diceRolls[0]-1])
            // console.log(selectedCar?.parts.turbo[diceRolls[1]-1])
            // console.log(selectedCar?.parts.intake[diceRolls[2]-1])
            // console.log(selectedCar?.parts.body[diceRolls[3]-1])
            // console.log(selectedCar?.parts.tires[diceRolls[4]-1])
            // console.log(selectedCar?.parts.transmission[diceRolls[5]-1])
 
 
            diceNames.map(name => name.toLowerCase()).forEach((part:any, index:any) => {
                const diceAttrs = selectedCar?.parts[part][diceRolls[index] - 1].diceAttributes?.filter((diceAttr => diceAttr.selected));
                if (diceAttrs?.length) {
                    console.log(diceAttrs);
                    accumulatedHorsepower += diceAttrs[0].horsepower;
                    accumulatedAcceleration += diceAttrs[0].acceleration;
                    accumulatedWeight += diceAttrs[0].weight;
                    accumulatedWheelspin += diceAttrs[0].wheelspin;
                }
            });
 

            if (selectedCar) {
                const newCarStats = {
                    "horsepower": selectedCar.baseStats.horsepower + accumulatedHorsepower,
                    "acceleration": selectedCar.baseStats.acceleration + accumulatedAcceleration,
                    "weight": selectedCar.baseStats.weight + accumulatedWeight,
                    "wheelspin": selectedCar.baseStats.wheelspin + accumulatedWheelspin,
                }
                setCurrentRollStats(newCarStats)
                
                /* Animate road */
                const road:any = document.getElementById('road');
                road.classList.add('animate');
                setTimeout(() => {road.classList.remove('animate');}, 400);
                /* end Animate road */

                console.log("new stats to show: ", newCarStats)
                const pixelValue = convertToPixels(newCarStats);
                //console.log("DISTANCE::::: ", pixelValue) 
                setCar1Position(prevPosition => prevPosition + pixelValue); 
                setCar2Position(prevPosition => prevPosition + pixelValue- (Math.floor(Math.random()*20)) ); 
            }

        } else {
            /* RACE OVER */
            setDisablePeddle('disabled')
            handleWinnings();
        }
    }

    const handleWinnings = async () => {
        const winnings = Math.floor(Math.random() * 5) + 1;
        await Swal.fire({
            position: "top-end", 
            title: `${raceValue*winnings} collected`,
            imageUrl: "/Images/coin.png",
            imageWidth: 50,
            imageAlt: "buyimage",
            showConfirmButton: false,
            timer: 1000
        });

        callConffeti();
        setExperience();
        setMoney(money + raceValue*winnings);
        saveMoney(raceValue*winnings);
        router.replace("/dashboard");
    };

    const saveMoney = (value:any) => {
		const saveMoney = async () => {
			try {
				const response = await fetch('/api/setMoney', {
					method: 'POST',
					headers: {'Content-Type': 'application/json',},
					body: JSON.stringify({ value }),
				});
				const responseData = await response.json(); 
				
				if (response.status === 400) {
					console.log("400: ", responseData)
				} else if (response.status === 200) {
					console.log(responseData.success)
				}
			} catch (error) {
				console.error("Error setting ex:", error);
			}
		}
        saveMoney()
    }

    const setExperience = () => {
        const exp = ((raceValue) * 5);
        const carId = selectedCar?.carId;
		const setExperience = async () => {
			try {
				const response = await fetch('/api/setExperience', {
					method: 'POST',
					headers: {'Content-Type': 'application/json',},
					body: JSON.stringify({ carId, exp }),
				});
				const responseData = await response.json(); 
				
				if (response.status === 400) {
					return;
				} else if (response.status === 200) {
					return;
				}
			} catch (error) {
				console.error("Error setting ex:", error);
			}
		}
        setExperience()
    }

    function convertToPixels(stats: any) {
        const mPower=1;
        const normHp = (stats.horsepower - 50) / (500 - 50);
        const normWt = (4000 - (stats.weight*1)) / (4000 - 1000);
        const normSs = (stats.acceleration - 1) / (10 - 1);
        //const normWs = (stats.wheelspin - 1) / (10 - 1); 
        
        const weightedSum = (0.4 * normHp) + (0.3 * normWt) + (0.2 * normSs) //+ (0.1 * normWs);
        const speedPixelsPerFrame = mPower * weightedSum;
        
        const randomNumber = Math.floor(Math.random() * 100) + 1; 
        if (randomNumber <= stats.wheelspin) {
            Swal.fire({
                position: "top", 
                title: 'Wheelspin, speed cut in half',
                showConfirmButton: false,
                timer: 800
            });
            console.log((speedPixelsPerFrame * 100) / 2)
            return (speedPixelsPerFrame * 100) / 2
        }
        else {
            console.log(speedPixelsPerFrame * 100)
            return speedPixelsPerFrame * 100
        } 
    }
    
    return (
        <>
            <NavBar />
            <div className="gameNavContainer">
                <div className="dicesContainer">
                    {diceData.map((dice, index) => (
                        <div className="dice-wrapper" key={index}>
                            <div className="diceName">{diceNames[index]}</div>
                            <div className="dice-container">
                                <div className="dice" ref={(el) => (diceRefs.current[index] = el || document.createElement("div"))}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="currentCarStats">
                    <CarStats stats={currentRollStats} />
                </div>
            </div>

            <div className="water-container">
                <div className="treesImage"></div> 
                <div className="boat"></div>  
            </div>
            
            <div id="road" className="roadImage"></div> 
            <div className="distanceTravelled">{Math.round(car1Position)}m</div>
            <div className="selectedCarImage" style={{transform: `translateX(${car1Position}px)`,transition: 'transform 0.5s ease-in-out',}}>
                {selectedCar ? <Image width={500} height={500} src={`/Images/cars/${selectedCar?.image}`} alt={selectedCar?.image} /> : <Loader />}
            </div>

            <div className="enemyDistanceTravelled">{Math.round(car2Position)}m</div>
            <div className="enemyCarImage" style={{transform: `translateX(${car2Position}px)`,transition: 'transform 0.5s ease-in-out',}}>
                {selectedCar ? <Image width={500} height={500} src={`/Images/cars/HondaCivic.png`} alt={"hondaCivic"} /> : <Loader />}
            </div>

            {selectedCar && <Peddle diceThrow={() => diceThrow()} disabledClass={disablePeddle} />}
        </>
    );
};

export default GameBoard;
