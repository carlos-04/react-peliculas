import FormularioGeneros from "./FormularioGeneros";

const CrearGenero = () => {
    // const history = useHistory();
    return (
        <>
            <h1>Crear Genero</h1>
            <FormularioGeneros model={{ nombre: '' }} onSubmit={ valores => {
                console.log(valores)
            }} />
        </>
    )
}

export default CrearGenero
