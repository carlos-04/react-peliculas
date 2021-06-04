import { useState, useEffect } from 'react';
import ListadoPeliculas from './components/peliculas/ListadoPeliculas';
import { landingPageDTO } from './models/Pelicula.model';


const LandingPage = () => {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
  
      setTimeout(() => {
  
        setPeliculas({
          enCartelera:
            [
              {
                id: 1,
                titulo: 'spiderman far from home',
                poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
              },
              {
                id: 2,
                titulo: 'Avenger and game',
                poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
              },
            ],
          proximosEstrenos: [
            {
              id: 3,
              titulo: 'batman',
              poster: 'https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'
            },
            {
              id: 4,
              titulo: 'Superman',
              poster: 'https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg'
            },
          ]
        })
      }, 2000);
    })


    return (
      
        <div className="container-fluid mt-5">
        <h3 className="mt-4 mb-4">En Cartelera</h3>
        <ListadoPeliculas pelicula={peliculas.enCartelera} />
        <h3 className="mt-4 mb-4">Proximos Estrenos</h3>
        <ListadoPeliculas pelicula={peliculas.proximosEstrenos} />
      </div>
    )
}

export default LandingPage
