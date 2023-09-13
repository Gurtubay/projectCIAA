using Concentracion_Reto.Context;
using Concentracion_Reto.Interfaces;
using Concentracion_Reto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Concentracion_Reto.Servicios
{
    public class ServicioPropiedad : InterfacePropiedad
    {
        private readonly DB_Context contexto;

        public ServicioPropiedad(DB_Context _contexto)
        {
            contexto = _contexto;
        }

        public List<Propiedad> getAll()
        {
            return contexto.Propiedades.ToList();
        }

        public async Task<Propiedad> Create(dtoPropiedad propiedad)
        {
            var nuevaPropiedad = new Propiedad
            {
                usuarioId = propiedad.usuarioId,
                titulo = propiedad.titulo,
                descripcion = propiedad.descripcion,
                precio = propiedad.precio,
                ubicacion = propiedad.ubicacion
            };

            contexto.Add(nuevaPropiedad);
            await contexto.SaveChangesAsync();
            return nuevaPropiedad;
        }

        public async Task<Propiedad> Update(int id, Propiedad propiedad)
        {
            var propiedadExistente = await contexto.Propiedades.FindAsync(id);
            if (propiedadExistente == null)
            {
                throw new Exception("Propiedad no encontrada");
            }

            propiedadExistente.usuarioId = propiedad.usuarioId;
            propiedadExistente.titulo = propiedad.titulo;
            propiedadExistente.descripcion = propiedad.descripcion;
            propiedadExistente.precio = propiedad.precio;
            propiedadExistente.ubicacion = propiedad.ubicacion;

            await contexto.SaveChangesAsync();
            return propiedadExistente;
        }

        public Propiedad GetPropiedad(int id)
        {
            return contexto.Propiedades.FirstOrDefault(p => p.propiedadId == id);
        }

        public void DeletePropiedad(int id)
        {
            var propiedad = contexto.Propiedades.FirstOrDefault(p => p.propiedadId == id);
            if (propiedad != null)
            {
                contexto.Propiedades.Remove(propiedad);
                contexto.SaveChanges();
            }
        }

        public async Task<int> SaveChangesAsync()
        {
            return await contexto.SaveChangesAsync();
        }

        public bool PropiedadExists(int id)
        {
            return contexto.Propiedades.Any(p => p.propiedadId == id);
        }
    }
}
