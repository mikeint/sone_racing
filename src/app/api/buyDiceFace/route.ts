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

        const { carId, id, selectedPartFace } = await request.json();
		
		// find the diceFace with the diceFaceId 
		const carToUpdate: any = await UserCar.findOne({ 'car.carId': carId, 'userEmail': userEmail });

		// then find the actual value of that diceFace
		const diceFace = carToUpdate.car.parts[selectedPartFace]?.filter((diceFace:any) => diceFace.id === id)
		const diceFaceValue = diceFace[0].cost;

		//if the actualValue of the car exists
		if (diceFaceValue) { 
			// If user has enough money
			
			if (user.money >= diceFaceValue) {
				// remove user money value
				const updatedUserMoney = await User.findOneAndUpdate(
					{ email: userEmail },
					{ $inc: { money: -diceFaceValue } },
					{ new: true } 
				); 
				
				// Step 1: Retrieve the item
				const selectedItem = carToUpdate.car.parts[selectedPartFace][id - 1];
				// // Step 2: Update the item
				selectedItem.owned = true;
				// // Step 3: Update the document
				await carToUpdate.save();
  
				if (carToUpdate) {
					const carData = await UserCar.find({ 'car.carId': carId, 'userEmail': userEmail });
					return new NextResponse(JSON.stringify({
						carData: carData,
						userMoney: updatedUserMoney.money
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
