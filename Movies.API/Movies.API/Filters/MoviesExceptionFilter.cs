using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace Movies.API.Filters
{

    public class MoviesExceptionFilter : ExceptionFilterAttribute
    {
        private readonly ILogger<MoviesExceptionFilter> _logger;

        public MoviesExceptionFilter(ILogger<MoviesExceptionFilter> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public override void OnException(ExceptionContext context)
        {
            _logger.LogError(context.Exception, context.Exception.Message);

            base.OnException(context);
        }

    }
}
