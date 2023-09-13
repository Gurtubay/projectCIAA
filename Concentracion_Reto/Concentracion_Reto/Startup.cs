using Concentracion_Reto.Context;
using Concentracion_Reto.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Concentracion_Reto
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            // Configuración de la cadena de conexión

            services.AddControllers();
            services.AddDbContext<DB_Context>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("MiConexion")));
            //services.AddCors();
            services.AddCors(
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
            );
            services.AddScoped<UsuarioController>();
            services.AddScoped<AuthController>();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x => x.AllowAnyOrigin()
            .SetIsOriginAllowedToAllowWildcardSubdomains()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .SetPreflightMaxAge(TimeSpan.FromSeconds(3600)));

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
