
interface MostrarErrorCampoProps {
    mensaje: string;
}

const MostrarErrorCampo = (props: MostrarErrorCampoProps) => {
    return (
        <div>
            <div className="text-danger">
                {props.mensaje}
            </div>
        </div>
    )
}

export default MostrarErrorCampo
