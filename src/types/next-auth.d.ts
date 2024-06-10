// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      money: number;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    email: string;
    money: number;
  }

  interface JWT {
    email: string;
    money: number;
  }
}
