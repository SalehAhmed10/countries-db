import React, { useEffect , useState} from 'react'
import './styles/country.css'
import { Container , Button, Row, Col} from 'react-bootstrap'
import { Link , useParams} from 'react-router-dom'
import { CgCornerUpLeft } from "react-icons/cg";


function Country() {

  const [country , setCountry ] = useState([])
  const {name}  = useParams()

  useEffect(() => {

    const fetchCountryData = async () => {

      const response = await fetch(`https://restcountries.com/v2/name/${name}`)

      const country = await response.json()
      setCountry(country)
      console.log(country)
    }

    fetchCountryData()

  }, [])


  return (
    <>
    
    <Container className='country-container'>

      <div className='country-header'>

        <Link to={"/"}> <Button variant='light' className='back_btn'> <CgCornerUpLeft/>  Back </Button> </Link>
  
        <hr/>

        {/* <h4 className='banner-head'> Country Data </h4> */}

        </div>

        <section className='country'> 
        
          {country.map((c) => {

            const {id , numericCode , name  , population , capital: capital = 'N/A'  , cioc:cioc = 'N/A', region , subregion ,languages ,  flag ,topLevelDomain , independent , callingCodes , currencies} = c

            return(
                <>
                <article key={numericCode} className='country-main'> 
                
                      <div className='country-header' > Brief Information of {name} <small> ({cioc })</small> </div>

                  <Row className='gx-3'>
                    <Col lg={4} sm={12} >

                      <img src={flag} alt={name}/>
                    
                    </Col>

                    <Col lg={8} sm={12}>

                      <Row className="country-info">

                        <Col lg={5} sm={12} >

                          <p> <span> Name: </span> {name} </p>
                        <p> <span> Capital: </span> {capital} </p>
                          
                          <p> <span> Region: </span> {region} </p>
                          <p> <span> Subregion: </span> {subregion} </p>
                        


                        </Col>  

                        
                        <Col lg={5} sm={12} >
                        
                          <p> <span> Population: </span> {population} person </p>
                        <p> <span> Top Level Domain: </span> {topLevelDomain} </p>
                        <p> <span> Languages: </span> {languages.map(lang => lang.name).join(', ')} </p>
                        <p> <span> Calling Codes: </span> {callingCodes?.join(', ')} </p>
                        <p> <span> Currencies: </span> {currencies?.map(curr => curr.name).join(', ')} </p>
                        


                    
                        </Col>  

                      </Row>
                      
                    
                    </Col>


                  </Row>

                  

           
                
                </article>
                
                </>

            )

          })}

        </section>
    
    </Container>
    </>
  )
}

export default Country