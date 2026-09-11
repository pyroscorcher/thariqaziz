import "tailwindcss";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="overflow-hidden isolate bg-white">

      <div>
        <img src="resources/phonify1.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 -z-10"/>

        <Navbar />

        <div className="relative isolate px-6 pt-48 lg:px-8">
          <div className="overflow-hidden py-32 sm:py-48 lg:py-56 flex w-full">
            <div className="flex w-max animate-marquee-seamless">
              <h1 className="whitespace-nowrap tracking-tight drop-shadow-lg font-popins font-bold tracking-tight text-white sm:text-[12rem] pr-16">
                MUHAMMAD THARIQ AZIZ
              </h1>
              <h1 className="whitespace-nowrap tracking-tight drop-shadow-lg font-popins font-bold tracking-tight text-white sm:text-[12rem] pr-16">
                MUHAMMAD THARIQ AZIZ
              </h1>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full px-8 py-24 md:px-16 lg:px-32 xl:px-48">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
          
          <div className="lg:w-3/5">
            <h2 className="font-popins text-3xl font-medium leading-[1.3] text-gray-900 md:text-4xl lg:text-[2.75rem]">
              Bringing a proactive approach to learning, collaboration, and innovation across technical domains.
            </h2>
          </div>

          <div className="lg:w-2/5 lg:pl-10">
            <p className="font-popins text-sm leading-relaxed text-gray-700 md:text-base">
              Ambitious and driven undergraduate student, with strong communication skill. Skilled in application and system development as well as UI/UX design.
            </p>
          </div>

        </div>

        <div className="flex items-center justify-center h-screen">
          <button className="relative overflow-hidden rounded-full border-2 border-gray-800 bg-transparent py-6 px-[3.75rem] font-medium text-gray-800 transition-colors before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:before:origin-top hover:before:scale-y-100">
            More work
          </button>
        </div>

      </div>



    </main>
  );
}
