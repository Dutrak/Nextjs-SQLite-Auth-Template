import { Transition } from "@headlessui/react";

export function SignUp() {
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
          type="text"
          placeholder="Username"
        />
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
            bg-white bg-opacity-5 text-white font-bold text-base"
          type="password"
          placeholder="Password"
        />
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
            bg-white bg-opacity-5 text-white font-bold text-base"
          type="password"
          placeholder="Confirm Password"
        />
        <input
          className="rounded-md p-3 m-3 border-solid border-px outline-none focus:ring-2 focus:ring-sky-400
             bg-white bg-opacity-5 text-white font-bold text-base"
          type="email"
          placeholder="Email address"
        />
        <button
          className="rounded-lg m-3 border-solid border-px outline-none focus:ring-2 hover:bg-opacity-50
            bg-white text-[#3d3935] font-bold text-base w-40 h-10"
          type="submit">Cadastrar</button>
    </Transition>
  )
}