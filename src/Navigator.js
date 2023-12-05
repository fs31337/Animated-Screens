import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CursorBall from "./CursorBall";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Navigator = () => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const handleHover = (color) => {
    setHoveredOption(color);
  };

  const handleHoverOut = () => {
    setHoveredOption(null);
  };

  const handleNavigation = (path, color) => {
    setIsClicked(true);
    setSelectedOption(color);
    setIsNavigating(true);
    setTimeout(() => {
      navigate(path);
      setIsClicked(false);
    }, 300);
  };

  return (
    <div>
      <nav
        style={{
          justifySelf: "center",
          alignSelf: "center",
          width: 500,
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onMouseEnter={() => handleHover("purple")}
          onMouseLeave={handleHoverOut}
          onClick={() => handleNavigation("/home", "purple")}
        >
          Home
        </div>
        <div
          onMouseEnter={() => handleHover("green")}
          onMouseLeave={handleHoverOut}
          onClick={() => handleNavigation("/about", "green")}
        >
          About
        </div>
      </nav>
      <CursorBall
        color={hoveredOption || selectedOption}
        isNavigating={isNavigating}
      />

      {isClicked && (
        <motion.div
          style={{
            position: "absolute",
            top: cursorYSpring,
            left: cursorXSpring,
            width: "50px",
            height: "50px",
            background: selectedOption,
            borderRadius: "50%",
            zIndex: 1,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 150 }}
          exit={{ scale: 135 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
};
export default Navigator;
