import User from "@/models/User"
import UserCar from "@/models/UserCar"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import defaultCars from '../../../utils/defaultCars'

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
		money: 25000
	});

	try {
		/* SAVE THE USER WHEN REGISTERING */
		await newUser.save();
 
		/* SAVE THE 2 DEFAULT CARs WHEN REGISTERING */
		const saveDefaultCar0 = new UserCar({
			userEmail: newUser.email,
			car: defaultCars[0]
		});
		await saveDefaultCar0.save();

		const saveDefaultCar1 = new UserCar({
			userEmail: newUser.email,
			car: defaultCars[1]
		});
		await saveDefaultCar1.save();

		return new NextResponse("user is registered", { status: 200 });
	} catch (err: any) {
		return new NextResponse(err, {
			status: 500,
		});
	}
};
