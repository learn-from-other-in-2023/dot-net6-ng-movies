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

        //private readonly GeometryFactory _geometryFactory;

        //public MappingConfig(GeometryFactory geometryFactory)
        //{
        //    _geometryFactory = geometryFactory ?? throw new ArgumentNullException(nameof(geometryFactory));
        //}

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

            });

            return mappingConfig;
        }

    }

}
