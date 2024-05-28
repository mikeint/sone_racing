import NextAuth, { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

// Define the types for the credentials
interface Credentials {
    email: string;
    password: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Credentials | undefined) {
                await connect();
                try {
                    const user = await User.findOne({ email: credentials?.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials!.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            // return {
                            //     id: user._id.toString(),
                            //     email: user.email,
                            //     money: user.money,
                            // };
							return user;
                        }
                    }
                } catch (err: any) {
                    throw new Error(err.message);
                }
                return null;
            },
        }),
    ],
    callbacks: {
        // async jwt({ token, user }) {
        //     if (user) {
		// 		token.email = user.email;
		// 		token.money = user.money;
        //     }
        //     return token;
        // },
        // async session({ session, token }) {
        //     if (token) {
		// 		session.user.money = token.money as number;
        //     }
        //     return session;
        // },

        async signIn({ user, account }) {
            if (account?.provider === "credentials") {
                return true;
            }
            return false;
        },
    },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
