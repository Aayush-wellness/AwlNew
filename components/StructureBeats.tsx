"use client";
import { useState } from "react";

export default function StructureBeats() {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            number: "01",
            title: "Daily-use products",
            description: "Formulated for consistent, everyday consumption - not one-off use.",
            image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/carrousel_1.png?v=1777359120"
        },
        {
            number: "02",
            title: "Habit-driven Approach",
            description: "Designing routines that integrate seamlessly into your daily life for long-term health.",
            image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/carrousel_2.png?v=1777359120"
        },
        {
            number: "03",
            title: "Accessible Distribution",
            description: "Ensuring health solutions are available whenever and wherever you need them.",
            image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/carrousel_2.png?v=1777359120"
        }
    ];

    const handleToggle = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeIndex === index) {
            setActiveIndex((index + 1) % cards.length);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="w-full container mx-auto py-12 lg:py-20 px-6 lg:px-12 overflow-hidden">
            <div className="flex justify-center items-center mb-8">
                {/* <span className="text-black-400 mr-2 text-4xl leading-none"></span> */}
                <p className="text-black uppercase text-md font-satoshi font-medium flex items-center gap-1"><span className="text-3xl leading-none mb-1">•</span>(Solution)</p>
            </div>

            <div className="w-full">
                <div className="w-full flex flex-col justify-between items-center text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10 font-antonio font-bold tracking-tight uppercase scale-y-125 lg:scale-y-90">
                        STRUCTURE BEATS WILLPOWER
                    </h2>
                    <div className="max-w-5xl">
                        <span className="block text-xl md:text-2xl mb-4 font-satoshi text-gray-900">
                            Designed to make wellness easier to adopt and easier to sustain.
                        </span>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                            Aayush Wellness connects products, behavior, and accessibility into one unified system - helping users build consistent health habits that actually last.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 h-[600px] lg:h-[650px] w-full max-w-3xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer group
                                ${activeIndex === index ? 'flex-[4] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'flex-1 bg-[#0a0a0a] hover:bg-[#111]'}`}
                        >
                            {/* Background Image with Overlay */}
                            <div className={`absolute inset-0 transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-40'}`}
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />

                            {/* Abstract Pattern overlay */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none mix-blend-overlay">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="1" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                                </svg>
                            </div>

                            <div className={`relative h-full transition-all duration-1000 z-10 flex flex-col
                                ${activeIndex === index ? 'p-8 lg:p-12 justify-between' : 'p-4 lg:py-10 lg:px-2 items-center justify-center'}`}>
                                <div className={`flex ${activeIndex === index ? 'flex-col' : 'flex-row lg:flex-col items-center justify-center flex-1 gap-6 lg:gap-0'}`}>
                                    <h3 className={`font-black transition-all duration-700 leading-none select-none
                                        ${activeIndex === index
                                            ? 'text-7xl md:text-8xl lg:text-[10rem] text-lime-300 scale-105 origin-left drop-shadow-[0_0_15px_rgba(190,242,100,0.3)] mb-4'
                                            : 'text-4xl md:text-5xl lg:text-6xl text-lime-300/20 group-hover:text-lime-300/40'}`}>
                                        {card.number}
                                    </h3>

                                    <div className={`transition-all duration-700 delay-100 flex flex-col ${activeIndex === index ? 'mt-6 lg:mt-10' : 'items-center'}`}>
                                        <h4 className={`font-bold text-white transition-all duration-500 text-left
                                            ${activeIndex === index
                                                ? 'text-2xl md:text-4xl opacity-100 mb-6'
                                                : 'text-lg md:text-xl lg:text-2xl opacity-40 lg:[writing-mode:vertical-lr] lg:rotate-180 lg:mt-4'}`}>
                                            {card.title}
                                        </h4>

                                        <p className={`text-white text-xl md:text-2xl max-w-md transition-all duration-700 
                                            ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none h-0'}`}>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                <div className={`flex ${activeIndex === index ? 'justify-end items-end' : 'justify-center mt-auto'}`}>
                                    <button
                                        onClick={(e) => handleToggle(index, e)}
                                        className={`rounded-full border-2 flex items-center justify-center transition-all duration-500 group/btn
                                            ${activeIndex === index
                                                ? 'w-16 h-16 border-lime-300 text-lime-300 bg-lime-300/5'
                                                : 'w-10 h-10 border-white/10 text-white/20 group-hover:border-lime-300 group-hover:text-lime-300'}`}
                                    >
                                        {activeIndex === index ? (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" /></svg>
                                        ) : (
                                            <svg className="w-5 h-5 transition-transform duration-500 group-hover/btn:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" /></svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}