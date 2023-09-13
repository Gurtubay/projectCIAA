namespace Concentracion_Reto.Models
{
    public class LoginModel
    {
        public string Usuario { get; set; }
        public string Contrasena { get; set; }
    }

    public class LoginModelResponse
    {
        public string Usuario { get; set; }
        public int Folio { get; set; }
        public string Error { get; set; }
    }
}
