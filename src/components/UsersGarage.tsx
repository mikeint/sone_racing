"use client"
import React, { useEffect, useState } from "react"
import { useRouter, redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import Peddle from '../components/Peddle/Peddle'
import defaultCars from '../utils/defaultCars'
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2'

interface Car {
	carId: String,
	make: string,
	model: string,
	year: number,
    image: string,
	tier: string,
	value: number
}

const Register = () => {
	const [userCars, setCars] = useState<Car[]>([]);
	const [unownedCars, setUnownedCars] = useState<any[]>([]);
	const [error, setError] = useState("");
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();

	useEffect(() => {
		if (sessionStatus === "authenticated") {
			router.replace("/dashboard");
		} else {
			router.replace("/login");
		}
	}, [sessionStatus, router]);

	useEffect(() => {
		fetchUserCars();
	}, []);

	useEffect(() => {
		console.log("USERS CARS: ", userCars)
		if (userCars?.length > 0) {
			const ownedCarIds = userCars.map(car => car.carId);
			console.log(ownedCarIds)
			const filteredDefaultCars = defaultCars.filter(car => !ownedCarIds?.includes(car.carId));
			console.log("unowned cars: ", filteredDefaultCars)
			setUnownedCars(filteredDefaultCars);
		}
	}, [userCars]);
	
	const fetchUserCars = async () => {
		try {
			const res = await fetch("/api/getGarage", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!res.ok) throw new Error("Failed to fetch car data");
			
			const cars = await res.json();
			console.log("Owned cars returned to frontend: ", cars)
			setCars(cars);

		} catch (error) {
			setError("Error fetching car data");
			console.error(error);
		}
	};

	if (sessionStatus === "loading") {
		return <h1>Loading...</h1>;
	}
	
	const redirectToEditCar = (carId: any) => {
		router.replace(`/editboard?carId=${carId}`);
	}
	const redirectToGameBoard = () => {
		router.replace("/gameboard");
	};

	const buyCar = (carId: number, make: string, model: string, value: number) => {

		//Post fetch request. Sending body: JSON.stringify({ carId })
		const checkMoneyAndSetUserCars = async () => {
			try {
				const response = await fetch('/api/buyCar', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ carId }),
				});
				const responseData = await response.json(); 
				
				if (response.status === 400) {
					Swal.fire({
						icon: "error",
						text: "Insufficient Funds!",
					  });
				} else if (response.status === 200) {
					swalWithBootstrapButtons.fire({
						title: "Purchased!",
						text: "You're Quicker Than I Thought",
						icon: "success"
					});
					setCars(responseData.userCars)
					localStorage.setItem('money', responseData.money);
				}
			} catch (error) {
				console.error("Error buying car:", error);
			}
		}

		//SWAL: check first with user, then call function
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
			  confirmButton: "btn btn-success",
			},
			buttonsStyling: false
		  	});
			swalWithBootstrapButtons.fire({
				title: "Buy this "+make+" "+model+"?",
				text: "cost: $"+value,
				imageUrl: "images/cars/"+make+model+".png",
				imageWidth: 300,
				imageAlt: "buyimage",
				confirmButtonText: "BUY",
				cancelButtonText: "cancel!",
				reverseButtons: true
			}).then((result) => {
				if (result.isConfirmed) {
					checkMoneyAndSetUserCars()
				}   
			});
	}

	return (
		<>
			<div className="lg:text-2xl text-sm lg:m-5 ml-4 font-bold text-gray-900 ">GARAGE</div>

			{/* DISPLAY OWNED CARS */ }
			<div className="flex flex-wrap">
				{userCars?.map((car, index) => (
					<div key={index} className="lg:w-1/5 sm:w-1/4 w-1/2" onClick={() => redirectToEditCar(car.carId)}>
						<div className="m-1 bg-white rounded-lg shadow-md cursor-pointer overflow-hidden">
							<div className="bg-white p-4 border-b-0 shadow-md">
								<img src={`./images/cars/${car.image}`} alt={`${car.make} ${car.model}`} className="w-full lg:h-70 h-40 object-contain" />
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
					</div>
				))}
			</div>

			{/* DISPLAY unOWNED CARS */ }
			{unownedCars.length !== 0  ? <div className="lg:text-2xl text-sm lg:m-5 ml-4 lg:mt-20 mt-10 font-bold text-gray-900">UNOWNED CARS</div>:''}
			<div className="flex flex-wrap">
				{unownedCars?.map((car, index) => (
					<div key={index} className="lg:w-1/5 sm:w-1/4 w-1/2 overflow-hidden" onClick={() => buyCar(car.carId, car.make, car.model, car.value)}>
						<div className="m-1 bg-white rounded-lg shadow-md cursor-pointer overflow-hidden">
							<div className="bg-white p-4 border-b-0 shadow-md">
								<img src={`./images/cars/${car.image}`} alt={`${car.make} ${car.model}`} className="w-full lg:h-70 h-40 object-contain" />
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
					</div>
				))}
			</div> 
  

			<Peddle redirect={()=>redirectToGameBoard()} /> 
		</>

	)
};

export default Register;
