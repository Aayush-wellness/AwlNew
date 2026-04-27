"use client";
import React, { useState } from 'react';

const ecosystemData = [
    {
        id: "daily-wellness",
        title: "DAILY WELLNESS PRODUCTS",
        image: "images/Component_8.png",
        heading: "DAILY WELLNESS PRODUCTS",
        description: "A growing portfolio designed for everyday use - built around consistency, not occasions."
    },
    {
        id: "aayush-labs",
        title: "AAYUSH LABS",
        image: "images/eco_ayush.png",
        heading: "AAYUSH LABS",
        description: "In-house formulation and development capability ensuring quality, consistency, and scalable product innovation."
    },
    {
        id: "investor-ecosystem",
        title: "INVESTOR ECOSYSTEM",
        image: "images/eco-investor.png",
        heading: "INVESTOR ECOSYSTEM",
        description: "Enabling long-term growth through strategic investment opportunities and transparent engagement."
    },
    {
        id: "sustainability",
        title: "SUSTAINABILITY & IMPACT",
        image: "images/eco-sustain.png",
        heading: "SUSTAINABILITY & IMPACT",
        description: "Focused on responsible sourcing, conscious production, and creating long-term health and environmental impact."
    },
    {
        id: "research",
        title: "RESEARCH & INNOVATION",
        image: "images/eco-research.png",
        heading: "RESEARCH & INNOVATION",
        description: "Pioneering studies bridging traditional Ayurveda with modern clinical science."
    },
    {
        id: "accelerator",
        title: "ACCELERATOR",
        image: "images/eco-accel.png",
        heading: "ACCELERATOR",
        description: "Combining scientific research with Ayurvedic principles to develop credible, effective health solutions."
    }
];

export default function Ecosystem() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeData = ecosystemData[activeIndex];

    return (
        <section className="relative w-full min-h-screen lg:h-[900px] overflow-hidden">
            {/* Background Images - mapping all to preload but only showing active */}
            {ecosystemData.map((item, index) => (
                <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* Subtle Overlay for Mobile Readability */}
            <div className="absolute inset-0 bg-black/30 lg:bg-transparent z-1" />

            <div className="relative z-10 h-full max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch px-6 sm:px-12 md:px-16 lg:px-16 py-20 lg:py-0 gap-16 lg:gap-8">

                {/* Left Side Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start pt-8 md:pt-12 lg:pt-16">
                    {/* Badge/Tag */}
                    <div className="flex justify-start items-center mb-6 md:mb-12">
                        <span className="text-white mr-4 text-2xl">•</span>
                        <p className="text-white font-satoshi uppercase tracking-[0.2em] text-xs font-bold">(Our Ecosystem)</p>
                    </div>

                    {/* Main Title */}
                    <div className="mb-12 md:mb-20">
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-antonio font-bold tracking-tight uppercase scale-y-110 md:scale-y-125 lg:scale-y-150 origin-left whitespace-nowrap">
                            <span className="text-[#EEEE1F] mr-2 md:mr-3 border-l-4 border-[#EEEE1F] pl-3"></span> INSIDE THE AYUSH WELLNESS PLATFORM
                        </p>
                    </div>

                    {/* Product Highlight */}
                    <div className="max-w-1xl min-h-[250px] flex flex-col justify-center transition-opacity duration-300" key={activeData.id}>
                        <h2 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-6xl font-antonio font-bold mb-8 leading-tight whitespace-nowrap">
                            {activeData.heading}
                        </h2>

                        <p className="max-w-lg text-white text-lg md:text-2xl lg:text-3xl font-satoshi mb-12 opacity-90 leading-relaxed">
                            {activeData.description}
                        </p>

                        <button className="flex items-center gap-4 px-6 py-3 md:px-10 md:py-4 lg:mt-8 text-white rounded-full bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl hover:bg-white/20 transition-all duration-300 group w-fit">
                            <span className="text-lg md:text-xl font-medium tracking-wide">Learn More</span>
                            <div className="bg-white/20 rounded-full p-2 flex items-center justify-center transition-transform group-hover:translate-x-2">
                                <img className="h-4 md:h-5" src="images/arrow_but.png" alt="" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Side Navigation Menu */}
                <div className="w-full md:w-full lg:w-[40%] flex flex-col justify-center lg:items-end">
                    <div className="flex flex-col gap-4 md:gap-8 w-full max-w-md lg:max-w-sm">
                        {ecosystemData.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className={`cursor-pointer transition-all duration-300 ease-in-out ${index === activeIndex
                                    ? "border-2 border-[#EEEE1F] px-4 py-3 md:px-8 md:py-6 bg-black/20 backdrop-blur-sm"
                                    : "border-b border-white/20 pb-3 md:pb-5 ml-1 hover:border-white/50 group"
                                    }`}
                            >
                                <span
                                    className={`uppercase font-antonio transition-all duration-300 whitespace-nowrap ${index === activeIndex
                                        ? "text-white text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl font-bold tracking-widest"
                                        : "text-white text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold tracking-widest opacity-70 group-hover:opacity-100"
                                        }`}
                                >
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}