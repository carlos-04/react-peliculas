import { generoDTO } from '../../models/Genero.model'
import FormularioPeliculas from './FormularioPeliculas'

const EditarPeliculas = () => {
    const generosNoSeleccionados: generoDTO[] = [{ id: 2, nombre: 'drama' }];


    const generosSeleccionados: generoDTO[] = [{ id: 1, nombre: 'accion' },
    { id: 3, nombre: 'comedia' }]

    return (
        <div>
            <h1>Editar Peliculas</h1>
            <FormularioPeliculas
                generoSeleccionados={generosSeleccionados}
                generoNoSeleccionados={generosNoSeleccionados}
                model={{ titulo: 'spiderman', enCine: true, trailer: 'url', fechaLanzamiento: new Date('2019-01-01T00:00:00') }}
                onSubmint={valores => console.log(valores)}

            />
        </div>
    )
}

export default EditarPeliculas
