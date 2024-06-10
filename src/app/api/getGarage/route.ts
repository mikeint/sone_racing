import UserCar from "@/models/UserCar";
import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
	await connect();

	try {
		const session = await getServerSession();

		if (!session) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const userEmail = session?.user?.email;

		// Fetch all cars for the logged-in user by email
		const userCars = await UserCar.find({ userEmail: userEmail }, 'car');

		if (!userCars || userCars.length === 0) {
			return new NextResponse("No cars found", { status: 404 });
		}

		// return just contents of the cars, not entire car object
		const carObjects = userCars.map(doc => doc.car);

		return new NextResponse(JSON.stringify(carObjects), {
			status: 200,
			headers: {'Content-Type': 'application/json',},
		});
	} catch (error) {
		return new NextResponse("Internal Server Error", { status: 500 });
	}
};
