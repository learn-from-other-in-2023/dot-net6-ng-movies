using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.API.Dtos;
using Movies.API.Entities;
using Movies.API.Persistance;
using System.Linq;

namespace Movies.API.Controllers
{

    [Route("api/actors")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        //private readonly IFileStorageService fileStorageService;
        //private readonly string containerName = "actors";

        public ActorsController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));

            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<ActionResult<List<ActorDto>>> Get()
        {
            var actors = await context.Actors.ToListAsync();

            return mapper.Map<List<ActorDto>>(actors);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ActorDto>> Get(int id)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);

            if (actor is null)
            {
                return NotFound();
            }

            return mapper.Map<ActorDto>(actor);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] ActorCreationDto actorCreationDto)
        {
            var actor = mapper.Map<Actor>(actorCreationDto);

            if (actorCreationDto.Picture is not null)
            {
                // actor.Picture = await fileStorageService.SaveFile(containerName, actorCreationDto.Picture);
            }

            context.Add(actor);

            await context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromForm] ActorCreationDto actorCreationDto)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete([FromForm] ActorCreationDto actorCreationDto)
        {
            throw new NotImplementedException();
        }

    }

}
