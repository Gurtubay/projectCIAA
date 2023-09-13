using Concentracion_Reto.Context;
using Concentracion_Reto.Interfaces;
using Concentracion_Reto.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Concentracion_Reto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropiedadController : ControllerBase
    {
        private readonly InterfacePropiedad _propiedadService;

        public PropiedadController(InterfacePropiedad propiedadService)
        {
            _propiedadService = propiedadService;
        }

        [HttpPost]
        public async Task<CreatePropiedadResponse> CrearPropiedad(CreatePropiedadRequest propiedad)
        {
            var nuevoPropiedad = new dtoPropiedad();
            nuevoPropiedad.usuarioId = propiedad.usuarioId;
            nuevoPropiedad.titulo = propiedad.titulo;
            nuevoPropiedad.descripcion = propiedad.descripcion;
            nuevoPropiedad.precio = propiedad.precio;
            nuevoPropiedad.ubicacion = propiedad.ubicacion;

            try
            {
                var nuevoUser = await _propiedadService.Create(nuevoPropiedad);
                return new CreatePropiedadResponse { Message = "Exito" };
            }
            catch (Exception ex)
            {
                return new CreatePropiedadResponse { Message = ex.ToString() };
            }
        }

        [HttpGet]
        public ActionResult<List<Propiedad>> GetPropiedades()
        {
            var propiedades = _propiedadService.getAll();
            return Ok(propiedades);
        }

        [HttpGet("{id}")]
        public IActionResult GetPropiedad(int id)
        {
            var propiedad = _propiedadService.GetPropiedad(id);
            if (propiedad == null)
            {
                return NotFound();
            }
            return Ok(propiedad);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePropiedad(int id, Propiedad propiedad)
        {
            if (id != propiedad.propiedadId)
            {
                return BadRequest();
            }

            try
            {
                await _propiedadService.Update(id, propiedad);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePropiedad(int id)
        {
            _propiedadService.DeletePropiedad(id);
            return NoContent();
        }
    }
}
