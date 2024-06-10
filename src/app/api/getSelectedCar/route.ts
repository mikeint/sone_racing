import UserCar from "@/models/UserCar";
import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
	await connect();

	try {
		const session = await getServerSession();
		if (!session) return new NextResponse("Unauthorized", { status: 401 });
		const userEmail = session?.user?.email;

		// Fetch selected car for the logged-in user by email
		const selectedCar = await UserCar.findOne({ userEmail: userEmail, 'car.selected': true })
		if (!selectedCar || selectedCar.length === 0) return new NextResponse("No cars found", { status: 404 });

		return new NextResponse(JSON.stringify(selectedCar), {
			status: 200,
			headers: {'Content-Type': 'application/json'},
		});
	} catch (error) {
		return new NextResponse("Internal Server Error", { status: 500 });
	}
};
export const dynamic = 'force-dynamic';
