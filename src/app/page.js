"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

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

    const scrollToDown = () => {
        window.scrollTo({
            top: 900,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <Navbar />
            <div className="">
                <section className="h-screen w-screen flex justify-center items-center relative">
                    <video
                        src="https://res.cloudinary.com/dixxtnquz/video/upload/v1720424068/Levelup%20Style/0708_1_ejozfk.mov"
                        width="100%"
                        height="100%"
                        alt="videobg"
                        className="h-screen w-full object-cover z-10 m-auto"
                        loop
                        autoPlay
                        muted
                        playsInline
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute w-screen h-screen z-10 flex justify-center items-end">
                        <div className="flex justify-center items-center flex-col">
                            <h1 className="font-playfair text-white text-2xl text-center">
                                See Our Collection
                            </h1>
                            <p className="font-playfair text-white text-sm">
                                Discover styles that reflect your personality
                                with our latest collections
                            </p>
                            <div
                                className={`parentSVG mt-2 ${
                                    isScrolled ? "opacity-0" : "opacity-100"
                                }`}
                            >
                                <svg
                                    id="Layer_1"
                                    enableBackground="new 0 0 4000 4000"
                                    height="60"
                                    viewBox="0 0 4000 4000"
                                    width="512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => scrollToDown()}
                                    className={`scrollDownBounce hidden md:block z-40 cursor-pointer w-16 h-16`}
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="m2000.007 2839.76c-29.431 0-58.862-11.228-81.317-33.683l-1150.007-1149.997c-44.91-44.91-44.911-117.724-.001-162.634 44.91-44.912 117.725-44.911 162.635 0l1068.69 1068.681 1068.676-1068.669c44.911-44.91 117.724-44.91 162.635.001 44.91 44.91 44.91 117.724 0 162.634l-1149.994 1149.984c-22.455 22.455-51.887 33.683-81.317 33.683z"
                                                fill="#ffffff"
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="m2000 2149.761c-30.5 0-59.75-12.116-81.317-33.683l-460-460c-44.91-44.91-44.91-117.724 0-162.634 44.91-44.911 117.725-44.911 162.635 0l378.682 378.682 378.682-378.683c44.912-44.912 117.727-44.909 162.635 0 44.91 44.91 44.91 117.725 0 162.634l-459.999 460c-21.567 21.568-50.818 33.684-81.318 33.684z"
                                                fill="#ffffff"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-screen w-screen flex justify-center items-center bg-slate-200 ">
                    <h1>Page 2</h1>
                </section>
            </div>
        </div>
    );
}
