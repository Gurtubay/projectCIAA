using System.ComponentModel.DataAnnotations;

namespace Concentracion_Reto.Models
{
    public class dtoPropiedad
    {
        public int propiedadId { get; set; }
        public int usuarioId { get; set; }
        public string titulo { get; set; }
        public string descripcion { get; set; }
        public float precio { get; set; }
        public string ubicacion { get; set; }
    }
}