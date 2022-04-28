import React, { useState, useRef, useEffect } from "react";
import { Button } from "reakit";

const navData = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Mint NFT",
      href: "/mint-nft",
    },
    {
      name: "My Collection",
      href: "/my-collection",
    },
  ];

const Navbar = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setModalOpen(false));

    
    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
              document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
            };
          },
          
          [ref, handler]
        );
      }

    return (
        <div className="bg-orange-400">
            <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-5 py-6">
            <div 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/';
                    }}
            className="h-[2rem] flex items-center text-center text-white uppercase italic cursor-pointer"
              alt="logo" 
            >
              Cross Chain Project
            </div>
            <nav className="hidden md:flex space-x-10 items-center text-white">
                {navData.map((n) => {
                return (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = n.href;
                    }}
                    key={n.name} className="cursor-pointer uppercase text-xl">
                    {n.name}
                    </div>
                );
                })}
                <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/connect-wallet';
                    }}
                className="inline-flex justify-center px-4 py-2 text-xl font-medium text-red-900 bg-orange-100 border border-transparent rounded-full hover:bg-orange-200 border-orange-700">
                  Profile
                </Button>
            </nav>
            <div className="md:hidden">
                {isModalOpen ? (
                <div
                ref={ref}
                    className="bg-orange-400 border-[1px]  fixed w-[24rem] right-0 top-0 h-[100vh] transition translate-x-[-1px] rounded-lg  text-white"
                >
                    <div className="pt-5 pb-6 px-5">
                    <Button
                        onClick={() => setModalOpen(!isModalOpen)}
                        className="-mr-2 float-right mb-3"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                        </svg>
                    </Button>
        
                    <div className="mt-[5rem] z-99 relative">
                        <nav className="grid gap-y-8">
                        {navData.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-orange-500 border-white-500/60"
                            >
                            <span className="my-3 ml-3 text-xl font-bold uppercase">
                                {item.name}
                            </span>
                            </a>
                        ))}
                        <Button 
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '/connect-wallet';
                            }}
                        className="inline-flex justify-center px-4 py-2 text-xl font-medium text-red-900 bg-orange-100 border border-transparent rounded hover:bg-orange-200 border-orange-700">
                          Profile
                        </Button>
                        </nav>
                    </div>
                    </div>
                </div>
                ) : (
                <Button onClick={() => setModalOpen(!isModalOpen)} className="text-white">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                    </svg>
                </Button>
                )}
            </div>
            </div>
        </div>
    )
}

export default Navbar