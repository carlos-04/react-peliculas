import React from 'react'
import { NavLink } from 'react-router-dom'

const IndiceActores = () => {
    return (
        <div>
        <h1>Indice Actores</h1> 
        <NavLink to="actores/crear">
           Crear Actores
        </NavLink>           
   </div>
    )
}

export default IndiceActores
