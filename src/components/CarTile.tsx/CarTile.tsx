'use client'
import React from 'react';
import { CarCard } from '../../types/CarCard'; 
import './CarTile.css'
import { useRouter } from "next/navigation"
import Image from 'next/image';

const CarTile = ({ car, purchased, onClick, selected }: { car: CarCard; purchased: boolean; onClick: () => void; selected?: boolean }) => {
	const router = useRouter();
	
	const redirectToEditCar = (carId: any) => {
		router.replace(`/editboard?carId=${carId}`);
	} 
    
    return (
        <div
            key={car.carId}
            className={"lg:w-1/5 sm:w-1/4 w-1/2 overflow-hidden"}
            onClick={onClick}
        >
            <div className={`${selected ? 'selectedCar' : ''} carTileContainer`}>
                <div className="carTileCarContainer">
                    <Image
                        src={`/Images/cars/${car.image}`}
                        alt={`${car.make} ${car.model}`}
                        width={500}
                        height={500}
                        className="w-full lg:h-70 h-40 object-contain"
                    />
                </div>
                <div className="carTileInfoContainer">
                    <div className="car-header">
                        <h1 className="car-name">
                            {car.make} {car.model}
                        </h1>
                        <span
                            className={`car-tier 
                                ${car.tier === 'T1' ? ' car-tier-t1' : ''} 
                                ${car.tier === 'T2' ? ' car-tier-t2' : ''} 
                                ${car.tier === 'T3' ? ' car-tier-t3' : ''}
                            `}
                        >
                            {car.tier}
                        </span>
                    </div>
                    <p className="car-detail">
                        Year: {car.year}
                    </p>
                    <p className="car-detail">
                        Value: ${car.value?.toLocaleString()}
                    </p>
                </div>
                {purchased ?
                    <div className='car-btn-container'>
                        <div className='car-btn edit-car' onClick={() => redirectToEditCar(car.carId)}>edit</div>
                        <div className='car-btn select-car' onClick={onClick}>select</div>
                    </div>
                    :
                    undefined
                }
            </div>
        </div>
  );
};

export default CarTile;
