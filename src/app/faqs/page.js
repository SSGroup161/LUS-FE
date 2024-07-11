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
                                    What is Level Up Beaute?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Level Up Beaute is a local skincare brand
                                    launched in December 2013. We believe that
                                    daily activities can affect your skin.
                                    That’s why Level Up Beaute was created to
                                    help Indonesian women gain their confidence
                                    and shine their natural healthy beauty. Our
                                    products use premium natural ingredients, so
                                    they won't cause harmful side effects on
                                    your skin.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    ⁠Is Level Up Beaute owned by Shella Saukia?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Shella Saukia was the former owner of Level
                                    Up Beaute, but now our company stands on its
                                    own. However, Shella Saukia is currently the
                                    Face of the Brand for Level Up Beaute.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    ⁠Is this product safe for pregnant and
                                    breastfeeding women?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes! Level Up Beaute uses only natural
                                    ingredients, making it safe for pregnant and
                                    breastfeeding women. However, we suggest you
                                    consult with a doctor first.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    Are Level Up Beaute products safe?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, Level Up Beaute products are certified
                                    by BPOM and manufactured with ingredients
                                    and processes that meet Halal standards.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    From what age can Level Up Beaute products
                                    be used?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Level Up Beaute skincare can be used from
                                    the age of 12, thanks to its gentle
                                    formulation.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    ⁠Are Level Up Beaute products suitable for
                                    sensitive skin?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, Level Up Beaute products are formulated
                                    to be suitable for all skin types, including
                                    sensitive skin.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    Can Level Up Beaute skincare be used with
                                    exfoliating products?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes. Level Up Beaute skincare contains
                                    retinol with a very mild pH, so it's fine to
                                    use with exfoliating products. Just be
                                    mindful of the timing: for instance,
                                    exfoliate at night and use Level Up serum in
                                    the morning.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    My skin feels dull, acne-prone, itchy, etc.,
                                    after using Level Up Beaute products. Why?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    This could be due to transitioning from your
                                    old skincare to Level Up Beaute. Your skin
                                    is undergoing an oxidation process or
                                    adapting to the new ingredients. It's common
                                    for your skin to appear dull or break out
                                    initially, but this will resolve over time.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    How do I use Level Up Beaute Glow Code
                                    Lucent set?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Level Up Beaute Glow Code Lucent set can be
                                    used both day and night, in the following
                                    order: Morning: Facial Wash, Toner, Serum,
                                    Moisturizer, Day Cream Night: Facial Wash,
                                    Toner, Serum, Moisturizer, Night Cream
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <p className="font-roboto text-black">
                                    How long does it take to see results from
                                    using Level Up Beaute?
                                </p>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Results can be seen after 2 weeks to 1 month
                                    of use, but its depending on each person's
                                    skin.
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
