'use client'
import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import './editBoard.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2'
import { useMoney } from '../../contexts/MoneyContext';
import { CarEditType } from '../../types/CarEditType'
import Loader from '../../components/Loader/Loader'
import Image from 'next/image';
import CarStats from "@/components/CarStats/CarStats";
import ExperienceBar from "@/components/ExperienceBar/ExperienceBar";

const EditBoard = ({ searchParams }: { searchParams: any }) => {
    const carId = JSON.stringify(searchParams.carId).replace(/"/g, '');
    const [carData, setCarData] = useState<CarEditType>();
    const [selectedPartFace, setselectedPartFace] = useState<string>("engine");
    const [selectedDiceFace, setSelectedDiceFace] = useState(0);
    const { money, setMoney } = useMoney();

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
        setSelectedDiceFace(0);
        setselectedPartFace(partName);
    };

    const handleDiceFaceClick = (id: number, owned: boolean, cost: number) => {
        
        setSelectedDiceFace(id-1);
        if (!owned) {
            //SWAL: check first with user, then call function
            const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                    confirmButton: "btn btn-success",
                },
                    buttonsStyling: false
                });
                swalWithBootstrapButtons.fire({
                    title: "Buy this dice face?",
                    text: "$"+cost,
                    confirmButtonText: "BUY",
                    reverseButtons: true
                }).then((result: any) => {
                    if (result.isConfirmed) {
                        // POST TO BUY DICE FACE
                        checkMoneyAndBuyDiceFace();
                    } else {
                        setSelectedDiceFace(0);
                    }
                });
        }
		const checkMoneyAndBuyDiceFace = async () => {
			try {
				const response = await fetch('/api/buyDiceFace', {
					method: 'POST',
					headers: {'Content-Type': 'application/json',},
					body: JSON.stringify({ carId, id, selectedPartFace }),
				});
				const responseData = await response.json(); 
				
				if (response.status === 400) {
					Swal.fire({
						icon: "error",
						text: "Insufficient Funds!",
					  });
				} else if (response.status === 200) {
                    setMoney(responseData.userMoney)
                    setCarData(responseData.carData[0].car)
				}
			} catch (error) {
				console.error("Error buying car:", error);
			}
		}
    };

    const selectDiceAttr = (id: number, owned: boolean, cost: number) => {

        if (!owned) {
            //SWAL: check first with user, then call function
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: "btn btn-success",
                },
                buttonsStyling: false
                });
                swalWithBootstrapButtons.fire({
                    title: "Buy this attribute?",
                    text: "$"+cost,
                    confirmButtonText: "BUY",
                    reverseButtons: true
                }).then((result: any) => {
                    if (result.isConfirmed) {
                        // POST TO BUY DICE FACE Attribute
                        checkMoneyAndBuyDiceAttribute();
                    }
            });

            const checkMoneyAndBuyDiceAttribute = async () => {
                try {
                    const response = await fetch('/api/buyDiceAttr', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json',},
                        body: JSON.stringify({ carId, selectedPartFace, selectedDiceFace, id }),
                    });
                    const responseData = await response.json(); 
                    
                    if (response.status === 400) {
                        Swal.fire({
                            icon: "error",
                            text: "Insufficient Funds!",
                        });
                    } else if (response.status === 200) {
                        console.log(responseData.carData[0].car)
                        setMoney(responseData.userMoney)
                        setCarData(responseData.carData[0].car)
                    } else {
                        console.log(responseData)
                    }
                } catch (error) {
                    console.error("Error buying car:", error);
                }
            }

        } else {
            console.log("post request to select diceATTR " + id);

            const selectDiceAttr = async () => {
                try {
                    const response = await fetch('/api/selectDiceAttr', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json',},
                        body: JSON.stringify({ carId, selectedPartFace, selectedDiceFace, id }),
                    });
                    const responseData = await response.json(); 
                    
                    if (response.status === 400) {
                        console.log("Err")
                    } else if (response.status === 200) {
                        setCarData(responseData.carData[0].car)
                    }
                } catch (error) {
                    console.error("Error buying car:", error);
                }
            }

            selectDiceAttr()
        }
    }

    const setActiveClassForPart = (part:string, additionalClass = '') => {
        const activeClass = part === selectedPartFace ? 'active' : '';
        return `editboard-dicechoose ${additionalClass} ${activeClass}`.trim();
    };

    return (
        <>
            <div className="editBoardTopNav">
                <Navbar />
                <h1>Edit Car</h1>
            </div>

            <div className="editBoardContainer">
                <div className="item item1">
                    {carData ?
                        <div className="editboard-fullCarContainer">
                            <div className={`editboard-tier ${carData?.tier === 'T1' ? 'bg-blue-500': ''} ${carData?.tier === 'T2' ? 'bg-purple-500': ''} ${carData?.tier === 'T3' ? 'bg-orange-500': ''}`}>{carData?.tier}</div>
                            <div className="editboard-carContainer">
                            <div className="editboard-topNameContainer">
                                <ExperienceBar experience={carData?.experience} />
                                <div className="editboard-nameContainer">
                                    <div className="editboard-logo">
                                        <Image width={500} height={500} src={`/Images/logos/${carData?.make}.png`} alt={`${carData?.make} logo`} />
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
                            </div>
                            <div className="editboard-car"><Image width={500} height={500} src={`/Images/cars/${carData?.image}`} alt={carData?.image} /></div>
                            </div>
                        </div>
                    :
                    <Loader/>
                    }
                </div>
                <div className="item item2">
                    <div className="editboard-diceChooserContainer">
                        <div className={setActiveClassForPart('engine', 'editboard-dc1')} onClick={() => handlePartChooser('engine')}>engine</div>
                        <div className={setActiveClassForPart('transmission', 'editboard-dc2')} onClick={() => handlePartChooser('transmission')}>transmission</div>
                        <div className={setActiveClassForPart('tires', 'editboard-dc3')} onClick={() => handlePartChooser('tires')}>tires</div>
                        <div className={setActiveClassForPart('turbo', 'editboard-dc4')} onClick={() => handlePartChooser('turbo')}>turbo</div>
                        <div className={setActiveClassForPart('body', 'editboard-dc5')} onClick={() => handlePartChooser('body')}>body</div>
                        <div className={setActiveClassForPart('intake', 'editboard-dc6')} onClick={() => handlePartChooser('intake')}>intake</div>
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
                                                style={{ backgroundImage: `url('/Images/dice/${diceFace.image}')` }}
                                            >
                                                <div className="editboard-diceFaceValue"> 
                                                    <div className="editboard-diceFaceValueAbsolute">{diceFace.owned ? '' : '$'+diceFace.cost}</div>
                                                </div>
                                            </div>
                                                {array[index + 1] && (
                                            <div className={`${array[index + 1].owned ? 'editboard-dice' : 'editboard-diceNotOwned'} ${selectedDiceFace+1 === array[index + 1].id && array[index + 1].owned ? 'active' : ''}`} 
                                                onClick={() => handleDiceFaceClick(array[index + 1].id, array[index + 1].owned, array[index + 1].cost)}
                                                style={{ backgroundImage: `url('/Images/dice/${array[index + 1].image}')` }}
                                            >
                                                <div className="editboard-diceFaceValue"> 
                                                    <div className="editboard-diceFaceValueAbsolute">{array[index + 1].owned ? '' : '$'+array[index + 1].cost}</div>
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
                    <CarStats stats={carData?.baseStats} />
                </div>



                <div className="item item5">
                    <div className="editboard-diceAttrContainer">
                        {carData?.parts[selectedPartFace]?.[selectedDiceFace]?.diceAttributes?.map((diceAttr, index) => (
                        <div
                            className={`${diceAttr.owned ? 'editboard-diceAttr' : 'editboard-diceAttrNotOwned'} ${diceAttr.selected && diceAttr.owned ? 'selected' : ''}`}
                            key={index}
                            onClick={() => selectDiceAttr(diceAttr.id, diceAttr.owned, diceAttr.cost)}
                        >
                                <div className="editboard-diceAttrTopContainer">
                                    <div className="editboard-diceAttrName">{diceAttr.name}</div>
                                    {diceAttr.owned ? '' : <div className="editboard-diceAttrCost">${diceAttr.cost}</div>}
                                </div>
                                <div className="editboard-diceAttrValueContainer">
                                    <div className="editboard-diceAttrValue">
                                        <div>horsepower: {diceAttr.horsepower}</div>
                                        <div className="editboard-diceAttrValueBar" style={{width: `${calculateBarWidths(diceAttr.horsepower ?? 0, 0, 1500)}%`, backgroundColor: '#FF5733'}}></div>
                                    </div>
                                    <div className="editboard-diceAttrValue">
                                        <div>weight: {diceAttr.weight} </div>
                                        <div className="editboard-diceAttrValueBar" style={{width: `${calculateBarWidths(diceAttr.weight ?? 0, 0, 1500)}%`, backgroundColor: '#ffd133'}}></div>
                                    </div>
                                </div>
                                <div className="editboard-diceAttrValueContainer">
                                    <div className="editboard-diceAttrValue">
                                        <div>acceleration: {diceAttr.acceleration} </div>
                                        <div className="editboard-diceAttrValueBar" style={{width: `${calculateBarWidths(diceAttr.acceleration ?? 0, 0, 1500)}%`, backgroundColor: '#33C3FF'}}></div>
                                    </div>
                                    <div className="editboard-diceAttrValue">
                                        <div>wheelspin {diceAttr.wheelspin} </div>
                                        <div className="editboard-diceAttrValueBar" style={{width: `${calculateBarWidths(diceAttr.wheelspin ?? 0, 0, 1500)}%`, backgroundColor: '#FF33C7'}}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditBoard;
export const dynamic = 'force-dynamic';