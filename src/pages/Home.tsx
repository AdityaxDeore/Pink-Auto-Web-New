import React from 'react';

export default function Home() {
  return (
    <div className="font-primary bg-[#f4f6f8] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f4f6f8] z-0">
           {/* Decorative background shapes */}
           <div className="absolute top-20 left-10 w-64 h-64 bg-[#c62d70] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
           <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
           <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#c62d70] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div className="max-w-[560px]">
              <div className="inline-block px-4 py-2 bg-pink-100 rounded-full mb-6">
                 <span className="text-[#c62d70] font-semibold tracking-wide uppercase text-sm">Ride With Pride</span>
              </div>
              <h1 className="text-[32px] lg:text-[44px] font-bold leading-[1.2] text-[#333] mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Your Trusted <br />
                <span className="text-[#c62d70]">Pink Auto</span> Service
              </h1>
              <p className="text-[15px] text-gray-600 mb-10 font-medium leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Safe, Comfortable & Reliable Auto Service for Women, Students, Senior Citizens and Families.
                <br /><br />
                <span className="italic opacity-80">"तुमची भरवशाची पिंक ऑटो सेवा"</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#c62d70] text-white px-6 py-3 rounded-lg font-bold text-[15px] hover:bg-[#a3245c] transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                  Download App
                </button>
                <button className="bg-white text-[#c62d70] border-2 border-[#c62d70] px-6 py-3 rounded-lg font-bold text-[15px] hover:bg-pink-50 transition-all">
                  Explore Services
                </button>
              </div>
            </div>

            {/* Right Column (Hero Image) */}
            <div className="relative h-[550px] hidden lg:flex items-center justify-center">
              {/* Image Container with gradient outline */}
              <div className="relative w-full h-[90%] bg-white rounded-3xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 relative">
                   {/* We will still use the hero image but style it nicely within this frame */}
                   <img src="https://rapido.bike/images/home-hero.webp" alt="Pink Auto Vehicles" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 text-white font-bold text-2xl drop-shadow-md">
                     Your Journey, Our Priority
                   </div>
                </div>
                {/* Decorative floating elements */}
                <div className="absolute -left-8 top-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">✓</div>
                   <div>
                     <div className="text-sm text-gray-500 font-medium">Safe Rides</div>
                     <div className="font-bold text-black">100% Verified</div>
                   </div>
                </div>
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
            <div className="absolute bottom-1 left-0 w-[60%] h-[6px] bg-[#c62d70] z-0"></div>
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
              { title: 'Quick Pickup', desc: 'Pickups within minutes that help you save time on every ride. A Pink Auto is always nearby when you need to get moving.', img: 'https://rapido.bike/images/Quick_Pickup.webp' },
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

      {/* ── Earn with Pink Auto ── */}
      <section className="bg-[#224772] text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Image */}
            <div className="p-10 lg:p-16 flex items-center justify-center">
              <div className="rounded-[32px] overflow-hidden shadow-2xl h-[400px] w-full">
                <img src="https://rapido.bike/images/Pink Auto-b2b.webp" alt="Earn with Pink Auto" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Content */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="mb-10 relative inline-block">
                <h2 className="text-[56px] font-bold text-white relative z-10 leading-tight">Earn with <br /> Pink Auto</h2>
                <div className="absolute bottom-1 left-0 w-[80%] h-[6px] bg-[#c62d70] z-0"></div>
              </div>
              <p className="text-[26px] leading-[1.5] text-white/90 mb-10">
                Become a Pink Auto Captain. Ride when you want, work how you want, and earn on your own terms.
              </p>
              <div>
                <button className="bg-[#c62d70] text-white px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
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
              <div className="absolute bottom-2 left-[10%] w-[80%] h-[6px] bg-[#c62d70] z-0"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Customer App Card */}
            <div className="bg-[#f4f6f8] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-12 flex items-center gap-8 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow">
              <div className="bg-[#f4f6f8] px-6 py-4 rounded-[40px] flex items-center justify-center min-w-[200px] h-[120px] shadow-sm border border-gray-200">
                <img src="/logo.png" alt="Pink Auto" className="h-full object-contain" />
              </div>
              <h3 className="text-3xl font-medium text-black leading-snug">
                Bike-Taxi, <br /> Auto & Cabs
              </h3>
            </div>

            {/* Captain App Card */}
            <div className="bg-[#f4f6f8] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-12 flex items-center gap-8 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow">
              <div className="bg-[#f4f6f8] px-6 py-4 rounded-[40px] flex items-center justify-center flex-col min-w-[200px] h-[120px] shadow-sm border border-gray-200 relative">
                <img src="/logo.png" alt="Pink Auto Captain" className="h-[70%] object-contain mb-2" />
                <span className="font-bold text-sm text-[#c62d70] uppercase tracking-wider">Captain</span>
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
