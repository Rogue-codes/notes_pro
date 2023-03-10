import { motion } from "framer-motion";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import BackDrop from "./BackDrop";

function Modal({ handleClose, inputVal, setInputVal, darkMode, addNote }) {
  // variant for modal animation.
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  //   ----------------------------------------------------------------

  // handle inputs
  const { title, desc, category } = inputVal;
  //   close modal

  function handleSubmit(e) {
    e.preventDefault();
  }

  //   add note
  function handleNoteSubmit() {
    !title || !desc
      ? toast.error(
          " FAILED: please enter a Title and description for your note!!"
        )
      : addNote();
    handleClose();
  }
  return (
    <BackDrop handleClose={handleClose}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        bg={darkMode ? "#1a1919" : "#fff"}
      >
        <form action="" onSubmit={handleSubmit}>
          <div className="title">
            <input
              type="text"
              value={title}
              onChange={(e) =>
                setInputVal({ ...inputVal, title: e.target.value })
              }
              name=""
              placeholder="Title"
              id=""
              className={darkMode ? "input dark" : "input"}
            />
          </div>
          <div className="description">
            <textarea
              value={desc}
              onChange={(e) =>
                setInputVal({ ...inputVal, desc: e.target.value })
              }
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Text"
              className={darkMode ? "text__area dark" : "text__area"}
            ></textarea>
          </div>
          <div className="category">
            <select
              value={category}
              onChange={(e) =>
                setInputVal({ ...inputVal, category: e.target.value })
              }
              name=""
              id=""
              className={darkMode ? "select dark" : "select"}
            >
              <option value="">--- choose category ---</option>
              <option value="educational">Educational</option>
              <option value="fun">Fun</option>
              <option value="shopping">Shopping</option>
            </select>
          </div>
          <div className="form__action">
            <button className="submit" onClick={handleNoteSubmit}>
              Add
            </button>
            <button className="cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </ModalContainer>
    </BackDrop>
  );
}

export default Modal;

const ModalContainer = styled(motion.div)`
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    height: 70%;
    position: relative;
    padding-top: 5%;
  }
  /* padding-top: 5%; */
  width: 60%;
  height: 90%;
  background: ${(props) => props.bg};
  form {
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
        @media (max-width: 768px) {
          height: 6vh;
        }
        width: 100%;
        height: 8vh;
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
