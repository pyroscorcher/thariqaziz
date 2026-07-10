'use client';

import "tailwindcss";
import { useState } from "react";

const navigation = [
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden isolate bg-white">

      <div>
        <img src="resources/phonify1.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 -z-10"/>

        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-center p-12 lg:px-8">
            <div className="flex lg:hidden w-full justify-end">
              {/* I added w-full and justify-end here so your mobile hamburger menu stays on the right side on small screens! */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-[38px] leading-6 font-bold font-popins text-white">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-200"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-xl/6 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

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
