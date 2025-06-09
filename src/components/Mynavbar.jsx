import { Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Mynavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-gray-900/70 backdrop-blur-lg border-b border-gray-700/30' 
                    : 'bg-gray-900/90 backdrop-blur-sm'
            }`} style={!scrolled ? {
                background: 'linear-gradient(135deg, rgba(12, 12, 12, 0.95) 0%, rgba(26, 11, 46, 0.95) 25%, rgba(22, 33, 62, 0.95) 50%, rgba(15, 52, 96, 0.95) 75%, rgba(0, 0, 0, 0.95) 100%)'
            } : {}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent transition-colors font-['Sixtyfour'] disco-transform">
                            Naushad.dev
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex space-x-8">
                            <ul className="flex space-x-8 items-center">
                                <li>
                                    <a href="#home" className="neon-underline text-gray-300 hover:text-white transition-colors font-['Funnel_Display']">Blog</a>
                                </li>
                                <li>
                                    <a href="#projects" className="neon-underline text-gray-300 hover:text-white transition-colors font-['Funnel_Display']">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#resume" className="neon-underline text-gray-300 hover:text-white transition-colors font-['Funnel_Display']">
                                        Resume
                                    </a>
                                </li>
                                {/* Theme Toggle Icon */}
                                <li>
                                    <button
                                        className="text-gray-300 hover:text-white text-xl hover:scale-110 transition-all duration-300"
                                        onClick={() => alert("Theme toggling coming soon!")}
                                        title="Toggle Theme"
                                    >
                                        <Moon />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mynavbar;