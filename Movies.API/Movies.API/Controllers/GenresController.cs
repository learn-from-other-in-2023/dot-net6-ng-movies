using Microsoft.AspNetCore.Mvc;
using Movies.API.Entities;
using Movies.API.Filters;
using Movies.API.Services;

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

            return new List<Genre> { new Genre { Id = 1, Name = "Comedy" } };
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        [ServiceFilter(typeof(MoviesActionFilter))]
        public ActionResult<Genre> Get(int Id, string param2)
        {
            _logger.LogDebug("get by Id method executing...");

            var genre = _repository.GetGenreById(Id);

            if (genre == null)
            {
                _logger.LogWarning($"Genre with Id {Id} not found");
                _logger.LogError("this is an error");
                //throw new ApplicationException();
                return NotFound();
            }

            //return Ok(2);
            //return "felipe";
            return genre;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            _repository.AddGenre(genre);

            return new CreatedAtRouteResult("getGenre", new { Id = genre.Id }, genre);
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {

            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();

        }
    }
}

//[HttpGet("list")] // api/genres/list
//[HttpGet("/allgenres")] // allgenres
//[ResponseCache(Duration = 60)]
//[ServiceFilter(typeof(MoviesActionFilter))]
