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

        const { carId } = await request.json();
		console.log("carId from front end: ", carId)

		// set all userCars selected to false
		const result = await UserCar.updateMany(
			{ userEmail: userEmail },
			{ $set: { 'car.selected': false } }
		); 

		// set THIS carId userCars selected to true
		const updatedUserCarSelect = await UserCar.findOneAndUpdate(
			{ userEmail: userEmail, 'car.carId': carId },
			{ 'car.selected': true },
			{ new: true }
		);
		 
		if (updatedUserCarSelect) {
			// return all userCars
			const userCars = await UserCar.find({ userEmail: userEmail }, 'car');
			const carObjects = userCars.map(doc => doc.car);

			return new NextResponse(JSON.stringify({
				userCars: carObjects,
			}), {
				status: 200,
				headers: {'Content-Type': 'application/json',},
			});
		} else {
			return new NextResponse(JSON.stringify({ error: "not updated" }), { status: 400 });
		}
		
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
export const dynamic = 'force-dynamic';