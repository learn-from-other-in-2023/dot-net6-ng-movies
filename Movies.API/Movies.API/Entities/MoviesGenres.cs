﻿namespace Movies.API.Entities
{

    public class MoviesGenres
    {
        public int GenreId { get; set; }

        public Genre? Genre { get; set; }

        public int MovieId { get; set; }

        public Movie? Movie { get; set; }
    }

}