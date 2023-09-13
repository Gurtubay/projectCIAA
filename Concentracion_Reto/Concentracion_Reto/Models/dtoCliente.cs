using System.ComponentModel.DataAnnotations;

namespace Concentracion_Reto.Models
{
    public class dtoUsuario
    {
/*        [Key]
        public int id { get; set; }*/
        public string usuario { get; set; }
        public string nombres { get; set; }
        public string apellidos { get; set; }
        public string contrasena { get; set; }
        public string correo { get; set; }
        public string telefono { get; set; }
        public string tipo { get; set; }
    }
}
