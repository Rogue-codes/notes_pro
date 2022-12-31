import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsFolder2 } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import moment from "moment";
import { deleteNote } from "../../features/slice";
function Notes({ darkMode, routing }) {
  const note = useSelector((state) => state.Note.notes);

  // handle delete
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(deleteNote(item));
  };

  return (
    <Container>
      <Link to="/" className="back">
        <BiArrowBack />
        <p>back</p>
      </Link>
      <header>
        <h2>All Notes</h2>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className={darkMode ? "input dark" : "input"}
        />
      </header>
      <Wrapper>
        {note.map((item, i) => (
          <div className="card" key={item.id}>
            <Link to="/noteDetails" onClick={() => routing(item)}>
              {item.title}
            </Link>
            <span className="date">{moment().startOf(item.date).fromNow()}</span>
            <div className="category">
              <BsFolder2 size="2rem" />
              <p>{item.category}</p>
            </div>
            <div className="delete" onClick={() => handleDelete(item)}>
              <MdDelete size="1.3rem" />
            </div>
          </div>
        ))}
      </Wrapper>
      <div className="count">
        <p>{note.length} Notes</p>
      </div>
    </Container>
  );
}

export default Notes;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
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
    .dark {
      background: #333;
    }
  }
  .count {
    width: 100%;
    height: 10vh;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #33333388;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(104px);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
const Wrapper = styled.section`
  width: 100%;
  min-height: 60vh;
  background: #333;
  border-radius: 12px;
  margin-bottom: 15%;
  padding-bottom: 5%;
  .card {
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding: 2% 5%;
    position: relative;
    a {
      font-size: 1rem;
      color: var(--text-color);
      display: block;
    }
    .date {
      font-size: 0.7rem;
      color: grey;
    }
    .category {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2%;
      font-size: 1.4rem;
      color: grey;
      p {
        font-size: 1rem;
      }
    }
    .delete {
      position: absolute;
      right: 5%;
      top: 50%;
      color: red;
    }
  }
`;
