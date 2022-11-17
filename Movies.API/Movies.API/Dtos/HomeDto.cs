namespace Movies.API.Dtos
{
    
    public class HomeDto
    {
        public List<MovieDto> InTheaters { get; set; }

        public List<MovieDto> UpcomingReleases { get; set; }
    }

}
