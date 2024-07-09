"use client";
import React, { useState, useEffect } from "react";
import { Drawer } from "flowbite-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <section
                className={` w-screen fixed top-0 z-50 h-20 items-center md:py-6 bg-white ${
                    isScrolled ? "bg-opacity-100" : "bg-opacity-0"
                }  flex transition-all justify-between duration-500 ease-in-out md:px-16 pr-2`}
            >
                <div
                    className={`transition-opacity hidden md:block duration-700 ease-in-out ${
                        isScrolled ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                    >
                        <path
                            d="M60 32.9713C53.4824 32.5732 53.0778 26.8498 53.1191 24.9707H53.0602V11.7724C53.0602 11.7724 52.1038 3.66 59.9097 3.18141V0H39.204C39.204 0.476623 39.204 3.49916 39.204 3.49916C39.204 3.49916 45.5744 2.54395 46.0535 10.3406V30.5568H44.6023C44.6023 30.5568 36.3763 31.21 36.0012 23.7154H32.816V36.392H45.7826C45.6726 38.0632 45.5724 39.6107 45.5744 39.6107C45.6215 39.6107 45.2445 41.5937 45.217 41.7016C44.785 43.3786 44.0545 44.9811 43.0726 46.407C40.8948 49.5629 37.5093 51.5753 33.8725 52.6286C30.2808 53.6662 26.9425 53.2484 23.5315 51.7734C19.4724 50.018 16.2754 46.7326 14.9244 42.5018C14.6259 41.5663 14.402 40.5934 14.3353 39.6107C14.3353 39.6107 14.2351 38.0632 14.1252 36.392H27.0956V23.7154H23.9105C23.5354 31.208 15.3093 30.5568 15.3093 30.5568H13.8581V10.3406C14.3353 2.54591 20.7076 3.49916 20.7076 3.49916C20.7076 3.49916 20.7076 0.476623 20.7076 0H0V3.18141C7.80389 3.65803 6.84951 11.7724 6.84951 11.7724V26.0652C6.65903 28.4699 5.52596 32.632 0.00196565 32.9694V36.1508H6.84951V38.4966C7.43667 44.324 9.86581 49.814 14.2999 53.725C17.218 56.2984 20.7822 58.2383 24.5251 59.3033C28.4192 60.4115 32.6137 60.1467 36.4312 58.8698C37.0321 58.6698 37.6272 58.4501 38.2143 58.2128C42.7564 56.3769 46.8292 53.3661 49.494 49.2138C51.5579 45.999 52.6792 42.2782 53.0621 38.4947V36.1488H60V32.9713Z"
                            fill="#0D0A07"
                        />
                    </svg>
                </div>
                <h1
                    className={`font-belgan tracking-widest transition-all duration-700 ease-in-out ${
                        isScrolled
                            ? "text-black text-4xl 2xl:text-5xl transform scale-75 translate-y-0"
                            : "text-6xl md:text-8xl lg:text-[12rem] text-white mt-6 transform scale-100 md:scale-110 2xl:scale-150 opacity-70 translate-y-10 translate-x-11 md:translate-x-6 md:translate-y-20 lg:translate-y-36"
                    }`}
                >
                    LEVEL UP
                </h1>

                <div className={``}>
                    <button onClick={() => setIsOpen(true)} id="buttonDrawer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M36.3125 12.25C36.3125 12.5981 36.1742 12.9319 35.9281 13.1781C35.6819 13.4242 35.3481 13.5625 35 13.5625H7C6.6519 13.5625 6.31806 13.4242 6.07192 13.1781C5.82578 12.9319 5.6875 12.5981 5.6875 12.25C5.6875 11.9019 5.82578 11.5681 6.07192 11.3219C6.31806 11.0758 6.6519 10.9375 7 10.9375H35C35.3481 10.9375 35.6819 11.0758 35.9281 11.3219C36.1742 11.5681 36.3125 11.9019 36.3125 12.25ZM36.3125 21C36.3125 21.3481 36.1742 21.6819 35.9281 21.9281C35.6819 22.1742 35.3481 22.3125 35 22.3125H7C6.6519 22.3125 6.31806 22.1742 6.07192 21.9281C5.82578 21.6819 5.6875 21.3481 5.6875 21C5.6875 20.6519 5.82578 20.3181 6.07192 20.0719C6.31806 19.8258 6.6519 19.6875 7 19.6875H35C35.3481 19.6875 35.6819 19.8258 35.9281 20.0719C36.1742 20.3181 36.3125 20.6519 36.3125 21ZM36.3125 29.75C36.3125 30.0981 36.1742 30.4319 35.9281 30.6781C35.6819 30.9242 35.3481 31.0625 35 31.0625H7C6.6519 31.0625 6.31806 30.9242 6.07192 30.6781C5.82578 30.4319 5.6875 30.0981 5.6875 29.75C5.6875 29.4019 5.82578 29.0681 6.07192 28.8219C6.31806 28.5758 6.6519 28.4375 7 28.4375H35C35.3481 28.4375 35.6819 28.5758 35.9281 28.8219C36.1742 29.0681 36.3125 29.4019 36.3125 29.75Z"
                                fill={`${isScrolled ? "#0D0A07" : "#ffffff"}`}
                            />
                        </svg>
                    </button>
                </div>

                <Drawer open={isOpen} onClose={handleClose} position="right">
                    <Drawer.Header
                        title="Level Up Style"
                        className="font-belgan"
                        titleIcon={() => <></>}
                    />
                    <Drawer.Items>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                            Supercharge your hiring by taking advantage of
                            our&nbsp;
                            <a
                                href="#"
                                className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
                            >
                                limited-time sale
                            </a>
                            &nbsp;for Flowbite Docs + Job Board. Unlimited
                            access to over 190K top-ranked candidates and the #1
                            design job board.
                        </p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <a
                                href="#"
                                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            >
                                Learn more
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Get access&nbsp;
                                <svg
                                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </Drawer.Items>
                </Drawer>
            </section>
        </div>
    );
}
