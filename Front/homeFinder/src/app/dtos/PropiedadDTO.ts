export interface Propiedad{
    propiedadId:Number,
    usuarioId:Number,
    titulo:string,
    descripcion:string,
    precio:Number,
    ubicacion:string
}

export interface CreatePropiedadRequest
{
    usuarioId:Number,
    titulo:string,
    descripcion:string,
    precio:Number,
    ubicacion:string
}
export interface CreatePropiedadResponse{
    message:string
}
