export type IActor = IActorCreationDto | IActorDto;

export interface IActorCreationDto {
    name: string;

    dateOfBirth: Date;

    picture: File;

    biography: string;
}

export interface IActorDto {
    id: number;

    name: string;

    dateOfBirth: Date;

    picture: string;

    biography: string;
}

export interface IActorsMovieDto {
    id: number;

    name: string;
    
    character: string;
    
    picture: string;
}
