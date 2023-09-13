using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Concentracion_Reto.Context;
using Concentracion_Reto.Interfaces;
using Concentracion_Reto.Models;

public class AuthService : IAuthService
{
    private readonly DB_Context _context;

    public AuthService(DB_Context context)
    {
        _context = context;
    }

    public async Task<UserAuthDTO> AuthenticateUser(string usuario, string contrasena)
    {
        var cliente = await _context.Usuarios.FirstOrDefaultAsync(c => c.usuario == usuario);

        var authResult = new UserAuthDTO
        {
            IsAuthenticated = false,
            UserId = null
        };

        if (cliente != null && cliente.contrasena == contrasena)
        {
            authResult.IsAuthenticated = true;
            authResult.UserId = cliente.usuarioId;
        }
        

        return authResult;
    }
}
