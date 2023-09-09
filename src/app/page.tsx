'use client'

import Link from "next/link";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();

  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            Next.js Prisma SQLite Auth Template
          </h1>
          <p className="text-stone-400 mt-5"> This is a{" "} 
          <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-200 transition-all"> Next.js
            </a>{" "} starter kit that uses {" "}
            <a
              href="https://next-auth.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-200 transition-all">Next-Auth
            </a>{" "}for simple email + password login
          </p>
        </div>
        <div className="flex space-x-3">
          <Link href="/protected" className="text-stone-400 underline hover:text-stone-200 transition-all" onClick={(e) => { session ? null : toast.error("You must be signed in to view this page") }}>Protected Page</Link>
          <Link href="/login" className="text-stone-400 underline hover:text-stone-200 transition-all">Login Page </Link>
        </div>
      </div>
    </div>
  );
}
