import { MapContainer, TileLayer } from "react-leaflet"

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

//interface
interface mapaProps {
    height: string;
    width:string;
}

//Logo
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
})

const Mapa = (props: mapaProps) => {
    return (
        <></>
        // <MapContainer 
        //     center = {[18.91618892569212,-70.24342857864362]}
        //     style={{height: props.height, width: props.width}}
        //     zoom={14}
        // >
        //     <TileLayer attribution="React Peliculas"
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        // </MapContainer>
    )
}
Mapa.defaultProps = {
  
    height: '500px',
    width: "100%"
}

export default Mapa
