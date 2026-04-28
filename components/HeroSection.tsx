import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center">
        {/* Hero Text */}
        <div className="w-full flex flex-col justify-center items-center">
          {/* <div className="w-full mx-auto flex justify-center items-center"> */}
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-antonio mb-6 text-center font-semibold scale-y-150">
            THE NEW ERA OF EVERYDAY WELLNESS
          </p>
          {/* </div> */}

          <div className='w-full flex flex-col justify-center items-center mt-2 md:mt-6 lg:mt-8 px-8 lg:px-16'>
            <p className="text-md font-satoshi md:text-lg lg:text-2xl text-gray-700 max-w-lg md:max-w-2xl lg:max-w-4xl text-center">
              Delivering holistic wellness solutions designed to improve daily health, <br className='hidden md:block' />
              enhance longevity, and make preventive care accessible to everyone.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center items-center mt-5 md:mt-6 lg:mt-8">
            <Link
              href="#platforms"
              className="px-2 md:px-5 py-1 md:py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
            >
              Explore Our Platforms
            </Link>

            <Link
              href="#partner"
              className="px-2 md:px-5 py-1 md:py-3 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative w-full mx-auto px-4 md:px-8 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
          {/* <style>{`
            @media (min-width: 768px) {
              .clip-left { clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%); }
              .clip-right { clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%); }
            }
          `}</style> */}

          {/* Card 1 - Rooted in tradition */}
          <div className="relative md:left-10 lg:left-12 xl:left:22 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-2xl md:rounded-none md:rounded-l-2xl overflow-hidden group cursor-pointer bg-transparent">
            <img
              src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Hero_left.png?v=1777359244"
              alt="Rooted in tradition"
              className="h-full w-full object-fit transition-transform duration-700 [clip-path:polygon(0_0,_100%_0%,_80%_100%,_0%_100%)]"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-20 pointer-events-none">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-antonio font-bold text-white drop-shadow-md">Rooted in tradition.</h3>
            </div>
          </div>

          {/* Card 2 - Elevated by science */}
          <div className="relative md:right-10 lg:right-12 xl:right:22 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-2xl md:rounded-none md:rounded-r-2xl overflow-hidden group cursor-pointer bg-transparent">
            <img
              src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Hero_right.png?v=1777359244"
              alt="Elevated by science"
              className="h-full w-full object-fit transition-transform duration-700 [clip-path:polygon(20%_0,100%_0%,100%_100%,0%_100%)]"
            />
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20 text-right md:text-left pointer-events-none">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-antonio font-bold text-white drop-shadow-md">Elevated by science.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
