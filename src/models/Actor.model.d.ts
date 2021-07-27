export interface ActorCreacionDTO {

    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoUrl?: string;
    biografia?: string;
}


export interface actorPeliculasDTO {
    id: number;
    nombre: string;
    personaje: string;
    foto: string;

}