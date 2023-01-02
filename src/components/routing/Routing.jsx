import React from "react";
import styled from "styled-components";
import { BsFolder2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import ModalButton from "../../widgets/modal/ModalButton";
import { useSelector } from "react-redux";
function Routing({ darkMode, openModal }) {
  // getting count of each note category
  const note = useSelector((state)=>state.Note.notes)
  const educational = note.filter((state)=>state.category === "educational")
  const fun = note.filter((state)=>state.category === "fun")
  const shopping = note.filter((state)=>state.category === "shopping")
  // --------------------------------------------------------------------------------------------
  return (
    <Container>
      <div className="header">
        <h2>my-notes</h2>
        <ModalButton openModal={openModal} show='desktop' />
      </div>
      <h2 className="my__notes__mobile">my-notes</h2>

      <NoteList className="note__list" background={darkMode ? "#333" : "white"}>
        <div className="note">
          <div className="icon">
            <BsFolder2 />
          </div>
          <Link to="/Notes">All notes ({note.length})</Link>
        </div>

        <div className="note">
          <div className="icon">
            <BsFolder2 />
          </div>
          <Link to="/educational">Educational ({educational.length})</Link>
        </div>

        <div className="note">
          <div className="icon">
            <BsFolder2 />
          </div>
          <Link to="fun">Fun ({fun.length})</Link>
        </div>

        <div className="note">
          <div className="icon">
            <BsFolder2 />
          </div>
          <Link to="/shopping">Shopping ({shopping.length})</Link>
        </div>
      </NoteList>
    </Container>
  );
}

export default Routing;
const Container = styled.section`
  padding: 5%;
  width: 100%;
  height: auto;
  .my__notes__mobile {
    @media (max-width: 768px) {
      font-family: var(--main-font);
      display: block;
      margin-left: 10%;
      font-size: 1.7rem;
    }
    display: none;
  }
  .header {
    @media (max-width: 768px) {
      display: none;
    }
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-family: var(--main-font);
    font-size: 1.7rem;
  }
`;

const NoteList = styled.div`
  width: 100%;
  height: auto;
  padding: 5%;
  margin-top: 5%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 12px;
  background: ${(props) => props.background};
  .note {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3%;
    gap: 2%;
    p {
      border-bottom: 1px solid lightgrey;
      width: 90%;
      font-weight: 500;
    }
    a {
      color: var(--secondary-color);
      text-decoration: none;
      border-bottom: 1px solid lightgrey;
      width: 90%;
      font-weight: 500;
    }
    .icon {
      font-size: 1.5rem;
      color: var(--secondary-color);
    }
  }
`;
