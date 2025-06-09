import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import RotatingTitle from "./RotatingTitle";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden font-['Funnel_Display'" style={{
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #000000 100%)'
    }}>
      {/* Animated background orbs - matching Projects section */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)'
        }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.12) 40%, transparent 70%)',
          animationDelay: '1s'
        }} />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(59, 130, 246, 0.06) 40%, transparent 70%)',
          animationDelay: '2s'
        }} />
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          animationDelay: '0.5s'
        }} />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-2xl animate-pulse" style={{
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.12) 0%, transparent 70%)',
          animationDelay: '1.5s'
        }} />
        
        {/* Mesh overlays */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
        }} />
      </div>

      <div className="relative z-10">
        {/* Available for Opportunities Badge */}
        <div className={`text-center pt-8 pb-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 text-green-400 text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for Opportunities
          </div>
        </div>

        {/* Hero Content */}
        <div className="font-['Funnel_Display'] flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10 min-h-[calc(100vh-120px)]">
          {/* Left Section */}
          <div className={`text-center md:text-left max-w-xl transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Naushad
              </span>
            </h1>

            {/* <h2 className="text-2xl text-gray-300 mb-6 font-medium">Fullstack Software Engineer</h2> */}
            <RotatingTitle />
            <p className="text-gray-400 mb-8 leading-relaxed">
              I build beautiful, functional, and user-friendly web applications
              that deliver exceptional user experiences. Full Stack Developer proficient in React, Node.js, 
              and React Native, with hands-on experience building web and mobile applications. 
              Seeking internship/full-time opportunities to further deepen my real-world software development skills.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:border-gray-500/50 rounded-lg text-gray-300 hover:text-white font-medium transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className={`flex flex-col items-center transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Profile Image with enhanced styling */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse" />
              
              {/* Image container */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-gray-600/30 group-hover:border-indigo-400/50 transition-all duration-300">
                <img
                  src="/naushad.jpg"
                  alt="Naushad"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8 text-2xl">
              {[{
                href: "https://github.com/naushad91",
                icon: FaGithub,
                label: "GitHub"
              }, {
                href: "https://linkedin.com",
                icon: FaLinkedin,
                label: "LinkedIn"
              }, {
                href: "mailto:naushadkhank426@gmail.com",
                icon: FaEnvelope,
                label: "Email"
              }, {
                href: "https://x.com/itsnooshad", 
                icon: FaTwitter, 
                label: "Twitter" 
              }].map(({ href, icon: Icon, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 group"
                >
                  <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;