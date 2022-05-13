import React from 'react'
import {NavLink} from 'react-router-dom'


function Filter() {
  return (
    <div>
        <NavLink to={'/region/Asia'}>
            <h4>Asia</h4>
        </NavLink>

        <NavLink to={'/region/Americas'}>
            <h4>Americas</h4>
        </NavLink>

        <NavLink to={'/region/Africa'}>
            <h4>Africa</h4>
        </NavLink>

        <NavLink to={'/region/Europe'}>
            <h4>Europe</h4>
        </NavLink>

        <NavLink to={'/region/Oceania'}>
            <h4>Oceania</h4>
        </NavLink>



    </div>
  )
}

export default Filter