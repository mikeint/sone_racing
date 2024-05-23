import User from "@/models/User"
import UserCar from "@/models/UserCar"
import Car from "@/models/Car"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { v4 as uuid4 } from 'uuid'

export const POST = async (request: any) => {
	const { email, password } = await request.json();

	await connect();

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		return new NextResponse("Email is already in use", { status: 400 });
	}

	const hashedPassword = await bcrypt.hash(password, 5);
	const newUser = new User({
		email,
		password: hashedPassword,
	}); 

	try {
		/* SAVE THE USER WHEN REGISTERING */
		await newUser.save();

		// /* SAVE THE DEFAULT CAR WHEN REGISTERING */
		// const carId = "209caef6-e7fe-4883-8ea8-e0bb38a57511"
		// const defaultCar = await Car.findOne({ carId });
		// if (!defaultCar) throw new Error("Default car not found");

		// const saveDefaultCar = new UserCar({
		// 	userEmail: newUser.email,
		// 	car: defaultCar
		// });
		
		// console.log(saveDefaultCar) 
		// await saveDefaultCar.save();

		/* SAVE THE DEFAULT CAR WHEN REGISTERING */
		const defaultCar = new UserCar({
			userEmail: newUser.email,
			car: {
				carId: uuid4(),
				make: "Honda",
				model: "Civic",
				year: "1991",
				tier: "T1",
				value: 10000,
				gears: 5,
				image: "honda1991.png",
				parts: {
					engine: [
						{
							id: 1,
							name: "Engine Dice Face 1",
							image: "",
							rollRate: 0.85,
							diceAttributes: [
								{ id: 1, name: "Low & Slow", cost: 1000, speed: 10, wheelspin: 5 },
								{ id: 2, name: "Fast & Slow", cost: 2000, speed: 72, wheelspin: 50 },
								{ id: 3, name: "Stage 3", cost: 3000, speed: 25, wheelspin: 30 },
								{ id: 4, name: "Double", cost: 5000, speed: 20, wheelspin: 20 }
							]
						},
						{
							id: 2,
							name: "Engine Dice Face 2",
							image: "",
							rollRate: 0.85,
							diceAttributes: [
								{ id: 1, name: "Low & Slow", cost: 1000, speed: 20, wheelspin: 5 },
								{ id: 2, name: "Fast & Slow", cost: 2000, speed: 82, wheelspin: 50 },
								{ id: 3, name: "Stage 3", cost: 3000, speed: 35, wheelspin: 30 },
								{ id: 4, name: "Double", cost: 4000, speed: 30, wheelspin: 20 }
							]
						},
						{
							id: 3,
							name: "Engine Dice Face 3",
							image: "",
							rollRate: 0.85,
							diceAttributes: [
								{ id: 1, name: "Low & Slow", cost: 1000, speed: 30, wheelspin: 5 },
								{ id: 2, name: "Fast & Slippery", cost: 2000, speed: 100, wheelspin: 50 },
								{ id: 3, name: "Stage 3", cost: 3000, speed: 40, wheelspin: 30 },
								{ id: 4, name: "Double", cost: 4000, speed: 55, wheelspin: 20 }
							]
						},
						{
							id: 4,
							name: "Engine Dice Face 4",
							image: "",
							rollRate: 0.85,
							diceAttributes: [
								{ id: 1, name: "Low & Slow", cost: 1000, speed: 55, wheelspin: 5 },
								{ id: 2, name: "Fast & Slow", cost: 2000, speed: 65, wheelspin: 50 },
								{ id: 3, name: "Stage 3", cost: 3000, speed: 90, wheelspin: 30 },
								{ id: 4, name: "Double", cost: 4000, speed: 100, wheelspin: 20 }
							]
						}
					],
					turbo: [
						{
							"id": 1,
							"name": "Turbo Dice Face 1",
							"image": "",
							"rollRate": 0.75,
							diceAttributes: [
								{ "id": 1, "name": "Boost", "cost": 1500, "speed": 20, "wheelspin": 10 },
								{ "id": 2, "name": "Overdrive", "cost": 2500, "speed": 40, "wheelspin": 20 },
								{ "id": 3, "name": "Turbo Stage 3", "cost": 3500, "speed": 60, "wheelspin": 30 },
								{ "id": 4, "name": "Turbo Max", "cost": 4500, "speed": 80, "wheelspin": 40 }
							]
						},
						{
							"id": 2,
							"name": "Turbo Dice Face 2",
							"image": "",
							"rollRate": 0.8,
							diceAttributes: [
								{ "id": 1, "name": "Boost", "cost": 1700, "speed": 25, "wheelspin": 12 },
								{ "id": 2, "name": "Overdrive", "cost": 2700, "speed": 50, "wheelspin": 22 },
								{ "id": 3, "name": "Turbo Stage 3", "cost": 3700, "speed": 75, "wheelspin": 32 },
								{ "id": 4, "name": "Turbo Max", "cost": 4700, "speed": 100, "wheelspin": 42 }
							]
						},
						{
							"id": 3,
							"name": "Turbo Dice Face 3",
							"image": "",
							"rollRate": 0.85,
							diceAttributes: [
								{ "id": 1, "name": "Boost", "cost": 1900, "speed": 30, "wheelspin": 15 },
								{ "id": 2, "name": "Overdrive", "cost": 2900, "speed": 60, "wheelspin": 25 },
								{ "id": 3, "name": "Turbo Stage 3", "cost": 3900, "speed": 90, "wheelspin": 35 },
								{ "id": 4, "name": "Turbo Max", "cost": 4900, "speed": 120, "wheelspin": 45 }
							]
						},
					],
					intake: [

					],
					nitrous: [],
					body: [],
					tires: []
				}
			}
		});
		await defaultCar.save();

		return new NextResponse("user is registered", { status: 200 });
	} catch (err: any) {
		return new NextResponse(err, {
			status: 500,
		});
	}
};
