import { ErrorMessage, Field } from "formik"
import React from "react"
import MostrarErrorCampo from './MostrarErrorCampo'


interface FormGroupTextProps {
    campo: string;
    label?: string;
    placeHolder?: string;

}
const FormGroupText = (props: FormGroupTextProps) => {
    return (
        <>
            <div className="form-group">
                {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
                <Field name={props.campo} className="form-control" />
                <ErrorMessage name={props.campo}>{mensaje =>
                    <MostrarErrorCampo mensaje={mensaje} />
                }
                </ErrorMessage>
            </div>
        </>
    )
}

export default FormGroupText
