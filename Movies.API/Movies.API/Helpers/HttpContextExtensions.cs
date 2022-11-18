﻿using Microsoft.EntityFrameworkCore;

namespace Movies.API.Helpers
{

    public static class HttpContextExtensions
    {
        public async static Task InsertParametersPaginationInHeader<T>(this HttpContext httpContext,
            IQueryable<T> queryable)
        {

            if (httpContext is null)
            {
                throw new ArgumentNullException(nameof(httpContext));
            }

            double count = await queryable.CountAsync();

            httpContext.Response.Headers.Add("totalAmountOfRecords", count.ToString());
        }
    }

}
