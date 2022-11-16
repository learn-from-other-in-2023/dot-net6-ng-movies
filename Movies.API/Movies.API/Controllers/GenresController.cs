using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.API.Dtos;
using Movies.API.Entities;
using Movies.API.Persistance;

namespace Movies.API.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> _logger;
        private readonly ApplicationDbContext _applicationDbContext;

        public GenresController(ILogger<GenresController> logger, ApplicationDbContext applicationDbContext)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));

            _applicationDbContext = applicationDbContext ?? throw new ArgumentNullException(nameof(applicationDbContext));
        }

        // api/genres
        [HttpGet]
        public async Task<ActionResult<List<GenreDto>>> Get()
        {
            _logger.LogInformation("Getting all the genres");

            return await _applicationDbContext.Genres.ToListAsync();
        }

        [HttpGet("{Id:int}", Name = "getGenre")]
        public async Task<ActionResult<Genre>> Get(int Id)
        {
            var genre = await _applicationDbContext.Genres.FirstOrDefaultAsync(x => x.Id == Id);

            if (genre == null)
            {
                return NotFound();
            }

            return genre; //mapper.Map<GenreDTO>(genre);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Genre genre)
        {
            // var genre = mapper.Map<Genre>(genreCreationDTO);
            _applicationDbContext.Add(genre);

            await _applicationDbContext.SaveChangesAsync();

            return NoContent();
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
