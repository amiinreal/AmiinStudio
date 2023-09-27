import Image from 'next/image'

import "../globals.css"
export default function Loading() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-0">

            <div className="container flex min-h-screen flex-col items-center  justify-center">
                <span className="loader"></span>
                <h1 className="text-4xl font-bold m-40 tracking-tight sm:text-6xl">Loading.....</h1>
            </div>
        </main>
    )
}
