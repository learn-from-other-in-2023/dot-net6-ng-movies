using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace Movies.API.Entities
{

    public class MovieTheatersMovies
    {
        public int Id { get; set; }

        [Required]
        [StringLength(maximumLength: 75)]
        public string? Name { get; set; }

        public Point Location { get; set; }
    }

}