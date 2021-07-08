export interface peliculas {
   
    id: number;
    titulo:string;
    poster: string;

}
export interface landingPageDTO {

    enCartelera?: peliculas[];
    proximosEstrenos?: peliculas[];
}

export interface peliculasCreacionDTO {
  
   titulo:string;
   enCine: boolean;
   trailer: string;
   fechaLanzamiento?:Date;
   poster?: File;
   posterURL?:string;
   generosIds?:number[];




}