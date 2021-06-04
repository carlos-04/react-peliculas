import { NavLink } from 'react-router-dom'

const IndiceCines = () => {
    return (
        <div>
        <h1>Indice Cines</h1> 
        <NavLink to="genero/crear">
           Crear Cines
        </NavLink>           
   </div>
    )
}

export default IndiceCines
