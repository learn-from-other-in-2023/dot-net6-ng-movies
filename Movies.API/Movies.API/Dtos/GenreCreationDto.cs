using Movies.API.Validations;
using System.ComponentModel.DataAnnotations;

namespace Movies.API.Dtos
{

    public class GenreCreationDto
    {
        [Required(ErrorMessage = "The field with name {0} is required")]
        [StringLength(50)]
        [FirstLetterUppercase]
        public string? Name { get; set; }
    }

}
