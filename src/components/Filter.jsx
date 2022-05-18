import React from 'react'
import './styles/filter.css'
import {Row , Col , Container , Form} from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'

const Filter = () => {
  return (
    <section className='container'>


            <Row className="g-3">
            <Col lg={9} xs={7}>
                <FloatingLabel controlId="floatingInputGrid" label="Search Any Country">
                <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </Col>

            <Col lg={3} xs={5}>
                <FloatingLabel controlId="floatingSelectGrid" label="Regions">
                <Form.Select aria-label="Floating label select example">
                    <option>Select Region</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </FloatingLabel>
            </Col>
            </Row>

    </section>
  )
}

export default Filter
{/* <div className="select">
    <Form.Select aria-label="Default select example">
    <option>Open this select menu</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Oceania">Oceania</option>
    </Form.Select>
</div> */}