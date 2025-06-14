import { Moon } from 'lucide-react';


const Mynavbar = () => {
    return (
        <>
            <div className="bg-black text-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-white transition-colors font-['Sixtyfour'] disco-transform">
                            Naushad.dev
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex space-x-8">
                            <ul className="flex space-x-8 items-center">
                                <li>
                                    <a href="#home" className="neon-underline font-['Funnel_Display']">Blog</a>
                                </li>
                                <li>
                                    <a href="#projects" className="neon-underline font-['Funnel_Display']">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#resume" className="neon-underline font-['Funnel_Display']">
                                        Resume
                                    </a>
                                </li>
                                {/* Theme Toggle Icon */}
                                <li>
                                    <button
                                        className="text-xl hover:scale-110 transition-transform"
                                        onClick={() => alert("Theme toggling coming soon!")}
                                        title="Toggle Theme"
                                    >
                                        
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mynavbar;
//text-gray-300 hover:text-white transition-colors