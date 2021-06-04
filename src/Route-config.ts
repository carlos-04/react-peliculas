import CrearActores from "./components/actores/CrearActores";
import EditarActores from "./components/actores/EditarActores";
import IndiceActores from "./components/actores/IndiceActores";
import CrearCines from "./components/cines/CrearCines";
import EditarCines from "./components/cines/EditarCines";
import IndiceCines from "./components/cines/IndiceCines";
import CrearGenero from "./components/generos/CrearGenero";
import EditarGenero from "./components/generos/EditarGenero";
import IndiceGeneros from "./components/generos/IndiceGeneros";
import CrearPeliculas from "./components/peliculas/CrearPeliculas";
import EditarPeliculas from "./components/peliculas/EditarPeliculas";
import FiltroPeliculas from "./components/peliculas/FiltroPeliculas";
import Error404 from "./components/utils/Error404";
import LandingPage from "./LandingPage";

const rutas = [

    // (/:id) variables de ruta
    // para definirle el tipo de variable utilizamos esto (\\d+) con esto le decimos que la variable es de tipo numero
    //Generos
    { path: "/genero/crear", component: CrearGenero },
    { path: "/genero/editar/:id(\\d+)", component: EditarGenero },
    { path: "/genero", component: IndiceGeneros, exact: true },
    //Actores
    { path: "/actores/crear", component: CrearActores },
    { path: "/actores/editar/:id(\\d+)", component: EditarActores },
    { path: "/actores", component: IndiceActores, exact: true },
    //Cines
    { path: "/cines/crear", component: CrearCines },
    { path: "/cines/editar/:id(\\d+)", component: EditarCines },
    { path: "/cines", component: IndiceCines, exact: true },
    //Peliculas
    { path: "/peliculas/crear", component: CrearPeliculas },
    { path: "/peliculas/editar/:id(\\d+)", component: EditarPeliculas },
    { path: "/filtrar", component: FiltroPeliculas },
    //home
    { path: "/", component: LandingPage, exact: true },

    //
    {path: "*", component: Error404 }
]

export default rutas;