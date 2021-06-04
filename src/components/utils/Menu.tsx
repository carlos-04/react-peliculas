import { NavLink } from "react-router-dom";
const Menu = () => {
    // const activeClass = "active";
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/" activeClassName="active">React Peliculas</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genero" activeClassName="active">Genero</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/filtrar" activeClassName="active">Filtrar Peliculas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/actores" activeClassName="active">Actores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cines" activeClassName="active">Cines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/peliculas/crear" activeClassName="active">Crear Peliculas</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu
