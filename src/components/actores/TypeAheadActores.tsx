import { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"
import { ReactElement } from "react-markdown"
import { actorPeliculasDTO } from "../../models/Actor.model"
interface propsTypeAheadActores {
    actores: actorPeliculasDTO[];
    onAdd(actores: actorPeliculasDTO[]): void;
    listadoUI(actor: actorPeliculasDTO): ReactElement;
    onRemove(actor: actorPeliculasDTO): void;
}
const TypeAheadActores = (props: propsTypeAheadActores) => {
    const actores: actorPeliculasDTO[] = [
        { id: 1, nombre: 'Carlos', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY317_CR9,0,214,317_AL_.jpg' },
        { id: 2, nombre: 'Pedro', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BNzA1ZmRkOWItNWNhNS00YmFiLWE0YjQtMjU5MThjMzRmMmYxXkEyXkFqcGdeQXVyMTUyNjc4NzM@._V1_UY317_CR10,0,214,317_AL_.jpg' },
        { id: 3, nombre: 'Roberto', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMDg3MjNiNGEtMmIyZC00YjMyLWI2ODQtN2QwYmZmM2I2Y2MwXkEyXkFqcGdeQXVyOTAzNDE2OQ@@._V1_UX214_CR0,0,214,317_AL_.jpg' }
    ]
    const seleccion: actorPeliculasDTO[] = [];
    const [elementoArrastrado, setelementoArrastrado] =
        useState<actorPeliculasDTO | undefined>(undefined)

    const manejarDragStart = (actor: actorPeliculasDTO) => {
        setelementoArrastrado(actor);
    }

    //esta funcion me permite cambiar de posicion mi arreglo de actores
    const manejarDragOver = (actor: actorPeliculasDTO) => {

        if (!elementoArrastrado) {
            return;
        }

        if (actor.id !== elementoArrastrado.id) {

            const elementoArrastradoIndice =
                props.actores.findIndex(x => x.id === elementoArrastrado.id);

            const actorIndice =
                props.actores.findIndex(x => x.id === actor.id);

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores)

        }
    }

    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {
                    if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                        props.onAdd([...props.actores, actores[0]]);
                    }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del autor"
                minLength={1}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.foto} alt="imagen del actor"
                            style={{
                                height: '64px',
                                width: '64px',
                                marginRight: '10px'
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />
            <ul className="list-group">
                {props.actores.map(actor =>
                    <li key={actor.id} className="list-group-item list-group-item-action"
                        draggable={true}
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                    >
                        {props.listadoUI(actor)}

                        <span className="badge badge-primary badge-pill pointer"
                            style={{
                                marginLeft: '0.5rem',
                            }}
                            onClick={() => {
                                props.onRemove(actor)
                            }}>
                            X
                        </span>
                    </li>)}
            </ul>
        </>
    )
}

export default TypeAheadActores
