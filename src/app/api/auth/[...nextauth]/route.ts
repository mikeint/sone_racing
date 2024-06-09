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

const authOptions: NextAuthOptions = {
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
        async signIn({ user, account }) {
            if (account?.provider === "credentials") {
                return true;
            }
            return false;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
