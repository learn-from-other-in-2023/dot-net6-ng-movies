export type IActor = IActorCreationDto | IActorDto;

export interface IActorCreationDto {
    name: string;

    dateOfBirth: Date;

    picture: File;

    biography: string;
}

export interface IActorDto {
    name: string;

    dateOfBirth: Date;

    picture: string;

    biography: string;
}