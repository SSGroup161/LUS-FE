"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { message } from "antd";
import { Spinner } from "flowbite-react";
import Image from "next/image";

const url = process.env.NEXT_PUBLIC_SHEET_URL;

export default function About() {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formDataObj = new URLSearchParams();
            formDataObj.append("name", formData.name);
            formDataObj.append("email", formData.email);
            formDataObj.append("message", formData.message);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formDataObj,
                mode: "cors",
            });

            if (response.ok) {
                message.success(
                    "Message sent successfully! We get back to you soon, see you soon!"
                );
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to send message to Google Sheet");
            }
        } catch (error) {
            message.error("Failed to send message to Google Sheet");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Navbar />
            <div>
                <section className="w-full h-screen bg-[#FBFAF8] flex flex-col justify-start items-center">
                    <div className="relative w-full h-[70vh]">
                        <div className="absolute w-full h-[70vh] bg-black/30 z-20"></div>
                        <Image
                            src="/AssetHeroAbout.jpg"
                            alt="HeroAbout"
                            width="10000"
                            height="10000"
                            quality={100}
                            className="w-full h-[70vh] object-top object-cover"
                        />
                    </div>
                    <h1 className="font-roboto text-black text-center text-sm md:text-lg mt-6 md:mt-16 lg:mt-10 2xl:mt-12 px-10">
                        Level up your fashion, level up your confidence & level
                        up your lifestyle
                    </h1>
                    <h1 className="font-playfair text-lg md:text-3xl text-center mt-4 md:mt-10 lg:mt-6 2xl:mt-10 max-w-[50rem] px-10">
                        We can be your go-to destination to discover a style
                        that matches your personality and uniqueness
                    </h1>
                </section>
                <section className="w-full h-[50vh] lg:h-[70vh] bg-white flex justify-center items-center">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20 bg-white border-2 border-black flex justify-center items-center shadow-custom">
                                <div>
                                    <h1 className="text-center font-roboto font-medium text-2xl md:text-4xl">
                                        +60K
                                    </h1>
                                    <h1 className="text-center font-roboto text-[0.5rem] md:text-xs font-medium">
                                        Tiktok Followers
                                    </h1>
                                </div>
                            </div>
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20"></div>
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20 bg-white border-2 border-black flex justify-center items-center shadow-custom">
                                <div>
                                    <h1 className="text-center font-roboto font-medium text-2xl md:text-4xl">
                                        +50K
                                    </h1>
                                    <h1 className="text-center font-roboto text-[0.5rem] md:text-xs font-medium">
                                        Product Acros Indonesia
                                    </h1>
                                </div>
                            </div>
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20"></div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20"></div>
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20 bg-black flex justify-center items-center shadow-custom">
                                <div className="text-white">
                                    <h1 className="text-center font-roboto font-medium text-2xl md:text-4xl">
                                        +40K
                                    </h1>
                                    <h1 className="text-center font-roboto text-[0.5rem] md:text-xs font-medium">
                                        Clothing Models
                                    </h1>
                                </div>
                            </div>
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20"></div>
                            <div className="flex-1 md:w-40 md:h-40 w-20 h-20 bg-black flex justify-center items-center shadow-custom">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="80"
                                    height="80"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    className="w-12 md:w-32"
                                >
                                    <path
                                        d="M60 32.9713C53.4824 32.5732 53.0778 26.8498 53.1191 24.9707H53.0602V11.7724C53.0602 11.7724 52.1038 3.66 59.9097 3.18141V0H39.204C39.204 0.476623 39.204 3.49916 39.204 3.49916C39.204 3.49916 45.5744 2.54395 46.0535 10.3406V30.5568H44.6023C44.6023 30.5568 36.3763 31.21 36.0012 23.7154H32.816V36.392H45.7826C45.6726 38.0632 45.5724 39.6107 45.5744 39.6107C45.6215 39.6107 45.2445 41.5937 45.217 41.7016C44.785 43.3786 44.0545 44.9811 43.0726 46.407C40.8948 49.5629 37.5093 51.5753 33.8725 52.6286C30.2808 53.6662 26.9425 53.2484 23.5315 51.7734C19.4724 50.018 16.2754 46.7326 14.9244 42.5018C14.6259 41.5663 14.402 40.5934 14.3353 39.6107C14.3353 39.6107 14.2351 38.0632 14.1252 36.392H27.0956V23.7154H23.9105C23.5354 31.208 15.3093 30.5568 15.3093 30.5568H13.8581V10.3406C14.3353 2.54591 20.7076 3.49916 20.7076 3.49916C20.7076 3.49916 20.7076 0.476623 20.7076 0H0V3.18141C7.80389 3.65803 6.84951 11.7724 6.84951 11.7724V26.0652C6.65903 28.4699 5.52596 32.632 0.00196565 32.9694V36.1508H6.84951V38.4966C7.43667 44.324 9.86581 49.814 14.2999 53.725C17.218 56.2984 20.7822 58.2383 24.5251 59.3033C28.4192 60.4115 32.6137 60.1467 36.4312 58.8698C37.0321 58.6698 37.6272 58.4501 38.2143 58.2128C42.7564 56.3769 46.8292 53.3661 49.494 49.2138C51.5579 45.999 52.6792 42.2782 53.0621 38.4947V36.1488H60V32.9713Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full lg:h-screen">
                    <div className="flex flex-col lg:flex-row max-w-screen-2xl items-center justify-center w-full h-full m-auto gap-10 md:gap-16 2xl:gap-32 px-8 pb-20 md:pb-20 md:py-20 lg:pb-36">
                        <div className="flex-1 flex items-center justify-end">
                            <Image
                                src="/AssetHeroAbout2.png"
                                alt="AssetHeroAbout2"
                                width="10000"
                                height="10000"
                                quality={100}
                                className="w-[40rem] h-auto"
                            />
                        </div>
                        <div className="flex-1 lg:pr-20 md:px-16 lg:px-0">
                            <h1 className="font-roboto text-lg tracking-wider">
                                WHAT IS LEVEL UP STYLE
                            </h1>
                            <h1 className="font-roboto text-4xl tracking-wider font-light mt-4">
                                Fashion is more than just clothes
                            </h1>
                            <div>
                                <p className="font-roboto font-light mt-8">
                                    Level Up Style is part of the SS Group.
                                    Established since December 2023, we
                                    prioritize quality over quantity,
                                    that&apos;s why we use high-quality
                                    materials such as knit, silk, woven & others
                                    that are known for being breathable,
                                    flexible & perfect for everyday activities.
                                    We will continue to innovate, raise
                                    standards & improve services for the
                                    satisfaction of our customers.
                                </p>
                                <p className="font-roboto font-light mt-6">
                                    Level Up Style is about self-expression and
                                    being true to ourselves. Regardless of
                                    background, age or body shape, everyone
                                    deserves to find fashion that they love &
                                    that makes them feel confident.
                                </p>
                                <p className="font-roboto font-light mt-6">
                                    We&apos;re on a mission to provide fashion
                                    with a variety of models, designs & sizes to
                                    accommodate the style and preferences of
                                    every individual.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-20 lg:py-0 lg:h-[60vh] bg-[#FBFAF8] bg-[url('/AboutPattern.svg')] bg-repeat bg-cover md:bg-contain">
                    <div className="flex justify-center items-center flex-col h-full gap-14">
                        <div className="flex justify-center items-center flex-col gap-8 px-8 md:px-20 lg:px-0">
                            <div className="flex justify-center items-center gap-8">
                                <Image
                                    src="/QuillVector.svg"
                                    alt="Vector"
                                    width="1000"
                                    height="1000"
                                    className="w-6"
                                />
                                <h1 className="font-playfair text-3xl lg:text-5xl">
                                    Our Vision
                                </h1>
                                <Image
                                    src="/QuillVector.svg"
                                    alt="Vector"
                                    width="1000"
                                    height="1000"
                                    className="w-6"
                                />
                            </div>
                            <p className="font-roboto font-light text-center">
                                {" "}
                                To become the number one trusted local fashion
                                brand choice for young people in Indonesia.
                            </p>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-8 px-8 md:px-20 lg:px-0">
                            <div className="flex justify-center items-center gap-8">
                                <Image
                                    src="/QuillVector.svg"
                                    alt="Vector"
                                    width="1000"
                                    height="1000"
                                    className="w-6"
                                />
                                <h1 className="font-playfair text-3xl lg:text-5xl">
                                    Our Mission
                                </h1>
                                <Image
                                    src="/QuillVector.svg"
                                    alt="Vector"
                                    width="1000"
                                    height="1000"
                                    className="w-6"
                                />
                            </div>
                            <p className="font-roboto font-light text-center">
                                {" "}
                                Using high-quality fabric materials that provide
                                comfort, breathability & flexibility, making
                                them perfect for everyday wear
                            </p>
                            <p className="font-roboto font-light text-center">
                                {" "}
                                Innovating to create varied, unique
                                motifs/designs that have distinctive
                                characteristics & can set trends and be a
                                fashion reference for young people
                            </p>
                            <p className="font-roboto font-light text-center">
                                {" "}
                                Providing the best accessible service throughout
                                Indonesia to enhance customer satisfaction
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full lg:h-screen flex justify-center items-center py-32 lg:py-0">
                    <div className="w-96 md:w-[40rem] lg:w-[60rem] h-[50rem] md:h-[70rem] lg:h-[30rem] rounded-tr-[5rem] md:rounded-tr-[7.5rem] lg:rounded-bl-[5rem] lg:rounded-tr-none flex-col lg:flex-row overflow-hidden bg-[#24272E] flex items-center justify-center">
                        <div className="flex-1 relative">
                            <div className="absolute z-10 w-full h-full flex-col flex items-start justify-center px-10">
                                <div className="flex flex-col gap-12 md:gap-32 lg:gap-20">
                                    <div className="">
                                        <h1 className="font-robotos text-white text-sm">
                                            CONTACT US
                                        </h1>
                                        <h1 className="font-robotos text-white text-3xl mt-2">
                                            How can we help?
                                        </h1>
                                        <h1 className="font-robotos text-white text-sm mt-5">
                                            Reach out to us now
                                        </h1>
                                    </div>
                                    <div className="flex flex-col gap-4 items-start justify-start">
                                        <div className="flex items-center gap-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="35"
                                                height="35"
                                                viewBox="0 0 27 33"
                                                fill="none"
                                                className=""
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12.9265 32.026L12.932 32.0279C13.2965 32.187 13.5 32.15 13.5 32.15C13.5 32.15 13.7035 32.187 14.0698 32.0279L14.0735 32.026L14.0846 32.0205L14.1179 32.0057C14.2934 31.9239 14.4667 31.8375 14.6377 31.7467C14.9818 31.5691 15.4628 31.3027 16.0382 30.9456C17.1852 30.2352 18.7114 29.1585 20.2451 27.6804C23.3087 24.7278 26.45 20.112 26.45 13.65C26.45 11.9493 26.115 10.2654 25.4642 8.6942C24.8134 7.12303 23.8595 5.69544 22.657 4.49292C21.4545 3.2904 20.0269 2.33651 18.4557 1.68571C16.8846 1.03491 15.2006 0.699951 13.5 0.699951C11.7994 0.699951 10.1154 1.03491 8.54424 1.68571C6.97307 2.33651 5.54547 3.2904 4.34296 4.49292C3.14044 5.69544 2.18655 7.12303 1.53575 8.6942C0.88495 10.2654 0.549988 11.9493 0.549988 13.65C0.549988 20.1102 3.69129 24.7278 6.75674 27.6804C8.0399 28.9134 9.44936 30.0078 10.9618 30.9456C11.5477 31.3089 12.1502 31.6448 12.7674 31.952L12.8821 32.0057L12.9154 32.0205L12.9265 32.026ZM13.5 17.8125C14.604 17.8125 15.6627 17.3739 16.4433 16.5933C17.2239 15.8127 17.6625 14.7539 17.6625 13.65C17.6625 12.546 17.2239 11.4872 16.4433 10.7066C15.6627 9.926 14.604 9.48745 13.5 9.48745C12.396 9.48745 11.3373 9.926 10.5567 10.7066C9.77604 11.4872 9.33749 12.546 9.33749 13.65C9.33749 14.7539 9.77604 15.8127 10.5567 16.5933C11.3373 17.3739 12.396 17.8125 13.5 17.8125Z"
                                                    fill="#E7E7E7"
                                                />
                                            </svg>
                                            <h1 className="font-roboto text-white text-sm font-light">
                                                Jl. K.H. Wahid Hasyim No.161,
                                                RT.1/RW.5 Kecamatan Tanah Abang,
                                                Jakarta Pusat, DKI Jakarta -
                                                10240
                                            </h1>
                                        </div>
                                        <div className="flex items-start gap-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 34 34"
                                                fill="none"
                                                className=""
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M2.125 6.375C2.125 5.24783 2.57277 4.16683 3.3698 3.3698C4.16683 2.57277 5.24783 2.125 6.375 2.125H8.31867C9.537 2.125 10.5995 2.95517 10.8956 4.13667L12.461 10.4026C12.5869 10.9098 12.5608 11.4428 12.386 11.9353C12.2112 12.4277 11.8954 12.8579 11.4778 13.1722L9.64608 14.5463C9.45483 14.6894 9.41375 14.8991 9.46758 15.045C10.2675 17.2191 11.5302 19.1935 13.1683 20.8316C14.8065 22.4698 16.7809 23.7325 18.955 24.5324C19.1009 24.5862 19.3092 24.5452 19.4537 24.3539L20.8278 22.5222C21.1421 22.1046 21.5723 21.7888 22.0647 21.614C22.5572 21.4392 23.0902 21.4131 23.5974 21.539L29.8633 23.1044C31.0448 23.4005 31.875 24.463 31.875 25.6827V27.625C31.875 28.7522 31.4272 29.8332 30.6302 30.6302C29.8332 31.4272 28.7522 31.875 27.625 31.875H24.4375C12.1153 31.875 2.125 21.8847 2.125 9.5625V6.375Z"
                                                    fill="#E7E7E7"
                                                />
                                            </svg>
                                            <a
                                                href="https://wa.me/6285772284721"
                                                className="font-roboto text-white text-sm font-light cursor-pointer hover:underline"
                                            >
                                                ‪+62 857‑7228‑4721‬
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 34 34"
                                                fill="none"
                                                className=""
                                            >
                                                <path
                                                    d="M3.40515 10.0028L17.0001 16.7994L30.595 10.0028C30.5446 9.1366 30.165 8.32238 29.5338 7.72693C28.9027 7.13149 28.0678 6.79989 27.2001 6.80005H6.80005C5.93235 6.79989 5.09741 7.13149 4.46625 7.72693C3.8351 8.32238 3.45548 9.1366 3.40515 10.0028Z"
                                                    fill="#E7E7E7"
                                                />
                                                <path
                                                    d="M30.6 13.8007L17 20.6007L3.40002 13.8007V23.8001C3.40002 24.7018 3.75824 25.5666 4.39586 26.2042C5.03348 26.8418 5.89829 27.2001 6.80002 27.2001H27.2C28.1018 27.2001 28.9666 26.8418 29.6042 26.2042C30.2418 25.5666 30.6 24.7018 30.6 23.8001V13.8007Z"
                                                    fill="#E7E7E7"
                                                />
                                            </svg>
                                            <a
                                                href="mailto:info@levelupstyle.id"
                                                className="font-roboto text-white text-sm font-light cursor-pointer hover:underline"
                                            >
                                                info@levelupstyle.id
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/PictOffice.png"
                                alt="PictOffice"
                                width="1000"
                                height="1000"
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1">
                            <div>
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="space-y-6 md:px-8 w-72 md:w-[35rem] lg:w-auto md:mt-14 lg:mt-0"
                                >
                                    <div className="relative">
                                        <input
                                            placeholder="John Doe"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                                            required=""
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            placeholder="email"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                                            required=""
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="3"
                                            className="peer h-32 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent border-t-0 border-r-0 border-l-0 outline-none focus:outline-none focus:border-white"
                                            required=""
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        <label
                                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <button
                                        className={`w-full py-2 px-4 ${
                                            isLoading
                                                ? "bg-gray-300 hover:bg-gray-300 cursor-progress"
                                                : "hover:bg-gray-900 bg-white "
                                        }  hover:text-white rounded-md shadow-lg text-gray-800 font-semibold transition-colors duration-500`}
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <Spinner
                                                aria-label="Spinner button example"
                                                size="sm"
                                            />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
