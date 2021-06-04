import FormularioGeneros from "./FormularioGeneros";

const CrearGenero = () => {
    // const history = useHistory();
    return (
        <>
            <h1>Crear Genero</h1>
            <FormularioGeneros model={{ nombre: '' }} onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 3000));
                console.log(valores)
            }} />
        </>
    )
}

export default CrearGenero
