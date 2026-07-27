import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 text-white font-primary border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Customer App */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Customer app</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="border border-white/20 rounded-lg overflow-hidden hover:border-white transition-colors block w-fit">
                <img src="https://rapido.bike/images/play_store.svg" alt="Google Play" className="h-[45px]" />
              </a>
              <a href="#" className="border border-white/20 rounded-lg overflow-hidden hover:border-white transition-colors block w-fit">
                <img src="https://rapido.bike/images/app_store.svg" alt="App Store" className="h-[45px]" />
              </a>
            </div>
          </div>

          {/* Captain App */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Captain app</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="border border-white/20 rounded-lg overflow-hidden hover:border-white transition-colors block w-fit">
                <img src="https://rapido.bike/images/play_store.svg" alt="Google Play" className="h-[45px]" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <ul className="flex flex-col gap-4 font-medium text-[15px]">
              <li><Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-white hover:text-gray-300 transition-colors">Careers</Link></li>
              <li><Link to="/safety" className="text-white hover:text-gray-300 transition-colors">Safety</Link></li>
              <li><Link to="/blog" className="text-white hover:text-gray-300 transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-white hover:text-gray-300 transition-colors">Press</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-1">
            <ul className="flex flex-col gap-4 font-medium text-[15px]">
              <li><Link to="/terms-bike" className="text-white hover:text-gray-300 transition-colors">Customer Terms - Bike Taxi</Link></li>
              <li><Link to="/terms-cabs" className="text-white hover:text-gray-300 transition-colors">Customer Terms - Cabs and Auto</Link></li>
              <li><Link to="/corporate" className="text-white hover:text-gray-300 transition-colors">Corporate Affairs</Link></li>
              <li><Link to="/captain-bike" className="text-white hover:text-gray-300 transition-colors">Captain Terms - Bike Taxi</Link></li>
              <li><Link to="/captain-cabs" className="text-white hover:text-gray-300 transition-colors">Captain Terms - Cabs and Auto</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col lg:items-end">
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-bold text-lg">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-12 text-center">
          <div className="text-[#999] text-sm font-medium">
            © {new Date().getFullYear()} Roppen Transportation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
