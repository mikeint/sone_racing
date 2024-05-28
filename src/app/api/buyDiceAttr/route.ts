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
        const user = await User.findOne({ email: userEmail }, 'email money');

        if (!user) return new NextResponse("No user found", { status: 404 });

        const { carId, selectedPartFace, selectedDiceFace, id } = await request.json(); 
		 
		//first we need to find the car that is associated with carId
		const carToUpdate: any = await UserCar.findOne({ 'car.carId': carId, 'userEmail': userEmail });
		const selectedPartFaceArray = carToUpdate.car.parts[selectedPartFace]
		const selectedDiceFaceV = selectedPartFaceArray.find((face: any) => face.id === selectedDiceFace+1);
		const selectedDiceFaceV2 = selectedDiceFaceV.diceAttributes.find((face: any) => face.id === id);
		//console.log(selectedDiceFaceV2)
		const diceAttrValue = selectedDiceFaceV2.cost;

		// If user has enough money
		if (user.money >= diceAttrValue) {
			// remove user money value
			const updatedUserMoney = await User.findOneAndUpdate(
				{ email: userEmail },
				{ $inc: { money: -diceAttrValue } },
				{ new: true } 
			);

			// Step 1: Retrieve the item  
			const selectedItem = carToUpdate.car.parts[selectedPartFace][selectedDiceFace].diceAttributes[id - 1];
			// Step 2: Update the item
			selectedItem.owned = true;
			// Step 3: Update the document
			await carToUpdate.save();

			const carData = await UserCar.find({ 'car.carId': carId });
			return new NextResponse(JSON.stringify({
				carData: carData,
				userMoney: user?.money
			}), {
				status: 200,
				headers: {'Content-Type': 'application/json',},
			});
		} else {
			return new NextResponse(JSON.stringify({ error: "Insufficient funds" }), { status: 400 });
		}

	
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
