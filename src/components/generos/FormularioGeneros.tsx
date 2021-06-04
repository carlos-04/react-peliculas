import { Formik, Form, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import FormGroupText from '../utils/FormGroupText'
import * as Yup from 'yup';
import { generoCreacionDTO } from '../../models/Genero.model';

interface formularioGenerosProps {
    model: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>) : void;
}
const FormularioGeneros = (props: formularioGenerosProps) => {
    return (
        <>
            <Formik initialValues={
                //asigna los valores iniciales
                 props.model
            }
                //evalua los valores que escriba en los input
                onSubmit={props.onSubmit}
                validationSchema={
                    Yup.object({
                    nombre: Yup.string().required('este campo es requerido').primeraLetraMayuscula(),
                })} 
            >
                {/**Utilizando las propiedades de formik */}
                {(formikProps) => (
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre" />
                        <div className="mb-3 mt-3">
                            <Button type="submit" disabled={formikProps.isSubmitting}>Salvar</Button>
                            <Link className="btn btn-secondary ml-2" to="/genero">Cancelar</Link>
                        </div>
                    </Form>
                )}
            </Formik>
            {/* <Button onClick={() => history.push('/genero')}>Crear</Button> */}
        </>
    )
}

export default FormularioGeneros
