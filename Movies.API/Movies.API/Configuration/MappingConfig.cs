using AutoMapper;
using Movies.API.Dtos;
using Movies.API.Entities;
using NetTopologySuite.Geometries;

namespace Movies.API.Configuration
{

    /// <summary>
    /// 
    /// </summary>
    public class MappingConfig
    {

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static MapperConfiguration RegisterMaps(GeometryFactory geometryFactory)
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                _ = config.CreateMap<GenreDto, Genre>().ReverseMap();

                _ = config.CreateMap<GenreCreationDto, Genre>().ReverseMap();

                _ = config.CreateMap<ActorDto, Actor>().ReverseMap();

                _ = config.CreateMap<ActorCreationDto, Actor>()
                    .ForMember(x => x.Picture, options => options.Ignore());

                _ = config.CreateMap<MovieTheater, MovieTheaterDto>()
                   .ForMember(x => x.Latitude, dto => dto.MapFrom(prop => prop.Location.Y))
                   .ForMember(x => x.Longitude, dto => dto.MapFrom(prop => prop.Location.X));

                _ = config.CreateMap<MovieTheaterCreationDto, MovieTheater>()
                   .ForMember(x => x.Location, x => x.MapFrom(dto =>
                   geometryFactory.CreatePoint(new Coordinate(dto.Longitude, dto.Latitude))));

                _ = config.CreateMap<MovieCreationDto, Movie>()
                .ForMember(x => x.Poster, options => options.Ignore())
                .ForMember(x => x.MoviesGenres, options => options.MapFrom(MapMoviesGenres))
                .ForMember(x => x.MovieTheatersMovies, options => options.MapFrom(MapMovieTheatersMovies))
                .ForMember(x => x.MoviesActors, options => options.MapFrom(MapMoviesActors));

                //CreateMap<Movie, MovieDTO>()
                //    .ForMember(x => x.Genres, options => options.MapFrom(MapMoviesGenres))
                //    .ForMember(x => x.MovieTheaters, options => options.MapFrom(MapMovieTheatersMovies))
                //    .ForMember(x => x.Actors, options => options.MapFrom(MapMoviesActors));

            });

            return mappingConfig;
        }

        private static List<ActorsMovieDto> MapMoviesActors(Movie movie, MovieDto movieDto)
        {
            var result = new List<ActorsMovieDto>();

            if (movie.MoviesActors is not null)
            {
                foreach (var moviesActors in movie.MoviesActors)
                {
                    result.Add(new ActorsMovieDto()
                    {
                        Id = moviesActors.ActorId,
                        Name = moviesActors?.Actor?.Name,
                        Character = moviesActors?.Character,
                        Picture = moviesActors?.Actor?.Picture,
                        Order = moviesActors.Order
                    });
                }
            }

            return result;
        }

        private static List<MovieTheaterDto> MapMovieTheatersMovies(Movie movie, MovieDto movieDto)
        {
            var result = new List<MovieTheaterDto>();

            if (movie.MovieTheatersMovies is not null)
            {
                foreach (var movieTheaterMovies in movie.MovieTheatersMovies)
                {
                    result.Add(new MovieTheaterDto()
                    {
                        Id = movieTheaterMovies.MovieTheaterId,
                        Name = movieTheaterMovies?.MovieTheater?.Name,
                        Latitude = movieTheaterMovies.MovieTheater.Location.Y,
                        Longitude = movieTheaterMovies.MovieTheater.Location.X
                    });
                }
            }

            return result;
        }

        private static List<GenreDto> MapMoviesGenres(Movie movie, MovieDto movieDto)
        {
            var result = new List<GenreDto>();

            if (movie.MoviesGenres != null)
            {
                foreach (var genre in movie.MoviesGenres)
                {
                    result.Add(new GenreDto() { Id = genre.GenreId, Name = genre?.Genre?.Name });
                }
            }

            return result;
        }

        private static List<MoviesGenres> MapMoviesGenres(MovieCreationDto movieCreationDto, Movie movie)
        {
            var result = new List<MoviesGenres>();

            if (movieCreationDto.GenresIds is null)
            {
                return result;
            }

            foreach (var id in movieCreationDto.GenresIds)
            {
                result.Add(new MoviesGenres() { GenreId = id });
            }

            return result;
        }

        private static List<MovieTheatersMovies> MapMovieTheatersMovies(MovieCreationDto movieCreationDto, Movie movie)
        {
            var result = new List<MovieTheatersMovies>();

            if (movieCreationDto.MovieTheatersIds is null)
            {
                return result;
            }

            foreach (var id in movieCreationDto.MovieTheatersIds)
            {
                result.Add(new MovieTheatersMovies() { MovieTheaterId = id });
            }

            return result;
        }

        private static List<MoviesActors> MapMoviesActors(MovieCreationDto movieCreationDto, Movie movie)
        {
            var result = new List<MoviesActors>();

            if (movieCreationDto.Actors is null)
            {
                return result;
            }

            foreach (var actor in movieCreationDto.Actors)
            {
                result.Add(new MoviesActors() { ActorId = actor.Id, Character = actor.Character });
            }

            return result;
        }

    }

}
