import { useState, useEffect } from "react";

const RotatingTitle = () => {
  const titles = [
    "Fullstack Software Engineer",
    "Product Builder",
    "UI/UX Enthusiast",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFade(true); // fade-in new title
      }, 600); // 600ms match transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`text-2xl text-gray-300 mb-6 font-medium transition-all duration-600 transform ${
        fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {titles[index]}
    </h2>
  );
};

export default RotatingTitle;
