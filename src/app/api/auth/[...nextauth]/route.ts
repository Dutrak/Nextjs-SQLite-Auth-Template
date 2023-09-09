import { NextAuthOptions} from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";
import { getPrismaClient } from "@lib/prisma";
import { compare } from "bcryptjs";
import NextAuth from "next-auth/next";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text"},
                password: { label: "Password", type: "password" }
            },
            /* @ts-ignore */
            async authorize(credentials) {
                const {username, password} = credentials ?? {};
                if (!username || !password) {
                    throw new Error("Missing username or password");
                }
                const user = await getPrismaClient().user.findUnique({
                    /* @ts-ignore */
                    where: { username }
                });
                
                if (!user || await compare(password, user.password)) {
                    throw new Error("Invalid username or password");
                }
                return user
            }
        })
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}