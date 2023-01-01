import React from "react";
import styled from "styled-components";
function Header({ darkMode }) {
  return (
    <Container>
      <h2>Folders</h2>
    </Container>
  );
}

export default Header;

const Container = styled.header`
@media (max-width: 768px) {
  margin: 0;
  padding: 5%;
  border: none;
}
  margin: 0% 5%;
  padding-top: 5%;
  border-bottom: 1px solid grey;
  h2 {
    font-weight: 800;
    font-family: var(--main-font);
    font-size: 2rem;
  }
`;
