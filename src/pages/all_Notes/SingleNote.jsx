import React from "react";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SingleNote({ item }) {
  return (
    <Container>
      <Link to="/Notes" className="back">
        <BiArrowBack />
        <p>back</p>
      </Link>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <BiEdit className='edit'/>
    </Container>
  );
}

export default SingleNote;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  border: 5px solid #e40d0d;
  color: white;
  padding: 5%;
  position: relative;
  .back {
    display: flex;
    text-decoration: none;
    color: var(--secondary-color);
    justify-content: flex-start;
    align-items: center;
    gap: 2%;
    margin-bottom: 5%;
  }
  h2 {
    color: white !important;
    font-size: 2rem;
  }
  .edit{
    position: absolute;
    top: 2%;
    right: 2%;
    font-size: 2rem;
    color: var(--secondary-color);
  }
`;
