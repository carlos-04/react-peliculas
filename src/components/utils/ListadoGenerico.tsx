
import React, { ReactElement } from 'react'
import Cargando from './Cargando';

interface ListadoGenericoProps {
    listado: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}

const ListadoGenerico = (props: ListadoGenericoProps) => {

    //si esta cargando
    if (!props.listado) {
        if (props.cargandoUI) {
            return props.cargandoUI;
        } return <Cargando />
    } 
      //si no hay peliculas para mostrar
    else if (props.listado.length === 0) {
        if(props.listadoVacioUI) {
           
            return props.listadoVacioUI;
        }
        return <>No hay elementos para mostrar</>
    }
  //si hay peliculas
    else {
        return props.children;
    }
}

export default ListadoGenerico
