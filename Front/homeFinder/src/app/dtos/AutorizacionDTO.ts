export interface AutorizacionRequest{
    Usuario:string,
    Contrasena:string
}
export interface AutorizacionResponse{
    usuario:string,
    folio:Int8Array,
    Error:string
}