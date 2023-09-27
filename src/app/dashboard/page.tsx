import Image from 'next/image'
import Calc from "../image/calc.png"
import React from "next";

export default function Dashboard() {
    return (
        <main className="flex min-h-screen flex-col items-center  ">


            <div className="container flex justify-evenly flex-row items-center justify-center flex-wrap">
                <div className="mx-auto logos  mt-10  max-w-2xl     pt-28 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="flex max-w-xl flex-col items-start gap-y-4 justify-between justify-center items-center">
                        <Image
                            className=" object-contain lg:col-span-1"
                            src={Calc}
                            alt="Html"
                            width={300}
                            height={200}
                        />
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-gray-600">
                            <a href="../projects/calc/">

                                Calculator
                            </a>
                        </h3>
                    </div>

                </div>


                <div className="mx-auto logos  mt-10  max-w-2xl     pt-28 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="flex max-w-xl flex-col items-start gap-y-4 justify-between justify-center items-center">
                        <div
                            className="  object-contain lg:col-span-1"



                        />
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-gray-600">
                            <a href="#">


                                <h1>More coming </h1>
                            </a>
                        </h3>
                    </div>

                </div>







            </div>
        </main>
    )
}
