import FormularioActores from './FormularioActores'

const CrearActores = () => {
    return (
        <div>
            <h1>Crear Actores</h1>

            <FormularioActores  model={{nombre: '', fechaNacimiento: undefined}}
                                onSubmit={valores => console.log(valores)}/>
        </div>
    )
}

export default CrearActores
