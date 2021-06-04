import FormularioCines from './FormularioCines';

const CrearCines = () => {
    return (
        <div>
            <h1>Crear Cines</h1>
             <FormularioCines model={{nombre: '' }}
                             onSubmit={valores => console.log(valores)}/>
        </div>
    )
}

export default CrearCines
