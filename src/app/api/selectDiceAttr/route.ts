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

		// Step 1: Retrieve the item  
		const selectedAttr = carToUpdate.car.parts[selectedPartFace][selectedDiceFace].diceAttributes[id - 1];
		// Step 2: Update the items, set all to false, then set selected to true
		selectedDiceFaceV.diceAttributes.forEach((attribute: any) => {
			attribute.selected = false;
		});
		selectedAttr.selected = true;
		// Step 3: Update the document




		// const baseStats = carToUpdate.car.baseStats
		
		// let previouslySelectedAttr = {
		// 	horsepower: selectedAttr.horsepower,
		// 	weight: selectedAttr.weight,
		// 	acceleration: selectedAttr.acceleration,
		// 	wheelspin: selectedAttr.wheelspin
		// };

		// console.log("previouslySelectedAttr: ", previouslySelectedAttr);
		// console.log("baseStats: ", baseStats);
		
		// // Subtract the stats of the previously selected attribute
		// baseStats.horsepower -= previouslySelectedAttr.horsepower;
		// baseStats.weight -= previouslySelectedAttr.weight;
		// baseStats.acceleration -= previouslySelectedAttr.acceleration;
		// baseStats.wheelspin -= previouslySelectedAttr.wheelspin;
		
		// // Add the stats of the new selected attribute
		// baseStats.horsepower += selectedAttr.horsepower;
		// baseStats.weight += selectedAttr.weight;
		// baseStats.acceleration += selectedAttr.acceleration;
		// baseStats.wheelspin += selectedAttr.wheelspin;
		
		// // Update the previously selected attribute
		// previouslySelectedAttr = { ...selectedAttr };
		
		// console.log(selectedAttr.horsepower, selectedAttr.weight, selectedAttr.acceleration, selectedAttr.wheelspin);



		await carToUpdate.save();

		const carData = await UserCar.find({ 'car.carId': carId, 'userEmail': userEmail });
		return new NextResponse(JSON.stringify({
			carData: carData,
			userMoney: user?.money
		}), {
			status: 200,
			headers: {'Content-Type': 'application/json',},
		});

	
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
