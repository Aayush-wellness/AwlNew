export default function PreventiveHealth() {
    return (
        <section className="w-full px-4 md:px-16 py-12 lg:py-16 lg:px-12 overflow-hidden">
            <div className="flex justify-start items-center mb-8">
                <span className="text-black-400 mr-4 text-2xl">•</span>
                <p className="font-satoshi text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">(Problem)</p>
            </div>
            <div className="container mx-auto w-full flex flex-col justify-center items-center mt-8">

                <div className="w-full mx-auto lg:mb-10">
                    <p className="font-antonio text-3xl md:text-4xl lg:text-5xl text-center md:text-left lg:text-left mb-6 font-semibold scale-y-100 md:scale-y-120">
                        PREVENT HEALTH IS GROWING - BUT, <br className="hidden md:hidden lg:block" /> INCONSISTENT
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-col lg:flex-row justify-center md:justify-start lg:justify-start items-center gap-8">
                    <div className="w-full md:w-full lg:w-1/4 flex md:flex-row lg:flex-col justify-center items-center gap-8">
                        <div className='w-3/4 flex justify-center md:justify-start lg:justify-start '>
                            <p className="text-sm md:text-xl lg:text-xl text-gray-700 max-w-4xl font-satoshi text-left">Multiple products, scattered guidance, and irregular usage
                                lead to inconsistent outcomes.</p>
                        </div>

                        <div className='w-3/4 flex justify-start'>
                            <p className="text-sm md:text-xl lg:text-xl text-gray-700 max-w-4xl font-satoshi text-left">Awareness is rising - but execution remains fragmented.</p>
                        </div>
                    </div>

                    <div className="relative w-full lg:w-1/2 flex justify-end mt-8 lg:mt-0 px-4 md:px-0">
                        <img src="images/preventive_health.png" alt="preventive" className="w-full rounded-2xl object-cover" />

                        {/* Overlay Text */}
                        <div className="absolute top-1/2 left-4 right-4 md:right-auto md:left-[30%] lg:left-[55%] xl:left-[70%] transform -translate-y-1/2 flex flex-col gap-3 md:gap-5 z-10 w-auto md:w-max">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#C5F058] flex items-center justify-center text-[#C5F058] bg-white/40 backdrop-blur-sm shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                                        <path d="M5 12h14M13 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <span className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-800 tracking-tight md:whitespace-nowrap">
                                    The gap isn't information.
                                </span>
                            </div>

                            <div className="bg-black text-white px-5 py-3 md:px-10 md:py-4 rounded-full w-fit ml-4 md:ml-4 shadow-2xl">
                                <span className="text-base md:text-xl lg:text-2xl font-semibold italic tracking-tight md:whitespace-nowrap">
                                    It's Consistency & Infrastructure
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}