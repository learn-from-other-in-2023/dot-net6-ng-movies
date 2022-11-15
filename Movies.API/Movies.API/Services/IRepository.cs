using Movies.API.Entities;

namespace Movies.API.Services
{

    public interface IRepository
    {
        void AddGenre(Genre genre);

        Task<List<Genre>> GetAllGenres();

        Genre GetGenreById(int Id);
    }

}
