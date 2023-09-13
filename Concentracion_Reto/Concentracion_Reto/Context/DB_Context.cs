using Microsoft.EntityFrameworkCore;
//using AfiliadosProyect.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Concentracion_Reto.Context
{
    public class DB_Context : DbContext
    {
        private readonly IConfiguration configuration;

        public DB_Context(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer(this.configuration.GetConnectionString("MiConexion"));
        }
        public DbSet<Usuario> Usuarios { get; set; }
    }

    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        public int usuarioId { get; set; }
        public string usuario { get; set;}
        public string contrasena { get; set; }
        public string nombres { get; set; }
        public string apellidos { get; set; }
        public string correo { get; set; }
        public string telefono { get; set; }
        public string tipo {get;set;}

    }



}
