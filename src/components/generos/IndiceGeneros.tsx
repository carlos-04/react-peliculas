import {NavLink} from 'react-router-dom';

const IndiceGeneros = () => {
    return (
        <div>
             <h1>Indice Genero</h1> 
             <NavLink to="genero/crear">
                Crear Genero
             </NavLink>           
        </div>
    )
}

export default IndiceGeneros
