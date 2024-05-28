import User from "@/models/User";
import connect from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
	await connect();

	try {
		const session = await getServerSession();

		if (!session) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const userEmail = session?.user?.email;

		const user = await User.findOne({ email: userEmail }, 'email username money');

		if (!user) {
			return new NextResponse("No user found", { status: 404 });
		}

		return new NextResponse(JSON.stringify({ email: user.email, money: user.money }), {
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
