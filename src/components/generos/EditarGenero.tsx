import React from 'react';
// import { useParams } from 'react-router'
import FormularioGeneros from './FormularioGeneros';

const EditarGenero = () => {
    //me captura el error de la ruta
    // const {id} : any  = useParams();
    return (
        <div>
            <h1>Editar Genero</h1>   
            {/* <h4>el id es: {id}</h4> */}
            <FormularioGeneros model={{ nombre: 'Acciones' }} onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 1000));
                console.log(valores)
            }} />
        </div>
    )
}

export default EditarGenero
