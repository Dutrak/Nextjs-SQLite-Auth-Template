'use client'

import '../globals.css'

import { Login } from "@/Components/Login"
import { SignUp } from "@/Components/SignUp"
import { useState } from "react";
import { Transition } from '@headlessui/react'

export default function Home() {
    const [radio, setRadio] = useState('login')

    const handleRadio = (e: any) => {
        if (e.target.id === 'radioleft') {
            setRadio('login')
        } else {
            setRadio('signup')
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form className="flex flex-col items-center justify-center form pt-6 gap-8 px-8">
                <div id='Slider' className={radio === 'login' ? "h-10 w-40 bg-gradient-to-tr from-sky-200 to-sky-600 absolute top-7 left-9  bg-opacity-20 rounded-lg -z-10"
                    : 'h-10 w-40 bg-gradient-to-tr from-sky-200 to-sky-600 absolute top-7 bg-opacity-20 transition-all rounded-lg -z-10 right-7'}></div>
                <div id="buttons" className="flex flex-row">
                    <div className="w-40 h-10 rounded-lg mt-3 border-solid border-px text-center">
                        <input type='radio' checked={radio === 'login'} id="radioleft" name="radio" onChange={handleRadio} className="w-full h-full hidden cursor-pointer" />
                        <label id="left" className=" outline-none text-[#3d3935] font-bold text-base pl-2 cursor-pointer" htmlFor="radioleft">Sign in</label>
                    </div>
                    <div className="w-40 h-10 rounded-lg mt-3 border-solid border-px text-center">
                        <input type='radio' checked={radio === 'signup'} name="radio" id="radioright" onChange={handleRadio} className="w-full h-full hidden cursor-pointer" />
                        <label id="right" className=" outline-none text-[#3d3935] font-bold text-base pl-2 cursor-pointer" htmlFor="radioright">Sign Up</label>
                    </div>
                </div>
                <Transition
                    show={radio === 'login' || radio === 'signup'}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {radio === 'login' ? <Login /> : <SignUp />}
                </Transition>
            </form>
        </main>
    )
}
