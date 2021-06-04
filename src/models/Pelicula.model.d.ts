export interface peliculas {
   
    id: number;
    titulo:string;
    poster: string;

}


export interface landingPageDTO {

    enCartelera?: peliculas[];
    proximosEstrenos?: peliculas[];
}