import Image from 'next/image'
import './globals.css'
import Link from 'next/link'


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center  p-24">
        <div className="relative isolate px-6 pt-20  lg:px-8 flex min-h-screen flex-col items-center" >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl"> Amiin Ahmed </h1>

          <img
              className="inline-block h-200 w-200 rounded-full m-10  ring-2 ring-white"
              src="https://media.licdn.com/dms/image/D4D03AQFN-UITgF4oCQ/profile-displayphoto-shrink_400_400/0/1694443822832?e=1700092800&v=beta&t=FbKV7bvvnb5qBg7EpEONVgWHMj07GUCb4C4ccBqoKE8"
              alt=""
          />


          {/* Codes */}
          <div className=" px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 ">
              I like to create Websites with the help of these tools
            </h2>
            <div className="mx-auto logos mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-features-flexvdi-5.png"
                  alt="Html"
                  width={158}
                  height={48}
              />
              <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  alt="css"
                  width={158}
                  height={48}
              />
              <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  alt="NextJs"
                  width={158}
                  height={48}
              />
              <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"
                  alt="Java"
                  width={158}
                  height={48}
              />
              <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
                  alt="Javascript"
                  width={158}
                  height={48}
              />

            </div>
          </div>
          <a className='w-44 h-14 p-0 mt-20'  href="/dashboard"><button className="rounded-full w-44 h-14 bg-[#ffde59] text-black ">Visit Portifolio</button></a>
        </div>


      </main>
  )
}
