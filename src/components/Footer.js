"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();
    return (
        <>
            <div className="w-screen lg:h-[80vh] bg-black">
                <div className="max-w-screen-2xl h-full px-12 md:px-32 lg:px-20 py-20 md:py-32 2xl:py-48 m-auto">
                    <div className="flex gap-12 items-center justify-center w-full h-full flex-col lg:flex-row">
                        <div className="flex-1 flex justify-center items-center h-full">
                            <img
                                src="/LogoPutih.png"
                                alt="LevelUpStyle"
                                width="100"
                                height="100"
                                className="w-32 md:w-48"
                            />
                        </div>
                        <div className="flex-1 flex gap-8 lg:gap-0 flex-col justify-between items-center h-full w-full md:ps-28 lg:ps-14">
                            <div className="flex justify-center lg:justify-between w-full items-center gap-10 ">
                                <div className="font-roboto text-white flex flex-col gap-5 flex-1">
                                    <h1 className=" md:text-2xl">
                                        Information
                                    </h1>
                                    <p
                                        className="link-underline max-w-8 md:max-w-12 mt-2 text-xs md:text-base font-light cursor-pointer"
                                        onClick={() => router.push("/faqs")}
                                    >
                                        FAQ's
                                    </p>
                                    <p
                                        className="link-underline max-w-20 md:max-w-28 text-xs md:text-base font-light cursor-pointer"
                                        onClick={() =>
                                            router.push("/privacy-policy")
                                        }
                                    >
                                        Privacy Policy
                                    </p>
                                    <p
                                        className="link-underline max-w-28 md:max-w-36 text-xs md:text-base font-light cursor-pointer"
                                        onClick={() =>
                                            router.push("/terms-conditions")
                                        }
                                    >
                                        Terms & Conditions
                                    </p>
                                </div>
                                <div className="font-roboto text-white flex flex-col gap-5 flex-1">
                                    <h1 className=" md:text-2xl">Company</h1>
                                    <p className="link-underline max-w-14 md:max-w-20 mt-2 text-xs md:text-base font-light cursor-pointer">
                                        About Us
                                    </p>
                                    <p className="link-underline max-w-14 md:max-w-20 text-xs md:text-base font-light cursor-pointer">
                                        Products
                                    </p>
                                    <p className="link-underline max-w-8 md:max-w-10 text-xs md:text-base font-light cursor-pointer">
                                        Edits
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center gap-10 ">
                                <div className="font-roboto text-white flex flex-col gap-5 flex-1">
                                    <h1 className=" md:text-2xl">E-Commerce</h1>
                                    <a
                                        href="https://shopee.co.id/levelup_style"
                                        className="link-underline max-w-11 md:max-w-14 mt-2 text-xs md:text-base font-light cursor-pointer"
                                    >
                                        Shopee
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@levelupstyleid"
                                        className="link-underline max-w-9 md:max-w-12 text-xs md:text-base font-light cursor-pointer"
                                    >
                                        Tiktok
                                    </a>
                                </div>
                                <div className="font-roboto text-white flex flex-col gap-5 flex-1">
                                    <h1 className=" md:text-2xl">
                                        Get In Touch
                                    </h1>
                                    <a
                                        href="https://wa.me/6285772284721"
                                        className="link-underline max-w-24 md:max-w-32 mt-2 text-xs md:text-base font-light cursor-pointer"
                                    >
                                        ‪+62 857‑7228‑4721‬
                                    </a>
                                    <a
                                        href="mailto:info@levelupstyle.id"
                                        className="link-underline max-w-28 md:max-w-36 text-xs md:text-base font-light cursor-pointer"
                                    >
                                        info@levelupstyle.id
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <div className="flex flex-col justify-center items-end w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="84"
                                    height="58"
                                    viewBox="0 0 84 58"
                                    fill="none"
                                >
                                    <path
                                        d="M6.53792 57.4704H24.4127L36.3293 34.4822V0H0.579651V34.4822H18.4545L6.53792 57.4704ZM54.2041 57.4704H72.0789L83.9955 34.4822V0H48.2458V34.4822H66.1206L54.2041 57.4704Z"
                                        fill="#4F4F4F"
                                        fillOpacity="0.5"
                                    />
                                </svg>
                                <h1 className="text-white font-roboto w-72 md:w-full lg:w-56 2xl:w-72 leading-[3rem] font-light text-lg">
                                    We believe that elegance can come from the
                                    clothes we wear every day, which is why we
                                    offer high-quality clothing products with
                                    designs that can be matched with any style
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end md:justify-center lg:justify-end items-center mt-14">
                        <h1 className="text-white font-roboto font-light text-xs text-center">
                            All Rights Reserved ©2024 Level Up Style | PT LEVEL
                            UP SUKSES INDONESIA
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
