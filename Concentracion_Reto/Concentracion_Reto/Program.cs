using Concentracion_Reto.Context;
using Concentracion_Reto.Interfaces;
using Concentracion_Reto.Servicios;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<DB_Context>();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
/*builder.Services.AddCors(
    options =>
    {
        options.AddDefaultPolicy(
            builder =>
            {
                builder.AllowAnyOrigin()
                 .AllowAnyHeader()
                 .AllowAnyMethod();
            }
            );
        options.AddPolicy("AllowSpecificOrigins", builder =>
        {
            builder.AllowAnyOrigin()
             .AllowAnyOrigin()
             .AllowAnyHeader()
             .AllowAnyMethod();
        });
    }
);*/
builder.Services.AddCors();
// Add services to the container.


//var sqlServerConnection = builder.Configuration.GetConnectionString("MiConexion");

//// For Entity Framework
//builder.Services.AddDbContext<DB_Context>(options =>
//{
//    options.UseSqlServer(sqlServerConnection);
//});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddScoped<InterfaceUsuario, ServicioUsuario>();
builder.Services.AddScoped<IAuthService, AuthService>();
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
/*app.UseCors("AllowSpecificOrigins");
app.UseCors(x => x.SetPreflightMaxAge(TimeSpan.FromSeconds(3600)));
app.UseCors();*/
app.UseCors(x => x.AllowAnyOrigin()
.SetIsOriginAllowedToAllowWildcardSubdomains()
.AllowAnyMethod()
.AllowAnyHeader()
.SetPreflightMaxAge(TimeSpan.FromSeconds(3600)));
/*app.UseMiddleware<WebApiCustomMiddleware>();*/
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
