import { peliculas } from "../../models/Pelicula.model";
import css from './PeliculaIndividual.module.css'

interface PeliculasIndividualProps {
    pelicula: peliculas;
}


const PeliculaIndividual = (props:  PeliculasIndividualProps) => {

    const construirLink = () => `/peliculas/${props.pelicula.id}`;
    return (
        <div className={css.div}>
            <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="poster" />
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
        </div>

    )
}


export default PeliculaIndividual;