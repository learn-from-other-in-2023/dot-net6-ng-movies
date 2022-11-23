using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.API.Dtos;
using Movies.API.Entities;
using Movies.API.Persistance;

namespace Movies.API.Controllers
{
    [Route("api/genres")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IsAdmin")]
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

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<GenreDto>>> Get()
        {
            _logger.LogInformation("Getting all the genres");

            var genres = await _applicationDbContext.Genres
                                                    .OrderBy(x => x.Name)
                                                    .ToListAsync();

            return _mapper.Map<List<GenreDto>>(genres);
        }

        [HttpGet("{id:int}", Name = "getGenre")]
        public async Task<ActionResult<GenreDto>> Get(int id)
        {
            var genre = await _applicationDbContext.Genres
                                                   .FirstOrDefaultAsync(x => x.Id == id);

            if (genre is null)
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

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] GenreCreationDto genreCreationDto)
        {
            var genre = _mapper.Map<Genre>(genreCreationDto);

            genre.Id = id;
            _applicationDbContext.Entry(genre).State = EntityState.Modified;

            await _applicationDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var genre = await _applicationDbContext.Genres.FirstOrDefaultAsync(x => x.Id == id);

            if (genre is null)
            {
                return NotFound();
            }

            _applicationDbContext.Remove(genre);

            await _applicationDbContext.SaveChangesAsync();

            return NoContent();
        }

    }

}

//[HttpGet("list")] // api/genres/list
//[HttpGet("/allgenres")] // allgenres
//[ResponseCache(Duration = 60)]
//[ServiceFilter(typeof(MoviesActionFilter))]
