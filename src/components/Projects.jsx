import { useRef, useState, useEffect } from "react";
import { Play, Pause, ExternalLink, Github, Eye } from "lucide-react";

const ProjectCard = ({ title, videoSrc, poster, techStack, description, liveUrl, sourceUrl, delay = 0 }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className={`transform transition-all duration-700 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-6">
          {/* Video Section */}
          <div
            className="relative rounded-xl overflow-hidden border border-gray-600/30 group-hover:border-indigo-400/40 transition-all duration-300 cursor-pointer"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              muted
              playsInline
              controls={isPlaying}
              onEnded={handleVideoEnd}
            />

            {/* Play overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 flex items-center justify-center transition-all duration-300 ${
              isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } ${isHovered ? 'bg-black/30' : ''}`}>
              <div className="relative flex items-center justify-center">
                {/* Ripple animation */}
                <div className="absolute w-20 h-20">
                  <div className="circles w-full h-full relative">
                    <div className="circle1 absolute bg-indigo-400/30 rounded-full w-full h-full" />
                    <div className="circle2 absolute bg-indigo-400/20 rounded-full w-full h-full" />
                    <div className="circle3 absolute bg-indigo-400/10 rounded-full w-full h-full" />
                  </div>
                </div>
                
                {/* Play button */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-indigo-600/90 hover:bg-indigo-500 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 border border-indigo-400/20">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="absolute top-3 right-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live Demo
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-6 space-y-4">
            {/* Title */}
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {title}
              </h3>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">1.2k</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${tech.bg} ${tech.text} border ${tech.border || 'border-transparent'}`}
                >
                  {tech.icon && <tech.icon className="w-3 h-3 mr-1" />}
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button 
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                onClick={() => window.open(liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </button>
              
              <button 
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:border-gray-500/50 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
                onClick={() => window.open(sourceUrl, '_blank')}
              >
                <Github className="w-4 h-4" />
                Source
              </button>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <style>{`
        .circles > div {
          animation: ripple 2.5s infinite ease-out;
          border-radius: 50%;
          height: 100%;
          width: 100%;
          opacity: 0;
          position: absolute;
        }
        .circle1 { animation-delay: 0s; }
        .circle2 { animation-delay: 0.8s; }
        .circle3 { animation-delay: 1.6s; }

        @keyframes ripple {
          0% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
    </div>
  );
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Design Space: Collaboratve Whiteboard",
      videoSrc: "/demo.mp4",
      poster: "/thumbnail.jpg",
      description: "A modern marketplace for unused software licenses featuring AI-powered recommendations and secure transactions.",
      liveUrl: "https://softsell.example.com",
      sourceUrl: "https://github.com/user/softsell",
      techStack: [
        { name: "Next.js", bg: "bg-gray-900/40", text: "text-gray-200", border: "border-gray-600/30" },
        { name: "Tailwind", bg: "bg-cyan-900/20", text: "text-cyan-400", border: "border-cyan-500/20" },
        { name: "Groq AI", bg: "bg-orange-900/20", text: "text-orange-400", border: "border-orange-500/20" },
        { name: "Cloudinary", bg: "bg-indigo-900/20", text: "text-indigo-400", border: "border-indigo-500/20" },
      ]
    },
    {
      title: "Wassup! Scalable Chatapp",
      videoSrc: "/demo.mp4",
      poster: "/thumbnail.jpg",
      description: "Advanced analytics dashboard for software license utilization with real-time insights and cost optimization.",
      liveUrl: "https://analytics.example.com",
      sourceUrl: "https://github.com/user/analytics",
      techStack: [
        { name: "React", bg: "bg-blue-900/20", text: "text-blue-400", border: "border-blue-500/20" },
        { name: "TypeScript", bg: "bg-blue-800/20", text: "text-blue-300", border: "border-blue-400/20" },
        { name: "D3.js", bg: "bg-green-900/20", text: "text-green-400", border: "border-green-500/20" },
        { name: "PostgreSQL", bg: "bg-blue-900/20", text: "text-blue-400", border: "border-blue-500/20" },
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #000000 100%)'
    }}>
      {/* Animated background orbs */}
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

      <div className="relative z-10 py-20 px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover innovative solutions built with cutting-edge technologies and modern design principles
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                delay={index * 200}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}