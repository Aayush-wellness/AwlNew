import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="Hero-title text-emerald-800 mb-8">
            ABOUT OUR VISION
          </h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            We are dedicated to redefining health and wellness through science-backed solutions and traditional wisdom. Our mission is to make preventive care accessible to everyone, everywhere.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16 text-left">
            <div className="p-8 bg-emerald-50 rounded-3xl">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Mission</h3>
              <p className="text-emerald-800/80">
                To empower individuals with the tools and knowledge they need to take control of their long-term health and vitality.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, scientific rigor, and a deep respect for natural wellness principles guide everything we do.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

