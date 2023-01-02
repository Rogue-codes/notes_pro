import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notes from "../src/pages/all_Notes/Notes";
import SingleNote from "./pages/all_Notes/SingleNote";
import Educational from "./pages/all_Notes/Educational";
import Fun from "./pages/all_Notes/Fun";
import Shopping from "./pages/all_Notes/Shopping";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
function App() {
  // search state

  // dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  // Animating the preloader
  const [preloader, setPreloader] = useState(true);
  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    leave: {
      x: "-100%",
      transition: { ease: "easeInOut" },
    },
    transition: {
      delayChildren: 0.5,
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  };
  const variants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    show: {
      opacity: 1,
      y: "0vh",
    },
  };
// -----------------------------------------------------------------
  useEffect(() => {
    setDarkMode(
      localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    );
    setTimeout(() => {
      setPreloader(false);
    }, 6000);
  }, []);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <AnimatePresence>
        {preloader && (
          <PreLoaderDiv
            initial={true}
            animate="show"
            exit="leave"
            variants={parentVariant}
          >
            <motion.h1
              variants={variants}
              initial="hidden"
              animate="show"
              transition={{
                delay: 1,
                duration: 3,
                damping: 50,
                type: "spring",
                stiffness: "200",
              }}
            >
              NOTEPAD-PRO
            </motion.h1>
            <motion.h2
              variants={variants}
              initial="hidden"
              animate="show"
              transition={{
                delay: 1.5,
                damping: 50,
                duration: 3,
                type: "spring",
                stiffness: "200",
              }}
            >
              YOUR ONE STOP NOTE APPLICATION
            </motion.h2>

            <motion.p
              variants={variants}
              initial="hidden"
              animate="show"
              transition={{
                delay: 2.5,
                damping: 50,
                duration: 3,
                type: "spring",
                stiffness: "200",
              }}
            >
              Created by rogue-codes
            </motion.p>
          </PreLoaderDiv>
        )}
      </AnimatePresence>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          <Route
            path="/Notes"
            element={
              <Notes
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/noteDetails"
            element={<SingleNote darkMode={darkMode} />}
          />
          <Route
            path="/educational"
            element={
              <Educational
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/fun"
            element={
              <Fun
                darkMode={darkMode}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
              />
            }
          />
          <Route
            path="/shopping"
            element={
              <Shopping
                darkMode={darkMode}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
              />
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;

const PreLoaderDiv = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: goldenrod;
  font-family: "Kanit", sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 2vw;
  color: #000;
  justify-content: center;
  align-items: center;
  gap: 5%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 222;
  h1{
    font-size: 3rem;
  }
  h2{
    font-size: 1.7rem;
    text-align: center;
  }
  p{
    font-size: .7rem;
    font-style: italic;
  }
`;