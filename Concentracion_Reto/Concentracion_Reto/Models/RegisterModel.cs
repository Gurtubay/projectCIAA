namespace Concentracion_Reto.Models
{
    public class RegisterModel
    {
        public string Usuario { get; set; }
        public string Contrasena { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string CorreoElectronico { get; set; }
        public string Telefono { get; set; }
        public string Tipo { get; set; }

    }

    public class RegisterModelResponse
    {
        public string Message { get; set; }
    }
}
