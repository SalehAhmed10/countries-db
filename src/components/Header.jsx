import React from 'react'
import { Container } from 'react-bootstrap'
import './styles/header.css'
import Logo from "../assets/logo.gif"
import github from '../assets/github.png'

const Header = () => {
  return (
    <div>
      <div className='top-header'> 
              <a href="https://github.com/SalehAhmed10/countries-db" target="_blank">
                <img src={github} alt="logo" className='logo'/>   
              </a>
        </div>
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