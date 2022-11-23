using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.API.Dtos;
using Movies.API.Entities;
using Movies.API.Persistance;

namespace Movies.API.Controllers
{

    [Route("api/ratings")]
    [ApiController]
    public class RatingsController : ControllerBase
    {

        private readonly ApplicationDbContext context;
        private readonly UserManager<IdentityUser> userManager;

        public RatingsController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));

            this.userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
        }

        [HttpPost]
        // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult> Post([FromBody] RatingDto ratingDTO)
        {
            var email = HttpContext?.User?.Claims.FirstOrDefault(x => x.Type == "email")?.Value;
            email = "SriVaru@god.com";
            var user = await userManager.FindByEmailAsync(email);
            var userId = user.Id;

            var currentRate = await context.Ratings
                .FirstOrDefaultAsync(x => x.MovieId == ratingDTO.MovieId &&
                x.UserId == userId);

            if (currentRate == null)
            {
                var rating = new Rating
                {
                    MovieId = ratingDTO.MovieId,
                    Rate = ratingDTO.Rating,
                    UserId = userId
                };
                context.Add(rating);
            }
            else
            {
                currentRate.Rate = ratingDTO.Rating;
            }

            await context.SaveChangesAsync();
            return NoContent();
        }

    }

}
