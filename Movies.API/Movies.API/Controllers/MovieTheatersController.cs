using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.API.Dtos;
using Movies.API.Entities;
using Movies.API.Persistance;

namespace Movies.API.Controllers
{
    [ApiController]
    [Route("api/movietheaters")]
    public class MovieTheatersController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public MovieTheatersController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));

            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<ActionResult<List<MovieTheaterDto>>> Get()
        {
            var entities = await context.MovieTheaters.OrderBy(x => x.Name).ToListAsync();

            return mapper.Map<List<MovieTheaterDto>>(entities);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<MovieTheaterDto>> Get(int id)
        {
            var movieTheater = await context.MovieTheaters.FirstOrDefaultAsync(x => x.Id == id);

            if (movieTheater is null)
            {
                return NotFound();
            }

            return mapper.Map<MovieTheaterDto>(movieTheater);
        }

        [HttpPost]
        public async Task<ActionResult> Post(MovieTheaterCreationDto movieCreationDto)
        {
            var movieTheater = mapper.Map<MovieTheater>(movieCreationDto);
            context.Add(movieTheater);

            await context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, MovieTheaterCreationDto movieCreationDto)
        {
            var movieTheater = await context.MovieTheaters.FirstOrDefaultAsync(x => x.Id == id);

            if (movieTheater == null)
            {
                return NotFound();
            }

            movieTheater = mapper.Map(movieCreationDto, movieTheater);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var movieTheater = await context.MovieTheaters.FirstOrDefaultAsync(x => x.Id == id);

            if (movieTheater == null)
            {
                return NotFound();
            }

            context.Remove(movieTheater);
            await context.SaveChangesAsync();
            return NoContent();
        }

    }

}
