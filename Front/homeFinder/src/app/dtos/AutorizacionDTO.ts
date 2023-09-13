export interface AutorizacionRequest{
    Usuario:string,
    Contrasena:string
}
export interface AutorizacionResponse{
    usuario:string,
    folio:Number,
    Error:string
}