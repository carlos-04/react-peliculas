import { Field, Form, Formik } from "formik"
// import React from "react"
import { generoDTO } from "../../models/Genero.model"
import Button from "../utils/Button"

const FiltroPeliculas = () => {
    
    const valorInicial = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }
    const generos: generoDTO[] = [{ id: 1, nombre: 'Comedia' },
    { id: 2, nombre: 'Drama' }]
    return (
        <>
            <h1>filtro de peliculas</h1>
            <Formik initialValues={valorInicial}
                onSubmit={valores => console.log(valores)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Titulo</label>
                                <input type="text"
                                    className="form-control"
                                    id="titulo"
                                    placeholder="titulo de la pelicula"
                                    //este getfieldProps me ayuda a cambiar en onChage
                                    //es decir, actualiza los datos al momento que escribo en el input 
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}>
                                    <option value="0">--Seleccione un Género--</option>
                                    {generos.map(genero => <option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input"
                                    type="checkbox"
                                    id="proximoEstreno"
                                    name="proximoEstreno"
                                />
                                <label className="form-check-label"
                                    htmlFor="proximosEstrenos">
                                    Proximo estreno
                                       </label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input"
                                    type="checkbox"
                                    id="enCines"
                                    name="enCines"
                                />
                                <label className="form-check-label"
                                    htmlFor="enCines">
                                    En cines
                                       </label>
                            </div>
                            <Button className="btn btn-primary mx-sm-3 mb-2" onClick={() => formikProps.submitForm()}> {/*formikProps.submitForm() es una forma de hacer submit utilizando los props de formik */}
                                Filtrar
                            </Button>
                            <Button className="btn btn-danger mb-2"
                                onClick={() => formikProps.setValues(valorInicial)}>
                                Limpiar
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FiltroPeliculas
