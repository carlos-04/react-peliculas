
import FormularioActores from "./FormularioActores"

const EditarActores = () => {
    return (
        <div>
            <h1>Editar Actores</h1>
            <FormularioActores model={{ nombre: 'Carlos Montero', fechaNacimiento: new Date('1999-06-01T00:00:00'), fotoUrl: "https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg" }}
                onSubmit={valores => console.log(valores)} />
        </div>
    )
}

export default EditarActores
