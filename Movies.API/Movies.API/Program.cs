using Microsoft.AspNetCore.Authentication.JwtBearer;
using Movies.API.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var frontendURL = builder.Configuration.GetValue<string>("frontend_url");
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .WithExposedHeaders(new string[] { "totalAmountOfRecords" });
    });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();

builder.Services.AddControllers(options =>
{
    _ = options.Filters.Add(typeof(MoviesExceptionFilter));
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();


//builder.Services.AddResponseCaching();
//builder.Services.AddSingleton<IRepository, InMemoryRepository>();
//builder.Services.AddTransient<MoviesActionFilter>();

// app.UseResponseCaching();