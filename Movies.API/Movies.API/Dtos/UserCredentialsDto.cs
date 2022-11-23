using System.ComponentModel.DataAnnotations;

namespace Movies.API.Dtos
{

    public class UserCredentialsDto
    {
        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
    }

}
