import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
// import { cinesDTO } from '../../models/Cines.model';
import { generoDTO } from '../../models/Genero.model';
import { peliculasCreacionDTO } from '../../models/Pelicula.model'
import Button from '../utils/Button';
import FormGroupCheckbox from '../utils/FormGroupCheckbox';
import FormGroupFecha from '../utils/FormGroupFecha';
import FormGroupImagen from '../utils/FormGroupImagen';
import FormGroupText from '../utils/FormGroupText';
import SeleccionMultiple, { seleccionMultipleModel } from '../utils/SeleccionMultiple';

interface formularioPeliculasProps {
    model: peliculasCreacionDTO;
    onSubmint(valores: peliculasCreacionDTO, acciones: FormikHelpers<peliculasCreacionDTO>): void
    generoSeleccionado: generoDTO[];
    generoNoSeleccionado: generoDTO[];
    // cinesSeleccionados: cinesDTO[];
    // cinesNoSeleccionados: cinesDTO[];
}
const FormularioPeliculas = (props: formularioPeliculasProps) => {
    //props de generos
    const [generoSeleccionados, setGeneroSeleccionados] = useState(mapearData(props.generoSeleccionado));
    const [generoNoSeleccionados, setGeneroNoseleccionado] = useState(mapearData(props.generoNoSeleccionado));
    //props de cines
    // const [cinesSeleccionados, setCinesSeleccionados] = useState(props.cinesSeleccionados);
    // const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(props.cinesNoSeleccionados);

    function mapearData(arreglo: { id: number, nombre: string }[]): seleccionMultipleModel[] {
        return arreglo.map(valor => {
            return { llave: valor.id, valor: valor.nombre }
        })
    }
    return (
        <Formik initialValues={props.model}
            onSubmit={(valores, acciones) => {
                valores.generosIds = generoSeleccionados.map(valor => valor.llave)
                props.onSubmint(valores, acciones)
            }}
            validationSchema={
                Yup.object({
                    titulo: Yup.string().required("Este campo es requerido").primeraLetraMayuscula()
                })
            }>
            {formikProps => (
                <Form>
                    <FormGroupText label="Titulo" campo="titulo" />
                    <FormGroupCheckbox label="En cines" campo="enCine" />
                    <FormGroupText label="trailer" campo="trailer" />
                    <FormGroupFecha campo="fechaLanzamiento" label="Fecha de Lanzamiento" />
                    <FormGroupImagen campos="poster" label="poster"
                        imagenUrl={props.model.posterURL} />
                        <div className="form-group">
                        <label htmlFor="generos">Generos</label>
                        <SeleccionMultiple seleccionado={generoSeleccionados}
                            noSeleccionado={generoNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setGeneroSeleccionados(seleccionados)
                                setGeneroNoseleccionado(noSeleccionados)
                            }} />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="generos">Cines</label>
                        <SeleccionMultiple seleccionado={cinesSeleccionados}
                            noSeleccionado={cinesNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setCinesSeleccionados(seleccionados)
                                setCinesNoSeleccionados(noSeleccionados)
                            }} />
                    </div> */}
                    <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                    <Link className="btn btn-danger ml-2" to="/">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}
export default FormularioPeliculas
 