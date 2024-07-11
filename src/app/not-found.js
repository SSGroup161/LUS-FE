"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <>
            <div className="md:w-screen md:h-screen w-full flex justify-center items-center">
                <div className="flex flex-col mt-14">
                    <div className=" flex flex-col justify-center items-center relative">
                        <img
                            src="LevelUpAbu.svg"
                            alt="LevelUp"
                            width={100}
                            height={100}
                            className="w-10 mb-6"
                        />
                        <div className="absolute text-center top-14">
                            <h1 className="font-roboto text-xl md:text-3xl text-[#414042] font-medium">
                                OOPS!
                            </h1>
                            <h1 className="font-roboto font-black text-4xl md:text-5xl text-[#414042] w-[35rem]">
                                Looks like you're lost
                            </h1>
                        </div>
                        <img
                            src="AssetNotfound.svg"
                            alt="AssetNotfound"
                            width={100}
                            height={100}
                            className="w-96 lg:w-80 mt-6 md:mt-10 z-20"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1>You can return to the main page</h1>
                        <button
                            type="button"
                            className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group mt-2"
                            onClick={() => router.push("/")}
                        >
                            <div className="bg-black rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                                <svg
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                    ></path>
                                    <path
                                        fill="#ffffff"
                                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                    ></path>
                                </svg>
                            </div>
                            <p className="translate-x-2">Go Back</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
