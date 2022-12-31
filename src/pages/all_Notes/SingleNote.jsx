import moment from "moment";
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
      <span>{moment().startOf(item.date).fromNow()}</span>
      <p>{item.desc}</p>
      <BiEdit className='edit'/>
    </Container>
  );
}

export default SingleNote;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
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
  span{
    margin-bottom: 5%;
    font-size:.7rem;
    color: var(--secondary-color);
  }
  .edit{
    position: absolute;
    top: 2%;
    right: 2%;
    font-size: 2rem;
    color: var(--secondary-color);
  }
`;
