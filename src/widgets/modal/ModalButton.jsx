import React from 'react'
import styled from 'styled-components'
import {IoIosCreate} from 'react-icons/io'
function ModalButton({openModal}) {
  return (
    <Container onClick={openModal}>
        <IoIosCreate/>
    </Container>
  )
}

export default ModalButton

const Container = styled.div`
    font-size: 2.5rem;
    color: var(--secondary-color);
`