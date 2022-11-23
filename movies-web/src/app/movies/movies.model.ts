import { IActorsMovieDto } from "~/app/actors/actors.model";
import { IGenreDto } from "~/app/genres/genres.model";
import { IMovieTheatersDto } from "~/app/movie-theaters/movie-theaters.model";

export interface IMovieCreationDto {
    title: string;

    summary: string;

    poster: File;

    inTheaters: boolean;

    releaseDate: Date;

    trailer: string;

    genresIds: number[];

    movieTheatersIds: number[];

    actors: IActorsMovieDto[];
}

export interface IMovieDto {
    id: number;

    title: string;

    summary: string;

    poster: string;

    inTheaters: boolean;

    releaseDate: Date;

    trailer: string;

    genres: IGenreDto[];

    movieTheaters: IMovieTheatersDto[];

    actors: IActorsMovieDto[];

    averageVote: number;

    userVote: number;
}

export interface IMoviePostGetDto {
    genres: IGenreDto[];

    movieTheaters: IMovieTheatersDto[];
}

export interface IMoviePutGetDto {
    movie: IMovieDto;

    selectedGenres: IGenreDto[];

    nonSelectedGenres: IGenreDto[];

    selectedMovieTheaters: IMovieTheatersDto[];

    nonSelectedMovieTheaters: IMovieTheatersDto[];

    actors: IActorsMovieDto[];
}

export interface IHomeDto {
    inTheaters: IMovieDto[];

    upcomingReleases: IMovieDto[];
}
