import React from "react";
import styled from "styled-components";
import ModalButton from "../../widgets/modal/ModalButton";
import Settings from "../../widgets/settings/Settings";

function Actionable({ openModal, setDarkMode, darkMode }) {
  return (
    <Container>
      <div className="mobile">
        <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
        <ModalButton openModal={openModal} show="mobile" />
      </div>

      <div className="desk">
        <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </Container>
  );
}

export default Actionable;

const Container = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  .mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .desk {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
