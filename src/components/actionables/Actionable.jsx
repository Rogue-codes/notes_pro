import React from "react";
import styled from "styled-components";
import ModalButton from "../../widgets/modal/ModalButton";
import Settings from "../../widgets/settings/Settings";

function Actionable({ openModal, setDarkMode, darkMode }) {
  return (
    <Container>
      <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
      <ModalButton openModal={openModal} />
    </Container>
  );
}

export default Actionable;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
`;
