'use client'

import { Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function Login() {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  function handleSubmit(e: any) {
    e.preventDefault()
    signIn('credentials', {
      email,
      password,
      redirect: false,
  /* @ts-ignore */
    }).then(({error}) => {
      if (error) {
        toast.error(error)
      } else {
        router.refresh()
        router.push('/protected')
      }
    })
  }

  return (
    <Transition
      className="flex flex-col items-center justify-center"
      appear={true}
      show={true}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
        <h1 className="text-white font-bold text-3xl pb-6">Login</h1>
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
            bg-white bg-opacity-5  text-white font-bold text-base"
          type="email" name="email" id="email" required autoComplete="email"
          placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}
        />
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
            bg-white bg-opacity-5  text-white font-bold text-base"
          type="password" name="password" id="password" required value={password} onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="rounded-lg m-3 border-solid border-px outline-none hover:bg-opacity-50
            bg-white text-[#3d3935] font-bold text-base w-40 h-10"
          type="submit" onClick={handleSubmit}>Logar</button>
    </Transition>
  )
}