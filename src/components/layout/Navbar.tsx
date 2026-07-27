import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Safety', path: '/safety' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f4f6f8]/90 backdrop-blur-md shadow-sm py-4' : 'bg-[#f4f6f8] py-6'}`}>
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Pink Auto Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '');
            return (
              <li key={item.path} className="relative group">
                <Link 
                  to={item.path} 
                  className={`text-[16px] transition-colors ${isActive ? 'font-semibold text-black' : 'font-medium text-[#333] hover:text-black'}`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-black rounded-full" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Download Button */}
        <div className="hidden lg:block">
          <button className="bg-black text-white px-7 py-3 rounded-full font-semibold text-[15px] hover:bg-gray-800 transition-colors shadow-md">
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-black p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
