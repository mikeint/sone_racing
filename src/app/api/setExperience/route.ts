import User from "@/models/User";
import UserCar from "@/models/UserCar";
import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"; 
 
export const POST = async (request: any) => {
    await connect();

    try {
        const session = await getServerSession();
        if (!session) return new NextResponse("Unauthorized", { status: 401 });
        const userEmail = session?.user?.email;
        const user = await User.findOne({ email: userEmail }, 'email username money');

        if (!user) return new NextResponse("No user found", { status: 404 });

        const { carId, exp } = await request.json();
		console.log("carId / exp from front end: ", carId, exp)

		// set THIS carId userCars selected to true
		const updatedUserCarExp = await UserCar.findOneAndUpdate(
			{ userEmail: userEmail, 'car.carId': carId },
			{ $inc: { 'car.$.experience': exp } },
			{ new: true }
		);
		 
		if (updatedUserCarExp) {
			return new NextResponse(JSON.stringify({
				success: "experience added to car",
			}), {
				status: 200,
				headers: {'Content-Type': 'application/json',},
			});
		} else {
			return new NextResponse(JSON.stringify({ error: "Exp not updated" }), { status: 400 });
		}
		
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
