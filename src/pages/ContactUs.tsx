import React from 'react';

export default function ContactUs() {
  return (
    <div className="pt-24 font-primary bg-[#f4f6f8] min-h-screen">
      <section className="py-16 px-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Form Section */}
          <div className="p-10 md:p-14 w-full md:w-3/5">
            <h3 className="text-[32px] font-bold text-black mb-2">You can find us here</h3>
            <h6 className="text-[18px] text-gray-500 mb-8 font-medium">Find help for your queries here:</h6>
            
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-gray-700">Name <sup className="text-red-500">*</sup></label>
                <input type="text" placeholder="Enter your name" className="bg-[#f8f9fa] border-none rounded-lg p-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#f9c935]" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-gray-700">Email Address <sup className="text-red-500">*</sup></label>
                <input type="email" placeholder="Enter your email" className="bg-[#f8f9fa] border-none rounded-lg p-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#f9c935]" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-gray-700">Mobile Number <sup className="text-red-500">*</sup></label>
                <input type="tel" placeholder="Enter your mobile number" maxLength={10} className="bg-[#f8f9fa] border-none rounded-lg p-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#f9c935]" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-gray-700">You are a <sup className="text-red-500">*</sup></label>
                <select className="bg-[#f8f9fa] border-none rounded-lg p-4 text-[15px] text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f9c935] appearance-none">
                  <option disabled selected>-select-</option>
                  <option value="customer">Customer</option>
                  <option value="captain">Captain</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-gray-700">Select Query <sup className="text-red-500">*</sup></label>
                <select className="bg-[#f8f9fa] border-none rounded-lg p-4 text-[15px] text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f9c935] appearance-none">
                  <option disabled selected>-select-</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-gray-700">Comment <sup className="text-red-500">*</sup></label>
                <textarea placeholder="Enter your comment" rows={4} className="bg-[#f8f9fa] border-none rounded-lg p-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#f9c935] resize-none"></textarea>
              </div>
              
              <button type="button" className="bg-[#f9c935] text-black font-bold text-[16px] py-4 rounded-lg hover:bg-yellow-400 transition-colors mt-2">
                Submit
              </button>
            </form>
          </div>

          {/* Right Address Section */}
          <div className="bg-black p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f9c935] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#f9c935] opacity-20 rounded-full blur-2xl"></div>
            
            <div className="z-10 flex flex-col gap-10">
              <div>
                <label className="text-[#f9c935] font-semibold text-[14px] uppercase tracking-wider block mb-2">Registered Office Address:</label>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  Roppen Transportation Services Pvt Ltd, 3rd Floor, Sai Prithvi Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad - 500081.
                </p>
                <p className="text-gray-400 text-[13px] mt-2">CIN:U52210TG2015PTC097115</p>
              </div>

              <div>
                <label className="text-[#f9c935] font-semibold text-[14px] uppercase tracking-wider block mb-2">City Office:</label>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  Rapido office, 648, 1st Main Rd, Muneswara Nagar, Sector 6, HSR Layout, Bengaluru, Karnataka 560102
                </p>
              </div>

              <div>
                <label className="text-[#f9c935] font-semibold text-[14px] uppercase tracking-wider block mb-2">Corporate Office:</label>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  Mantri Commercio - Spatium Tower A, Sy No 51/2, 51/3, 51/4, Of Devarabeesanahalli Village And Hjem 39/5 Of Kariyammana Agrahara Village Varthur Hobli, Bangalore East Taluk, Bangalore.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
