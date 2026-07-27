import React from 'react';

export default function Careers() {
  return (
    <div className="pt-24 font-primary overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#f4f6f8] py-16 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-[48px] font-extrabold text-black leading-tight mb-6">Be a part of our team.</h4>
            <p className="text-gray-600 text-[20px] mb-8 leading-relaxed max-w-md">
              We are so glad you want to join us in exploring a world of endless opportunities at Rapido. Let’s find a spot for you.
            </p>
            <a href="https://rapido.darwinbox.in/ms/candidate/careers" target="_blank" rel="noreferrer" className="inline-block bg-[#f9c935] text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
              View Jobs
            </a>
          </div>
          <div className="relative h-[450px]">
            <div className="absolute right-0 top-0 w-3/4 h-[80%] bg-gray-200 rounded-3xl overflow-hidden shadow-lg z-10">
               <img src="https://rapido.bike/images/career_home_1.png" alt="Career Image 1" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <div className="absolute left-0 bottom-0 w-2/3 h-[60%] bg-gray-300 rounded-3xl overflow-hidden shadow-xl z-20 border-8 border-[#f4f6f8]">
               <img src="https://rapido.bike/images/career_home_2.png" alt="Career Image 2" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-[#f9c935] z-0"></div>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[36px] font-bold text-black mb-16 relative inline-block">
            Why work with us
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#f9c935]"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {/* Benefit 1 */}
            <div className="flex flex-col items-start text-left">
              <div className="w-20 h-20 mb-6">
                <img src="https://rapido.bike/images/work_1.png" alt="Reward" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <p className="text-[18px] text-gray-800 font-medium">We pride ourselves on rewarding great work with great compensation.</p>
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="w-20 h-20 mb-6">
                <img src="https://rapido.bike/images/work_2.png" alt="Flexibility" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <p className="text-[18px] text-gray-800 font-medium">Flexible hours and vacation. Night owls welcome.</p>
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="w-20 h-20 mb-6">
                <img src="https://rapido.bike/images/work_3.png" alt="Culture" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <p className="text-[18px] text-gray-800 font-medium">Meet new cultures and enjoy our crew from all over the world</p>
            </div>
          </div>

          {/* Carousel Placeholder (Row of images) */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="min-w-[300px] h-[250px] bg-gray-200 rounded-2xl flex-shrink-0 snap-center overflow-hidden">
                <img src={`https://rapido.bike/images/career_carousel_${item}.png`} alt={`Carousel ${item}`} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="bg-black py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <h2 className="text-[36px] font-bold text-white mb-16 relative inline-block">
            What our employees say
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#f9c935]"></div>
          </h2>
          <div className="bg-white/10 backdrop-blur-md max-w-3xl mx-auto rounded-3xl p-10 border border-white/20">
            <p className="text-white text-xl italic">"Rapido is a fantastic place to grow..."</p>
            <div className="mt-8 text-gray-400">- Rapido Employee</div>
          </div>
        </div>
      </section>
    </div>
  );
}
