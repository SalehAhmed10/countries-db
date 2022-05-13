import React from 'react'
import { Spinner } from 'react-bootstrap'
import '../pages/styles/loadingspinner.css'

export default function LoadingSpinner() {
  return (
    <div className='spinner-main'>

{/* <Spinner animation="border" /> */}

<Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
 
  <Spinner animation="grow" variant="dark" />

    </div>
  )
}
