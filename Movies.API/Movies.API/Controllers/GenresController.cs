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
        private readonly IRepository _repository;
        private readonly ILogger<GenresController> _logger;

        public GenresController(IRepository repository, ILogger<GenresController> logger)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));

            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet] // api/genres
        [HttpGet("list")] // api/genres/list
        [HttpGet("/allgenres")] // allgenres
        //[ResponseCache(Duration = 60)]
        [ServiceFilter(typeof(MoviesActionFilter))]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            _logger.LogInformation("Getting all the genres");

            return await _repository.GetAllGenres();
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
