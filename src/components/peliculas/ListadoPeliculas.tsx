import { peliculas } from '../../models/Pelicula.model'
import PeliculaIndividual from './PeliculaIndividual'
import css from './ListadoPeliculas.module.css'
import ListadoGenerico from '../utils/ListadoGenerico'

interface listadoPeliculasProps {
    pelicula?: peliculas[];
}

const ListadoPeliculas = (props: listadoPeliculasProps) => {
    return (
        <ListadoGenerico listado={props.pelicula}>
        <div className={css.div}>
            {props.pelicula?.map(pelicula =>
                <PeliculaIndividual pelicula={pelicula}
                    key={pelicula.id}
                />)}
        </div>
        </ListadoGenerico>
    )
}

export default ListadoPeliculas
