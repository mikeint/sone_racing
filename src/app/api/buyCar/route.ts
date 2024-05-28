import User from "@/models/User";
import UserCar from "@/models/UserCar";
import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import defaultCars from '../../../utils/defaultCars';
 
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

		// find the car with the carId 
		// then find the actual value of that car
		const foundCar = defaultCars.find(car => car.carId === carId);
	
		const actualValue = foundCar?.value;
		console.log("Actual Value found in backend:", actualValue);
		
		//if the actualValue of the car exists
		if (actualValue) {
			// If user has enough money
			if (user.money >= actualValue) {
				// remove user money value and add the car to user then send back all userCars 
				const updatedUserMoney = await User.findOneAndUpdate(
					{ email: userEmail },
					{ $inc: { money: -actualValue } },
					{ new: true } // Return the updated document
				);

				const addedUserCar = await UserCar.create({
					userEmail: userEmail,
					car: foundCar
				});

				if (addedUserCar) {
					const userCars = await UserCar.find({ userEmail: userEmail }, 'car');

					// return just contents of the cars, not entire car object
					const carObjects = userCars.map(doc => doc.car);
					return new NextResponse(JSON.stringify({
						userCars: carObjects,
						userMoney: user?.money
					}), {
						status: 200,
						headers: {'Content-Type': 'application/json',},
					});
				} else {
					return new NextResponse("User did not update, sorry", { status: 400 });
				}
			} else {
				return new NextResponse(JSON.stringify({ error: "Insufficient funds" }), { status: 400 });
			}
		}
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
