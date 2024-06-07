"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Loader from '../../components/Loader/Loader';

const Register = () => {
	const [error, setError] = useState("");
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();

	useEffect(() => {
		if (sessionStatus === "authenticated") {
			router.replace("/dashboard");
		}
	}, [sessionStatus, router]);

	const isValidEmail = (email: string) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		if (!isValidEmail(email)) {
			setError("Email is invalid");
			return;
		}

		if (!password || password.length < 8) {
			setError("Password is invalid");
			return;
		}

		try {
			const res = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});
			if (res.status === 400) {
				setError("This email is already registered");
			}
			if (res.status === 200) {
				setError("");
				//router.push("/login"); dont just redirect, log the user in.
				const res = await signIn("credentials", {
					redirect: false,
					email,
					password,
				});
			}
		} catch (error) {
			setError("Error, try again");
			console.log(error);
		}
	};

	if (sessionStatus === "loading") {
		return <Loader/>;
	}

	return (
		sessionStatus !== "authenticated" && (
			<div className="h-screen flex items-center justify-center">
				<div className="bg-[#212121] p-3 rounded shadow-md w-96">
					<h1 className="text-3xl text-center font-semibold mb-8 text-white">Register</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
							placeholder="Email"
							required
						/>
						<input
							type="password"
							className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
							placeholder="Password"
							required
						/>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
						>
							{" "}
							Register
						</button>
						<p className="text-red-600 text-[16px] mb-4">{error && error}</p>
					</form>
					<div className="text-center text-gray-500 mt-4">- OR -</div>
					<Link
						className="block text-center text-blue-500 hover:underline mt-2"
						href="/login"
					>
						Login Here
					</Link>
				</div>
			</div>
		)
	);
};

export default Register;
