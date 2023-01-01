import moment from "moment";
import React from "react";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function SingleNote({ item, darkMode }) {
  const navigate = useNavigate();
  return (
    <Container>
      <div to="/Notes" className="back" onClick={()=>navigate(-1)}>
        <BiArrowBack />
        <p>back</p>
      </div>
      <h2 className={darkMode ? "title dark" : "title"}>{item.title}</h2>
      <span>{moment().startOf(item.date).fromNow()}</span>
      <p className={darkMode ? "desc dark" : "desc"}>{item.desc}</p>
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
  .title {
    font-size: 2rem;
    color: black;
    font-weight: 800;
  }
  .desc{
    color: black;
    line-height: 30px;
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
  .dark{
    color: white;
  }
`;
