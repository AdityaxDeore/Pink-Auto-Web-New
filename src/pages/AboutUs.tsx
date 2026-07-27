import React from 'react';

export default function AboutUs() {
  return (
    <div className="pt-24 font-primary bg-white">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="pr-12">
            <h3 className="text-[48px] font-light text-black leading-tight">India’s Beloved</h3>
            <h4 className="text-[48px] font-bold text-black leading-tight mb-10">Bike Taxi<br />Service</h4>
            
            <div className="mb-8">
              <h5 className="font-bold text-[20px] text-[#333] mb-2">We are not an option, we are a choice</h5>
              <p className="text-gray-500 text-[18px] leading-relaxed font-light">
                We're #1 choice of 10 Million people because we're the solution of India's intra-city commuting problems. With assured safety, we also provide economically priced rides.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold text-[20px] text-[#333] mb-2">What makes us different?</h5>
              <p className="text-gray-500 text-[18px] leading-relaxed font-light">
                Our bike taxis can dodge the traffic during peak hours and get you to the destination in a jiffy! So when you think travel, think Rapido.
              </p>
            </div>
          </div>
          
          <div className="relative h-[600px] flex items-center justify-end pr-10">
            {/* Image 1 (Woman) */}
            <div className="absolute left-0 top-10 w-[260px] h-[340px] rounded-[130px] overflow-hidden shadow-sm z-20">
              <img src="https://rapido.bike/images/about_us_1.png" alt="About Us Image 1" className="w-full h-full object-cover" onError={(e) => {
                // Fallback to a gray block if image is missing
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.style.backgroundColor = '#e5e7eb';
                }
              }} />
            </div>
            {/* Image 2 (Man pointing at phone) */}
            <div className="absolute right-0 bottom-0 w-[380px] h-[520px] rounded-[190px] overflow-hidden shadow-sm z-10">
              <img src="https://rapido.bike/images/about_us_2.png" alt="About Us Image 2" className="w-full h-full object-cover" onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.style.backgroundColor = '#d1d5db';
                }
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Champions Section */}
      <section className="py-24 px-6 mt-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className="pr-16">
            <h2 className="text-[40px] font-bold text-black mb-10 leading-tight">
              Champions of our success<br />story
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed font-light">
              Rapido has come a long way ever since its inception in 2015. With a lot of hardwork and perseverance we have made a place for ourselves in the market. As a brand and as a service, it is our constant endeavour to redefine ourselves.
            </p>
          </div>

          {/* Right: Founders */}
          <div className="flex justify-between items-center pt-6">
            {/* Founder 1 */}
            <div className="text-center">
              <div className="w-[100px] h-[100px] mx-auto bg-gray-200 rounded-[30px] mb-4 overflow-hidden shadow-sm">
                <img src="https://rapido.bike/images/rishi.png" alt="Rishikesh S R" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <h3 className="text-[15px] font-bold text-[#333] mb-1">Rishikesh S R</h3>
              <p className="text-gray-500 text-[14px]">Founder</p>
            </div>
            {/* Founder 2 */}
            <div className="text-center">
              <div className="w-[100px] h-[100px] mx-auto bg-gray-200 rounded-[30px] mb-4 overflow-hidden shadow-sm">
                <img src="https://rapido.bike/images/pavan.png" alt="Pavan Guntupalli" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <h3 className="text-[15px] font-bold text-[#333] mb-1">Pavan Guntupalli</h3>
              <p className="text-gray-500 text-[14px]">Founder</p>
            </div>
            {/* Founder 3 */}
            <div className="text-center">
              <div className="w-[100px] h-[100px] mx-auto bg-gray-200 rounded-[30px] mb-4 overflow-hidden shadow-sm">
                <img src="https://rapido.bike/images/aravind.png" alt="Aravind Sanka" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <h3 className="text-[15px] font-bold text-[#333] mb-1">Aravind Sanka</h3>
              <p className="text-gray-500 text-[14px]">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="bg-black py-20 px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          <h3 className="text-[40px] font-bold text-white mb-4">Jobs @ Rapido</h3>
          <p className="text-gray-300 text-[18px] mb-8 font-light">
            Join us in exploring a world of endless opportunities. Let’s find a spot for you.
          </p>
          <a href="/careers" className="inline-block bg-[#f9c935] text-black font-bold text-lg px-10 py-3 flex items-center justify-center w-max mx-auto rounded-full hover:bg-yellow-400 transition-colors">
            Work with us
          </a>
        </div>
      </section>
    </div>
  );
}
