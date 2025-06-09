import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[#1b002b] text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10 font-['Funnel_Display']">
      {/* Left Section */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            Naushad
          </span>
        </h1>

        <h2 className="text-2xl text-gray-300 mt-4">Fullstack Software Engineer</h2>

        <p className="text-gray-300 mt-4">
          I build beautiful, functional, and user-friendly web applications
          that deliver exceptional user experiences.Full Stack Developer proficient in React, Node.js, 
          and React Native, with hands-on experience building web and mobile applications. 
          Seeking internship/full-time opportunities to further deepen my real-world software development skills.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-black text-white border border-purple-600 px-6 py-2 rounded-md hover:bg-purple-900 transition shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-black text-white border border-purple-600 px-6 py-2 rounded-md hover:bg-purple-900 transition shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center">
        {/* Profile Image with Neon Glow & Circle */}
        <div className="w-48 h-48 relative rounded-full overflow-hidden  border border-purple-600">
          <img
            src="/naushad.jpg" // replace with your image path
            alt="Naushad"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 text-2xl text-white">
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
          href: "https://x.com/itsnooshad", icon: FaTwitter, label: "Twitter" 
          }].map(({ href, icon: Icon, label }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-transform duration-300 hover:rotate-[8deg] hover:scale-110 hover:bg-white/20"
            >
              <Icon className="text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

// //dark theme
// background: #0F2027;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

//light theme
// background: #DAE2F8;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #D6A4A4, #DAE2F8);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #D6A4A4, #DAE2F8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
