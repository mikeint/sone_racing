"use client"
import React, { useEffect, useState } from "react"
import { useRouter, redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import Peddle from '../components/Peddle/Peddle'

interface Cars {
	carId: Number,
	make: string,
	model: string,
	year: number,
    image: string,
	tier: string,
	value: number
}

const Register = () => {
	const [cars, setCars] = useState<Cars[]>([]);
	const [error, setError] = useState("");
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();

	useEffect(() => {
		if (sessionStatus === "authenticated") {
			router.replace("/dashboard");
		}
	}, [sessionStatus, router]);

	useEffect(() => {
		fetchCars();
	}, []);
	
	const fetchCars = async () => {
		try {
			const res = await fetch("/api/getGarage", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!res.ok) {
				throw new Error("Failed to fetch car data");
			}

			const data = await res.json();
			console.log("cars being returned on frontend: ", data)
			setCars(data);
		} catch (error) {
			setError("Error fetching car data");
			console.error(error);
		}
	};


	if (sessionStatus === "loading") {
		return <h1>Loading...</h1>;
	}
	
	const editCar = (carId: any) => {
		console.log(carId)
		router.replace(`/editboard?carId=${carId}`);
	}
	const redirectToGameBoard = () => {
		router.replace("/gameboard");
	};

	return (
		<>
			<div className="lg:text-2xl text-sm lg:m-5 ml-4 font-bold text-gray-900 ">GARAGE</div>

			<div className="flex flex-wrap">
				{cars?.map((car, index) => (
					<div key={index} className="lg:w-300 w-200 bg-white shadow-md rounded-lg overflow-hidden cursor-pointer ml-5" onClick={() => editCar(car.carId)}>
						<div className="bg-white p-4 border-b-0 shadow-md">
							<img src={`./Images/cars/${car.image}`} alt={`${car.make} ${car.model}`} className="w-full lg:h-70 h-40 object-contain" />
						</div>
						<div className="lg:p-4 p-2 flex flex-col relative">
						<div className={`flex justify-between items-center `}>
							<h1 className={`text-2xl font-bold lg:text-xl text-xs 'text-gray-700'`}>
								{car.make} {car.model}
							</h1>
							<span className={`text-xs font-normal p-2 text-white ${car.tier === 'T1' ? 'bg-blue-500': ''} ${car.tier === 'T2' ? 'bg-purple-500': ''} ${car.tier === 'T3' ? 'bg-orange-500': ''}`}>{car.tier}</span>
						</div>
						<p className="text-gray-700 text-xs lg:text-lg text-left">Year: {car.year}</p>
						<p className="text-gray-700 text-xs lg:text-lg text-left">Value: ${car.value?.toLocaleString()}</p>
						</div>
					</div>
				))}
			</div>



			<Peddle redirect={()=>redirectToGameBoard()} /> 
		</>

	)
};

export default Register;
