import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { generoDTO } from '../../models/Genero.model';
import { urlGeneros } from '../../services/endpoint';

const IndiceGeneros = () => {

useEffect(() => {
axios.get(urlGeneros)
     .then((respuesta : AxiosResponse<generoDTO[]>) => {
            console.log(respuesta.data)
     })
}, [])

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
