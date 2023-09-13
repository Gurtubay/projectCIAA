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

        var resp = new UserAuthDTO();
        try
        {
            resp = await _authService.AuthenticateUser(usuario, contrasena);
        }
        catch (Exception ex) // catches all exceptions
        {
            // Log or handle the exception here. This is just a basic example:
            Console.WriteLine($"An error occurred: {ex.Message}");
            resp = new UserAuthDTO
            {
                IsAuthenticated = false,
                UserId = 0
            };
        }

        if (resp.IsAuthenticated)
        {
            return new LoginModelResponse { Usuario = usuario, Folio = (int)resp.UserId };
        }

        return new LoginModelResponse { Error="Credenciales invalidas"}; // Cambia esto según tus necesidades
    }
}
