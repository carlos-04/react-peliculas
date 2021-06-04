import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react"

interface FormGroupImageProps {
    campos: string;
    label: string;
    imgUrl?: string;
}
const FormGroupImagen = (props: FormGroupImageProps) => {
    //hook
    const divStyle = { marginTop: '10px' };
    const divStyleimg = { width: '425px' };

    const [imagenBase64, setImagenBase64] = useState('');

    const [imagenURL, setImagenURL] = useState(props.imgUrl);

    const { values } = useFormikContext<any>();
    //manejar imagenes
    const manejarOnchages = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then((representacionBase64: string) => setImagenBase64(representacionBase64))
                .catch(error => console.log(error));
            values[props.campos] = archivo;
            setImagenURL('');
        }
    }
    //base64
    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, rejects) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => rejects(error);
        })
    }
    return (
        <div className="form-group">
            <label htmlFor={props.label}></label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={manejarOnchages} />
            </div>
            {imagenBase64 ?
                <div>
                    <div style={divStyle}>
                        <img style={divStyleimg} src={imagenBase64} alt="imagen seleccionada" />
                    </div>
                </div> : null
            }
            {props.imgUrl ?
                <div>
                    <div style={divStyle}>
                        <img style={divStyleimg} src={props.imgUrl} alt="imagen seleccionada" />
                    </div>
                </div> : null
            }
        </div>
    )
}

FormGroupImagen.defaultProps = {
  imagenUrl: ''

}

export default FormGroupImagen
