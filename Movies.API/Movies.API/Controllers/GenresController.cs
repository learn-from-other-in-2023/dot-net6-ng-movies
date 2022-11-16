using AutoMapper;
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
        private readonly IMapper _mapper;

        public GenresController(ILogger<GenresController> logger, ApplicationDbContext applicationDbContext, IMapper mapper)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));

            _applicationDbContext = applicationDbContext ?? throw new ArgumentNullException(nameof(applicationDbContext));

            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        // api/genres
        [HttpGet]
        public async Task<ActionResult<List<GenreDto>>> Get()
        {
            _logger.LogInformation("Getting all the genres");

            var genres = await _applicationDbContext.Genres.ToListAsync();

            return _mapper.Map<List<GenreDto>>(genres);
        }

        [HttpGet("{Id:int}", Name = "getGenre")]
        public async Task<ActionResult<GenreDto>> Get(int Id)
        {
            var genre = await _applicationDbContext.Genres.FirstOrDefaultAsync(x => x.Id == Id);

            if (genre == null)
            {
                return NotFound();
            }

            return _mapper.Map<GenreDto>(genre);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDto genreCreationDto)
        {
            var genre = _mapper.Map<Genre>(genreCreationDto);

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
