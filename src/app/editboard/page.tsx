'use client'
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import './editBoard.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2'

interface Car {
    tier: string
    make: string
    model: string
    image: string
    year: number
    baseStats: BaseStats
    parts: Parts
}

interface BaseStats {
    horsepower: number
    weight: number
    shiftspeed: number
    wheelspin: number
}
interface Parts {
    [key: string]: Part[]
}
interface Part {
    id: number
    rollRate: string
    name: string
    owned: boolean
    cost: number
    diceAttributes?: DiceAttribute[]
    image: string
}

interface DiceAttribute {
    id: number
    name: string
    owned: boolean
    cost: number
    selected: boolean
}

const EditBoard = ({ searchParams }: { searchParams: any }) => {
    const carId = JSON.stringify(searchParams.carId).replace(/"/g, '');
    const [carData, setCarData] = useState<Car>();
    const [selectedPartFace, setselectedPartFace] = useState<string>("engine");
    const [selectedDiceFace, setSelectedDiceFace] = useState(0);

    useEffect(() => {
        if (carId) {
            fetch(`/api/getEditCarData?carId=${carId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("edit car data: ", data)
                    setCarData(data);
                })
                .catch(error => {
                    console.error('Error fetching car data:', error);
                });
        }
    }, [carId]);

    const calculateBarWidths = (value:number, min:number, max:number) => {
        if (value === undefined || value === null) return 0;
        return Math.max(0, Math.min((value - min) / (max - min) * 100, 100));
    }

    const handlePartChooser = (partName: string) => {
        console.log("partName: ", partName)
        setselectedPartFace(partName);
    };

    const handleDiceFaceClick = (id: number, owned: boolean, cost: number) => {
        if (!owned) {

            //SWAL: check first with user, then call function
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: "btn btn-success",
                },
                buttonsStyling: false
                });
                swalWithBootstrapButtons.fire({
                    title: "Buy this dice?",
                    text: "$"+cost,
                    confirmButtonText: "BUY",
                    reverseButtons: true
                }).then((result: any) => {
                    if (result.isConfirmed) {
                        // POST TO BUY DICE FACE
                        checkMoneyAndBuyDiceFace();
                        setSelectedDiceFace(id-1);
                    } else {
                        setSelectedDiceFace(0);
                    }
                });
        }

		const checkMoneyAndBuyDiceFace = async () => {
			try {
				const response = await fetch('/api/buyDiceFace', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ carId, id, selectedPartFace }),
				});
				const responseData = await response.json(); 
				
				if (response.status === 400) {
					Swal.fire({
						icon: "error",
						text: "Insufficient Funds!",
					  });
				} else if (response.status === 200) {
                    console.log(responseData.carData)
                    setCarData(responseData.carData[0].car)
					localStorage.setItem('money', responseData.money);
				}
			} catch (error) {
				console.error("Error buying car:", error);
			}
		}
 


        setSelectedDiceFace(id-1);
    };

    const selectDiceAttr = (id: number, owned: boolean ) => {
        if (!owned) {
            console.log("post request to buy diceATTR " + id)
        } else {
            console.log("post request to select diceATTR " + id)
        }
    }

    return (
        <>
            <div className="editBoardTopNav">
                <Navbar />
                <h1>Edit Car</h1>
            </div>

            <div className="editBoardContainer">
                <div className="item item1">
                    <div className="editboard-fullCarContainer">
                        <div className={`editboard-tier ${carData?.tier === 'T1' ? 'bg-blue-500': ''} ${carData?.tier === 'T2' ? 'bg-purple-500': ''} ${carData?.tier === 'T3' ? 'bg-orange-500': ''}`}>{carData?.tier}</div>
                        <div className="editboard-carContainer">
                        <div className="editboard-nameContainer">
                            <div className="editboard-logo">
                                <img src={`./images/logos/${carData?.make}.png`} alt={`${carData?.make} logo`} />
                            </div>
                            <div className="editboard-details">
                                <div className="editboard-name">
                                    {carData?.make + ' ' + carData?.model}
                                </div>
                                <div className="editboard-year">
                                    {carData?.year}
                                </div>
                            </div>
                        </div>
                        <div className="editboard-car"><img src={`./images/cars/${carData?.image}`} alt={''} /></div>
                        </div>
                    </div>
                </div>
                <div className="item item2">
                    <div className="editboard-diceChooserContainer">
                        <div className="editboard-dicechoose editboard-dc1" onClick={() => handlePartChooser('engine')}></div>
                        <div className="editboard-dicechoose editboard-dc2" onClick={() => handlePartChooser('transmission')}></div>
                        <div className="editboard-dicechoose editboard-dc3" onClick={() => handlePartChooser('tires')}></div>
                        <div className="editboard-dicechoose editboard-dc4" onClick={() => handlePartChooser('turbo')}></div>
                        <div className="editboard-dicechoose editboard-dc5" onClick={() => handlePartChooser('body')}></div>
                        <div className="editboard-dicechoose editboard-dc6" onClick={() => handlePartChooser('intake')}></div>
                    </div>
                </div>

                <div className="item item3">
                    <div className="editboard-diceContainer">
                        {<> 
                            {carData?.parts[selectedPartFace]?.map((diceFace, index, array) => {
                                if (index % 2 === 0) {
                                    return (
                                        <div className="editboard-diceRow" key={index}> 
                                            <div className={`${diceFace.owned ? 'editboard-dice' : 'editboard-dice editboard-diceNotOwned'} ${selectedDiceFace+1 === diceFace.id && diceFace.owned ? 'active' : ''}`}
                                                onClick={() => handleDiceFaceClick(diceFace.id, diceFace.owned, diceFace.cost)}
                                                style={{ backgroundImage: `url('./images/dice/${diceFace.image}')` }}
                                            >
                                                <div className="editboard-diceFaceValue"> 
                                                    <div>{diceFace.owned ? '' : '$'+diceFace.cost}</div>
                                                </div>
                                            </div>
                                                {array[index + 1] && (
                                            <div className={`${array[index + 1].owned ? 'editboard-dice' : 'editboard-diceNotOwned'} ${selectedDiceFace+1 === array[index + 1].id && array[index + 1].owned ? 'active' : ''}`} 
                                                onClick={() => handleDiceFaceClick(array[index + 1].id, array[index + 1].owned, array[index + 1].cost)}
                                                style={{ backgroundImage: `url('./images/dice/${array[index + 1].image}')` }}
                                            >
                                                <div className="editboard-diceFaceValue"> 
                                                    <div>{array[index + 1].owned ? '' : '$'+array[index + 1].cost}</div>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </>} 
                    </div>
                </div>

                <div className="item item4">
                    <div className="editboard-barGraph">
                        <div className="editboard-bar" style={{width: `${calculateBarWidths(carData?.baseStats?.horsepower ?? 0, 0, 1500)}%`, backgroundColor: '#FF5733'}}>
                            <span className="editboard-barLabel">horsepower: {carData?.baseStats?.horsepower}hp</span>
                        </div>
                        <div className="editboard-bar" style={{width: `${calculateBarWidths(carData?.baseStats?.weight ?? 0, 1000, 7000)}%`, backgroundColor: '#75FF33'}}>
                            <span className="editboard-barLabel">weight: {carData?.baseStats?.weight}lbs</span>
                        </div>
                        <div className="editboard-bar" style={{width: `${calculateBarWidths(carData?.baseStats?.shiftspeed ?? 0, 1, 5)}%`, backgroundColor: '#33C3FF'}}>
                            <span className="editboard-barLabel">shiftspeed: {carData?.baseStats?.shiftspeed}s</span>
                        </div>
                        <div className="editboard-bar" style={{width: `${calculateBarWidths(carData?.baseStats?.wheelspin ?? 0, 0, 100)}%`, backgroundColor: '#FF33C7'}}>
                            <span className="editboard-barLabel">wheelspin: {carData?.baseStats?.wheelspin}%</span>
                        </div>
                    </div>
                </div>



                <div className="item item5">
                    <div className="editboard-diceAttrContainer">
                        {/* {console.log(carData?.parts[selectedPartFace]?.[selectedDiceFace])} */}

                        {carData?.parts[selectedPartFace]?.[selectedDiceFace].diceAttributes?.map((diceAttr, index) => (
                        <div 
                            className={`${diceAttr.owned ? 'editboard-diceAttr' : 'editboard-diceAttrNotOwned'} ${diceAttr.selected ? 'selected' : ''}`}
                            key={index} 
                            onClick={() => selectDiceAttr(diceAttr.id, diceAttr.owned)}
                        >
                                <div className="editboard-diceAttrName">{diceAttr.name}</div>
                                <div className="editboard-diceAttrCost">${diceAttr.cost}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditBoard;
