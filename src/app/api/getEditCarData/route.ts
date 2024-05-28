import UserCar from "@/models/UserCar";
import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
    await connect();

    const urlParts = req.url.split('?');
    if (urlParts.length < 2) {
        return new NextResponse("No query parameters found", { status: 400 });
    }
    const queryParams = new URLSearchParams(urlParts[1]);
    const carId = queryParams.get('carId');
    
    try {
        const session = await getServerSession();
        
        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const userEmail = session?.user?.email; 

        // GET ALL USER CARS
        const userCars = await UserCar.find({ userEmail: userEmail });
        if (!userCars) return new NextResponse("No user found or user has no cars", { status: 404 });

        const car = userCars.find((car) => car.car.carId === carId);

        if (!car) {
            return new NextResponse("No car found for the provided carId", { status: 404 });
        } 

        // Return just the car object without wrapping it in another object
        return new NextResponse(JSON.stringify(car.car), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
