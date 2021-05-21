import React, { ReactElement } from 'react'
//el errorboundary se utiliza para lo siguiente:
//si en un componente hay un error este lo detecta y evita que toda la app explote
interface errorBounderyState {

    hayError: boolean;
    mensaje: string;
}

interface errorBounderyProps {
    errorUI?: ReactElement;

}
//tipo de datos de los props y tipo de datos de los estados
export default class ErrorBoundery extends React.Component<errorBounderyProps, errorBounderyState> {
    constructor(props: errorBounderyProps) {
        super(props);
        this.state = {hayError: false, mensaje: "" }
    }

    //esta es la funcion que se va a ejecutar si hay un error en el componente
    componentDidCatch(error: any, errorInfo: any) {
        console.log(error);
        console.log(errorInfo);
    }

  //
    static getDerivedStateFromError(error: any) {
         console.log(error);
         return {hayError: true, mensaje: error}
    }
    //render
    render() {
        if (this.state.hayError) {
            /********************** */
            if (this.props.errorUI) {
                return this.props.errorUI;

            } else {
                return <h3>{this.state.mensaje}</h3>
            }
        }

        return this.props.children;
    }

}

