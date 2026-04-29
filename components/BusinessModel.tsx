"use client";
import { useState } from "react";

const businessData = [
    {
        id: "repeat",
        tabTitle: "Repeat Consumption",
        heading: "High-frequency, habit-driven categories",
        description: "Products designed for daily use - driving consistent demand and long-term engagement.",
        image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/repeat_cunsumption.png?v=1777359122"
    },
    {
        id: "omnichannel",
        tabTitle: "Omnichannel Reach",
        heading: "Distribution built for accessibility at scale",
        description: "We operate across D2C, retail, and quick commerce - ensuring our products are available where and when consumers need them. This integrated approach strengthens both reach and reliability.",
        image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/omnichannel.png?v=1777359122" // Reusing or you can replace with another image
    },
    {
        id: "mass-market",
        tabTitle: "Mass-Market Approach",
        heading: "Wellness designed for broad adoption",
        description: "Our products are built to be accessible across pricing, formats, and use-cases-allowing us to reach a wider consumer base beyond niche or premium segments.",
        image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/mass_market.png?v=1777359122"
    },
    {
        id: "execution",
        tabTitle: "Execution-Led Strategy",
        heading: "Focused on delivery, not just positioning",
        description: "We prioritize operational strength across sourcing, supply chain, and distribution - ensuring consistency in product availability and consumer experience.",
        image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/execution.png?v=1777359122"
    }
];

export default function BusinessModel() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        <p className="text-md md:text-md font-satoshi font-medium text-gray-800 uppercase">
                            (Our Business Model)
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-antonio font-semibold tracking-tight text-gray-900 leading-tight">
                        Built for scale and long-term growth
                    </h2>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-20">
                    {businessData.map((data, index) => (
                        <button
                            key={data.id}
                            onClick={() => setActiveTab(index)}
                            className={`
                                pt-4 border-t-2 font-satoshi transition-all duration-300 text-left
                                ${activeTab === index
                                    ? "border-[#EEEE1F] text-gray-900"
                                    : "border-gray-200 font-satoshi text-gray-400 hover:border-gray-400"}
                            `}
                        >
                            <span className={`
                                text-sm md:text-lg lg:text-xl font-satoshi font-normal
                                ${activeTab === index ? "opacity-100" : "opacity-80"}
                            `}>
                                {data.tabTitle}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto gap-x-64 ">
                    <div className="order-2 md:order-1 transition-all duration-500 transform">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium font-satoshi text-[#1E1E1E] mb-6 leading-tight">
                            {businessData[activeTab].heading}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-600 font-satoshi leading-relaxed max-w-lg">
                            {businessData[activeTab].description}
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={businessData[activeTab].image}
                                alt={businessData[activeTab].tabTitle}
                                className="w-full h-full object-fill transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
