"use client"
import React, { useEffect, useState } from "react"
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2'
import { useRouter, redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import Peddle from '../components/Peddle/Peddle'
import defaultCars from '../utils/defaultCars'
import { useMoney } from '../contexts/MoneyContext';
import CarTile from "./CarTile"
import { CarTileType } from '../types/CarTileType'; 

const Register = () => {
	const [userCars, setCars] = useState<CarTileType[]>([]);
	const [unownedCars, setUnownedCars] = useState<any[]>([]);
	const [error, setError] = useState("");
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();
    const { money, setMoney } = useMoney();

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
					setMoney(responseData.userMoney)
					setCars(responseData.userCars)
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
					<CarTile
						key={index}
						car={car}
						onClick={() => redirectToEditCar(car.carId)}
					/>
				))}
			</div>

			{/* DISPLAY unOWNED CARS */ }
			{unownedCars.length !== 0  ? <div className="lg:text-2xl text-sm lg:m-5 ml-4 lg:mt-20 mt-10 font-bold text-gray-900">UNOWNED CARS</div>:''}
			<div className="flex flex-wrap">
				{unownedCars?.map((car, index) => (
					<CarTile
						key={index}
						car={car}
						onClick={() => buyCar(car.carId, car.make, car.model, car.value)}
					/>
				))}
			</div> 
  

			<Peddle redirect={()=>redirectToGameBoard()} /> 
		</>

	)
};

export default Register;
