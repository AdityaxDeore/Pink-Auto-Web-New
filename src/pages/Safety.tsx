import React, { useState } from 'react';

export default function Safety() {
  const [activeTab, setActiveTab] = useState<'overview' | 'customers' | 'captains'>('overview');

  return (
    <div className="pt-24 font-primary">
      {/* Sub-navbar */}
      <div className="bg-white border-b border-gray-200 sticky top-[88px] z-40">
        <div className="max-w-[1280px] mx-auto px-6">
          <ul className="flex items-center justify-center gap-12 list-none m-0 p-0">
            {['overview', 'customers', 'captains'].map((tab) => (
              <li 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 px-2 cursor-pointer capitalize text-[16px] transition-colors relative ${activeTab === tab ? 'font-bold text-black' : 'font-medium text-gray-500 hover:text-black'}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f9c935] rounded-t-lg" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-[#f4f6f8] min-h-screen">
        <div className="max-w-[1280px] mx-auto py-12 px-6 flex flex-col items-center">
          {activeTab === 'overview' && (
            <div className="w-full flex flex-col items-center gap-8">
              <img src="https://rapido.bike/images/safety-overview-header.png" alt="Safety Overview" className="w-full max-w-4xl bg-white shadow-sm rounded-2xl p-4 min-h-[200px]" onError={(e) => e.currentTarget.style.display = 'none'} />
              <img src="https://rapido.bike/images/covers-everyone.png" alt="Covers Everyone" className="w-full max-w-4xl bg-white shadow-sm rounded-2xl p-4 min-h-[200px]" onError={(e) => e.currentTarget.style.display = 'none'} />
              
              <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                <img src="https://rapido.bike/images/cover-customer.png" alt="For Customers" className="flex-1 bg-white shadow-sm rounded-2xl p-4 min-h-[200px]" onError={(e) => e.currentTarget.style.display = 'none'} />
                <img src="https://rapido.bike/images/cover-captain.png" alt="For Captains" className="flex-1 bg-white shadow-sm rounded-2xl p-4 min-h-[200px]" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              
              <img src="https://rapido.bike/images/safety_groups_overview.png" alt="Safety Groups" className="w-full max-w-4xl bg-white shadow-sm rounded-2xl p-4 min-h-[200px]" onError={(e) => e.currentTarget.style.display = 'none'} />
              <img src="https://rapido.bike/images/safety_way_forward_overview.png" alt="Way Forward" className="w-full max-w-4xl bg-white shadow-sm rounded-2xl p-4 min-h-[200px]" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="w-full flex flex-col items-center gap-8">
              <h2 className="text-3xl font-bold text-center mb-8">Safety for Customers</h2>
              <div className="bg-white w-full max-w-4xl h-[400px] rounded-2xl shadow-sm flex items-center justify-center text-gray-400">
                Customer Safety Details Placeholder
              </div>
            </div>
          )}

          {activeTab === 'captains' && (
            <div className="w-full flex flex-col items-center gap-8">
              <h2 className="text-3xl font-bold text-center mb-8">Safety for Captains</h2>
              <div className="bg-white w-full max-w-4xl h-[400px] rounded-2xl shadow-sm flex items-center justify-center text-gray-400">
                Captain Safety Details Placeholder
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
