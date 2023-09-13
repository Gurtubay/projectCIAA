using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Concentracion_Reto.Interfaces;
using Concentracion_Reto.Models;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<LoginModelResponse> Login(LoginModel model)
    {
        var usuario = model.Usuario;
        var contrasena = model.Contrasena;

        var isAuthenticated = await _authService.AuthenticateUser(usuario, contrasena);

        if (isAuthenticated)
        {
            return new LoginModelResponse { Usuario = usuario };
        }

        return new LoginModelResponse { Error="Credenciales invalidas"}; // Cambia esto según tus necesidades
    }
}
