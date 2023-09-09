import { Transition } from "@headlessui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function SignUp() {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const router = useRouter()

  function handleSubmit(e: any) {
    e.preventDefault()
    fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, password2 }),
    }).then (async res => {
      if (res.status === 200) {
        setTimeout(() => {
          toast.success('Account created successfully!')
        }, 2000)
        router.refresh()
      } else {
        const { error } = await res.json()
        toast.error(error)
      }
    })
  }

  return (
    <Transition
      className="flex flex-col items-center justify-center"
      appear={true}
      show={true}
      enter="transition-opacity ease-in-out duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-out duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
        <h1 className="text-white font-bold text-3xl pb-6">Cadastro</h1>
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
            bg-white bg-opacity-5 text-white font-bold text-base"
          type="email" name="email" id="email" required  autoComplete="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
            bg-white bg-opacity-5 text-white font-bold text-base"
          type="password" name="password" id="password" required autoComplete="password" value={password} onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
            bg-white bg-opacity-5 text-white font-bold text-base" 
          type="password" name="password2" id="password2" required autoComplete="password2" value={password2} onChange={e => setPassword2(e.target.value)}
          placeholder="Confirm Password"
        />
        <button
          className="rounded-lg m-3 border-solid border-px outline-none focus:ring-2 hover:bg-opacity-50
            bg-white text-[#3d3935] font-bold text-base w-40 h-10" 
          type="submit" onClick={handleSubmit}>Cadastrar</button>
    </Transition>
  )
}