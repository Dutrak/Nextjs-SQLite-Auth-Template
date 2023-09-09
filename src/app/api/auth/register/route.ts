import { getPrismaClient } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST (req: Request){
    /* @ts-ignore */
    const { username, password } = req.json();
    const exists = await getPrismaClient().user.findUnique({
        /* @ts-ignore */
        where: { username }
    })
    if (exists) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    } else {
        const user = await getPrismaClient().user.create({
            data: {
                username,
                password: await hash(password, 10)
            }
        });
        return NextResponse.json(user)
    }
}