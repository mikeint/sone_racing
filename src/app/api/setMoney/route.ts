import User from "@/models/User";
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

        const { value } = await request.json(); 

		const updatedUserMoney = await User.findOneAndUpdate(
			{ email: userEmail },
			{ $set: { money: value } },
			{ new: true } 
		);
		 
		if (updatedUserMoney) {
			return new NextResponse(JSON.stringify({
				success: "Money added to User",
			}), {
				status: 200,
				headers: {'Content-Type': 'application/json',},
			});
		} else {
			return new NextResponse(JSON.stringify({ error: "Money not added correctly" }), { status: 400 });
		}
		
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
