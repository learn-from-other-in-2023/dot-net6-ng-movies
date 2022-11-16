using Microsoft.AspNetCore.Mvc;
using Movies.API.Entities;

namespace Movies.API.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> _logger;

        public GenresController(ILogger<GenresController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet] // api/genres
        public async Task<ActionResult<List<Genre>>> Get()
        {
            _logger.LogInformation("Getting all the genres");

            var output = new List<Genre> {
                new Genre { Id = 1, Name = "Comedy" },
                new Genre { Id = 2, Name = "Action" },
                new Genre { Id = 3, Name = "Drama" }
            };

            return await Task.FromResult(output);
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        public ActionResult<Genre> Get(int Id, string param2)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }

    }

}

//[HttpGet("list")] // api/genres/list
//[HttpGet("/allgenres")] // allgenres
//[ResponseCache(Duration = 60)]
//[ServiceFilter(typeof(MoviesActionFilter))]
