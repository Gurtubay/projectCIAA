export interface CreatePropiedadRequest
{
    usuarioId:Number,
    titulo:string,
    descripcion:string,
    precio:string
    ubicacion:string
}
export interface CreatePropiedadResponse{
    message:string
}