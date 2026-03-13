import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // THIS IS THE MAGIC: It checks if your mouse is touching a link, button, or a special class
      const isHoveringInteractive = e.target.closest(
        "a, button, .cursor-pointer",
      );

      // Hide the dot if in the navbar (top 90px) OR hovering over something interactive
      if (e.clientY < 90 || isHoveringInteractive) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-brand-red rounded-full pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        opacity: isVisible ? 1 : 0, // Fades out completely
        scale: isVisible ? 1 : 0.5, // Shrinks down smoothly
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
        mass: 0.5,
      }}
    />
  );
};

export default CustomCursor;
