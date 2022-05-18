import React from 'react'
import { Container } from 'react-bootstrap'
import './styles/header.css'
import Logo from "../assets/logo.gif"

const Header = () => {
  return (
    <div>

        <header className='header-main'>
            <Container>
              <div className='identity'> 

              <img src={Logo} alt="" />

              <h3 style={{fontFamily: 'monospace'}}>Countries-db</h3>
              </div>

            </Container>
  
        </header>

    </div>
  )
}

export default Header