using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Movies.API.Helpers;
using Movies.API.Persistance;

namespace Movies.API.Controllers
{

    [Route("api/movies")]
    [ApiController]
    public class MoviesController : ControllerBase
    {

        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IFileStorageService fileStorageService;
        private readonly string container = "movies";

        public MoviesController(ApplicationDbContext context, IMapper mapper, IFileStorageService fileStorageService)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));

            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));

            this.fileStorageService = fileStorageService ?? throw new ArgumentNullException(nameof(fileStorageService));
        }
    }

}
