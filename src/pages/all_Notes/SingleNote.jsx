import moment from "moment";
import React, { Fragment, useState } from "react";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { editNote, getNote } from "../../features/slice";

function SingleNote({ darkMode }) {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const currNote = useSelector((state) => state.Note.note);

  const [inputVal, setInputVal] = useState({
    title: currNote.title,
    desc: currNote.desc,
    category: currNote.category,
  });

  console.log(currNote);

  // handle inputs
  const { title, desc, category } = inputVal;
  const payload = { ...inputVal, id: currNote.id };
  console.log(payload);

  const dispatch = useDispatch();
  // update note
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editNote(payload));
    dispatch(getNote(payload.id));
    setEdit(false);
  }

  return (
    <Container>
      <BiEdit
        className={edit ? "edit close" : "edit"}
        onClick={() => setEdit(!edit)}
      />
      <AiOutlineClose
        className={edit ? "edit" : "edit close"}
        onClick={() => setEdit(!edit)}
      />
      {edit ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="title">
            <input
              type="text"
              name=""
              placeholder="Title"
              value={title}
              onChange={(e) =>
                setInputVal({ ...inputVal, title: e.target.value })
              }
              id=""
              className={darkMode ? "input dark" : "input"}
            />
          </div>
          <div className="description">
            <textarea
              name=""
              id=""
              value={desc}
              onChange={(e) =>
                setInputVal({ ...inputVal, desc: e.target.value })
              }
              cols="30"
              rows="10"
              placeholder="Enter Text"
              className={darkMode ? "text__area dark" : "text__area"}
            ></textarea>
          </div>
          <div className="category">
            <select
              name=""
              id=""
              value={category}
              onChange={(e) =>
                setInputVal({ ...inputVal, category: e.target.value })
              }
              className={darkMode ? "select dark" : "select"}
            >
              <option value="educational">Educational</option>
              <option value="fun">Fun</option>
              <option value="shopping">Shopping</option>
            </select>
          </div>
          <div className="form__action">
            <button type="submit" className="submit">
              Update
            </button>
            <button className="cancel" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <Fragment>
          <div to="/Notes" className="back" onClick={() => navigate(-1)}>
            <BiArrowBack />
            <p>back</p>
          </div>
          <h2 className={darkMode ? "title dark" : "title"}>
            {currNote.title}
          </h2>
          <span>{moment().startOf(currNote.date).fromNow()}</span>
          <p className={darkMode ? "desc dark" : "desc"}>{currNote.desc}</p>
        </Fragment>
      )}
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
    cursor: pointer;
  }
  .title {
    font-size: 2rem;
    color: black;
    font-weight: 800;
  }
  .desc {
    color: black;
    line-height: 30px;
  }
  span {
    margin-bottom: 5%;
    font-size: 0.7rem;
    color: var(--secondary-color);
  }
  .edit {
    @media (max-width: 768px) {
      top: 2%;
      right: 2%;
    }
    position: absolute;
    font-size: 2rem;
    color: var(--secondary-color);
    cursor: pointer;
    top: 12%;
    right: 6%;
  }
  .close {
    display: none;
  }
  .dark {
    color: white;
  }
  .edit__form {
    width: 100%;
    height: 100vh;
    border: 5px solid #b70202;
  }
  form {
    width: 100%;
    height: 100%;
    background: #333;
    padding: 5%;
    border-radius: 12px;
    .title {
      margin: 5%;
      .input {
        width: 100%;
        height: 6vh;
        padding: 2% 5%;
        border-radius: 5px;
        border: none;
        background: lightgrey;
        &:focus {
          outline: none;
        }
      }
      .dark {
        background: #000;
        color: var(--secondary-color);
        ::placeholder {
          color: var(--secondary-color);
        }
      }
    }
    .description {
      margin: 5%;
      .text__area {
        width: 100%;
        border-radius: 5px;
        padding: 2% 5%;
        border: none;
        background: lightgrey;
        &:focus {
          outline: none;
        }
      }
      .dark {
        background: #000;
        color: var(--secondary-color);
        ::placeholder {
          color: var(--secondary-color);
        }
      }
    }
    .category {
      margin: 5%;
      .select {
        @media (max-width: 768px) {
          height: 6vh;
        }
        width: 100%;
        height: 10vh;
        border-radius: 5px;
        padding: 2% 5%;
        border: none;
        background: lightgrey;
        &:focus {
          outline: none;
        }
      }
      .dark {
        background: #000;
        color: var(--secondary-color);
        ::placeholder {
          color: var(--secondary-color);
        }
      }
    }
    .form__action {
      @media (max-width: 768px) {
        margin: 15% 5%;
      }
      margin: 5% 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;
      .submit {
        @media (max-width: 768px) {
          height: 5vh;
        }
        width: 40%;
        cursor: pointer;
        height: 8vh;
        font-size: 1rem;
        border-radius: 12px;
        border: none;
        background: #0080ff;
        color: white;
      }
      .cancel {
        @media (max-width: 768px) {
          height: 5vh;
        }
        width: 40%;
        cursor: pointer;
        height: 8vh;
        font-size: 1rem;
        border-radius: 12px;
        border: none;
        background: #ff2600;
        color: white;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      .title {
        margin: 5%;
        .input {
          width: 100%;
          height: 6vh;
          padding: 2% 5%;
          border-radius: 5px;
          border: none;
          background: lightgrey;
          &:focus {
            outline: none;
          }
        }
        .dark {
          background: #000;
          color: var(--secondary-color);
          ::placeholder {
            color: var(--secondary-color);
          }
        }
      }
      .description {
        margin: 5%;
        .text__area {
          width: 100%;
          border-radius: 5px;
          padding: 2% 5%;
          border: none;
          background: lightgrey;
          &:focus {
            outline: none;
          }
        }
        .dark {
          background: #000;
          color: var(--secondary-color);
          ::placeholder {
            color: var(--secondary-color);
          }
        }
      }
      .category {
        margin: 5%;
        .select {
          width: 100%;
          height: 6vh;
          border-radius: 5px;
          padding: 2% 5%;
          border: none;
          background: lightgrey;
          &:focus {
            outline: none;
          }
        }
        .dark {
          background: #000;
          color: var(--secondary-color);
          ::placeholder {
            color: var(--secondary-color);
          }
        }
      }
      .form__action {
        margin: 15% 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        .submit {
          width: 40%;
          height: 5vh;
          font-size: 1rem;
          border-radius: 12px;
          border: none;
          background: #0080ff;
          color: white;
        }
        .cancel {
          width: 40%;
          height: 5vh;
          font-size: 1rem;
          border-radius: 12px;
          border: none;
          background: #ff2600;
          color: white;
        }
      }
    }
  }
`;
