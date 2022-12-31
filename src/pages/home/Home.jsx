import React, { useState } from "react";
import styled from "styled-components";
import Actionable from "../../components/actionables/Actionable";
import Header from "../../components/header/Header";
import Routing from "../../components/routing/Routing";
import {AnimatePresence} from 'framer-motion'
import Modal from "../../widgets/modal/Modal";
function Home({darkMode,setDarkMode}) {
  // modal logic
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const close = () => setShowModal(false);
  // ----------------------------------------------------------------

  // input states
  const [inputVal,setInputVal] = useState({
    title:'',
    desc:'',
    category:'',
  })
  return (
    <Container>
      <Header darkMode={darkMode} />
      <Routing darkMode={darkMode} />
      <Actionable openModal={openModal} darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatePresence
        initial={false}
        // exitBeforeEnter={true}
        mode="wait"
        onExitComplete={() => null}
      >
        {showModal && <Modal darkMode={darkMode} handleClose={close} inputVal={inputVal} setInputVal={setInputVal} />}
      </AnimatePresence>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  border: 5px solid #000;
  position: relative;
`;
