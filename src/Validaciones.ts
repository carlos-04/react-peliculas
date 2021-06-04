import * as Yup from 'yup';
//la primera letra ebe ser mayuscula
 const ConfigurarValidaciones = () => {
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', 
    function() {
        return this.test('primeraLetraMayuscula', 'la primera letra debe ser mayuscula',
        (valor) => {
           if(valor && valor.length > 0) {
               const primeraLetra = valor.substring(0, 1);
               return primeraLetra === primeraLetra.toUpperCase();
           }
           return true; 
        })
    }) 
}

export default ConfigurarValidaciones


