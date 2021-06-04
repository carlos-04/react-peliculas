import { Form, Formik, FormikHelpers } from 'formik'
import { cinesCreacionDTO } from '../../models/Cines.model'
import * as Yup from 'yup';
import FormGroupText from '../utils/FormGroupText';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
interface formularioCinesProps {

    model: cinesCreacionDTO;
    onSubmit(valores: cinesCreacionDTO, accion: FormikHelpers<cinesCreacionDTO>) : void;
}

const FormularioCines = (props: formularioCinesProps) => {
    return (
        <>
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
                  
            validationSchema={
                Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText  campo="nombre" label="Nombre" />
                    <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                </Form>
            )}

        </Formik>
        </>
    )
}
export default FormularioCines
