﻿namespace Movies.API.Entities
{

    public class MovieTheatersMovies
    {
        public int MovieTheaterId { get; set; }

        public MovieTheater? MovieTheater { get; set; }

        public int MovieId { get; set; }

        public Movie? Movie { get; set; }
    }

}