using Concentracion_Reto.Context;
using Concentracion_Reto.Models;
namespace Concentracion_Reto.Interfaces
{
    public interface InterfaceUsuario
    {
        List<Usuario> getAll();
        Usuario GetUsuario(int id);
        Task<Usuario> Create(dtoUsuario usuario);
        void DeleteUsuario(int id);
        Task<Usuario> Update(int id, Usuario usuario);

    }
}
