import { Field } from "formik";


interface FormGroupCheckboxProps {
    label: string;
    campo: string;
}

const FormGroupCheckbox = (props:FormGroupCheckboxProps) => {
    return (
        <div className="form-group form-check">
                 <Field className="form-check-input" id={props.campo} name={props.campo} type="checkbox"/>
                 <label htmlFor={props.campo}>{props.label}</label>
        </div>
    )
}

export default FormGroupCheckbox
