import React from "react";
import styled from "styled-components";
function Header({ darkMode }) {
  return (
    <Container>
      <h2>Folders</h2>
      <form action="">
        <input type="search" name="" placeholder="Search" id="" className={darkMode ? "input dark" : "input"} />
      </form>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  padding: 5%;
  h2 {
    font-weight: 800;
    font-family: var(--main-font);
    font-size: 2rem;
    margin-bottom: 2%;
  }
  form {
    .input {
      width: 100%;
      height: 5vh;
      background: lightgrey;
      border-radius: 12px;
      border: none;
      padding: 2%;
      &::placeholder {
        color: var(--secondary-color);
        font-size:1rem;
      }
    }
    .dark{
        background: #333;
    }
  }
`;
