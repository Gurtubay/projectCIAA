using Concentracion_Reto.Context;
using Concentracion_Reto.Models;

namespace Concentracion_Reto.Interfaces
{
    public interface IAuthService
    {
        Task<UserAuthDTO> AuthenticateUser(string usuario, string contrasena);
    }
}
