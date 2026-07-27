import React from 'react';

export default function Home() {
  return (
    <div className="font-primary bg-[#f4f6f8] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="pt-36 pb-20 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column */}
            <div className="max-w-[500px]">
              <h1 className="text-[56px] lg:text-[72px] font-extrabold leading-[1.1] text-[#333] mb-4">
                India's #1 <br /> Ride-hailing App
              </h1>
              <p className="text-[22px] text-[#4b5563] mb-10 font-medium">
                Quick, Affordable rides at your doorstep
              </p>
              
              <div className="bg-transparent flex flex-col gap-4 max-w-[480px]">
                {/* Pickup Input */}
                <div className="flex items-center bg-[#f4f6f8] border border-gray-300 rounded-xl px-5 py-4">
                  <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 relative mr-4">
                    <div className="absolute inset-[4px] bg-[#f4f6f8] rounded-full"></div>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter Pickup Location" 
                    className="w-full bg-transparent border-none outline-none text-[#333] text-lg placeholder-gray-500"
                  />
                </div>

                {/* Drop Input */}
                <div className="flex items-center bg-[#f4f6f8] border border-gray-300 rounded-xl px-5 py-4">
                  <div className="w-4 h-4 border-[3px] border-black rounded-full flex-shrink-0 mr-4"></div>
                  <input 
                    type="text" 
                    placeholder="Enter Drop Location" 
                    className="w-full bg-transparent border-none outline-none text-[#333] text-lg placeholder-gray-500"
                  />
                </div>

                <button className="bg-[#f9c935] text-black w-full py-4 rounded-xl font-bold text-2xl mt-4 hover:bg-[#e0b42c] transition-colors shadow-sm">
                  Book Ride
                </button>
              </div>
            </div>

            {/* Right Column (Hero Image) */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Background grey curved shape */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] h-[90%] bg-gradient-to-tr from-[#d1d5db] to-[#f4f6f8] rounded-tl-[120px] rounded-bl-[120px] rounded-tr-[20px] rounded-br-[20px] shadow-sm overflow-hidden flex items-center justify-center">
                {/* Cityline overlay inside the shape */}
                <img src="https://rapido.bike/images/home-hero.webp" alt="Rapido Vehicles" className="absolute w-[110%] max-w-none object-cover" style={{ left: '-15%' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="py-20 bg-[#f4f6f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-14 relative inline-block">
            <h2 className="text-[48px] font-bold text-[#333] relative z-10">Our Services</h2>
            <div className="absolute bottom-1 left-0 w-[60%] h-[6px] bg-[#f9c935] z-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Bike-Taxi', desc: 'Beat traffic, ride quicker', img: 'https://rapido.bike/images/Bike.svg' },
              { title: 'Auto', desc: 'Everyday autos, made easy', img: 'https://rapido.bike/images/Auto.svg' },
              { title: 'Cab', desc: 'Comfort for every journey', img: 'https://rapido.bike/images/Cab.svg' },
              { title: 'Parcel', desc: 'Quick, secure & insured deliveries', img: 'https://rapido.bike/images/Parcel.svg' },
              { title: 'Travel and Stay', desc: 'One app, entire journey', img: 'https://rapido.bike/images/Travel.svg' },
              { title: 'Metro Ticket', desc: 'Rides to and from the metro', img: 'https://rapido.bike/images/Metro.svg' },
            ].map((service, i) => (
              <div key={i} className="bg-[#f0f2f4] rounded-[24px] p-8 h-[220px] relative overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer group">
                <div className="relative z-10 w-[60%]">
                  <h3 className="text-2xl font-bold text-[#333] mb-2">{service.title}</h3>
                  <p className="text-[#666] text-[15px] font-medium leading-tight">{service.desc}</p>
                </div>
                <img src={service.img} alt={service.title} className="absolute bottom-4 right-4 w-[140px] object-contain group-hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 bg-[#f4f6f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quick Pickup', desc: 'Pickups within minutes that help you save time on every ride. A Rapido is always nearby when you need to get moving.', img: 'https://rapido.bike/images/Quick_Pickup.webp' },
              { title: 'Best Fares', desc: 'Affordable prices designed for everyday rides. Travel more, spend less without compromising on comfort.', img: 'https://rapido.bike/images/Best_Fares.webp' },
              { title: 'Never Too Far', desc: 'Present across 400+ cities and counting. Wherever you go, find a Rapido ride close by.', img: 'https://rapido.bike/images/Never_Too_Far.webp' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col">
                <div className="rounded-[24px] overflow-hidden mb-6 h-[260px]">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[22px] font-bold text-[#333] mb-3">{feature.title}</h3>
                <p className="text-[#333] text-[16px] leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Earn with Rapido ── */}
      <section className="bg-[#224772] text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Image */}
            <div className="p-10 lg:p-16 flex items-center justify-center">
              <div className="rounded-[32px] overflow-hidden shadow-2xl h-[400px] w-full">
                <img src="https://rapido.bike/images/Rapido-b2b.webp" alt="Earn with Rapido" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Content */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="mb-10 relative inline-block">
                <h2 className="text-[56px] font-bold text-white relative z-10 leading-tight">Earn with <br /> Rapido</h2>
                <div className="absolute bottom-1 left-0 w-[80%] h-[6px] bg-[#f9c935] z-0"></div>
              </div>
              <p className="text-[26px] leading-[1.5] text-white/90 mb-10">
                Become a Rapido Captain. Ride when you want, work how you want, and earn on your own terms.
              </p>
              <div>
                <button className="bg-[#f9c935] text-black px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2 hover:bg-white transition-colors">
                  Start Earning
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Download Now ── */}
      <section className="py-24 bg-[#f4f6f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16 relative flex justify-center">
            <div className="relative inline-block">
              <h2 className="text-[56px] font-bold text-[#333] relative z-10">Download Now</h2>
              <div className="absolute bottom-2 left-[10%] w-[80%] h-[6px] bg-[#f9c935] z-0"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Customer App Card */}
            <div className="bg-[#f4f6f8] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-12 flex items-center gap-8 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow">
              <div className="bg-[#f9c935] px-10 py-5 rounded-[40px] flex items-center justify-center min-w-[200px]">
                <span className="font-extrabold text-4xl tracking-tight text-black leading-none">rapido</span>
              </div>
              <h3 className="text-3xl font-medium text-black leading-snug">
                Bike-Taxi, <br /> Auto & Cabs
              </h3>
            </div>

            {/* Captain App Card */}
            <div className="bg-[#f4f6f8] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-12 flex items-center gap-8 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow">
              <div className="bg-[#f9c935] px-10 py-5 rounded-[40px] flex items-center justify-center flex-col min-w-[200px]">
                <span className="font-extrabold text-4xl tracking-tight text-black leading-none mb-1">rapido</span>
                <span className="font-medium text-lg text-black self-end mr-2">Captain</span>
              </div>
              <h3 className="text-3xl font-medium text-black leading-snug">
                Drive & <br /> Earn
              </h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
