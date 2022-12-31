import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BsFolder2 } from "react-icons/bs";
import {BiArrowBack} from 'react-icons/bi'
import { Link } from "react-router-dom";
import moment from 'moment'
function Notes({darkMode}) {
  const note = useSelector((state) => state.Note.notes);
  console.log(note);
  return (
    <Container>
      <Link to='/' className="back">
        <BiArrowBack/>
        <p>back</p>
      </Link>
      <header>
        <h2>All Notes</h2>
        <input type="search" name="" id="" placeholder="Search" className={darkMode ? "input dark" : "input"} />
      </header>
      <Wrapper>
        {
          note.map((item,i)=>(
            <div className="card">
              <h2>{item.title}</h2>
              <span className="date">{moment(item.date).fromNow()}</span>
              <div className="category">
              <BsFolder2 size="2rem"/>
                <p>{item.category}</p>
                </div>
            </div>
          ))
        }
      </Wrapper>
    </Container>
  );
}

export default Notes;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 5%;
  .back{
    display: flex; 
    text-decoration: none;
    color: var(--secondary-color);
    justify-content: flex-start;
    align-items: center;
    gap: 2%;
    margin-bottom: 5%;
  }
  header {
    margin-bottom: 5%;
    height: auto;
    h2 {
      font-weight: 800;
      font-family: var(--main-font);
      font-size: 2rem;
      margin-bottom: 2%;
      color: var(--text-color);
    }
    .input {
      width: 100%;
      height: 5vh;
      background: lightgrey;
      border-radius: 12px;
      border: none;
      padding: 2%;
      &::placeholder {
        color: var(--secondary-color);
        font-size: 1rem;
      }
    }
    .dark{
        background: #333;
    }
  }
`;
const Wrapper = styled.section`
  width: 100%;
  min-height: 60vh;
  background: #333;
  .card{
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding: 2% 5%;
    h2{
      font-size: 1.5rem;
      color: var(--text-color);
    }
    .date{
      font-size: .7rem;
      color: grey;
    }
    .category{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2%;
      font-size: 1.4rem;
      color: grey;
      p{
        font-size: 1rem;
      }
    }
  }
`;
