import React from 'react'
import { useState , useEffect } from 'react'

import {Container ,    Card, Col, Row , Button} from 'react-bootstrap'
import styled from 'styled-components'
import './styles/countries.css'
import LoadingSpinner from './LoadingSpinner'
import { Link } from 'react-router-dom'






const Countries = () => {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('a')
    
    const fetchCountryData = async () => {

        const response = await fetch(`https://restcountries.com/v2/name/${search}`) 
        const countries = await response.json()
        
        setCountries(countries)
        setIsLoading(false)
        console.log(countries)

    }

    useEffect(() => {

        fetchCountryData()

    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
      }



  return (
    <> 
        <section className='container '>


<Row className="g-3">
<Col lg={12} xs={12} className="d-flex d-flex justify-content-center">
    <input type="text" onChange={handleChange} placeholder="Search Any Country" className='search main-search'/>
</Col>


</Row>

</section>
 <section className='main-body'>
    {isLoading ? (< LoadingSpinner />) : ( <Container >
    <Row className='wrapper'>
        
        {Array.isArray(countries) && countries.map(country => {
            
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
                                  
                                        <ul>

                                        <Link to={`/countries/${name}`}><Button variant="primary">  Learn More </Button></Link>
                                        </ul>

                                     
                                     
                                
                               
                                </Card.Body>


                            </Card>
                        
                        </Col>


 
            )

        })}          

    </Row>

    </Container>)}
    </section>
    </>
  )
}


const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
    

`

export default Countries