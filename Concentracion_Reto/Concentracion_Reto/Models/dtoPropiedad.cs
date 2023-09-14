using System.ComponentModel.DataAnnotations;

namespace Concentracion_Reto.Models
{
    public class dtoPropiedad
    {
        public int usuarioId { get; set; }
        public string titulo { get; set; }
        public string descripcion { get; set; }
        public double precio { get; set; }
        public string ubicacion { get; set; }
    }
    
    public class CreatePropiedadRequest
    {
        public int usuarioId { get; set; }
        public string titulo { get; set; }
        public string descripcion { get; set; }
        public double precio { get; set; }
        public string ubicacion { get; set; }

    }

    public class CreatePropiedadResponse
    {
        public string Message { get; set; }
    }

}