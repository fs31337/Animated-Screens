//create a new component called CrazyButton, this component will be a button, inside a motion.div who will render a ball when its clicked, the ball its gonna grow to fill the entire screen.// src/components/CrazyButton.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const CrazyButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <motion.div>
      <button onClick={handleClick}>Click me</button>
      {isClicked && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "32px",
            height: "32px",
            background: "blue",
            borderRadius: "50%",
            zIndex: 2,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 150 }}
          exit={{ scale: 135 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </motion.div>
  );
};

export default CrazyButton;
