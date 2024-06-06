import React from 'react';
import { CarTileType } from '../types/CarTileType'; 

interface CarTile {
    carId: string;
    make: string;
    model: string;
    year: number;
    image: string;
    tier: string;
    value: number;
}

interface CarTileProps {
    car: CarTileType;
    onClick: () => void;
}

const CarTile = ({ car, onClick }: CarTileProps) => {
  return (
    <div
        key={car.carId}
        className="lg:w-1/5 sm:w-1/4 w-1/2 overflow-hidden"
        onClick={onClick}
    >
      <div className="m-1 bg-white rounded-lg shadow-md cursor-pointer overflow-hidden">
        <div className="bg-white p-4 border-b-0 shadow-md">
            <img
                src={`./images/cars/${car.image}`}
                alt={`${car.make} ${car.model}`}
                className="w-full lg:h-70 h-40 object-contain"
            />
        </div>
        <div className="lg:p-4 p-2 flex flex-col relative">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold lg:text-xl text-xs text-gray-700">
                    {car.make} {car.model}
                </h1>
                <span
                    className={`text-xs font-normal p-2 text-white ${
                        car.tier === 'T1' ? 'bg-blue-500' : ''
                    } ${car.tier === 'T2' ? 'bg-purple-500' : ''} ${
                        car.tier === 'T3' ? 'bg-orange-500' : ''
                    }`}
                    >
                    {car.tier}
                </span>
            </div>
            <p className="text-gray-700 text-xs lg:text-lg text-left">
                Year: {car.year}
            </p>
            <p className="text-gray-700 text-xs lg:text-lg text-left">
                Value: ${car.value?.toLocaleString()}
            </p>
         </div>
      </div>
    </div>
  );
};

export default CarTile;
