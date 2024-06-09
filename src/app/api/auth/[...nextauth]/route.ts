import NextAuth, { NextAuthOptions } from 'next-auth';
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import connect from "@/utils/db";

const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      type: 'credentials',
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials?.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials!.password, user.password);
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err.message);
        }
        return null;
      },
    },
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'credentials') {
        return true;
      }
      return false;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };