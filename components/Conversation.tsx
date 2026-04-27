import React from 'react';

const Conversation = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row bg-white overflow-hidden my-24">
            {/* Left Section - Information */}
            <div className="w-full lg:w-[42%] bg-[#A6EB8E] px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col justify-between">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-satoshi tracking-tight text-black mb-6 leading-[1.1]">
                        Start the Conversation
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-black/80 mb-12 max-w-[90%] font-light leading-snug">
                        For partnerships, distribution opportunities, or business inquiries - we'd like to hear from you.
                    </p>

                    <div className="space-y-6 md:space-y-8">
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-black rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-black group-hover:text-[#A6EB8E]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                                    <path d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </div>
                            <span className="text-base md:text-lg lg:text-xl font-medium">Response within 24- 48 hours</span>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-black rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-black group-hover:text-[#A6EB8E]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                                    <path d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </div>
                            <span className="text-base md:text-lg lg:text-xl font-medium">Dedicated partnership team</span>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-black rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-black group-hover:text-[#A6EB8E]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                                    <path d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </div>
                            <span className="text-base md:text-lg lg:text-xl font-medium">Pan-India distribution network</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 lg:mt-0 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-4">
                    <div className="space-y-1">
                        <p className="text-xs md:text-sm text-black/60 font-medium">General Inquiries</p>
                        <p className="text-xl md:text-2xl font-semibold tracking-tight">+91 8655980810</p>
                    </div>
                    <div className="text-xl md:text-2xl font-semibold tracking-tight border-b border-black pb-1">
                        sales@aayushwellness.com
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full lg:w-[58%] bg-white px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20 flex flex-col">
                <form className="w-full max-w-4xl mx-auto space-y-8 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14">
                        {/* Full Name */}
                        <div className="flex flex-col group">
                            <label className="text-xl md:text-2xl font-medium text-black mb-4 group-focus-within:text-black/60 transition-colors">Full Name</label>
                            <input
                                type="text"
                                placeholder="Eg. Rakesh Yadav"
                                className="w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl outline-none focus:border-black transition-all placeholder:text-gray-300 placeholder:italic"
                            />
                        </div>
                        {/* Work Email */}
                        <div className="flex flex-col group">
                            <label className="text-xl md:text-2xl font-medium text-black mb-4 group-focus-within:text-black/60 transition-colors">Work Email</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl outline-none focus:border-black transition-all placeholder:text-gray-300 placeholder:italic"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14">
                        {/* Phone Number */}
                        <div className="flex flex-col group">
                            <label className="text-xl md:text-2xl font-medium text-black mb-4 group-focus-within:text-black/60 transition-colors">Phone Number</label>
                            <div className="flex items-center border-b border-gray-200 focus-within:border-black transition-all">
                                <span className="text-lg md:text-xl text-gray-400 pr-3 font-light">+91</span>
                                <input
                                    type="tel"
                                    placeholder="Type here"
                                    className="w-full bg-transparent py-3 text-lg md:text-xl outline-none placeholder:text-gray-300 placeholder:italic"
                                />
                            </div>
                        </div>
                        {/* Company */}
                        <div className="flex flex-col group">
                            <label className="text-xl md:text-2xl font-medium text-black mb-4 group-focus-within:text-black/60 transition-colors">Company / Organization</label>
                            <input
                                type="text"
                                placeholder="Organization Name"
                                className="w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl outline-none focus:border-black transition-all placeholder:text-gray-300 placeholder:italic"
                            />
                        </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="flex flex-col group">
                        <label className="text-xl md:text-2xl font-medium text-black mb-4 group-focus-within:text-black/60 transition-colors">Inquiry Type</label>
                        <div className="relative border-b border-gray-200 group-focus-within:border-black transition-all">
                            <select className="w-full bg-transparent py-3 text-lg md:text-xl outline-none appearance-none text-gray-400 italic">
                                <option defaultValue={"Type here"} disabled>Type here</option>
                                <option value="partnership">Partnership</option>
                                <option value="distribution">Distribution</option>
                                <option value="sales">Sales</option>
                            </select>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col group">
                        <label className="text-xl md:text-2xl font-medium text-black mb-4 group-focus-within:text-black/60 transition-colors">Message</label>
                        <textarea
                            placeholder="Type here"
                            rows={1}
                            className="w-full bg-transparent border-b border-gray-200 py-3 text-lg md:text-xl outline-none focus:border-black transition-all placeholder:text-gray-300 placeholder:italic resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-10">
                        <button className="flex items-center h-14 md:h-16 cursor-pointer group transition-all gap-2">
                            <div className="bg-[#1C1C1C] text-white px-8 md:px-12 h-full flex items-center justify-center text-base md:text-lg font-medium relative overflow-hidden"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}>
                                Submit Inquiry
                            </div>
                            <div className="bg-[#A6EB8E] h-full w-14 md:w-16 flex items-center justify-center -ml-4 md:-ml-5"
                                style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Conversation;
