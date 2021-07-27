import { actorPeliculasDTO } from '../../models/Actor.model';
import { generoDTO } from '../../models/Genero.model'
import FormularioPeliculas from './FormularioPeliculas'

const EditarPeliculas = () => {
    const generosNoSeleccionados: generoDTO[] = [{ id: 2, nombre: 'drama' }];

    const generosSeleccionados: generoDTO[] = [{ id: 1, nombre: 'accion' },
    { id: 3, nombre: 'comedia' }]

    const cinesSeleccionados: generoDTO[] = [{ id: 1, nombre: 'Sambil' }]
    const cinesNoSeleccionados: generoDTO[] = [{ id: 2, nombre: 'Agora' }]

    const actoresSeleccionados: actorPeliculasDTO[] = [
        {
            id: 1, nombre: 'pedro',
            personaje: 'aquaman',
            foto: 'https://www.imdb.com/title/tt1321865/mediaviewer/rm3119320320/?ref_=tt_ov_i'
        },
        {
            id: 2,
            nombre: 'Peter',
            personaje: 'spiderman',
            foto: 'https://m.media-amazon.com/images/M/MV5BMTgyNDk3OTI2NF5BMl5BanBnXkFtZTcwMDA4NjU5OA@@._V1_UY317_CR0,0,214,317_AL_.jpg'
        }
    ]
    return (
        <div>
            <h1>Editar Peliculas</h1>
            <FormularioPeliculas
                generoNoSeleccionado={generosNoSeleccionados}
                generoSeleccionado={generosSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                actoresSeleccionados={actoresSeleccionados}
                model={{ titulo: 'spiderman', enCine: true, trailer: 'url', fechaLanzamiento: new Date('2019-01-01T00:00:00') }}
                onSubmint={valores => console.log(valores)}

            />
        </div>
    )
}

export default EditarPeliculas
