"use client";
import React, { useEffect } from "react";
import MainNavbar from "../../components/MainNavbar";
import Footer from "../../components/Footer";
import { Accordion } from "flowbite-react";

export default function Faqs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <MainNavbar />
            <div className="w-full pb-44 flex flex-col justify-start items-center bg-white">
                <h1 className="mt-20 md:mt-44 font-roboto text-3xl font-medium text-black">
                    FAQs
                </h1>
                <div className="w-80 md:w-[40rem] mt-14">
                    <Accordion collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    Is Level Up Style owned by Shella Saukia?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, Level Up Style is a subsidiary of SS
                                    Group, owned by Shella Saukia.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    ⁠Do Level Up Style products use premium
                                    materials?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, all Level Up Style products are made
                                    with premium materials, like silk and neat
                                    fabrics.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    Do Level Up Style products feel hot when
                                    worn?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    No, Level Up Style products are made with
                                    cool fabrics, so they won&apos;t make you
                                    feel hot or disrupt your activities.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    ⁠What sizes are available?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Level Up Style offers all sizes, with a bust
                                    circumference of 120 cm.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    Will there be a restock of Level Up Style
                                    products?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, there will be restocks of our products.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    Will there be new designs and models from
                                    Level Up Style?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, new Level Up Style products are coming.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    ⁠Can the discounted prices offered during
                                    Live events be further reduced?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, additional discounts can be applied to
                                    already discounted prices.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    What events are Level Up Style clothes
                                    suitable for?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Level Up Style products are designed to be
                                    suitable for any event.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    Can Level Up Style clothes be mixed and
                                    matched with any color?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, but it depends on the specific clothes
                                    and the occasion you are dressing for.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    From what age can Level Up Style products be
                                    worn?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    They can be worn from the age of 15,
                                    depending on individual needs.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </>
    );
}
