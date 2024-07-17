"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);
    const router = useRouter();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToDown = () => {
        window.scrollTo({
            top: 780,
            behavior: "smooth",
        });
    };

    const title = "LEVEL UP STYLE© Official Website";
    const description =
        "Welcome to the website dedicated to Level Up Style and can be accessed via the URL www.levelupstyle.id Please read carefully the Terms of Use of this website. By accessing this site you accept the website's Terms of Use without objection.";
    const canonicalUrl = "https://www.levelupstyle.id/";

    useEffect(() => {
        document.title = title;

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            meta.setAttribute("content", description);
            document.head.appendChild(meta);
        }

        const linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute("href", canonicalUrl);
        } else {
            const link = document.createElement("link");
            link.setAttribute("rel", "canonical");
            link.setAttribute("href", canonicalUrl);
            document.head.appendChild(link);
        }
    }, [title, description, canonicalUrl]);

    return (
        <div>
            <Navbar />
            <div className="">
                <section className="h-screen w-full flex justify-center items-center relative overflow-hidden">
                    <video
                        src="https://res.cloudinary.com/dixxtnquz/video/upload/v1720768833/Levelup%20Style/tvc_LUS_iqan9m.mp4"
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
                            <h1 className="font-playfair text-white text-lg md:text-2xl text-center">
                                See Our Collection
                            </h1>
                            <p className="font-roboto text-white text-[0.6rem] w-64 md:w-auto md:text-sm text-center">
                                Discover styles that reflect your personality
                                with our latest collections
                            </p>
                            <div
                                className={`parentSVG md:mt-2 ${
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
                                    className={`scrollDownBounce z-40 cursor-pointer w-12 h-12 md:w-16 md:h-16`}
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
                <section className="lg:h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
                    <div className="flex justify-between items-center max-w-screen-2xl w-full px-8 flex-col lg:flex-row">
                        <div className="flex flex-col md:flex-row md:w-full justify-evenly py-12 lg:gap-7 2xl:gap-14">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-64 h-96 overflow-hidden rounded-t-2xl relative flex justify-center items-end mt-10 lg:mt-0">
                                    <Image
                                        src="/LevelUpAsset1.jpg"
                                        width="1000"
                                        height="1000"
                                        className={`w-full rounded-t-2xl transition-opacity absolute duration-500 ${
                                            isHover1
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }`}
                                        alt="DefaultImage"
                                    />
                                    <Image
                                        src="/LevelUpAsset1Hover.jpg"
                                        width="1000"
                                        height="1000"
                                        quality={100}
                                        className={`w-full rounded-t-2xl transition-opacity duration-500 absolute top-0 left-0 ${
                                            isHover1
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                        alt="HoverImage"
                                        onMouseEnter={() => setIsHover1(true)}
                                        onMouseLeave={() => setIsHover1(false)}
                                    />
                                    <button
                                        className="bg-white/50 text-black/50 text-sm hover:bg-black hover:text-white px-4 py-2 z-10 mb-6 rounded-full transition-colors duration-300 ease-in-out"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See Details
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-start h-full md:h-auto w-full">
                                    <h1 className="mt-4 font-roboto font-light">
                                        Level Up
                                    </h1>
                                    <h1 className=" font-playfair text-lg">
                                        Gamis One Set Scraff White
                                    </h1>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <div className="w-64 h-96 overflow-hidden rounded-t-2xl relative flex justify-center items-end mt-10 lg:mt-0">
                                    <Image
                                        src="/LevelUpAsset2.jpg"
                                        width="1000"
                                        height="1000"
                                        quality={100}
                                        className={`w-full rounded-t-2xl transition-opacity absolute duration-500 ${
                                            isHover2
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }`}
                                        alt="DefaultImage"
                                    />
                                    <Image
                                        src="/LevelUpAsset2Hover.jpg"
                                        width="1000"
                                        height="1000"
                                        quality={100}
                                        className={`w-full rounded-t-2xl transition-opacity duration-500 absolute top-0 left-0 ${
                                            isHover2
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                        alt="HoverImage"
                                        onMouseEnter={() => setIsHover2(true)}
                                        onMouseLeave={() => setIsHover2(false)}
                                    />
                                    <button
                                        className="bg-white/50 text-black/50 text-sm hover:bg-black hover:text-white px-4 py-2 z-10 mb-6 rounded-full transition-colors duration-300 ease-in-out"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See Details
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-start  h-full md:h-auto w-full">
                                    <h1 className="mt-4 font-roboto font-light">
                                        Level Up
                                    </h1>
                                    <h1 className=" font-playfair text-lg">
                                        Gamis One Set Scraff Black
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:w-full justify-evenly md:py-12 lg:gap-7 2xl:gap-14">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-64 h-96 overflow-hidden rounded-t-2xl relative flex justify-center items-end">
                                    <Image
                                        src="/LevelUpAsset3.jpg"
                                        width="1000"
                                        height="1000"
                                        quality={100}
                                        className={`w-full rounded-t-2xl transition-opacity absolute duration-500 ${
                                            isHover3
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }`}
                                        alt="DefaultImage"
                                    />
                                    <Image
                                        src="/LevelUpAsset3Hover.jpg"
                                        width="1000"
                                        height="1000"
                                        className={`w-full rounded-t-2xl transition-opacity duration-500 absolute top-0 left-0 ${
                                            isHover3
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                        alt="HoverImage"
                                        onMouseEnter={() => setIsHover3(true)}
                                        onMouseLeave={() => setIsHover3(false)}
                                    />
                                    <button
                                        className="bg-white/50 text-black/50 text-sm hover:bg-black hover:text-white px-4 py-2 z-10 mb-6 rounded-full transition-colors duration-300 ease-in-out"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See Details
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-start h-full md:h-auto  w-full">
                                    <h1 className="mt-4 font-roboto font-light">
                                        Level Up
                                    </h1>
                                    <h1 className=" font-playfair text-lg">
                                        One Set Full Colour BY
                                    </h1>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <div className="w-64 h-96 overflow-hidden rounded-t-2xl relative flex justify-center items-end mt-10 md:mt-0">
                                    <Image
                                        src="/LevelUpAsset4.jpg"
                                        width="1000"
                                        height="1000"
                                        quality={100}
                                        className={`w-full rounded-t-2xl transition-opacity absolute duration-500 ${
                                            isHover4
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }`}
                                        alt="DefaultImage"
                                    />
                                    <Image
                                        src="/LevelUpAsset4Hover.jpg"
                                        width="1000"
                                        height="1000"
                                        className={`w-full rounded-t-2xl transition-opacity duration-500 absolute top-0 left-0 ${
                                            isHover4
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                        alt="HoverImage"
                                        onMouseEnter={() => setIsHover4(true)}
                                        onMouseLeave={() => setIsHover4(false)}
                                    />
                                    <button
                                        className="bg-white/50 text-black/50 text-sm hover:bg-black hover:text-white px-4 py-2 z-10 mb-6 rounded-full transition-colors duration-300 ease-in-out"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See Details
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-start h-full md:h-auto w-full">
                                    <h1 className="mt-4 font-roboto font-light">
                                        Level Up
                                    </h1>
                                    <h1 className=" font-playfair text-lg">
                                        Blouse Puff Silk
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center mt-14">
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-16 py-2 border-black"
                            onClick={() => router.push("/underconstruction")}
                        >
                            <span className=" text-white relative z-10 group-hover:text-black duration-500">
                                See All
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </section>
                <section className="lg:h-[75vh] w-screen flex flex-col justify-center items-center bg-black bg-[url('/PatternBg.svg')] bg-repeat bg-cover md:bg-contain mt-28 lg:mt-0 overflow-hidden">
                    <div className="flex items-center justify-between gap-10 lg:gap-44 2xl:gap-80 max-w-screen-2xl flex-col-reverse lg:flex-row px-10 md:px-0 py-20">
                        <div className="max-w-[40rem] flex flex-col gap-6">
                            <h1 className="font-playfair text-white text-4xl">
                                Fashion is more than just clothes, it&apos;s
                                about self-expression & being true to ourselves
                            </h1>
                            <p className="font-playfair text-white">
                                Regardless of background, age or body shape,
                                everyone deserves to find fashion that they love
                                & that makes them feel confidents
                            </p>
                            <div className="w-full flex justify-center items-center mt-8">
                                <button
                                    className="cursor-pointer relative group overflow-hidden border-2 px-16 py-2 border-white"
                                    onClick={() => router.push("/about")}
                                >
                                    <span className=" text-black relative z-10 group-hover:text-white duration-500">
                                        See More
                                    </span>
                                    <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:-translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-white duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                    <span className="absolute delay-300 top-0 left-0 w-full bg-white duration-500 group-hover:translate-y-full h-full"></span>
                                </button>
                            </div>
                        </div>
                        <Image
                            src="/AssetHome1.png"
                            alt="AssetHome1"
                            width="1000"
                            height="1000"
                            className="w-96 h-auto"
                        />
                    </div>
                </section>
                <section className="w-screen flex justify-center items-center flex-col overflow-hidden">
                    <div className="flex items-center justify-center gap-4 max-w-screen-2xl flex-col py-20 md:py-32">
                        <h1 className="text-4xl md:text-5xl font-playfair mb-10">
                            Our Collection
                        </h1>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-screen px-6 md:px-14">
                            <div className=" relative w-full h-full row-span-3">
                                <Image
                                    src="/AssetHomeGrid1.png"
                                    alt="AssetHomeGrid1"
                                    width="1000"
                                    height="1000"
                                    quality={100}
                                    className="w-full h-full"
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <div className="absolute bottom-4 left-4 text-white flex items-center gap-5 md:gap-36 2xl:gap-80 ">
                                    <h2 className="text-xs md:text-2xl font-medium font-playfair">
                                        One Set <br />
                                        Collection
                                    </h2>
                                    <button
                                        className="mt-2 py-1 border-b-2 border-white text-white text-xs md:text-lg font-playfair font-semibold transition-colors duration-500 cursor-pointer hover:text-black hover:border-black"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See details
                                    </button>
                                </div>
                            </div>
                            <div className=" relative w-full h-full row-span-2">
                                <Image
                                    src="/AssetHomeGrid2.png"
                                    alt="AssetHomeGrid2"
                                    width="1000"
                                    height="1000"
                                    quality={100}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-4 left-4 text-white flex items-center gap-5 md:gap-36 2xl:gap-80">
                                    <h2 className="text-xs md:text-2xl font-medium font-playfair">
                                        Gamis <br />
                                        Collection
                                    </h2>
                                    <button
                                        className="mt-2 py-1 border-b-2 border-white text-white text-xs md:text-lg font-playfair font-semibold transition-colors duration-500 cursor-pointer hover:text-black hover:border-black"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See details
                                    </button>
                                </div>
                            </div>
                            <div className=" relative w-full h-full">
                                <Image
                                    src="/AssetHomeGrid4.png"
                                    alt="AssetHomeGrid4"
                                    width="1000"
                                    height="1000"
                                    quality={100}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-4 left-4 text-white flex items-center gap-5 md:gap-36 2xl:gap-80">
                                    <h2 className="text-xs md:text-2xl font-medium font-playfair">
                                        Blouse <br />
                                        Collection
                                    </h2>
                                    <button
                                        className="mt-2 py-1 border-b-2 border-white text-white text-xs md:text-lg font-playfair font-semibold transition-colors duration-500 cursor-pointer hover:text-black hover:border-black"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See details
                                    </button>
                                </div>
                            </div>
                            <div className=" relative w-full h-full">
                                <Image
                                    src="/AssetHomeGrid5.png"
                                    alt="AssetHomeGrid5"
                                    width="1000"
                                    height="1000"
                                    quality={100}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-4 left-4 text-white flex items-center gap-5 md:gap-36 2xl:gap-80">
                                    <h2 className="text-xs md:text-2xl font-medium font-playfair">
                                        Sweater <br />
                                        Collection
                                    </h2>
                                    <button
                                        className="mt-2 py-1 border-b-2 border-white text-white text-xs md:text-lg font-playfair font-semibold transition-colors duration-500 cursor-pointer hover:text-black hover:border-black"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See details
                                    </button>
                                </div>
                            </div>
                            <div className=" relative w-full h-full">
                                <Image
                                    src="/AssetHomeGrid3.png"
                                    alt="AssetHomeGrid3"
                                    width="1000"
                                    height="1000"
                                    quality={100}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-4 left-4 text-white flex items-center gap-5 md:gap-36 2xl:gap-80">
                                    <h2 className="text-xs md:text-2xl font-medium font-playfair">
                                        Cardigan <br />
                                        Collection
                                    </h2>
                                    <button
                                        className="mt-2 py-1 border-b-2 border-white text-white text-xs md:text-lg font-playfair font-semibold transition-colors duration-500 cursor-pointer hover:text-black hover:border-black"
                                        onClick={() =>
                                            router.push("/underconstruction")
                                        }
                                    >
                                        See details
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white relative w-full h-full flex justify-center items-center">
                                <Image
                                    src="/AssetHomeGrid6.png"
                                    alt="AssetHomeGrid6"
                                    width="1000"
                                    height="1000"
                                    quality={100}
                                    className="w-44 h-44 hidden lg:block"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
