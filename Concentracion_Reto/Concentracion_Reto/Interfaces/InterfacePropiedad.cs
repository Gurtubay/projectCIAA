using Concentracion_Reto.Context;
using Concentracion_Reto.Models;

namespace Concentracion_Reto.Interfaces
{
    public interface InterfacePropiedad
    {
        List<Propiedad> getAll();
        Propiedad GetPropiedad(int id);
        Task<Propiedad> Create(dtoPropiedad propiedad);
        void DeletePropiedad(int id);
        Task<Propiedad> Update(int id, Propiedad propiedad);
    }
}
