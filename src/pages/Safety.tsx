import React, { useState } from 'react';

export default function Safety() {
  const [activeTab, setActiveTab] = useState<'overviews' | 'customers' | 'captains'>('overviews');

  return (
    <div className="pt-24 font-primary bg-white min-h-screen">
      {/* Sub-navbar */}
      <div className="bg-white sticky top-[88px] z-40 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <ul className="flex items-center justify-start gap-16 list-none m-0 p-0">
            {['overviews', 'customers', 'captains'].map((tab) => (
              <li 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-6 cursor-pointer capitalize text-[22px] transition-colors relative ${activeTab === tab ? 'font-bold text-[#333]' : 'font-medium text-gray-500 hover:text-black'}`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto py-16 px-6">
          {activeTab === 'overviews' && (
            <div className="flex flex-col gap-24">
              
              {/* Hero Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="pr-12">
                  <h1 className="text-[44px] font-bold text-black mb-8">Safety for all.</h1>
                  <p className="text-[17px] text-[#333] leading-relaxed font-medium">
                    At Pink Auto, the well-being of our customers is above everything else. We are constantly in pursuit of enhancing our safety measures to ensure every Pink Auto ride is a pleasant and comfortable experience.
                  </p>
                </div>
                <div className="flex justify-end relative">
                  <div className="w-[90%]">
                    {/* The collage image */}
                    <img src="https://rapido.bike/images/safety-overview-header.png" alt="Safety Overview Collage" className="w-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                </div>
              </div>

              {/* Covers Everyone Section */}
              <div>
                <h2 className="text-[30px] font-bold text-black mb-12">Covers Everyone</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  
                  {/* For Customers */}
                  <div className="flex flex-col">
                    <div className="rounded-[16px] overflow-hidden aspect-[4/5] max-h-[500px] mb-8 bg-gray-100">
                      <img src="https://rapido.bike/images/cover-customer.png" alt="For Customers" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                    </div>
                    <h3 className="text-[22px] font-bold text-black mb-4">For Customers</h3>
                    <p className="text-[15px] text-[#333] mb-6 leading-relaxed font-medium">
                      Every ride is tracked by Pink Auto, with access to granular latitudinal and longitudinal data.
                    </p>
                    <a href="#" className="font-bold text-[15px] text-black">Know More</a>
                  </div>

                  {/* For Captains */}
                  <div className="flex flex-col">
                    <div className="rounded-[16px] overflow-hidden aspect-[4/5] max-h-[500px] mb-8 bg-gray-100">
                      <img src="https://rapido.bike/images/cover-captain.png" alt="For Captains" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                    </div>
                    <h3 className="text-[22px] font-bold text-black mb-4">For Captains</h3>
                    <p className="text-[15px] text-[#333] mb-6 leading-relaxed font-medium">
                      From hiring to training to monitoring to ongoing checks, we take all necessary steps to ensure our Captains safety
                    </p>
                    <a href="#" className="font-bold text-[15px] text-black">Know More</a>
                  </div>

                </div>
              </div>

            </div>
          )}

          {activeTab === 'customers' && (
            <div className="w-full flex flex-col items-center gap-8 py-20">
              <h2 className="text-3xl font-bold text-center mb-8">Safety for Customers</h2>
              <div className="bg-gray-50 w-full max-w-4xl h-[400px] rounded-2xl shadow-sm flex items-center justify-center text-gray-400">
                Customer Safety Details Placeholder
              </div>
            </div>
          )}

          {activeTab === 'captains' && (
            <div className="w-full flex flex-col items-center gap-8 py-20">
              <h2 className="text-3xl font-bold text-center mb-8">Safety for Captains</h2>
              <div className="bg-gray-50 w-full max-w-4xl h-[400px] rounded-2xl shadow-sm flex items-center justify-center text-gray-400">
                Captain Safety Details Placeholder
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
