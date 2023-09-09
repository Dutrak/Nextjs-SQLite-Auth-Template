import NextAuth, {type NextAuthOptions} from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";
import { getPrismaClient } from "@lib/prisma";
import { compare } from "bcrypt";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password" }
            },
            /* @ts-ignore */
            async authorize(credentials) {
                const {email, password} = credentials ?? {};
                if (!email || !password) {
                    throw new Error("Missing email or password");
                }
                const user = await getPrismaClient().user.findUnique({
                    /* @ts-ignore */
                    where: { email }
                });
                
                if (!user || !(await compare(password, user.password))) {
                    throw new Error("Invalid email or password");
                }
                return user
            }
        })
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}