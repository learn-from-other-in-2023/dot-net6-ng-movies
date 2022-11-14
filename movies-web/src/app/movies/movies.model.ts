export interface IMovieCreationDto {
    title: string;

    summary: string;

    poster: File;

    inTheaters: boolean;

    releaseDate: Date;

    trailer: string;

    genresIds: number[];

    movieTheatersIds: number[];
}

export interface IMovieDto {
    title: string;

    summary: string;

    poster: string;

    inTheaters: boolean;

    releaseDate: Date;

    trailer: string;
}