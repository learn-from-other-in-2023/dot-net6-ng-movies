using System.ComponentModel.DataAnnotations;

namespace Movies.API.Entities
{

    public class UserCredentials
    {
        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
    }

}
