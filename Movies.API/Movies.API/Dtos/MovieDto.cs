﻿namespace Movies.API.Dtos
{

    public class MovieDto
    {
        public int Id { get; set; }

        public string? Title { get; set; }

        public string? Summary { get; set; }

        public string? Trailer { get; set; }

        public bool? InTheaters { get; set; }

        public DateTime ReleaseDate { get; set; }

        public string? Poster { get; set; }

        public List<GenreDto>? Genres { get; set; }

        public List<MovieTheaterDto>? MovieTheaters { get; set; }

        public List<ActorsMovieDto>? Actors { get; set; }
    }

}