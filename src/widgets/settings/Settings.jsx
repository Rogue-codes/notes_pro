import React, { useState } from "react";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md'
import { motion } from "framer-motion";
function Settings({setDarkMode, darkMode}) {
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
  const handleDarkMode = () =>{
    setDarkMode(!darkMode)
    setShowDarkMode(false)
  }
  return (
    <Container>
      <AiFillSetting onClick={()=>setShowDarkMode(!showDarkMode)}/>
      <motion.div
        className="dark__mode"
        initial="false"
        animate={showDarkMode ? "show" : "hide"}
        variants={variants}
        onClick={handleDarkMode}
      >
        {darkMode ? <MdOutlineLightMode size='1.82rem'/> : <MdDarkMode size='1.82rem'/>}
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
  .dark__mode {
    width: 40vw;
    height: 6vh;
    border: 1px solid #000;
    border-radius: 5px;
    background: #333;
    position: absolute;
    bottom: 25%;
    left: 95%;
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    padding: 5%;
    gap: 2%;
    align-items: center;
  }
`;
