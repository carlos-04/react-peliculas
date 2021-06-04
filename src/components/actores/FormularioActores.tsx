import { Form, Formik, FormikHelpers } from "formik"
import { ActorCreacionDTO } from "../../models/Actor.model"
import *  as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkDown from "../utils/FormGroupMarkDown";

interface formularioActoresProps {
    model: ActorCreacionDTO;
    onSubmit(valores: ActorCreacionDTO, Acciones: FormikHelpers<ActorCreacionDTO>): void
}

const FormularioActores = (props: formularioActoresProps) => {
    return (
        <>
            <Formik initialValues={props.model}
                onSubmit={props.onSubmit}

                validationSchema={
                    Yup.object({
                        nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()

                    })
                }
            >
                {(formikProps) => (
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre" />
                        <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
                        <FormGroupImagen campos="foto" label="foto"  imgUrl ={props.model.fotoUrl} />
                        <FormGroupMarkDown campo="biografia" label="biografia"/>
                        <Button type="submit"
                            disabled={formikProps.isSubmitting}>
                            Salvar
                        </Button>
                        <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormularioActores
