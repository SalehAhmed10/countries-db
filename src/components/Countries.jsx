import React from 'react'
import { useState , useEffect } from 'react'
import {Container,  Card, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import './styles/countries.css'
import LoadingSpinner from './LoadingSpinner'

const url = 'https://restcountries.com/v2/all'


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const fetchCountryData = async () => {

        const response = await fetch(url) 
        const countries = await response.json()
        
        setCountries(countries)
        setIsLoading(false)
        console.log(countries)

    }

    useEffect(() => {

        fetchCountryData()

    }, [])


  return (
    <> 

    {isLoading ? (< LoadingSpinner />) : ( <Container >
    <Row className='wrapper'>
        
        {countries.map(country => {
            
            const {id , numericCode , name , capital: capital = 'N/A' , population , languages , region , flag} = country

        

            return(     


                        <Col lg={4} md={6} sm={12} key={numericCode} className="country-card g-5"> 
                        
                            <Card style={{ width: '20rem' }}> 
                                <div className='img-box'>
                                <Card.Img variant="top" src={flag}/>
                                </div>
                                <Card.Body>

                                    <Card.Title>{name}</Card.Title>

                                 
                                        <ul className='country-detail'> 
                                            
                                            <small> Capital  : {capital}</small> <br/>
                                        
                                            <small> Region  : {region}</small> 
                                            
                                        
                                        </ul>
                                  

                                </Card.Body>


                            </Card>
                        
                        </Col>


 
            )

        })}          

    </Row>

    </Container>)}
   
    </>
  )
}


const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
    

`

export default Countries