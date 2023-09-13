using Concentracion_Reto.Context;
using Concentracion_Reto.Interfaces;
using Concentracion_Reto.Models;
namespace Concentracion_Reto.Servicios
{
    public class ServicioUsuario : InterfaceUsuario
    {
        private readonly DB_Context contexto;
        public ServicioUsuario(DB_Context _contexto)
        {
            contexto = _contexto;
        }
        public List<Usuario> getAll()
        {
            return contexto.Usuarios.ToList();
        }
        public async Task<Usuario> Create(dtoUsuario usuario)
        {
            var nuevoUsuario = new Usuario();
            /*nuevoCliente.id = cliente.id;*/
            nuevoUsuario.usuario = usuario.usuario;
            nuevoUsuario.nombres = usuario.nombres;
            nuevoUsuario.contrasena = usuario.contrasena;
            nuevoUsuario.apellidos = usuario.apellidos;
            nuevoUsuario.correo= usuario.correo;
            nuevoUsuario.telefono = usuario.telefono;
            nuevoUsuario.tipo = usuario.tipo;

            contexto.Add(nuevoUsuario);
            await contexto.SaveChangesAsync();
            return nuevoUsuario;
        }

        public async Task<Usuario> Update(int id, Usuario usuario)
        {
            var usuarioExistente = await contexto.Usuarios.FindAsync(id);
            if(usuarioExistente == null)
            {
                throw new Exception("Cliente no encontrado");
            }

            usuarioExistente.usuario = usuario.usuario;
            usuarioExistente.nombres = usuario.nombres;
            usuarioExistente.apellidos = usuario.apellidos;
            usuarioExistente.contrasena = usuario.contrasena;
            usuarioExistente.correo = usuario.correo;
            usuarioExistente.tipo = usuario.tipo;


            await contexto.SaveChangesAsync();
            return usuarioExistente;
        }

        public Usuario GetUsuario(int id)
        {
            //var usuarioExistente = await contexto.Usuarios.FindAsync(id);
            //if (usuarioExistente == null)
            //{
            //    throw new Exception("Usuario no encontrado");
            //}
            return contexto.Usuarios.FirstOrDefault(u => u.usuarioId == id);
        }

        public void DeleteUsuario(int id)
        {
            var usuario = contexto.Usuarios.FirstOrDefault(u => u.usuarioId == id);
            if(usuario != null)
            {
                contexto.Usuarios.Remove(usuario);
                contexto.SaveChanges();
            }
        }

        public async Task<int> SaveChangesAsync()
        {
            return await contexto.SaveChangesAsync();
        }
        public bool UsuarioExists(int id)
        {
            return contexto.Usuarios.Any(u => u.usuarioId == id);
        }
            
    }
}
