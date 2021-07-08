// import { uriTransformer } from "react-markdown"
import './selectorMultiple.css';

export interface seleccionMultipleModel {
    llave: number;
    valor: string;
}
interface selectorMultipleProps {
    seleccionado: seleccionMultipleModel[];
    noSeleccionado: seleccionMultipleModel[];
    onChange(seleccionado: seleccionMultipleModel[],
        noSeleccionado: seleccionMultipleModel[]): void
}

const SeleccionMultiple = (props: selectorMultipleProps) => {
    /**Funcion para pasar los valores  */
 const seleccionar = (item: seleccionMultipleModel) => {
    const seleccionados = [...props.seleccionado, item];
    const  noSeleccionado = [...props.noSeleccionado.filter(valor => valor !== item)]
    props.onChange(seleccionados, noSeleccionado)
 }
 /**Funcion de deseleccionar */
 const deseleccionar = (item: seleccionMultipleModel) => {
    const  noSeleccionado = [...props.seleccionado.filter(valor => valor !== item)]
    const seleccionados = [...props.noSeleccionado, item];
    props.onChange(seleccionados, noSeleccionado)
 }

 /**Funcion de seleccionar todo */
 const seleccionarTodo = () => {

    const seleccionados = [...props.seleccionado, ...props.noSeleccionado];
    const noSeleccionado: seleccionMultipleModel[] = [];
    props.onChange(seleccionados, noSeleccionado)
 }

 /**Funcion de deseleccionar todo */
 const deSeleccionarTodo = () => {
    const noSeleccionado = [...props.noSeleccionado, ...props.seleccionado];
    const seleccionados: seleccionMultipleModel[] = [];
    props.onChange(noSeleccionado, seleccionados)
 }
    return (
        <div className="selector-multiples">
            <ul>
                {props.noSeleccionado.map(item => {

                    <li key={item.llave} onClick={() => seleccionar(item)}>{item.valor}</li>
                })}
            </ul>
            <div className="selector-multiple-botones">
                <button type="button" onClick={() => seleccionarTodo}>{'>>'}</button>
                <button type="button" onClick={() => deSeleccionarTodo}>{'<<'}</button>
            </div>
            <ul>
                {props.seleccionado.map(item => {
                    <li key={item.llave} onClick={() =>deseleccionar(item)}>{item.valor}</li>
                })}
            </ul>
        </div>
    )
}

export default SeleccionMultiple
