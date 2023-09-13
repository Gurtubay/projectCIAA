using Concentracion_Reto.Context;
using Microsoft.AspNetCore.Mvc;
using Concentracion_Reto.Interfaces;
using Concentracion_Reto.Models;

namespace Concentracion_Reto.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly InterfaceUsuario _usuarioService;

        public UsuarioController(InterfaceUsuario usuarioService)
        {
            _usuarioService = usuarioService;
        }
        [HttpPost] //Task<ActionResult<Cliente>> [FromBody] 
        public async Task<RegisterModelResponse> CrearUsuario(RegisterModel usuario)
        {
            var nuevoUsuario = new dtoUsuario();
            nuevoUsuario.usuario = usuario.Usuario;
            nuevoUsuario.contrasena = usuario.Contrasena;
            nuevoUsuario.nombres= usuario.Nombre;
            nuevoUsuario.correo= usuario.CorreoElectronico;
            nuevoUsuario.telefono= usuario.Telefono;
            nuevoUsuario.tipo= usuario.Tipo;
            try
            {
                var nuevoUser = await _usuarioService.Create(nuevoUsuario);
                return new RegisterModelResponse { Message = "Exito" };
            }
            catch (Exception ex)
            {
                return new RegisterModelResponse { Message = ex.ToString() };
            }
        }

        [HttpGet]
        public ActionResult<List<Usuario>> GetUsuarios()
        {
            //var clientes = _clienteService.getAll();
            var usuarios =  _usuarioService.getAll();
            return Ok(usuarios);

        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Usuario usuario)
        {
            if (id != usuario.usuarioId)
            {
                return BadRequest();
            }

            await _usuarioService.Update(id, usuario);
            return NoContent();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var usuario = _usuarioService.GetUsuario(id);
            if (usuario == null)
                {
                return NotFound();
            }
            return Ok(usuario);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _usuarioService.DeleteUsuario(id);
            return NoContent();
        }

    }

}
