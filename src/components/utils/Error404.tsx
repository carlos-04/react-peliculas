import { Redirect } from 'react-router'
// import Button from './Button'

const Error404 = () => {
    // const history = useHistory();
    return (
        <div>
            <Redirect to={{ pathname: '/' }} />
            {/* <img src="https://www.hostingplus.cl/wp-content/uploads/2020/12/error404quees.jpg" alt="404" />
            <Button onClick={() => history.push('/')}>Regresar al inicio</Button>  */}
        </div>
    )
}

export default Error404
