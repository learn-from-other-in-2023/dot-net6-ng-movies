using Microsoft.AspNetCore.Mvc.Filters;

namespace Movies.API.Filters
{
    public class MoviesActionFilter : IActionFilter
    {
        private readonly ILogger<MoviesActionFilter> _logger;

        public MoviesActionFilter(ILogger<MoviesActionFilter> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            _logger.LogWarning("OnActionExecuted");
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            _logger.LogWarning("OnActionExecuting");
        }
    }
}
