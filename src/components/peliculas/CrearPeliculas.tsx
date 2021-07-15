import { generoDTO } from "../../models/Genero.model"
import FormularioPeliculas from "./FormularioPeliculas"

const CrearPeliculas = () => {

    const generos: generoDTO[] = [
        { id: 1, nombre: 'accion' },
        { id: 2, nombre: 'drama' },
        { id: 3, nombre: 'comedia' }]

    return (
        <div>
            <h1>Crear Peliculas</h1>
            <FormularioPeliculas model={{ titulo: '', enCine: false, trailer: '' }}
                onSubmint={valores => console.log(valores)}
                generoSeleccionado={generos}
                generoNoSeleccionado={[]}
            />
        </div>
    )
}

export default CrearPeliculas


