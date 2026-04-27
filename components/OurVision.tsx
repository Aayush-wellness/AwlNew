import { Libre_Baskerville } from 'next/font/google';


const libre = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
});


export default function OurVision() {
    return (
        <section className="relative w-full max-h-7xl lg:h-[600px] overflow-hidden">
            {/* Background Image */}
            <img
                src="images/Frame_1102.png"
                alt="Ecosystem Background"
                className="absolute inset-0 w-full h-full object-fit z-0"
            />

            {/* Subtle Overlay for Mobile Readability */}
            <div className="absolute inset-0 bg-black/30 lg:bg-transparent z-1" />

            <div className="relative z-10 h-full max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch px-6 sm:px-12 md:px-16 lg:px-24 py-20 lg:py-0 gap-16 lg:gap-8">

                {/* Left Side Content */}
                <div className="w-full flex flex-col justify-start items-start">

                    <div className="flex justify-start items-center mt-6 mb-6 md:mt-16 md:mb-12 lg:mt-32 lg:mb-12">
                        <span className="text-white mr-4 text-2xl">•</span>
                        <p className="text-white uppercase tracking-[0.2em] text-xs font-bold">(Our Vision)</p>
                    </div>

                    <div className="w-full flex flex-col md:flex-col lg:flex-row gap-8 justify-around items-start">
                        <div className="w-full md:w-full lg:1/2 mx-8 mb-6 flex justify-center items-center">
                            <p className="w-full text-white text-5xl md:text-4xl lg:text-7xl text-left font-satoshi font-semibold tracking-tight text-center">
                                Preventive health for the next hundred million
                            </p>
                        </div>
                        <div className="w-full md:w-full lg:1/2 px-8 md:px-8 flex justify-center items-center">
                            <p className="w-full text-2xl md:text-2xl lg:text-3xl text-left font-satoshi text-white">
                                As health awareness continues to grow, Aayush Wellness is building the system that turns awareness into action - and action into lasting outcomes - for millions of people across India
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}