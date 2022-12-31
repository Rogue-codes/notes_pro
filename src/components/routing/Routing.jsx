import React from "react";
import styled from "styled-components";
import {BsFolder2} from 'react-icons/bs'
function Routing({darkMode}) {
    console.log(darkMode)
  return (
    <Container>
      <h2>my-notes</h2>
      <NoteList className="note__list" background={darkMode ? "#333" : 'white'}>
        <div className="note">
            <div className="icon">
                <BsFolder2/>
            </div>
            <p>All notes</p>
        </div>

        <div className="note">
            <div className="icon">
                <BsFolder2/>
            </div>
            <p>Educational</p>
        </div>

        <div className="note">
            <div className="icon">
                <BsFolder2/>
            </div>
            <p>Fun</p>
        </div>

        <div className="note">
            <div className="icon">
                <BsFolder2/>
            </div>
            <p>Groceries</p>
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
  h2 {
    font-family: var(--main-font);
    @media (max-width: 768px) {
      margin-left: 10%;
      font-size: 1.7rem;
    }
  }
`;

const NoteList = styled.div`
    width: 100%;
    height: auto;
    padding: 5%;
    margin-top: 5%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 12px;
    background: ${props => props.background};
    .note{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 3%;
        gap: 2%;
        p{
            border-bottom: 1px solid lightgrey;
            width: 90%;
            font-weight: 500;
        }
        .icon{
            font-size: 1.5rem;
            color: var(--secondary-color);
        }
  } 
`