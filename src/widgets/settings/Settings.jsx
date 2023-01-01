import React, { useState } from "react";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { motion } from "framer-motion";
function Settings({ setDarkMode, darkMode }) {
  const [showDarkMode, setShowDarkMode] = useState(false);
  const variants = {
    hide: {
      display: "none",
      opacity: 0,
    },
    show: {
      display: "flex",
      opacity: 1,
    },
    transition: {
      duration: 5,
      delay: 0.5,
    },
  };

  // handle dark mode change
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", JSON.stringify(!darkMode));
    setShowDarkMode(false);
  };
  return (
    <Container>
      <AiFillSetting onClick={() => setShowDarkMode(!showDarkMode)} />
      <motion.div
        className="dark__mode"
        initial="false"
        animate={showDarkMode ? "show" : "hide"}
        variants={variants}
        onClick={handleDarkMode}
      >
        {darkMode ? (
          <MdOutlineLightMode size="1.2rem" />
        ) : (
          <MdDarkMode size="1.2rem" />
        )}
        <p>{darkMode ? "light" : "dark"}</p>
      </motion.div>
    </Container>
  );
}

export default Settings;

const Container = styled.div`
  font-size: 2.5rem;
  color: var(--secondary-color);
  position: relative;
  cursor: pointer;
  .dark__mode {
    @media (max-width: 768px) {
      width: 40vw;
    }
    width: 10vw;
    height: 5vh;
    border: 1px solid #000;
    border-radius: 5px;
    background: #333;
    position: absolute;
    bottom: 29%;
    left: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    padding: 5%;
    gap: 2%;
    align-items: center;
  }
`;
