using AutoMapper;
using Movies.API.Dtos;
using Movies.API.Entities;

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
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                _ = config.CreateMap<GenreDto, Genre>().ReverseMap();
            });

            return mappingConfig;
        }

    }

}
